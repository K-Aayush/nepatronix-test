"use server";

import { cookies } from "next/headers";

const url = process.env.NEXT_APP_BACKEND;

const getLists = async (type: string, page: number, elems: any) => {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const res: any = await fetch(`${url}/api/v1/${type}`, {
      cache: "no-store",
      headers: {
        page: JSON.stringify(page),
        elems: JSON.stringify(elems),
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return;
  }
};

const getAccs = async (type: string, year: string, month: string) => {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const res: any = await fetch(`${url}/api/v1/${type}`, {
      cache: "no-store",
      headers: {
        year: year,
        month: month,
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    return null;
  }
};

const getSole = async (type: string, id: string) => {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const res: any = await fetch(`${url}/api/v1/${type}/${id}`, {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};

const getLikes = async (type: string, id: string) => {
  try {
    const res: any = await fetch(`${url}/api/v1/${type}/${id}`, {
      cache: "no-store",
      headers: {
        like: "1",
      },
    });
    if (!res.ok) throw new Error();
    return;
  } catch (error) {
    return;
  }
};

const getComments = async (type: string, id: string, page: number) => {
  try {
    const res = await fetch(`${url}/api/v1/comment`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        type: type,
        id: id,
        page: `${page}`,
      },
    });
    if (!res.ok) throw new Error("Failed to get comments");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

const getStats = async (type: string) => {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const res: any = await fetch(`${url}/api/v1/stats`, {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
        statType: type,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return;
  }
};

export { getLists, getSole, getComments, getLikes, getStats, getAccs };