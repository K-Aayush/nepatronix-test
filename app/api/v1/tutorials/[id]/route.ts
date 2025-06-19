import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import youtube from "@/models/youtube";
import { deleteQuillImages } from "@/Quill/QuillDelete";
import { handleQuillEdit } from "@/Quill/QuillEdit";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;
    const idOfData = await requestedUrl?.split("/")?.pop();
    console.log(idOfData);
    const data = await youtube.findOne({ link: idOfData });

    if (!data) {
      const data2 = await youtube.findOne({ _id: idOfData });
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
    if (!requestedUrl) {
      throw new Error("Invalid URL");
    }

    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await youtube.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }
    await deleteQuillImages(data.content);

    // delete from db
    await youtube.deleteOne({ _id: idOfData });

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

    const requestedUrl = req?.url;

    const idOfData = requestedUrl?.split("/")?.pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await youtube.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    const form: any = await req.formData();

    const title: string = form.get("title");
    const yt: string = form.get("youtube");
    const description: string = form.get("description");
    const newContentExist = form.get("content");
    data.youtube = yt;
    if (newContentExist) {
      const content = await handleQuillEdit(form, "youtubes", data?.content);
      data.content = await content;
    }
    data.title = title;
    data.link = title?.split("-").join("").split(" ").join("-").toLowerCase();
    data.description = description;
    data.youtube = yt;

    console.log(data)

    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error Editing Data!" }, { status: 500 });
  }
};
