import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import tasks from "@/models/tasks";
import { StaffAuth } from "@/middlewares/backendMiddleware";

export const GET = async (req) => {
  try {
    const isAdmin = await StaffAuth();
    if (!isAdmin?.success) throw new Error("Not Authorized");
    const UID = req?.url?.split("/")?.pop();
    await ConnectDB();
    const taskList = await tasks.findOne({ _id: UID });
    return NextResponse.json(taskList);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    await ConnectDB();
    const isAdmin = await StaffAuth();
    if (!isAdmin?.success) throw new Error("Not Authorized");

    const UID = req?.url?.split("/")?.pop();
    const taskData = await tasks.findOne({ _id: UID });
    if (!taskData) throw new Error("Error For TaskData Detected!");

     const form = await req.formData();
     const individualData = await form.get("individualProgress");
     const updates = await form.get("updates");
     const newUp = JSON.parse(updates);
     const parsed = JSON.parse(individualData);
     const newIndis = {...parsed}
     for(const key in newIndis){
      newIndis[key] = parseInt(parsed?.[key])
     }
     let progressSum = 0;
     let length = 0;
     for(const key in newIndis){
      progressSum += newIndis[key];
      length += 1
     }

     taskData.updates = newUp;

     taskData.individualProgress = newIndis;
     taskData.totalProgress = progressSum/length;
     if(progressSum/length === 100){
      taskData.status = "completed"
     }else{
      taskData.status = "ongoing"
     }
     await taskData.save()
     return NextResponse.json({error:false})
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
