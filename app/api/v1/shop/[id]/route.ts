import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import shop from "@/models/shop";
import { deleteImage } from "@/utility/ImageRemove";
import { UploadImage } from "@/utility/UploadImage";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;
    const idOfData = await requestedUrl?.split("/")?.pop();
    const data = await shop.findOne({ link: idOfData });

    if (!data) {
      const data2 = await shop.findOne({ _id: idOfData });
      console.log(data2);
      if (!data2) throw new Error("Data Not Found!");
      return NextResponse.json(data2);
    }
    return NextResponse.json(data);
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
    if (!requestedUrl) {
      throw new Error("Invalid URL");
    }

    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await shop.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data.cover);
    if (data?.icon) {
      await deleteImage(data.icon);
    }
    if (Array.isArray(data?.images)) {
      data?.images?.forEach(async (item: string) => {
        await deleteImage(item);
      });
    }

    // delete from db
    await shop.deleteOne({ _id: idOfData });

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

    const data: any = await shop.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    const form: any = await req.formData();

    console.log(form);

    const title: string = form.get("title");
    const cover: any = form.get("cover");
    const description: string = form.get("description");
    const price: string = form.get("price");
    const productNo: string = form.get("productNo");

    if (cover && cover !== "undefined" && cover.size > 0) {
      await deleteImage(data?.cover);
      const coverImage: string = await UploadImage("shops", cover);
      data.cover = coverImage;
    }

    const images = JSON.parse(form.get("images") || "[]");

    if (data?.images && Array.isArray(data?.images) && Array.isArray(images)) {
      const oldImages = data?.images;
      for (const items of oldImages) {
        if (!images.includes(items)) {
          await deleteImage(items);
        }
      }
    }

    if (form.get("names")) {
      const names = JSON.parse(form.get("names") || "[]");
      console.log(names);
      for (const loc of names) {
        const item = form.get(loc);
        console.log(item, loc);
        const uploaded = await UploadImage("shops", item);
        images.push(uploaded);
      }
    }

    console.log(images);
    data.title = title;
    data.description = description;
    data.price = price;
    data.productNo = productNo;
    data.images = images;

    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error Editing Data!" }, { status: 500 });
  }
};
