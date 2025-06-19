import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getSole } from "@/ApiRequest/GetData";
import Ads from "@/Components/AdvComps/Ads";
import DescriptionServ from "@/Components/ServPage/DescriptionServ";
import TopService from "@/Components/ServPage/TopService";
import React from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const res = await getSole("services", params?.id);
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
  const data: any = await getSole("services", params?.id);
  return (
    <main className="min-h-[100vh] pt-[80px]" style={{ paddingTop: "80px" }}>
      <AnalyticsRequester id={params?.id} />
      {/* top part */}
      <TopService title={data?.title} image={data?.image} />
      <Ads page={"services[id]"} index={1} />

      {/* description  */}
      <DescriptionServ des={data?.description} />
      <Ads page={"services[id]"} index={2} />

      {/* main content */}
      <div
        style={{
          maxWidth: "1000px",
          padding: "20px",
          width: "calc(100% - 40px)",
          fontSize: "18px",
          margin: "0 auto",
        }}
        dangerouslySetInnerHTML={{ __html: data?.content||"" }}
      ></div>
    </main>
  );
};

export default page;
