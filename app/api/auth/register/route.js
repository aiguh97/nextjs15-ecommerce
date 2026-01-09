

import { emailVerificationLink } from "@/email/emailVerificationLink";
import { connectDB } from "@/lib/dbConnection";
import { catchError, response } from "@/lib/helperFunction";
import { sendMail } from "@/lib/sendMail";
import { authSchema } from "@/lib/zodSchema";
import UserModel from "@/models/User.model";
import { SignJWT } from "jose";

export async function POST(request) {
//   try {
    await connectDB();

    //validation schema
    const validationSchema = authSchema.pick({
      email: true,
      password: true,
      fullname: true,
      username: true,
    });

    const payload = await request.json();
    const validatedData = validationSchema.safeParse(payload);

    if (!validatedData.success) {
      return response(
        false,
        401,
        "Invalid or missing input field",
        validatedData.error
      );
    }

    const { email, password, fullname, username } = validatedData.data;

    //check if user already exists
    const checkUserEmail = await UserModel.exists({ email });
    if (checkUserEmail) {
      return response(false, 409, "Email sudah terdaftar");
    }
    //check if user already exists
    const checkUserName = await UserModel.exists({ username });
    if (checkUserName) {
      return response(false, 409, "Username sudah terdaftar");
    }

    //new registration
    const newUser = new UserModel({
      email,
      password,
      fullname,
      username,
    });

    await newUser.save();

    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const token = await new SignJWT({ userId: newUser._id.toString() })
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
    return response(true, 201, "Registrasi berhasil");

//   } catch (error) {
//    catchError(error, "Gagal melakukan registrasi user");
//   }
}
