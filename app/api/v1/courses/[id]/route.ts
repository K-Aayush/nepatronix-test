import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import course from "@/models/course";
import { deleteImage } from "@/utility/ImageRemove";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await ConnectDB();
    const requestedUrl = req?.url;
    const idOfData = await requestedUrl?.split("/")?.pop();
    const data = await course.findOne({ link: idOfData });

    if (!data) {
      const data2 = await course.findOne({ _id: idOfData });
      console.log(data2);
      if (!data2) throw new Error("Data Not Found!");
      return NextResponse.json(data2);
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 400 });
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

    const data: any = await course.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data.icon);

    // delete from db
    await course.deleteOne({ _id: idOfData });

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

export const PUT = async (req: any) => {
  try {
    await ConnectDB();
    const isAdmin: boolean = await Auth();
    if (!isAdmin) throw new Error("Not Admin!");

    const requestedUrl = req?.url;

    const idOfData = requestedUrl?.split("/")?.pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await course.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: any = form.get("icon");
    const description: string = form.get("description");
    const learn: any = JSON.parse(await form.get("learn"));
    const syllabus: any = JSON.parse(await form.get("syllabus"));

    if (cover && cover !== "undefined" && cover.size > 0) {
      await deleteImage(data?.image);
      const coverImage: string = await UploadImage("courses", cover);
      data.icon = coverImage;
    }
    data.title = title;
    data.description = description;
    data.learn = learn;
    data.syllabus = syllabus;

    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error Editing Data!" }, { status: 500 });
  }
};
