import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import order from "@/models/order";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req: any) => {
  await ConnectDB();
  const isAdmin: boolean = await Auth();
  if (!isAdmin) throw new Error("Not Admin!");
  const id = req?.url?.split("/").pop();
  try {
    if (!id || !isValidObjectId(id)) {
      throw new Error("Not a valid ID!");
    }
    const emel = await order.findOne({ _id: id });
    if (!emel) {
      throw new Error("Failed to find!");
    }
    emel.status = "completed";
    await emel.save();
    return NextResponse.json(
      { message: "Updated Successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error?.message }, { status: 500 });
  }
};

export const DELETE = async (req: any) => {
  await ConnectDB();
  const isAdmin: boolean = await Auth();
  if (!isAdmin) throw new Error("Not Admin!");
  const id = req?.url?.split("/").pop();
  try {
    if (!id || !isValidObjectId(id)) {
      throw new Error("Not a valid ID!");
    }
    const emel = await order.findOneAndDelete({ _id: id });
    if (!emel) {
      throw new Error("Failed to find!");
    }
    return NextResponse.json(
      { message: "Updated Successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error?.message }, { status: 500 });
  }
};
