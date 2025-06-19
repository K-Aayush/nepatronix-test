import { getSole } from "@/ApiRequest/GetData";
import React from "react";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import LinkingBack from "@/Components/Reusables/LinkingBack";

export async function generateMetadata({ params }: { params: any }) {
  try {
    const res = await getSole("tutorials", params?.id);
    if (!res) {
      return {
        title: "not found",
        description: "The Page You are looking for doesn't exists!",
      };
    }

    return {
      title: res?.title || "Our Tutorials",
      description: res?.description || "Our Tutorials",
      openGraph: {
        title: res?.title || "Our Blogs",
        images: `${res?.youtube}`,
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
  const data: any = await getSole("tutorials", params?.id);
  const gen = (link: string) => {
    const replacedEmbed = link
      .split("watch?v=")
      .join("embed/")
      .split("&")[0];
    return `${replacedEmbed}?autoplay=1`;
  };
  console.log(data);
  return (
    <main className="min-h-screen" style={{ paddingTop: "50px" }}>
      <AnalyticsRequester id="" />
      <br />
      <iframe
        src={gen(data?.youtube) || "/"}
        className="h-[350px]  md:h-[400px] lg:h-[600px] xl:h-[800px]"
        style={{ width: "100%" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
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

      {/* description  */}
      <section className="w-full text-[12px] max-w-[calc(1000px-40px)] py-[10px] px-[20px]  mx-auto">
        <LinkingBack link="/tutorials" text="Back To Tutorials" />
        <br />
        <br />

        <p className="text-5xl">{data?.description}</p>
      </section>
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
    </main>
  );
};

export default page;
