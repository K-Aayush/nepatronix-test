import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import tasks from "@/models/tasks";
import { Auth } from "@/middlewares/backendMiddleware";
import { UploadImage } from "@/utility/UploadImage";
import { headers } from "next/headers";

export const POST = async (req) => {
  try {
    const isAdmin = await Auth();
    if (!isAdmin) throw new Error("Verification Error");
    await ConnectDB();
    const data = await req.formData();
    console.log(data);
    const format = {
      title: "",
      members: [],
      status: "",
      deadline: "",
      startingDate: "",
      description: "",
      files: [],
      updates: [],
      individualProgress: {},
      totalProgress: 0,
      requirements: "",
    };
    // handle Data
    for (const key in format) {
      const innerData = await data?.get(key);
      if (key === "files") {
        const isFile = parseInt(innerData);
        if (isFile !== 0) {
          const newFile = [];

          for (let i = 0; i < isFile; i++) {
            const file = data?.get(`file${i}`);
            const name = await UploadImage("tasks", file);
            newFile.push({ name: name });
          }
          format[key] = newFile;
        }
      } else if (Array.isArray(format?.[key])) {
        const newData = JSON.parse(innerData);
        format[key] = newData;
      } else if (key === "totalProgress") {
        format.totalProgress = 0;
      } else if (key === "individualProgress") {
        const newData = JSON.parse(innerData);
        format.individualProgress = newData;
      } else {
        format[key] = innerData;
      }
    }

    const newTask = new tasks(format);
    await newTask.save();
    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const isAdmin = await Auth();
    if (!isAdmin) throw new Error("Authenticate Error!");
    await ConnectDB();
    const year = headers().get("year");
    const month = headers().get("month")
    const total = await tasks.countDocuments({year, month});
    const ongoing = await tasks.countDocuments({year, month, status:"ongoing"});
    const completed = await tasks.countDocuments({year, month, status:"completed"})
    const taskList = await tasks.find({year, month}).sort({ _id: -1 });
    return NextResponse.json({logs:taskList, total, ongoing, completed});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
