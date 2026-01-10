import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(8, "Password minimal 8 karakter")
    .max(64, "Password maksimal 64 karakter")
    .regex(/[A-Z]/, "Password harus mengandung huruf besar")
    .regex(/[a-z]/, "Password harus mengandung huruf kecil")
    .regex(/[0-9]/, "Password harus mengandung angka")
    .regex(/[^A-Za-z0-9]/, "Password harus mengandung karakter khusus"),

  fullname: z
    .string()
    .trim()
    .min(1, "Nama Lengkap wajib diisi")
    .min(3, "Nama Lengkap minimal 3 karakter")
    .max(100, "Nama Lengkap maksimal 100 karakter")
    .regex(/^[A-Za-z ]+$/, "Nama Lengkap hanya boleh huruf dan spasi"),

  username: z
    .string()
    .min(1, "Username wajib diisi")
    .min(3, "Username minimal 3 karakter")
    .max(50, "Username maksimal 50 karakter")
    .regex(/^[A-Za-z_]+$/, "Username hanya boleh huruf dan underscore"),

  otp: z
    .string()
    .length(6, "OTP harus 6 digit")
    .regex(/^\d{6}$/, "OTP hanya boleh angka"),
});




export const otpVerifySchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  otp: z
    .string()
    .length(6, "OTP harus 6 digit")
    .regex(/^\d{6}$/, "OTP hanya boleh angka"),
});