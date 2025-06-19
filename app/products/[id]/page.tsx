import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getSole } from "@/ApiRequest/GetData";
import Ads from "@/Components/AdvComps/Ads";
import LinkingBack from "@/Components/Reusables/LinkingBack";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const res = await getSole("products", params?.id);
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
  const data: any = await getSole("products", params?.id);

  return (
    <main
      className="min-h-[100vh] pt-[80px]"
      style={{ paddingTop: "80px", background: "aliceblue" }}
    >
      <AnalyticsRequester id={params?.id} />
      <section
        className="w-full"
        style={{ maxWidth: "1000px", padding: "20px 20px", margin: "0 auto" }}
      >
        {/* back to products */}
        <LinkingBack link="/products" text="Back To Products" />
        <br />
        <br />
        <Image
          src={`/api/files${data?.image}`}
          alt=""
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />

        <br />

        <div
          className=""
          style={{
            width: "100%",
            fontSize: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              lineHeight: "50px",
              fontWeight: "600",
            }}
          >
            {data?.title}
          </h1>
          <Ads page={"products[id]"} index={1} />
          <p>{data?.description}</p>
        </div>

        <Ads page={"products[id]"} index={1} />
        <div
          style={{ fontSize: "20px", paddingTop: "50px" }}
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
      </section>
    </main>
  );
};

export default page;
