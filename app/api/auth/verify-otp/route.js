import { connectDB } from "@/lib/dbConnection";
import { catchError, response } from "@/lib/helperFunction";
import { otpVerifySchema } from "@/lib/zodSchema";
import OtpModel from "@/models/Otp.model";
import UserModel from "@/models/User.model";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    await connectDB();

    const payload = await request.json();

    // ✅ VALIDASI OTP SAJA
    const validated = otpVerifySchema.safeParse(payload);
    if (!validated.success) {
      return response(
        false,
        400,
        "Invalid or expired OTP",
        validated.error
      );
    }

    const { email, otp } = validated.data;

    // ✅ CEK OTP
    const otpData = await OtpModel.findOne({ email, otp });
    if (!otpData) {
      return response(false, 404, "Invalid or expired OTP");
    }

    // ✅ CEK USER
    const user = await UserModel.findOne({
      email,
      deletedAt: null,
    }).lean();

    if (!user) {
      return response(false, 404, "User not found");
    }

    // ✅ JWT PAYLOAD
    const jwtPayload = {
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET_KEY
    );

    const token = await new SignJWT(jwtPayload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    // ✅ SET COOKIE
    cookies().set({
      name: "access_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    // ✅ HAPUS OTP SETELAH BERHASIL
    await otpData.deleteOne();

    return response(true, 200, "OTP verified successfully", jwtPayload);
  } catch (error) {
    return catchError(error);
  }
}
