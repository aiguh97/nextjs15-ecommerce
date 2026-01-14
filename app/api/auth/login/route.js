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

    // ===============================
    // VALIDATION
    // ===============================
    const validationSchema = authSchema.pick({ email: true }).extend({
      password: z.string(),
    });

    const validated = validationSchema.safeParse(payload);
    if (!validated.success) {
      return response(false, 400, validated.error);
    }

    const { email, password } = validated.data;

    // ===============================
    // FIND USER
    // ===============================
 const user = await UserModel.findOne({ email, deletedAt: null })
  .select("+password +isEmailVerified +isOtpVerified");


    if (!user) {
      return response(false, 404, "User not found");
    }

    // ===============================
    // EMAIL VERIFICATION CHECK
    // ===============================
    if (!user.isEmailVerified) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
      const token = await new SignJWT({ userId: user._id.toString() })
        .setIssuedAt()
        .setExpirationTime("24h")
        .setProtectedHeader({ alg: "HS256" })
        .sign(secret);

      await sendMail(
        email,
        "Email Verification",
        emailVerificationLink(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify-email/${token}`
        )
      );

      return response(
        false,
        401,
        "Email not verified. Verification link has been sent."
      );
    }

    // ===============================
    // PASSWORD CHECK
    // ===============================
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return response(false, 401, "Invalid credentials");
    }

  // Cek OTP
// if (user.isOtpVerified) {
  return response(true, 200, "Login success", {
    id: user._id,
    name:user.username,
    email: user.email,
    role: user.role,
    requireOtp: false,
  });
// }

// Cek OTP yang ada
let existingOtp = await OtpModel.findOne({ email });

if (!existingOtp) {
  // OTP belum ada → generate baru
  const otp = generateOTP();
  existingOtp = await OtpModel.create({ email, otp });
  await sendMail(email, "Your Login OTP", otpEmail(otp));
}

return response(true, 200, "OTP sent to email", {
  requireOtp: true,
});


  } catch (error) {
    return catchError(error, "Login failed");
  }
}
