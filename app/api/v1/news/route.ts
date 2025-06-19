import ConnectDB from "@/config/ConnectDB";
import { handleQuillReq } from "@/Quill/QuillServer";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import news from "@/models/news";
import { Auth } from "@/middlewares/backendMiddleware";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number =  12;
    const data = await news
      .find({})
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems).select("-content");
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

    const title: string = form.get("title");
    const cover: File = form.get("cover");
    const description: string = form.get("description");

    const coverImage: string = await UploadImage("news", cover);

    const content = await handleQuillReq(form, "news");
    const newss = new news({
      title,
      image: coverImage,
      description,
      content,
      link:title?.split("-").join("").split(" ").join("-").toLowerCase()
    });

    await newss.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
