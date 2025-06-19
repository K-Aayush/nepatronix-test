"use server";
import { cookies } from "next/headers";
import { RiTokenSwapFill } from "react-icons/ri";

const domain = process.env.NEXT_APP_BACKEND;

export const loginStaff = async (data) => {
  try {
    console.log(data);
    const res = await fetch(`${domain}/api/v1/staff-login`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (!res.ok) throw new Error("Login Failed!");
    const token = await res.json();
    console.log(token);
    await cookies().set("token", token?.cookie, { maxAge: 30 * 24 * 60 * 60 });
    await cookies().set("user", JSON.stringify(token?.user), {
      maxAge: 30 * 24 * 60 * 60,
    });
    return { success: true, url: token?.cookie };
  } catch (error) {
    console.log(error);
    return { success: false, msg: "login failed! Enter Correct Credentials!" };
  }
};
