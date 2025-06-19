import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import team from "@/models/team";
import { deleteImage } from "@/utility/ImageRemove";
import { UploadImage } from "@/utility/UploadImage";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    await ConnectDB();
    const isAdmin: boolean = await Auth();
    if (!isAdmin) throw new Error("Not Admin!");

    const requestedUrl = req?.url;
    if (!requestedUrl) {
      throw new Error("Invalid URL");
    }

    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await team.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data.picture);

    // delete from db
    await team.deleteOne({ _id: idOfData });

    // response
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

    const isAdmin: boolean = await Auth();
    if (!isAdmin) throw new Error("Not Admin!");
    const requestedUrl = req?.url;

    const idOfData = requestedUrl?.split("/")?.pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await team.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: any = form.get("picture");
    const about: string = form.get("about");
    const profession: string = form.get("profession");
    const portfolio: string = form.get("portfolio");
    const facebook: string = form.get("facebook");
    const linkedin:string = form.get("linkedin");
    const instagram:string = form.get("instagram");

    console.log(cover);

    if (cover && cover !== "undefined" && cover.size > 0) {
      await deleteImage(data?.picture);
      const coverImage: string = await UploadImage("teams", cover);
      data.picture = coverImage;
    }
    data.title = title;
    data.about = about;
    data.profession = profession;
    data.portfolio = portfolio;
    data.facebook = facebook;
    data.instagram = instagram;
    data.linkedin = linkedin
    await data.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: "Error teaming Data!" }, { status: 500 });
  }
};
