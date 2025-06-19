"use server";

import { cookies } from "next/headers";

const url = process.env.NEXT_APP_BACKEND;

const postAdminData = async (formData: any, type: string) => {
  try {
    const cookie = cookies();
    console.log(formData)
    const token = cookie.get("token")?.value;
    const res = await fetch(`${url}/api/v1/${type}`, {
      cache: "no-store",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Response Error!");
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

const postAndRecieve = async (formData: any, type: string) => {
  try {
    const cookie = cookies();
    console.log(formData)
    const token = cookie.get("token")?.value;
    const res = await fetch(`${url}/api/v1/${type}`, {
      cache: "no-store",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Response Error!");
    const rec= await res.json()
    return {success:true, data:rec};
  } catch (e: any) {
    console.log(e.message);
    return {success:false};
  }
};

const putAdmin = async (formData: any, type: string, id: string) => {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const res = await fetch(`${url}/api/v1/${type}/${id}`, {
      cache: "no-store",
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Response Error!");
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

const replyPut = async (data: any, id: string) => {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const res = await fetch(`${url}/api/v1/comment/${id}`, {
      method: "PUT",
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Response Error!");
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

export { postAdminData, putAdmin, replyPut , postAndRecieve};
