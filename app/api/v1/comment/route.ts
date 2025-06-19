import { NextResponse } from "next/server";
import comment from "@/models/comment";
import ConnectDB from "@/config/ConnectDB";
import { headers } from "next/headers";
import blog from "@/models/blog";
import stories from "@/models/stories";

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const loc = headers().get("loc");
    const commentData = await req.json();
    const newComment: any = new comment(commentData);
    await newComment.save();
    switch (loc) {
      case "blogs":
        const blogData = await blog.findOne({ _id: commentData?.id });
        if (blogData?.comments?.length === 0) {
          blogData.comments = 1;
        } else if (blogData?.comments?.length > 0) {
          blogData.comments = blogData?.comments?.length + 1;
        } else {
          blogData.comments += 1;
        }
        await blogData.save();
      case "stories":
        const storiesData = await stories.findOne({ _id: commentData?.id });
        if (storiesData?.comments?.length === 0) {
          storiesData.comments = 1;
        } else if (storiesData?.comments?.length > 0) {
          storiesData.comments = storiesData?.comments?.length + 1;
        } else {
          storiesData.comments += 1;
        }
        await storiesData.save()
    }
    return NextResponse.json({ status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await ConnectDB();
    const head = headers();
    const page = parseInt(head.get("page") || "0");
    const type = head.get("type");
    const id = head.get("id");
    console.log(page, type, id);

    console.log(page);

    const commentLists = await comment
      .find({ id: id, type: type })
      .sort({ _id: -1 })
      .skip(page * 100)
      .limit(100);

    return NextResponse.json(commentLists);
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 400 });
  }
};
