"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authSchema } from "@/lib/zodSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonLoading from "@/components/Application/ButtonLoading";
import { z } from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { WEBSITE_LOGIN } from "@/routes/WebsiteRoute";
import axios from "axios";
import { showToast } from "@/lib/showToast";
import { useRouter } from "next/navigation";

const UpdatePassword = ({ email }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);

  const formSchema = authSchema
    .pick({ email: true, password: true })
    .extend({
      confirmPassword: z.string().min(1, "Confirm password wajib diisi"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password tidak cocok",
      path: ["confirmPassword"],
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email,
      password: "",
      confirmPassword: "",
    },
  });

  const handlePasswordUpdate = async (values) => {
    try {
      setLoading(true);

      // confirmPassword tidak dikirim ke backend
      const { confirmPassword, ...payload } = values;

      const { data } = await axios.post(
        "/api/auth/reset-password/update-password",
        payload
      );

      if (!data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      form.reset();
      showToast("success", data.message);
      router.push(WEBSITE_LOGIN);
    } catch (error) {
      showToast("error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
 <div>
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold">Update Password</h1>
          <p className="text-sm text-muted-foreground">
            Create new password by filling below form.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handlePasswordUpdate)}
            className="space-y-5"
          >
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={isTypePassword ? "password" : "text"}
                        placeholder="••••••••"
                        className="pr-10"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setIsTypePassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {isTypePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type={isTypePassword ? "password" : "text"}
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <ButtonLoading
              type="submit"
              text="Update Password"
              loading={loading}
              className="w-full"
            />
          </form>
        </Form>
        </div>
  );
};

export default UpdatePassword;
