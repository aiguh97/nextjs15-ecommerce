"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WEBSITE_HOME } from "@/routes/WebsiteRoute";

const EmailVerificationClient = ({ params }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.post("/api/auth/verify-email", { token: params.token });
        if (data.success) setIsVerified(true);
        console.log(data)
      } catch {
        setIsVerified(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [params.token]);

  if (loading) {
    return (
      <Card className="w-[400px] mx-auto mt-20">
        <CardContent className="text-center py-10">
          Verifying email...
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-[400px] mx-auto mt-20">
      <CardContent className="space-y-6 py-8">
        <div className="flex justify-center">
          <Image
            alt={isVerified ? "Verification success" : "Verification failed"}
            src={
              isVerified
                ? "/assets/images/verified.gif"
                : "/assets/images/verification-failed.gif"
            }
            width={100}
            height={100}
          />
        </div>

        <div className="text-center space-y-3">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailVerificationClient;
