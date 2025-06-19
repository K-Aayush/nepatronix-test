import { headers } from "next/headers";
import transaction from "../../../../models/transaction";
import { NextResponse } from "next/server";
import { AccAuth, Auth } from "../../../../middlewares/backendMiddleware";
import ConnectDB from "../../../../config/ConnectDB";

const GET = async () => {
  try {
    const auth = await Auth();
    const isAcc = await AccAuth()
    if (!auth && !isAcc?.success) throw new Error("Not Authorized!");
    await ConnectDB();
    const year = parseInt(headers().get("year") || `${new Date().getFullYear()}`);
    const month = parseInt(headers().get("month") || `${new Date().getMonth()+1}`);
    const data = await transaction
      .find({year:year, month:month})
      .sort({ _id:-1 })
    if (!data) throw new Error("Data Not Found!");
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json([], { status: 500 });
  }
};

const POST = async (req) => {
  try {
    const auth = await Auth();
    const isAcc = await AccAuth()
    if (!auth && !isAcc?.success) throw new Error("Not Authorized!");
    const data = await req?.json();
    const newTransict = new transaction(data);
    await newTransict.save();
    return NextResponse.json(newTransict, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Errored" }, { status: 500 });
  }
};

export { GET, POST };
