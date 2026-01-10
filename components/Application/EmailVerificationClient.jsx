"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WEBSITE_HOME } from "@/routes/WebsiteRoute";

const EmailVerificationClient = ({ token }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.post("/api/auth/verify-email", { token });
        setIsVerified(data.success);
      } catch {
        setIsVerified(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [token]); // ✅ token string (sync)

  if (loading) {
    return <p className="text-center mt-20">Verifying email...</p>;
  }

  return (
    <Card className="w-[400px] mx-auto mt-20">
      <CardContent className="space-y-6 py-8 text-center">
        <Image
          src={
            isVerified
              ? "/assets/images/verification-success.gif"
              : "/assets/images/verification-failed.gif"
          }
          alt="verification"
          width={100}
          height={100}
          unoptimized
        />

        <h1
          className={`text-2xl font-bold ${
            isVerified ? "text-green-500" : "text-red-500"
          }`}
        >
          {isVerified
            ? "Email Verified Successfully!"
            : "Email Verification Failed"}
        </h1>

        <Button asChild className="w-full">
          <Link href={WEBSITE_HOME}>Continue Shopping</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmailVerificationClient
