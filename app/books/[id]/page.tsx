import { getSole } from "@/ApiRequest/GetData";
import React from "react";
import BookAddiHolder from "@/Components/AddiHolders/BookAddiHolder";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";

export async function generateMetadata({ params }: { params: any }) {
  try {
    const res = await getSole("books", params?.id);
    if (res?.length === 0) {
      return {
        title: "not found",
        description: "The Page You are looking for doesn't exists!",
      };
    }

    return {
      title: res?.title,
      description: res?.description,
      openGraph: {
        title: res?.title,
        images: `https://nepatronix.org/api/files${res?.image}`,
      },
    };
  } catch (e: any) {
    console.log(e);
    return {
      title: "not found",
      description: "The Page You are looking for doesn't exists!",
    };
  }
}

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("books", params?.id);
  return (
    <main className="w-full">
      <AnalyticsRequester id="" />
      <div
        className="w-full relative min-h-screen pt-[80px]"
        style={{ minHeight: "100vh", paddingTop: "80px", position: "relative" }}
      >
        <embed
          src={`/api/files${data?.content}`}
          type=""
          style={{
            width: "100%",
            height: "calc(100% - 80px)",
            position: "absolute",
          }}
        />
      </div>

      <br />
      <br />
      <center>
        <BookAddiHolder currId={data?._id} />
      </center>
      <br />
    </main>
  );
};

export default page;
