import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import youtube from "@/models/youtube";
import { handleQuillReq } from "@/Quill/QuillServer";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const page: number = parseInt(headers().get("page") || "0");
    const elems: number = 12;
    const data = await youtube
      .find({})
      .sort({ _id: -1 })
      .skip(page * elems)
      .limit(elems)
      .select("-content");
    return NextResponse.json(data);
  } catch (error: any) {
    console.log(error?.message);
    return NextResponse.json({ message: error?.message }, { status: 400 });
  }
};



export const POST = async (req: any) => {
    try {
      await ConnectDB();
      const isAdmin:boolean = await Auth();
      if(!isAdmin) throw new Error("Not Admin!")
      const form: any = await req.formData();
  
      const title: string = form.get("title");
      const description: string = form.get("description");
      const content = await handleQuillReq(form, "youtubes");
      const yt = await form.get("youtube")
      const youtubes = new youtube({
        title,
        description,
        youtube:yt,
        content,
        link:title?.split("-").join("").split(" ").join("-").toLowerCase()
      });
  
      await youtubes.save();
  
      return NextResponse.json({ error: false }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: true }, { status: 500 });
    }
  };
  