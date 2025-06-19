import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import staff from "@/models/office";
import attendance from "@/models/attendance";
import devices from "@/models/devices";
import { Auth } from "@/middlewares/backendMiddleware";

const getCurrentDate = async (dateEn) => {
  const date = await dateEn?.split("/");
  return `${date[0]}-${date[1]}-${date[2]?.split(" ")[0]}`;
};

const handleTimes = async (timeString) => {
  const arrayStrData = await timeString?.split(" ");
  const hour = arrayStrData[1];
  const min = arrayStrData[2];
  return `${hour}:${min}:00`;
};

const newAttendance = async ({ UID, date, time }) => {
  const newAttendeed = new attendance({
    UID,
    date,
    entry: [time],
  });
  await newAttendeed.save();
  return;
};

const updateAttendance = async (time, dbData) => {
  const Entries = dbData?.entry?.length + dbData?.exit?.length;
  const lastTimeOut = Entries % 2 === 0;
  if (lastTimeOut) {
    dbData.entry = [...dbData.entry, time];
  } else {
    dbData.exit = [...dbData.exit, time];
  }
  await dbData.save();
  return;
};

export const POST = async (req) => {
  let status = 404;
  try {
    await ConnectDB();
    const data = await req.json();
    const logs = data?.logs;
    const device_id = data?.device_uid;
    console.log(device_id);
    if (!device_id) throw new Error("Device not found");
    const deviceExixst = await devices.findOne({ device_uid: device_id });
    if (!deviceExixst) throw new Error("Device not found!");
    console.log(logs);
    for (const UID in logs) {
      console.log(UID);
      const isStaff = await staff.findOne({ UID: UID });
      if (!isStaff) throw new Error("Invalid Staff");

      const dateAndTimes = logs?.[UID];

      for (let item of dateAndTimes) {
        console.log(item);
        const date = await getCurrentDate(item);
        const time = await handleTimes(item);

        const isAttended = await attendance.findOne({ UID, date });

        if (!isAttended) {
          await newAttendance({ UID, date, time });
        } else {
          await updateAttendance(time, isAttended);
        }
      }
    }
    return NextResponse.json(
      { message: "Attendance Added Successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ error:error?.message }, { status });
  }
};

export const PUT=async(req)=>{
  try{
    await ConnectDB();
    const auth = await Auth();
    if(!auth) throw new Error("Not Authorized");
    const data =await req?.json();
    const newDev = new devices({
      device_uid:data?.device_uid
    });
    await newDev.save();
    return NextResponse.json({message:"added sucecssfully"})
  }catch(error){
    console.log(error?.message);
    return NextResponse.json({error:error?.message}, {status:505})
  }

}

export const GET=async()=>{
  try{
    await ConnectDB();
    const auth = await Auth();
    if(!auth) throw new Error("Not Authorized");
    const data =await devices.find({}).sort({_id:-1}); 
    return NextResponse.json(data)
  }catch(error){
    console.log(error?.message);
    return NextResponse.json({error:error?.message}, {status:505})
  }

}