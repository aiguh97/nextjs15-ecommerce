import { otpEmail } from "@/email/otpEmail";
import { connectDB } from "@/lib/dbConnection";
import { catchError, generateOTP, response } from "@/lib/helperFunction";
import { sendMail } from "@/lib/sendMail";
import { authSchema } from "@/lib/zodSchema";
import OtpModel from "@/models/Otp.model";
import UserModel from "@/models/User.model";

export async function POST(request) {
  try {
    await connectDB();

    const payload = await request.json();

    // ✅ VALIDASI INPUT
    const validated = authSchema.pick({ email: true }).safeParse(payload);
    if (!validated.success) {
      return response(false, 400, "Invalid input", validated.error);
    }

    const { email } = validated.data;

    // ✅ CEK USER
    const user = await UserModel.findOne({
      email,
      deletedAt: null,
    });

    if (!user) {
      return response(false, 404, "User not found");
    }

    // ✅ HAPUS OTP LAMA
    await OtpModel.deleteMany({ email });

    // ✅ GENERATE OTP BARU
    const otp = generateOTP();

    await OtpModel.create({
      email,
      otp,
    });

    // ✅ KIRIM EMAIL
  const mailResult = await sendMail(
  email,
  "Your login verification code",
  otpEmail(otp)
);

if (!mailResult) {
  return response(false, 500, "Failed to send OTP email");
}

    if (!mailResult) {
      return response(false, 500, "Failed to send OTP email");
    }

    return response(true, 200, "OTP resent successfully");
  } catch (error) {
    return catchError(error);
  }
}
