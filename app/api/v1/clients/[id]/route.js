import { NextResponse } from "next/server";
import { Auth } from "../../../../../middlewares/backendMiddleware";
import client from "../../../../../models/client";
import { deleteImage } from "../../../../../utility/ImageRemove";

export const DELETE = async (req) => {
  try {
    const auth = await Auth();
    if (!auth) throw new Error("Not Author");
    const id = req?.url?.split("/").pop();
    if (!id) throw new Error("ID not found");
    const clientData = await client.findOne({ _id: id });
    await deleteImage(clientData?.image);
    await client.findOneAndDelete(clientData);
    return NextResponse.json({});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error?.message }, { status: 500 });
  }
};
