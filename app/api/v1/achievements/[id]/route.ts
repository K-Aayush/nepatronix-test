import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import achievement from "@/models/achievement";
import { deleteQuillImages } from "@/Quill/QuillDelete";
import { handleQuillEdit } from "@/Quill/QuillEdit";
import { deleteImage } from "@/utility/ImageRemove";
import { UploadImage } from "@/utility/UploadImage";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;
    const idOfData = await requestedUrl?.split("/")?.pop();
    const data = await achievement.findOne({ link: idOfData });

    if (!data) {
      const data2 = await achievement.findOne({ _id: idOfData });
      console.log(data2);
      if (!data2) throw new Error("Data Not Found!");
      return NextResponse.json(data2);
    }
    return NextResponse.json(data)
  } catch (error) {
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

    const data: any = await achievement.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data.cover);
    for (let i = 0; i < 3; i++) {
      await deleteImage(data?.images[i]);
    }
    await deleteQuillImages(data.content);

    // delete from db
    await achievement.deleteOne({ _id: idOfData });

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

    const data: any = await achievement.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    const form: any = await req.formData();

    const cover: any = form.get("cover");
    console.log(cover);

    if (cover && cover !== "undefined" && cover.size > 0) {
      await deleteImage(data?.cover);
      const coverImage: string = await UploadImage("achievements", cover);
      data.cover = coverImage;
    }
    const link = await form.get("link");
    const newInnerImages = [...data?.images];
    for (let i = 0; i < 3; i++) {
      let innerImage: any = await form.get(`image${i}`);
      if (innerImage && innerImage !== "undefined" && innerImage.size > 0) {
        await deleteImage(data?.images[i]);
        const inner: string = await UploadImage("achievements", innerImage);
        newInnerImages[i] = inner;
        continue;
      }
    }
    data.link = link;
    data.images = newInnerImages;

    const newContentExist = form.get("content");
    if (newContentExist) {
      const content = await handleQuillEdit(
        form,
        "achievements",
        data?.content
      );
      data.content = await content;
    }

    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error Editing Data!" }, { status: 500 });
  }
};
