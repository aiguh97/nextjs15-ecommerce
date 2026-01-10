import nodemailer from "nodemailer";

export const sendMail = async (to, subject, body) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true kalau 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `Teguhdev <${process.env.SMTP_USER}>`,
    to,
    subject,
    html: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return true; // ✅ INI KUNCINYA
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // ✅ supaya bisa ditangani caller
  }
};
