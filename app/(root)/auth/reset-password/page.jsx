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
import {
  WEBSITE_LOGIN,
  WEBSITE_REGISTER,
  WEBSITE_RESET_PASSWORD,
} from "@/routes/WebsiteRoute";
import axios from "axios";
import { showToast } from "@/lib/showToast";
import OTPVerification from "@/components/Application/OTPVerification";
import UpdatePassword from "@/components/Application/UpdatePassword";

const ResetPassword = () => {
  const [emailVerificationLoading, setEmailVerificationLoading] = useState();
  const formSchema = authSchema.pick({ email: true });
  const [otpVerificationLoading, setOtpVerificationLoading] = useState(false);

  const [otpEmail, setOTPEmail] = useState("");
  const [isOtpVerified,setIsOtpVerified]= useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleEmailVerification = async (values) => {
     try {
      setEmailVerificationLoading(true);

      const { data: sendOtpResponse } = await axios.post(
        "/api/auth/reset-password/send-otp",
        values
      );

      if (!sendOtpResponse.success) {
        throw new Error(sendOtpResponse.message || "Something went wrong");
      }

      setOTPEmail(values.email);
      showToast("success", sendOtpResponse.message);
    } catch (error) {
      showToast("error", error.message);
    } finally {
      setEmailVerificationLoading(false);
    }
  };

  const handleOTPVerification = async (values) => {
    try {
      setOtpVerificationLoading(true);

      const { data: otpResponse } = await axios.post(
        "/api/auth/reset-password/verify-otp",
        values
      );

      if (!otpResponse.success) {
        throw new Error(otpResponse.message || "Something went wrong");
      }

   
      showToast("success", otpResponse.message);
      setIsOtpVerified(true)
    } catch (error) {
      showToast("error", error.message);
    } finally {
      setOtpVerificationLoading(false);
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

        {!otpEmail ? (
          <>
            {/* Title */}
            <div className="text-center space-y-1">
              <h1 className="text-2xl font-semibold">Reset Password</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email for password reset
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleEmailVerification)}
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

                {/* Button */}
                <div className="mb-3">
                  <ButtonLoading
                    type="submit"
                    text="Send OTP"
                    loading={emailVerificationLoading}
                    className="w-full"
                  />
                </div>
                <div className="text-center">
                  <div className="flex justify-center items-center gap-3">
                    <Link
                      href={WEBSITE_LOGIN}
                      className="text-primary underline"
                    >Back to Login
                    </Link>
                  </div>
                </div>
              </form>
            </Form>
          </>
        ) : 
       <>
       {
        !isOtpVerified?(
          <OTPVerification
            email={otpEmail}
            onSubmit={handleOTPVerification}
            loading={otpVerificationLoading}
          />
        ):(<UpdatePassword email={otpEmail}/>)
       }
       </>
        }
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
