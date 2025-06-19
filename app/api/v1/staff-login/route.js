import { headers } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { isValidObjectId } from "mongoose";
import users from "@/models/users";
import bcrypt from "bcryptjs";
import ConnectDB from "@/config/ConnectDB";
import { StaffAuth } from "@/middlewares/backendMiddleware";
const pass = process.env.NEXT_APP_TOKEN || "xxx";

// use bearer
export const GET = async () => {
  try {
    await ConnectDB();
    const Headers = headers();
    const raw = Headers.get("authorization");
    const token = raw.split(" ")[1];
    if (!token) throw new Error("Unauthorized Access Request!");

    const verify = jwt.verify(token, pass);
    const uniqueId = verify?._id;
    if (!uniqueId || !isValidObjectId(uniqueId))
      throw new Error("Invalid Admin Access!");

    // check admin
    const isUser = await users.findOne({ _id: uniqueId,  role: { $in: ['user', 'accountant'] }}).select("-password");
    if (!isUser) throw new Error("Not Authorized Admin!");

    return NextResponse.json( isUser );
  } catch (error) {
    return NextResponse.json({ msg: "Error" }, { status: 400 });
  }
};

// responsed unique token
export const POST = async (req) => {
  try {
    await ConnectDB();
    const bodyData = await req.json();
    const { email, password } = bodyData;

    const User = await users.findOne({ username: email });
    if (!User) throw new Error("User Not Found!");

    const verifyPwd = await bcrypt.compare(password, User?.password);
    if (!verifyPwd) throw new Error("Un Verified Password");

    const makeJWT = await jwt.sign({ _id: User?._id, Date: new Date() }, pass, {
      expiresIn: "30d",
    });

    return NextResponse.json({ cookie: makeJWT, user:User }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Internal Error" }, { status: 404 });
  }
};

// adjust the import pa

export const PUT = async (req) => {
  try {
    const isAdmin = await StaffAuth();
    if (!isAdmin) throw new Error("Not Staff!");
    console.log(isAdmin)

    await ConnectDB();

    const data = await req.json();
    const admin = await users.findOne({ _id: isAdmin?.data?._id });
    if (!admin) throw new Error("User not found!");

    const isPwd = await bcrypt.compare(data?.oldPwd, admin.password);
    if (!isPwd) throw new Error("Incorrect Password!");

    const hashNew = await bcrypt.hash(data?.rePwd, 10);
    admin.password = hashNew;
    await admin.save();

    return NextResponse.json({ msg: "Password Edited Successfully!" });
  } catch (error) {
    console.error(error?.message);
    return NextResponse.json(
      { msg: error.message || "Internal Error" },
      { status: 500 }
    );
  }
};
