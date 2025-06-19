import { getSole } from "@/ApiRequest/GetData";
import DescriptionBlog from "@/Components/BlogPage/DescriptionBlog";
import TopBlog from "@/Components/BlogPage/TopBlog";
import React from "react";
import Comment from "@/Components/Comment/Comment.jsx";
import BlogAddiHolder from "@/Components/AddiHolders/BlogAddiHolders";
import Like from "@/Components/Like/Like.jsx";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";

export async function generateMetadata({ params }: { params: any }) {
  try {
    const res = await getSole("blogs", params?.id);
    if (!res) {
      return {
        title: "not found",
        description: "The Page You are looking for doesn't exists!",
      };
    }

    return {
      title: res?.title || "Our Blogs",
      description: res?.description || "Our Blogs",
      openGraph: {
        title: res?.title || "Our Blogs",
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

const domain = process.env.NEXT_APP_BACKEND;

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("blogs", params?.id);
  if (data) {
    const res = await fetch(`${domain}/api/v1/blogs/more`, {
      cache: "no-store",
      method: "PUT",
      headers: {
        currentId: data?._id,
      },
      body: "{}",
    });
    if (!res.ok) return;
  }
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
      
      <Ads page={"blogs[id]"} index={1}/>


      {/* description  */}
      <DescriptionBlog des={data?.description} />

      <Ads page={"blogs[id]"} index={2}/>

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
      <Like likes={data?.likes} type={"blogs"} id={data?._id} />
      <center>
        <BlogAddiHolder currId={data?._id} />
      </center>
      <Comment type={"blogs"} id={data?._id} />
    </main>
  );
};

export default page;
