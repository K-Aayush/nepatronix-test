import { ImageSender } from "@/utility/GetImage";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; // Import the type for the request

export const GET = async (req: NextRequest) => {
  const url: string | undefined = req?.url?.split("/")?.pop();
  if (!url) {
    return new NextResponse("Invalid URL", { status: 400 });
  }

  const file:any = await ImageSender("tasks", url);
  if (!file) {
    return new NextResponse("File not found", { status: 404 });
  }

  const ext: string | undefined = url?.split(".")?.pop();
  if (!ext) {
    return new NextResponse("Invalid file extension", { status: 400 });
  }

  const fileName = "task_nepatronix."+ext

  let fileMime = "";
  switch (ext.toLowerCase()) {
    case "png":
      fileMime = "image/png";
      break;
    case "jpg":
    case "jpeg":
      fileMime = "image/jpeg";
      break;
    case "mp4":
      fileMime = "video/mp4";
      break;
    case "pdf":
      fileMime = "application/pdf";
      break;
    case "txt":
      fileMime = "text/plain";
      break;
    case "html":
      fileMime = "text/html";
      break;
    default:
      fileMime = "application/octet-stream"; // Fallback for unknown file types
  }

  return new NextResponse(file, {
    headers: {
      "Content-Type": fileMime,
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
};
