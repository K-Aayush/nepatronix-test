import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getSole } from "@/ApiRequest/GetData";
import Image from "next/image";
import React from "react";
import { FaBookOpen, FaCheck } from "react-icons/fa";

export async function generateMetadata({params}){
  try{

    const res = await getSole("courses", params?.id);;
    if(res?.length===0){
      return {
        title:"not found",
        description:"The Page You are looking for doesn't exists!"
      }
    }

    return({
      title:res?.title,
      description:res?.description,
      openGraph:{
        title: res?.title,
        images: `https://nepatronix.org/api/files${res?.icon}`
      }})

  }catch(e){
      console.log(e);
      return {
        title:"not found",
        description:"The Page You are looking for doesn't exists!"
      }
  }
}


const page = async ({ params }) => {
  const data = await getSole("courses", params?.id);
  console.log(data);
  return (
    <main className="min-h-screen pt-[40px]">
      <AnalyticsRequester id=""/>
      <section
        className="w-full h-fit bg-gray-800 flex flex-wrap px-[20px] py-[100px] justify-evenly"
        style={{ gap: "20px" }}
      >
        <Image
          src={`/api/files${data?.icon}`}
          width={400}
          height={400}
          alt=""
          style={{ width: "300px", height: "300px" }}
        />
        <div
          className="w-fit"
          style={{ minWidth: "340px", padding: "20px", maxWidth: "700px" }}
        >
          <h1
            className="w-full text-white font-semibold"
            style={{
              fontSize: "5rem",
              lineHeight: "5.8rem",
              textTransform: "Capitalized",
              padding: "10px 20px",
            }}
          >
            {data?.title}
          </h1>
          <p
            className="w-auto text-[18px] text-white custom-scrollbar custom-scroll2"
            style={{ height: "200px", overflowY: "scroll", padding: " 0 20px" }}
          >
            {data?.description}
          </p>
        </div>
      </section>
      <section
        className="w-full mx-auto"
        style={{
          padding: "20px",
          maxWidth: "1000px",
          margin: "35px auto",
          boxShadow: "0 0 5px #c2c2c2",
          borderRadius: "5px",
          background: "#fafafa",
        }}
      >
        <h1 className="text-[30px] text-gray-700 font-semibold">
          What You Will Learn
        </h1>
        <br />
        {data?.learn?.map((item, index) => (
          <span
            key={index}
            style={{ fontSize: "18px", gap: "15px", color: "gray" }}
            className="w-full flex py-[5px]"
          >
            <FaCheck
              style={{
                fontSize: "20px",
                marginTop: "5px",
                color: "black",
                border: "2px solid",
                borderRadius: "50%",
                padding: "3px",
              }}
            />
            {item}
          </span>
        ))}
      </section>
      <section
        className="w-full mx-auto"
        style={{
          padding: "20px",
          maxWidth: "1000px",
          margin: "35px auto",
          boxShadow: "0 0 5px #c2c2c2",
          borderRadius: "5px",
          background: "#fafafa",
        }}
      >
        <h1 className="text-[30px] text-gray-700 font-semibold">
          Syllabus
        </h1>
        <br />
        {data?.syllabus?.map((item, index) => (
          <span
            key={index}
            style={{ fontSize: "18px", gap: "15px", color: "gray" }}
            className="w-full flex py-[5px]"
          >
            <FaBookOpen
              style={{
                fontSize: "14px",
                color: "black",
                margin:"7.5px 0"
              }}
            />
            {item}
          </span>
        ))}
      </section>
      <br/>
    </main>
  );
};

export default page;
