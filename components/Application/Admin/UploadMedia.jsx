"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FilePlus, Save, X } from "lucide-react";
import axios from "axios";
import { showToast } from "@/lib/showToast";
import { useQueryClient } from "@tanstack/react-query";

const UploadMedia = () => {
  const queryClient = useQueryClient();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ DROPZONE
const onDrop = useCallback((acceptedFiles) => {
  const mapped = acceptedFiles.map((file) => ({
    file, // ✅ file asli
    preview: URL.createObjectURL(file),
  }));
  setFiles((prev) => [...prev, ...mapped]);
}, []);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop,
  });

  // ❌ REMOVE PREVIEW
  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // 🔥 SAVE = UPLOAD CLOUDINARY + DB
const handleSave = async () => {
  if (files.length === 0) {
    showToast("error", "No files selected");
    return;
  }

  try {
    setLoading(true);
    const uploadedPayload = [];

    for (const item of files) {
      const formData = new FormData();
      formData.append("file", item.file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText);
      }

      const data = await res.json();

      uploadedPayload.push({
        asset_id: data.asset_id,
        public_id: data.public_id,
        path: data.secure_url,
        secure_url: data.secure_url,
        thumbnail_url: data.secure_url,
        alt: data.original_filename,
        title: data.original_filename,
      });
    }

    await axios.post("/api/media/create", uploadedPayload, {
      withCredentials: true,
    });

    showToast("success", "Media uploaded successfully");
    setFiles([]);
    queryClient.invalidateQueries({ queryKey: ["media-data"] });
  } catch (error) {
    console.error(error);
    showToast("error", "Upload failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <FilePlus size={16} />
          Upload Media
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Upload Media</DialogTitle>
        </DialogHeader>

        {/* DROPZONE */}
       <div
  {...getRootProps()}
  className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer
  flex flex-col items-center justify-center gap-3
  ${isDragActive ? "border-primary bg-muted" : "border-muted"}`}
>
  <input {...getInputProps()} />

  {/* BLANK IMAGE ICON */}
  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-muted">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-8 h-8 text-muted-foreground"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  </div>

  <p className="text-sm text-muted-foreground">
    Drag & drop images here, or click to select
  </p>
</div>


        {/* PREVIEW */}
        {files.length > 0 && (
          <div className="grid grid-cols-4 gap-3 mt-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative border rounded overflow-hidden"
              >
                <img
                  src={file.preview}
                  alt="preview"
                  className="object-cover h-24 w-full"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}

        <Button
          onClick={handleSave}
          disabled={loading}
          className="mt-4 w-full flex items-center gap-2"
        >
          <Save size={16} />
          {loading ? "Uploading..." : "Save"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMedia;
