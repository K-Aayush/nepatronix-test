import ConnectDB from "@/config/ConnectDB";
import shop from "@/models/shop";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const searched = await req.json();
    console.log(searched);
    const findByProductNo = await shop.findOne({ productNo: searched?.search });
    if (findByProductNo)
      return NextResponse.json({ url: findByProductNo?._id });
    const findByName = await shop.findOne({ title: searched?.search });
    if (findByName) return NextResponse.json({ url: findByName?._id });
    throw new Error("Failed To Find");
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 400 });
  }
};
