"use client";

import BreadCrumb from "@/components/Application/Admin/BreadCrumb";
import ButtonLoading from "@/components/Application/ButtonLoading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/useFetch";
import { gallerySchema } from "@/lib/zodSchema";
import { ADMIN_DASHBOARD, ADMIN_MEDIA_SHOW } from "@/routes/AdminPanelRoute";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import imgPlaceHolder from "@/public/assets/images/img-placeholder.webp";
import axios from "axios";
import { showToast } from "@/lib/showToast";
import { Trash2, Upload } from "lucide-react";

const breadCrumbData = [
  { href: ADMIN_DASHBOARD, label: "Home" },
  { href: ADMIN_MEDIA_SHOW, label: "Media" },
  { href: "", label: "Edit Media" },
];

const EditMedia = ({ params }) => {
  const { id } = use(params); 
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const { data: mediaData, loading } = useFetch(`/api/media/get/${id}`);

  const formSchema = gallerySchema.pick({
    _id: true,
    alt: true,
    title: true,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: "",
      alt: "",
      title: "",
    },
  });

  /** inject data ke form + preview image */
  useEffect(() => {
    if (mediaData?.data) {
      form.reset({
        _id: mediaData.data._id,
        alt: mediaData.data.alt || "",
        title: mediaData.data.title || "",
      });

      setPreview(mediaData.data.secure_url || null);
    }
  }, [mediaData, form]);

  /** upload image */
  const handleImageChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  /** remove image */
  const handleRemoveImage = () => {
    setFile(null);
    setPreview(null);
  };

  /** submit */
  const onSubmit = async (values) => {
    try {
      setLoadingMedia(true);

      const formData = new FormData();
      formData.append("_id", values._id);
      formData.append("alt", values.alt);
      formData.append("title", values.title);

      if (file) {
        formData.append("image", file);
      }

      const { data } = await axios.put("/api/media/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!data.success) {
        throw new Error(data.message);
      }

      showToast("success", data.message);
    } catch (error) {
      showToast("error", error.message || "Update failed");
    } finally {
      setLoadingMedia(false);
    }
  };

  return (
    <div>
      <BreadCrumb breadcrumbData={breadCrumbData} />

      <Card className="py-0 pb-5 rounded card-shadow">
        <CardHeader className="pt-3 pb-2 px-3 border-b">
          <h4 className="font-semibold text-xl">Edit Media</h4>
        </CardHeader>

        <CardContent>
          {/* IMAGE PREVIEW */}
          <div className="mb-6 flex flex-col items-center gap-3">
            <Image
              src={preview || imgPlaceHolder}
              width={280}
              height={280}
              className="rounded-md border object-cover"
              alt="Media preview"
            />

            <div className="flex gap-3">
              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm hover:bg-muted">
                <Upload size={16} />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>

              {preview && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-destructive text-destructive rounded-md text-sm hover:bg-destructive/10"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              )}
            </div>
          </div>

          {/* FORM */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="alt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alt</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter alt text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <ButtonLoading
                type="submit"
                text="Update Media"
                loading={loadingMedia}
                className="w-full"
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditMedia;
