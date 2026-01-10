import { z } from "zod";
import { SignJWT } from "jose";
import { connectDB } from "@/lib/dbConnection";
import { catchError, generateOTP, response } from "@/lib/helperFunction";
import { authSchema } from "@/lib/zodSchema";
import OtpModel from "@/models/Otp.model";
import UserModel from "@/models/User.model";
import { sendMail } from "@/lib/sendMail";
import { otpEmail } from "@/email/otpEmail";
import { emailVerificationLink } from "@/email/emailVerificationLink";

export async function POST(request) {
  try {
    await connectDB();
    const payload = await request.json();

    const validationSchema = authSchema.pick({ email: true }).extend({
      password: z.string(),
    });

    const validatedData = validationSchema.safeParse(payload);
    if (!validatedData.success) {
      return response(false, 400, validatedData);
    }

    const { email, password } = validatedData.data;

    const getUser = await UserModel.findOne({ deletedAt: null, email }).select("+password");

    if (!getUser) {
      return response(false, 404, "User not found");
    }

    // Email belum diverifikasi
    if (!getUser.isEmailVerified) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

      const token = await new SignJWT({ userId: getUser._id.toString() })
        .setIssuedAt()
        .setExpirationTime("24h")
        .setProtectedHeader({ alg: "HS256" })
        .sign(secret);

      await sendMail(
        email,
        "Email Verification request from teguhdev",
        emailVerificationLink(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email/${token}`
        )
      );

      return response(
        false,
        401,
        "Your email is not verified. Verification link has been resent."
      );
    }

    const isPasswordVerified = await getUser.comparePassword(password);
    if (!isPasswordVerified) {
      return response(false, 401, "Invalid credentials");
    }

    await OtpModel.deleteMany({ email });

    const otp = generateOTP();
    await new OtpModel({ email, otp }).save();

    const otpEmailStatus = await sendMail(
      email,
      "Your One-Time Password (OTP) for Login",
      otpEmail(otp)
    );
   

    if (!otpEmailStatus) {
      return response(false, 500, "Failed to send OTP");
    }

    return response(true, 200, "Please verify your device");
  } catch (error) {
    return catchError(error, "Gagal melakukan login user");
  }
}
