import { NextResponse } from "next/server";
import keyword from "../../../../models/keywords";
import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";

export const GET = async () => {
  try {
    await ConnectDB();
    const keywordsList = await keyword.find({}).select("keyword");
    const keywords: string[] = keywordsList.map((item) => item.keyword);
    return NextResponse.json({ keywords });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const isAdmin = await Auth();
    if (!isAdmin) throw new Error("Error While Authenticating!");
    const data = await req.json();
    const is = data?.keyword
    await keyword.deleteMany({})
    for (const item of is) {
      const newKeyword = new keyword({ keyword: item });
      await newKeyword.save();
    }
    return NextResponse.json({ msg: "Data Entered!" });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
