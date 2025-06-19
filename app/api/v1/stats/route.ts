import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import visitor from "@/models/visitors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

// Helper function to format the date as DD-MM-YYYY
const formatDate = (date:any) => {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const getStartOfWeek = () => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const diff = now.getDate() - dayOfWeek; // Start of current week (Sunday)
  return new Date(now.setDate(diff));
};

// Get start of the month
const getStartOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};

const handleWeeklyReq = async () => {
  const startOfWeek = getStartOfWeek();
  const now = new Date();

  const data = await visitor.find({
    date: {
      $gte: formatDate(startOfWeek),
      $lte: formatDate(now),
    },
  });

  return data.length;
};

const handleMonthlyReq = async () => {
  const startOfMonth = getStartOfMonth();
  const now = new Date();

  const data = await visitor.find({
    date: {
      $gte: formatDate(startOfMonth),
      $lte: formatDate(now),
    },
  });

  return data.length;
};

const handleDailyReq = async () => {
  const now = new Date();
  const currentDate = formatDate(now);

  const data = await visitor.find({ date: currentDate });
  return data.length;
};

export const GET = async () => {
  try {
    await Auth();
    await ConnectDB();
    const type = headers().get("statType");

    switch (type) {
      case "daily":
        const dailyData = await handleDailyReq();
        return NextResponse.json(dailyData);

      case "weekly":
        const weeklyData = await handleWeeklyReq();
        return NextResponse.json(weeklyData);

      case "monthly":
        const monthlyData = await handleMonthlyReq();
        return NextResponse.json(monthlyData);

      default:
        const allData = await visitor.countDocuments()
        return NextResponse.json(allData);
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
