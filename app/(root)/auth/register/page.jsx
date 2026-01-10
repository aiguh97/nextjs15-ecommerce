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
import { WEBSITE_LOGIN, WEBSITE_REGISTER } from "@/routes/WebsiteRoute";
import axios from "axios";
import { showToast } from "@/lib/showToast";
import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);

  const formSchema = authSchema.pick({fullname:true,username:true, email: true,password:true }).extend({
   confirmPassword: z.string()
  }).refine((data)=>data.password === data.confirmPassword,{message:"Password tidak cocok",path:['confirmPassword']});

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
    fullname:"",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  const handleRegisterSubmit = async (values) => {
    try {
      setLoading(true);
      const {data:registerResponse} = await axios.post('/api/auth/register',values);
      if(!registerResponse.success){
        throw new Error(registerResponse.message || "Something went wrong");
      }
      form.reset();
      showToast("success",registerResponse.message);
      throw new Error(registerResponse.message || "Something went wrong 2");
    } catch (error) {
     showToast("error",error.message || "Something went wrong");
    }finally{
      setLoading(false);
    }
  };

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
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <p className="text-sm text-muted-foreground">
            Create new account by filling out the form bellow
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegisterSubmit)}
            className="space-y-5"
          >
             {/* Full Name */}
                <FormField
                control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

  {/* Username */}
                <FormField
                control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="john_doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
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

             {/*Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>

                  <FormControl>
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

          

            {/* Button */}
            <div className="mb-3">
              <ButtonLoading
                type="submit"
                text="Create Account"
                loading={loading}
                className="w-full"
              />
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center gap-3">
                <p>Al'ready have account?</p>
                <Link href={WEBSITE_LOGIN} className="text-primary underline">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterPage;
