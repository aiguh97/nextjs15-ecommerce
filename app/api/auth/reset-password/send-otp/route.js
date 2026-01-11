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
    const validationSchema = authSchema.pick({
      email: true,
    });

    const validatedData = validationSchema.safeParse(payload);
    if (!validatedData.success) {
      return response(
        false,
        401,
        "Invalid or missing input field",
        validatedData.error
      );
    }

    const { email } = validatedData.data;

    const getUser = await UserModel.findOne({ deletedAt: null, email }).lean();

    if (!getUser) {
      return response(false, 404, "user not found");
    }

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

    return response(true, 200, "Please verify your device");
  } catch (error) {
    catchError(error);
  }
}
