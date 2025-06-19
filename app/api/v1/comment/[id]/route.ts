import ConnectDB from "@/config/ConnectDB";
import blog from "@/models/blog";
import comment from "@/models/comment";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    await ConnectDB();
    const requestedUrl = req?.url;
    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }
    const commentData = await comment.findOne({ _id: idOfData });
    const type = commentData?.type;
    const newId = commentData?.id;
    switch (type) {
      case "blogs":
        const blogData = await blog.findOne({ _id: newId });
        blogData.comments -= 1;
        await blogData.save();
    }
    await comment.deleteOne(commentData);
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
    const idOfData = requestedUrl.split("/").pop();
    const data = await req.json();
    console.log(data);
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }
    const comments = await comment.findOne({ _id: idOfData });
    comments.reply = data?.reply;
    await comments.save();
    return NextResponse.json({ error: false });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: true, message: error.message },
      { status: 400 }
    );
  }
};
