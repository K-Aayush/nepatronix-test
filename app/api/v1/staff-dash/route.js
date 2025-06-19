import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import { StaffAuth } from "@/middlewares/backendMiddleware";
import { headers } from "next/headers";
import staff from "@/models/office"
import attendance from "@/models/attendance"


export const GET = async () => {
    try {
      await ConnectDB();
      const isAdmin = await StaffAuth();
      if (!isAdmin?.success) throw new Error("Not Authorized");
      const userData = await isAdmin?.data;
      const year = headers().get("year");
      const month = headers().get("month");
      const getUser = await staff.findOne({fullname:userData?.name, email:userData?.username})
      const totalAttendance = await attendance.countDocuments({UID:getUser?.UID, date:{$regex:`${year}-${month}`}});
      const attendDetails = await attendance.find({UID:getUser?.UID, date:{$regex:`${year}-${month}`}})
      return NextResponse.json({Attendance:totalAttendance, userData:getUser, attendDetails})
    } catch (error) {
      console.log(error?.message);
      return NextResponse.json({ error: true }, { status: 500 });
    }
  };