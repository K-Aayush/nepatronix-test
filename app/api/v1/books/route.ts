import ConnectDB from "@/config/ConnectDB";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import book from "@/models/book";
import { Auth } from "@/middlewares/backendMiddleware";

export const GET = async () => {
  try {
    await ConnectDB();
    const header = headers();
    const page: number = parseInt(header.get("page") || "0") || 0;
    const elems:number =  12;
    const data = await book
      .find({})
      .sort({_id:-1})
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

    const title: string = form.get("title");
    const cover: File = form.get("cover");
    const description: string = form.get("description");
    const content: File = form.get("content");

    const coverImage: string = await UploadImage("books/cover", cover);
    const bookLink: string = await UploadImage("books/pdf", content);
    const books = new book({
      title,
      image: coverImage,
      description,
      content: bookLink,
      link: title?.split("-").join("").split(" ").join("-").toLowerCase()
    });

    await books.save();
    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
