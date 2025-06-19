import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { AccAuth, Auth } from "../../../../../middlewares/backendMiddleware";
import inventory from "../../../../../models/inventory";
import ConnectDB from "@/config/ConnectDB";
import transiction from "@/models/transaction";

export const GET = async () => {
  try {
    await ConnectDB();
    const admin = await Auth();
    const acc = await AccAuth();
    if (!acc && !admin) throw new Error("Not Authorzed");
    const yr = headers().get("year");
    const month = headers().get("month");
    const newDate = `${yr}-${month < 10 ? `0${month}` : month}`;

    const inv = await inventory.find({
      date: {
        $regex: newDate,
        $options: "i",
      },
    });
    console.log(newDate, inv);
    return NextResponse.json(inv);
  } catch (error) {
    return NextResponse.json([], { status: 400 });
  }
};

export const POST = async (req) => {
  try {
    await ConnectDB();
    const admin = await Auth();
    const acc = await AccAuth();
    if (!acc && !admin) throw new Error("Not Authorzed");
    const res = await req.json();
    const data = JSON.parse(res)
    const newTransactionObj = new transiction({
      type: data?.type === "sales" ? "income" : "expense",
      [data?.type === "sales" ? "incomeType" : "expenseType"]: data?.type,
      year: data?.date?.split("-")?.[0],
      month: `${parseInt(data?.date?.split("-")?.[1])}`,
      date: `${parseInt(data?.date?.split("-")?.[2])}`,
      amount: data?.total,
      remarks: data?.type === "sales" ? "Sold Goods" : "Purchased Goods",
      [`${data?.billType}No`]: data?.billNo,
      companyName: data?.company,
      address: data?.company,
    });
    const newTrans = new inventory({
      _id: newTransactionObj?._id,
      ...data,
    });
    await newTrans.save();
    await newTransactionObj.save();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({}, { status: 400 });
  }
};
