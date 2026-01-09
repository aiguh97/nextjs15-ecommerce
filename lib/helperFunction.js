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
