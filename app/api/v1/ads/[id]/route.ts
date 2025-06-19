import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import ads from "@/models/ads";
import { deleteImage } from "@/utility/ImageRemove";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await ConnectDB();
    const requestedUrl = req?.url;
    console.log(requestedUrl);
    const idOfData = await requestedUrl?.split("/")?.pop();
    const page = idOfData?.split("-")[0];
    const index = idOfData?.split("-")[1];
    const data = await ads.findOne({ page, index });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
};

export const DELETE = async (req: any) => {
  try {
    await ConnectDB();
    const isAdmin: boolean = await Auth();
    if (!isAdmin) throw new Error("Not Admin!");
    const requestedUrl = req?.url;
    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }
    const data: any = await ads.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }
    // delete image
    await deleteImage(data.banner);
    // delete from db
    await ads.deleteOne(data);
    // response
    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.error("Error in DELETE handler:", error.message);
    return NextResponse.json(
      { error: true, message: error.message },
      { status: 400 }
    );
  }
};
