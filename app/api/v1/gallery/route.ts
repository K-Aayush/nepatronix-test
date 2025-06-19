import ConnectDB from "@/config/ConnectDB";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import gallery from "@/models/gallery";
import { Auth } from "@/middlewares/backendMiddleware";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number = 12;
    const data = await gallery
      .find({})
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const isAdmin:boolean = await Auth();
    if(!isAdmin) throw new Error("Not Admin!")
    const form: any = await req.formData();
    const noOfImages: number = parseInt(form.get("images"));
    const description: string = form.get("description");

    for (let i = 0; i < noOfImages; i++) {
      const imageFile: File = form.get(`image${i}`);
      const newCoverImage: string = await UploadImage("gallery", imageFile);

      const gallerys = new gallery({
        description,
        image: newCoverImage,
      });

      await gallerys.save();
    }
    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
