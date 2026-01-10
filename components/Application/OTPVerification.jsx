"use client";

import { authSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ButtonLoading from "./ButtonLoading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { showToast } from "@/lib/showToast";
import axios from "axios";
import { useState } from "react";

const OTPVerification = ({ email, onSubmit, loading }) => {
  const [isResendingOTP, setIsResendingOTP] = useState(false);

  // ✅ FIX: schema yang tepat
  const formSchema = authSchema.pick({
    email: true,
    otp: true,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email,
      otp: "",
    },
  });

  // ✅ WRAP onSubmit supaya pasti terpanggil
  const handleSubmit = async (values) => {
    await onSubmit(values);
  };

  const resendOTP = async () => {
    try {
      setIsResendingOTP(true);
      const { data } = await axios.post("/api/auth/resend-otp", { email });

      if (!data.success) throw new Error(data.message);
      showToast("success", data.message);
    } catch (error) {
      showToast("error", error.message);
    } finally {
      setIsResendingOTP(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">
            Please complete verification
          </h1>
          <p className="text-sm text-muted-foreground">
            OTP has been sent to your email and valid for 10 minutes.
          </p>
        </div>

        {/* OTP */}
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        className="size-12 text-xl"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonLoading
          type="submit"
          text="Verify OTP"
          loading={loading}
          className="w-full"
        />

        <div className="text-center">
          <button
            type="button"
            onClick={resendOTP}
            disabled={isResendingOTP}
            className="text-sm text-blue-500 underline disabled:opacity-50"
          >
            {isResendingOTP ? "Resending..." : "Resend OTP"}
          </button>
        </div>
      </form>
    </Form>
  );
};

export default OTPVerification;
