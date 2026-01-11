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
import { USER_DASHBOARD, WEBSITE_REGISTER, WEBSITE_RESET_PASSWORD } from "@/routes/WebsiteRoute";
import axios from "axios";
import { showToast } from "@/lib/showToast";
import OTPVerification from "@/components/Application/OTPVerification";
import { useDispatch } from "react-redux";
import { login } from "@/store/reducers/authReducer";
import { useRouter, useSearchParams } from "next/navigation";
import { ADMIN_DASHBOARD } from "@/routes/AdminPanelRoute";

const LoginPage = () => {
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [otpVerificationLoading, setOtpVerificationLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const [otpEmail, setOTPEmail] = useState("");

  const formSchema = authSchema.pick({ email: true }).extend({
    password: z
      .string()
      .min(1, "Password wajib diisi")
      .min(8, "Password minimal 8 karakter"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

const handleLoginSubmit = async (values) => {
  try {
    setLoading(true);

    const { data } = await axios.post("/api/auth/login", values);

    if (!data.success) {
      throw new Error(data.message || "Something went wrong");
    }

    // 🔥 FIX PENTING: cek apakah butuh OTP
    if (data.data?.requireOtp) {
      setOTPEmail(values.email);
    } else {
      dispatch(login(data.data));

      if (searchParams.has("callback")) {
        router.push(searchParams.get("callback"));
      } else {
        data.data.role === "admin"
          ? router.push(ADMIN_DASHBOARD)
          : router.push(USER_DASHBOARD);
      }
    }

    showToast("success", data.message);
    form.reset();
  } catch (error) {
    showToast("error", error.message || "Login failed");
  } finally {
    setLoading(false);
  }
};


  const handleOTPVerification = async (values) => {
  try {
      setOtpVerificationLoading(true);

      const { data: otpResponse } = await axios.post(
        "/api/auth/verify-otp",
        values
      );

      if (!otpResponse.success) {
        throw new Error(otpResponse.message || "Something went wrong");
      }

    //  if (registerResponse.data?.requireOtp) {
  setOTPEmail(values.email);
// } else {
//   dispatch(login(registerResponse.data));
//   router.push(USER_DASHBOARD);
// }


      showToast("success", otpResponse.message);
      dispatch(login(otpResponse.data))

      if(searchParams.has('callback')){
        router.push(searchParams.get('callback'))
      }else{
        otpResponse.data.role==='admin'?router.push(ADMIN_DASHBOARD):router.push(USER_DASHBOARD)
      }

    } catch (error) {
      showToast("error", error.message);
    } finally {
      setOtpVerificationLoading(false);
    }
  }

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

        {!otpEmail ? (
          <>
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

                <div className="flex justify-end">
                  <Link
                    href={WEBSITE_RESET_PASSWORD}
                    className="text-primary underline"
                  >
                    Forgot Password?
                  </Link>
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
                    <Link
                      href={WEBSITE_REGISTER}
                      className="text-primary underline"
                    >
                      Create account!
                    </Link>
                  </div>
                </div>
              </form>
            </Form>
          </>
        ) : (
         
         <OTPVerification email={otpEmail}  onSubmit={handleOTPVerification} loading={otpVerificationLoading}/>
        )}
      </CardContent>
    </Card>
  );
};

export default LoginPage;
