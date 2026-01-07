"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import Logo from "@/public/assets/images/logo-black.png";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authSchema } from "@/lib/zodSchema";
import Link from "next/link";
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
import z from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);

  const formSchema = authSchema.pick({ email: true }).extend({
    password: z.string().min(1, "Password wajib diisi").min(8, "Password minimal 8 karakter"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = async () => {};

  return (
    <Card className="w-[400px]">
      <CardContent className="space-y-6 pt-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src={Logo}
            alt="Logo"
            width={Logo.width}
            height={Logo.height}
            className="max-w-[150px]"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold">Login Into Account</h1>
          <p className="text-sm text-muted-foreground">
            Login into your account by filling out the form below
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLoginSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field,fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl >
                    <div className="relative">
                      <Input
                        type={isTypePassword ? "password" : "text"}
                        placeholder="••••••••"
                           className={`pr-10 ${
              fieldState.error
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setIsTypePassword(!isTypePassword)}
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

             <div className="flex justify-end">
                <Link href="/auth/forgot-password" className="text-primary underline">Forgot Password?</Link>
              </div>

            {/* Button */}
           <div className="mb-3">
             <ButtonLoading
              type="submit"
              text="Login"
              loading={loading}
              className="w-full"
            />
           </div>
           <div className="text-center">
              <div className="flex justify-center items-center gap-3">
                <p>Don't have account?</p>
                <Link href="/auth/register" className="text-primary underline">Create account!</Link>
              </div>
             
           </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
