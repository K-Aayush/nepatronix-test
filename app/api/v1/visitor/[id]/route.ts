import { NextResponse } from "next/server";
import visitor from "@/models/visitors";
import ConnectDB from "@/config/ConnectDB";

const genDate = async () => {
  const date = new Date();

  let currentDay = String(date.getDate()).padStart(2, "0");

  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  let currentYear = date.getFullYear();

  // we will display the date as DD-MM-YYYY

  let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
  return currentDate;
};

export const GET = async (req: any) => {
  try {
    await ConnectDB();
    const date = await genDate();
    const id = await req.url.split("/")?.pop();
    if (id === "not-found") {
      const newUser = new visitor({ date: date });
      await newUser.save();
      return NextResponse.json({ _id: newUser?._id });
    }

    const isUser = await visitor.findOne({ _id: id });
    if (!isUser) {
      const newUser = new visitor({ date: date });
      await newUser.save();
      return NextResponse.json({ _id: newUser?._id });
    }
    return NextResponse.json({ _id: isUser?._id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
