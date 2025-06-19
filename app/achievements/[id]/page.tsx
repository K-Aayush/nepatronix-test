import { getSole } from "@/ApiRequest/GetData";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }: { params: any }) {
  try {
    const res = await getSole("achievements", params?.id);
    if (!res) {
      return {
        title: "not found",
        description: "The Page You are looking for doesn't exist!"
      };
    }

    return {
      title: "Our Achievements",
      description: res?.description || "Achievements",
      openGraph: {
        title: "Our Achievements",
        images: `/api/files${res?.cover}`
      }
    };
  } catch (e: any) {
    console.log(e);
    return {
      title: "not found",
      description: "The Page You are looking for doesn't exist!"
    };
  }
}

const Page = async ({ params }: { params: any }) => {
  const data = await getSole("achievements", params?.id);
  return (
    <main className="w-full min-h-screen pt-[80px]">
      <Image
        src={`/api/files${data?.cover}`}
        alt=""
        width={2000}
        height={2000}
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
      <div
        className="w-full p-[20px] flex flex-wrap-reverse justify-around"
        style={{ gap: "40px" }}
      >
        <div
          style={{
            width: "100%",
            minWidth: "350px",
            padding: "20px",
            fontSize: "20px",
            maxWidth: "1000px",
          }}
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
        <div
          className="flex flex-wrap gap-[20px] justify-around"
          style={{
            width: "50%",
            padding: "20px",
            fontSize: "20px",
            minWidth: "350px",
          }}
        >
          {data?.images?.map((item: string, index: number) => (
            <div
              key={index}
              style={{
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Image
                src={`/api/files${item}`}
                key={index}
                alt=""
                width={300}
                height={300}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
