"use server";
import { cookies } from "next/headers";

const webUrl = process.env.NEXT_APP_BACKEND;

const timeUntilMidnightInSeconds = async () => {
  // Get the current date and time
  const now = new Date();

  // Create a new Date object for the next midnight
  const nextMidnight = new Date(now);
  await nextMidnight.setHours(24, 0, 0, 0); // Set time to 12:00 AM of the next day

  // Calculate the difference in milliseconds
  const timeDifference = (await nextMidnight.getTime()) - now.getTime();

  // Convert milliseconds to seconds
  const secondsUntilMidnight = await Math.floor(timeDifference / 1000);

  return secondsUntilMidnight;
};


export const visitorReq = async () => {
  try {
    const Cookies = cookies();
    const id = Cookies.get("user-id")?.value || "not-found";
    const reg = await fetch(`${webUrl}/api/v1/visitor/${id}`);
    if (!reg.ok) throw new Error("Visitor registration failed");
    const cookieData = await reg.json();
    console.log(cookieData);
    const exp = await timeUntilMidnightInSeconds();
    console.log(exp)
    Cookies.set("user-id", cookieData?._id, { maxAge: exp });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};