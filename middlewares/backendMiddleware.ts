"use server";
import { headers } from "next/headers";

const domain: any = process.env.NEXT_APP_BACKEND;

export const Auth = async () => {
  try {
    const header = headers();
    const token = header.get("authorization")?.split(" ")[1];
    console.log(token);
    if (!token) throw new Error("Cookie not found!");
    const res = await fetch(`${domain}/api/v1/admin`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Validation Error!");
    return true;
  } catch (error) {
    return false;
  }
};

export const StaffAuth = async () => {
  try {
    const header = headers();
    const token = header.get("authorization")?.split(" ")[1];
    console.log(token);
    if (!token) throw new Error("Cookie not found!");
    const res = await fetch(`${domain}/api/v1/staff-login`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Validation Error!");
    const data = await res.json();
    return { success: true, data: data };
  } catch (error) {
    return { success: false };
  }
};

export const AccAuth = async () => {
  try {
    const header = headers();
    const token = header.get("authorization")?.split(" ")[1];
    console.log(token);
    if (!token) throw new Error("Cookie not found!");
    const res = await fetch(`${domain}/api/v1/staff-login`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Validation Error!");
    const data = await res.json();
    if(data.role !=="accountant")  throw new Error("Validation Error!");
    return { success: true, data: data };
  } catch (error) {
    return { success: false };
  }
};
