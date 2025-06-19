import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import staff from "@/models/office";
import devices from "@/models/devices";

export const GET = async (req) => {
  try {
    await ConnectDB();
    const device_id = req?.url?.split("device_uid?=")?.pop()?.split("/")[0];
    console.log(device_id);
    if (!device_id) throw new Error("Device not found");
    const deviceExixst = await devices.findOne({ device_uid: device_id });
    if (!deviceExixst) throw new Error("Device not found!");
    const getAll = await staff.find({}).select("UID");
    if (!getAll) throw new Error("Not Found");
    const UIDLIST = getAll?.map((item, _) => {
      return item?.UID;
    });
    return NextResponse.json(
      {
        logs: UIDLIST,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json([], { status: 404 });
  }
};

export const DELETE = async (req) => {
  try {
    await ConnectDB();
    const devId = req?.url?.split("/")?.pop();
    await devices.findOneAndDelete({ device_uid: devId });
    const allDev = await devices.find({}).sort({ _id: -1 });
    return NextResponse.json(allDev);
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json([], { status: 404 });
  }
};
