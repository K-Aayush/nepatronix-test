import ConnectDB from "@/config/ConnectDB";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import stories from "@/models/stories";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const currentId = header.get("currentId");

    const data = await stories.aggregate([
      { $match: { _id: { $ne: currentId } } },
      { $sample: { size: 4 } }
    ]);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};
export const PUT = async()=>{
  try {
    await ConnectDB();
    const header = headers();
    const currentId = header.get("currentId");

    const data = await stories.findOne({_id:currentId});
    data.views+=1;
    console.log("Updated Views");
    await data.save();

    return NextResponse.json({success:true});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
}