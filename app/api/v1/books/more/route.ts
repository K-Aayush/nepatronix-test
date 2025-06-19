import ConnectDB from "@/config/ConnectDB";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import book from "@/models/book";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const currentId = header.get("currentId");

    const data = await book.aggregate([
      { $match: { _id: { $ne: currentId } } },
      { $sample: { size: 4 } }
    ]);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};
