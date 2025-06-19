import fs from "fs";
import path from "path";

const genUnique = async (name: string) => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 string
  const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
  const joins = name?.split(" ").join("_");
  return `${timestamp}-${randomString}_${joins}`;
};

const UploadImage = async (type: string, file: any) => {
  const image: any = file;
  const uniqueName: string = await genUnique(image?.name);
  const uploadDir = path.join(process.cwd(), 'uploads', type);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const createPath: string = path.join(uploadDir, uniqueName);
  const fileBuffer: any = Buffer.from(await image?.arrayBuffer());

  try {
    fs.writeFileSync(createPath, fileBuffer);
  } catch (error: any) {
    console.error(error.message);
  }

  return `/${type}/${uniqueName}`;
};

export { UploadImage };
