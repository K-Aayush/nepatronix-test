import ConnectDB from "@/config/ConnectDB";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import course from "@/models/course";
import { Auth } from "@/middlewares/backendMiddleware";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems: number = parseInt(header.get("elems") || "12") || 12;
    const data = await course
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
    const isAdmin: boolean = await Auth();
    if (!isAdmin) throw new Error("Not Admin!");
    const form: any = await req.formData();

    const title: string = form.get("title");
    const icon: File = form.get("icon");
    const description: string = form.get("description");
    const learn: any = JSON.parse(await form.get("learn"));
    const syllabus: any = JSON.parse(await form.get("syllabus"));

    const coverImage: string = await UploadImage("courses", icon);
    const courses = new course({
      title,
      icon: coverImage,
      description,
      learn,
      syllabus,
      link : title.split("-").join("").split(" ").join("-").toLowerCase()
    });

    await courses.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
