import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import { NextResponse } from "next/server";
import staff from "@/models/office";
import attendanceModel from "@/models/attendance";
import users from "@/models/users";
import { hash } from "bcryptjs";

export const GET = async () => {
  try {
    await ConnectDB();
    const auth = await Auth();
    if (!auth) throw new Error("Not Authorized!");
    const allStaffs = await staff.find({});
    const newArray = [];
    for (const data of allStaffs) {
      const member = { ...data?._doc };
      const date = new Date();
      const currentAttendance =await  attendanceModel.countDocuments({
        UID: member?.UID,
        date: { $regex: `${date.getFullYear()}-${date.getMonth() + 1}` },
      });
      let prev = 0;
      if (date.getMonth() === 0) {
        const prevAttendance = await attendanceModel.countDocuments({
          UID: member?.UID,
          date: { $regex: `${date.getFullYear() - 1}-${12}` },
        });
        prev = prevAttendance;
      } else {
        const prevAttendance =await  attendanceModel.countDocuments({
          UID: member?.UID,
          date: { $regex: `${date.getFullYear()}-${date.getMonth()}` },
        });
        prev = prevAttendance;
      }
      member.currentAttendance = currentAttendance;
      member.prevAttendance = prev;
      newArray.push(member);
    }
    console.log(newArray)
    return NextResponse.json(newArray);
  } catch (error) {
    // (error?.message);
    return NextResponse.json({ error: error }, { status: 400 });
  }
};

const makePwd = async () => {
  const pass = await hash("nepatron", 10);
  return pass;
};

export const POST = async (req) => {
  try {
    const isad = await Auth();
    if (!isad) throw new Error("InValid");
    await ConnectDB();
    const data = await req.json();
    console.log(data);

    const newPwd = await makePwd();

    const newLogin = new users({
      username: data?.email,
      name: data?.fullname,
      password: newPwd,
    });
    const newStaff = new staff(data);
    await newStaff.save();
    await newLogin.save();
    return NextResponse.json({});
  } catch (error) {
    // (error);
    console.log(error);
    return NextResponse.json({}, { status: 500 });
  }
};
