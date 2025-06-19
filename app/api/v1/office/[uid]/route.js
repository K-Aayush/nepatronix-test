import { NextResponse } from "next/server";
import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import staff from "@/models/office";
import users from "@/models/users";
import attendance from "@/models/attendance"
export const PUT = async (req) => {
  try {
    const admin = await Auth();
    if (!admin) throw new Error("Admin Not Found!");

    await ConnectDB();
    const UID = await req.url.split("/").pop();
    console.log("UID:", UID);

    const staffsData = await staff.findOne({ _id: UID });
    if (!staffsData) throw new Error("Staff Not Found!");

    const newUser = await users.findOne({ username: staffsData?.email });
    if (!newUser) throw new Error("User Not Found!");

    const data = await req.json();

    for (const key in data) {
      if (key === "email" || key === "fullname" || key==="role") {

        console.log(data)
        if (key === "fullname") {
          newUser.name = data[key];
        } else if (key === "email") {
          newUser.email = data[key];
        } else if (key === "role") {
          newUser.role = data[key];
        }
        await newUser.save();
      } else {
        staffsData[key] = data[key];
      }
    }

    await staffsData.save();

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const admin = await Auth();
    if (!admin) throw new Error("Admin Not Found!");

    await ConnectDB();
    const UID = req.url.split("/").pop();
    const getStaff = await staff.findOne({ _id: UID });
    if (!getStaff) throw new Error("Staff Not Found!");

    await users.findOneAndDelete({ username: getStaff?.email });
    await staff.findOneAndDelete({ _id: UID });

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    const admin = await Auth();
    if (!admin) throw new Error("Admin Not Found!");
    const year = parseInt(new Date().getFullYear())
    const month = parseInt(new Date().getMonth())+1
    await ConnectDB();
    const UID = req.url.split("/").pop();
    const getStaff = await staff.findOne({ _id: UID });

    const totalAttendance = await attendance.countDocuments({UID:getStaff?.UID, date:{$regex:`${year}-${month}`}})
    const data = {...getStaff, attendance:totalAttendance}
    if (!getStaff) throw new Error("Staff Not Found!");

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
