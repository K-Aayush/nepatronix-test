import ConnectDB from "@/config/ConnectDB";
import { handleQuillReq } from "@/Quill/QuillServer";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import stories from "@/models/stories";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number =  12;
    const data = await stories
      .find({})
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems).select("-content");
    console.log("Multiple Search!");
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: File = form.get("cover");
    const description: string = form.get("description");
    const author: string = form.get("author");
    const profileImage: File = form.get("profile");

    const coverImage: string = await UploadImage("stories", cover);
    const profile: string = await UploadImage("avatar", profileImage);

    const content = await handleQuillReq(form, "stories");
    const storiess = new stories({
      title,
      image: coverImage,
      description,
      content,
      author,
      profile,
      link:title?.split("-").join("").split(" ").join("-").toLowerCase()
    });

    await storiess.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
