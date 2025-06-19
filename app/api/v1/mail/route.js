import { NextResponse } from "next/server";
import { Auth } from "@/middlewares/backendMiddleware";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "deepsugautam.home@gmail.com",
    pass: "qyxioeetcrhyxbmj",
  },
});

export const POST = async (req) => {
  try {
    const admin = await Auth();
    if (!admin) throw new Error("Validation Failed");
    const data = await req.json();
    const { email, subject, message } = data;
    const info = await transporter.sendMail({
      from: "razushrestha9335@gmail.com",
      to: email,
      subject,
      text: message,
    });
    console.log(info?.messageId);
    return NextResponse.json({ message: "Email Sent Successfully!" });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ message: error?.message }, { status: 500 });
  }
};
