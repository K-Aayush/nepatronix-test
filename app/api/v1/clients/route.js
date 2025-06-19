import { Auth } from "@/middlewares/backendMiddleware";
import { NextResponse } from "next/server";
import client from "@/models/client";
import { UploadImage } from "@/utility/UploadImage";

export const GET = async () => {
  try {
    const all = await client.find({});
    return NextResponse.json(all);
  } catch (error) {
    console.log(error);
    return NextResponse.json([], { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const auth = await Auth();
    if (!auth) throw new Error("Error on authorization!");
    const data = await req.formData();
    const image = data.get("image");
    if (!image) return;
    const uploaded = await UploadImage("clients", image);
    const newClient = new client({ image: uploaded });
    await newClient.save();
    return NextResponse.json({ message: "uploaded successfuly!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error?.message }, { status: 500 });
  }
};
