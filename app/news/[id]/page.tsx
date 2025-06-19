import { getSole } from "@/ApiRequest/GetData";
import TopBlog from "@/Components/BlogPage/TopBlog";
import DescriptionNews from "@/Components/news/DescriptionNews";
import React from "react";
import NewsAddiHolder from "@/Components/AddiHolders/NewsAddiHolder";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";

export async function generateMetadata({ params }: { params: any }) {
  try {
    const res = await getSole("news", params?.id);
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
  const data: any = await getSole("news", params?.id);
  return (
    <main className="min-h-[100vh] pt-[80px]" style={{ paddingTop: "80px" }}>
      <AnalyticsRequester id="" />
      {/* top part */}
      <TopBlog image={data?.image} />
      <br />
      {/* h1 */}
      <h1
        style={{
          width: "100%",
          padding: "20px",
          fontSize: "6rem",
          fontWeight: "600",
          maxWidth: "1000px",
          margin: "0 auto",
          color: "#303030",
          height: "fit-content",
          lineHeight: "70px",
        }}
      >
        {data?.title}
      </h1>
      <Ads page={"news[id]"} index={1} />
      {/* description  */}
      <DescriptionNews des={data?.description} />
      <Ads page={"news[id]"} index={2} />

      {/* main content */}
      <div
        style={{
          maxWidth: "1000px",
          padding: "20px",
          width: "calc(100% - 40px)",
          fontSize: "18px",
          margin: "0 auto",
        }}
        dangerouslySetInnerHTML={{ __html: `<div>${data?.content}</div>` }}
      ></div>
      <br />
      <br />
      <center>
        <NewsAddiHolder currId={data?._id} />
      </center>
      <br />
    </main>
  );
};

export default page;
