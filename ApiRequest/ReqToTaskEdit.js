"use server"
import { cookies } from "next/headers";

const domain = process.env.NEXT_APP_BACKEND;

export const EditTaskAdmin = async (data, id) => {
  try {
    const token = cookies().get("token")?.value;
    const res = await fetch(`${domain}/api/v1/tasks/${id}`, {
      cache: "no-store",
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: data,
    });
    if(!res.ok) return false;
    return true
  } catch (error) {
    console.log(error);
    return false;
  }
};
