import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import stories from "@/models/stories";
import { deleteQuillImages } from "@/Quill/QuillDelete";
import { handleQuillEdit } from "@/Quill/QuillEdit";
import { deleteImage } from "@/utility/ImageRemove";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await ConnectDB();
    const requestedUrl = req?.url;
    console.log(requestedUrl);
    const idOfData = await requestedUrl?.split("/")?.pop();
    const data = await stories.findOne({ link: idOfData });

    const head = headers();
    const isLiked = head.get("like");

    if (!data) {
      const data2 = await stories.findOne({ _id: idOfData });
      if (!data2) throw new Error("Data Not Found!");
      if (isLiked) {
        if (data2.likes) data2.likes += 1;
        else data2.likes = 1;
        await data2.save();
        return NextResponse.json({ msg: "Liked !" });
      }
      if (data2?.comments?.length === 0) {
        data2.comments = 0;
      } else if (data2?.comments?.length > 0) {
        data2.comments = data2?.comments?.length;
      }
      return NextResponse.json(data2);
    }

    if (isLiked) {
      if (data.likes) data.likes += 1;
      else data.likes = 1;
      await data.save();
      return NextResponse.json({ msg: "Liked !" });
    }
    if (data?.comments?.length === 0) {
      data.comments = 0;
    } else if (data?.comments?.length > 0) {
      data.comments = data?.comments?.length;
    }
    await data.save();

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

    const data: any = await stories.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data.image);
    await deleteQuillImages(data.content);

    // delete from db
    await stories.deleteOne({ _id: idOfData });

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

    const data: any = await stories.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }
    data.accepted = true;

    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: any = form.get("cover");
    const description: string = form.get("description");

    console.log(cover);

    if (cover && cover !== "undefined" && cover.size > 0) {
      await deleteImage(data?.image);
      const coverImage: string = await UploadImage("storiess", cover);
      data.image = coverImage;
    }

    const newContentExist = form.get("content");
    if (newContentExist) {
      const content = await handleQuillEdit(form, "storiess", data?.content);
      data.content = await content;
    }
    data.title = title;
    data.description = description;
    data.link = title.split("-").join("").split(" ").join("-").toLowerCase();
    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error Editing Data!" }, { status: 500 });
  }
};
