"use server";
import { singleTasks } from "@/StaffBox/requests/RequestData";
import { cookies } from "next/headers";
import AddTaskProfile from "@/StaffBox/Tasks/AddTaskProfile";
import React from "react";

const domain = process.env.NEXT_APP_BACKEND;
console.log(domain);
// Helper functions

const page = async ({ params }) => {
  const fetched = await singleTasks(params?.id);
  const staff_data = JSON.parse(cookies().get("user").value);
  const handleSubmit = async (recievedData) => {
    "use server";
    const recieved = {
      progress: recievedData?.progress,
      remark:recievedData?.remark,
      member: staff_data?.name,
      _id: fetched?._id,
    };
    const token = cookies().get("token")?.value;
    try {
      const res = await fetch(`${domain}/api/v1/tasks/staff/${fetched?._id}`, {
        method: "PUT",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recieved),
      });
      if (!res.ok) {
        throw new Error("Could Not Make The request!");
      }
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  return (
    <main className="w-full bg-slate-100 min-h-screen">
      <AddTaskProfile data={fetched} submit={handleSubmit} userName={staff_data?.name} />
    </main>
  );
};
export default page;
