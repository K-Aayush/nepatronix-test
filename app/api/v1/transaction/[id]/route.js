import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import transaction from "@/models/transaction";
import { AccAuth, Auth } from "@/middlewares/backendMiddleware";

export const GET = async (req) => {
  try {
    const UID = req?.url?.split("/")?.pop();
    const auth = await Auth();
    const isAcc = await AccAuth()
    if(!auth && ! isAcc) throw new Error("Not Authorized!")
    await ConnectDB();
    const taskList = await transaction.findOne({ _id: UID });
    return NextResponse.json(taskList);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    const auth = await Auth();
    const isAcc = await AccAuth()
    if(!auth && !isAcc) throw new Error("Not Authorized!")
    const UID = await req?.url?.split("/")?.pop();
    const taskData = await transaction.findOne({ _id: UID });
    if (!taskData) throw new Error("Error For TaskData Detected!");
    const data = await req.json();
    taskData.transactions = data?.transactions;
    taskData.type = data?.type
    await taskData.save();
    return NextResponse.json({ message: "Data Updated Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const UID = await req.url.split("/").pop();
    const auth = await Auth();
    const isAcc = await AccAuth()
    if(!auth && ! isAcc) throw new Error("Not Authorized!")
    await transaction.deleteOne({ _id: UID });
    return NextResponse.json({ msg:"Deleted"});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err }, { status: 500 });
  }
};
