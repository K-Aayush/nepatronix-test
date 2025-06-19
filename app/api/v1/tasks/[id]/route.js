import ConnectDB from "@/config/ConnectDB";
import { NextResponse } from "next/server";
import tasks from "@/models/tasks";
import { Auth } from "@/middlewares/backendMiddleware";
import { UploadImage } from "@/utility/UploadImage";
import { deleteImage } from "@/utility/ImageRemove";

export const GET = async (req) => {
  try {
    const UID = req?.url?.split("/")?.pop();
    const auth = await Auth();
    if (!auth) throw new Error("Not Authorized!");
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
    const isAdmin = await Auth();
    if (!isAdmin) throw new Error("Not Authorized");
    const UID = await req?.url?.split("/")?.pop();
    const taskData = await tasks.findOne({ _id: UID });
    if (!taskData) throw new Error("Error For TaskData Detected!");
    const data = await req.formData();

    // main process
    taskData.title = await data.get("title");
    taskData.members = JSON.parse(await data.get("members"));
    taskData.deadline = await data?.get("deadline");
    taskData.startingDate = await data?.get("startingDate");
    taskData.description = await data?.get("description");
    taskData.updates = JSON.parse(data?.get("updates"));
    taskData.requirements = data?.get("requirements");

    const isFile = parseInt(await data?.get("newFiles"));
    const oldFiles = JSON.parse(await data?.get("files"));

    const filesToSave = [];

    // removing old files if removed
    const fileInDb = taskData?.files;
    if (oldFiles.length === fileInDb.length) {
      filesToSave.push(...oldFiles);
    } else if (fileInDb?.length > 0) {
      for (let i = 0; i < fileInDb?.length; i++) {
        if (oldFiles?.length > 0) {
          for (let j = 0; j < oldFiles?.length; j++) {
            if (fileInDb[i]?.name === oldFiles[j]?.name) {
              filesToSave.push(fileInDb?.[i]);
              break;
            }
          }
        } else {
          break;
        }
      }
    }
    // filter and remove
    const filesToRemove = oldFiles.filter(
      (item) => !filesToSave.includes(item)
    );
    for (const filesInside of filesToRemove) {
      await deleteImage(filesInside?.name);
    }

    // uploading new Files
    if (isFile > 0) {
      for (let i = 0; i < isFile; i++) {
        const file = data?.get(`newFile${i}`);
        const name = await UploadImage("tasks", file);
        console.log(name, file);
        filesToSave.push({ name: name });
      }
    }

    taskData.files = filesToSave;
    // uploading new DIkes
    await taskData.save();
    return NextResponse.json({ message: "Data Updated Successfully!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const UID = await req.url.split("/").pop();
    const isAdmin = await Auth();
    if (!isAdmin) throw new Error("Not Authorized");
    const data = await tasks.findOne({_id:UID});
    if(data?.files?.length>0){
      for(let i=0; i<data?.files?.length; i++){
        await deleteImage(data?.files[i]?.name)
      }
    }
    await tasks.deleteOne({ _id: UID });
    return NextResponse.json({ msg: "Deleted" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err }, { status: 500 });
  }
};
