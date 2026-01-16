import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const response = (success, statusCode, message, data = {}) => {
  return NextResponse.json({
    success,
    statusCode,
    message,
    data,
  });
};

export const catchError = (error, customMessage) => {
  console.error(customMessage, error);

  // Mongo duplicate key
  if (error.code === 11000) {
    const keys = Object.keys(error.keyPattern).join(", ");
    return response(
      false,
      409,
      `${keys} already exists. Please use different ${keys}.`
    );
  }

  // JWT expired (jose)
  if (error.code === "ERR_JWT_EXPIRED") {
    return response(false, 401, "Verification link has expired");
  }

  // Default error
  return response(
    false,
    error.status || error.code || 500,
    process.env.NODE_ENV === "development"
      ? error.message
      : customMessage || "Something went wrong"
  );
};

export const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
};

export const isAuthenticated = async (role) => {
  try {
    // ✅ WAJIB AWAIT
    const cookieStore = await cookies();

    const token = cookieStore.get("access_token");
    if (!token) {
      return { isAuth: false };
    }

    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    );

    if (role && payload.role !== role) {
      return { isAuth: false };
    }

    return {
      isAuth: true,
      userId: payload._id,
      role: payload.role,
    };
  } catch (error) {
    console.error("AUTH ERROR:", error);
    return {
      isAuth: false,
      error,
    };
  }
};

