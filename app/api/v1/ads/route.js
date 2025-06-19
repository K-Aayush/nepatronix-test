import { NextResponse } from "next/server";
import ConnectDB from "@/config/ConnectDB";
import { Auth } from "@/middlewares/backendMiddleware";
import ads from "../../../../models/ads";
import { deleteImage } from "@/utility/ImageRemove";
import { UploadImage } from "@/utility/UploadImage";

export const POST = async (req) => {
  try {
    await ConnectDB();
    const authed = await Auth();
    if (!authed) throw new Error("");
    const data = await req.formData();

    const index = data.get("index");
    const page = data.get("page");
    const link = data.get("link");
    const banner = data.get("banner");

    const ad = await ads.findOne({ index, page });
    const coverImage = await UploadImage("ads", banner);
    if (ad) {
      await deleteImage(ad?.banner);
      ad.banner = coverImage;
      ad.link = link;
      ad.index = index;
      ad.page = page;
      await ad.save();
    } else {
      const newAd = new ads({
        index,
        page,
        link,
        banner: coverImage,
      });
      await newAd.save();
    }
    return NextResponse.json({ error: false });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await ConnectDB();
    const authed = await Auth();
    if (!authed) throw new Error("Auth Failed");
    const allAds = await ads.find({}).sort({ _id: -1 });
    return NextResponse.json(allAds);
  } catch (error) {
    console.log(error);
    return NextResponse.json([], { status: 500 });
  }
};