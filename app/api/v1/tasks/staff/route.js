import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import tasks from "@/models/tasks";
import { StaffAuth } from "@/middlewares/backendMiddleware";
import { headers } from "next/headers";

export const GET = async () => {
  try {
    await ConnectDB();
    const isAdmin = await StaffAuth();
    if (!isAdmin?.success) throw new Error("Not Authorized");
    const userData = await isAdmin?.data;
    const year = headers().get("year");
    const month = headers().get("month");

    // Filter to only include tasks where the user is a member
    const filter = { year, month, members: { $in: [userData?.name] } };

    const total = await tasks.countDocuments(filter);
    const ongoing = await tasks.countDocuments({ ...filter, status: "ongoing" });
    const completed = await tasks.countDocuments({ ...filter, status: "completed" });

    const taskList = await tasks.find(filter).sort({ _id: -1 });

    return NextResponse.json({ logs: taskList, total, ongoing, completed });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
