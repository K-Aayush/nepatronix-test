import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import team from "@/models/team";
import { UploadImage } from "@/utility/UploadImage";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const teamData: any = await team.find({}).sort({ _id: 1 });

    return NextResponse.json(teamData);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    await ConnectDB();
    const isAdmin:boolean = await Auth();
    if(!isAdmin) throw new Error("Not Admin!")
    const form: any = await req.formData();

    const title: string = form.get("title");
    const cover: File = form.get("picture");
    const about: string = form.get("about");
    const portfolio: string = form.get("portfolio");
    const facebook: string = form.get("facebook");
    const instagram:string = form.get("instagram");
    const linkedin:string= form.get("linkedin");
    const profession :string = form.get("profession");
    const resume:string = await form.get("resume")

    const picture: string = await UploadImage("teams", cover);

    const teams = new team({
      title,
      picture,
      about,
      portfolio,
      facebook,
      instagram,
      profession,
      linkedin,
      resume
    });

    await teams.save();

    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};
