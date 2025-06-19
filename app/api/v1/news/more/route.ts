import ConnectDB from "@/config/ConnectDB";
import news from "@/models/news";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const currentId = header.get("currentId");

    const data = await news.aggregate([
      { $match: { _id: { $ne: currentId } } },
      { $sample: { size: 4 } }
    ]);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};
