"use client";
import React, { useEffect, useState } from "react";
import { getLists } from "@/ApiRequest/GetData";
import Link from "next/link";

const NewsLoader = ({ data }) => {
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("news", index, 12);
        setIndex((prev) => prev + 1);
        setItems((prev) => [...prev, ...fetched]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);
  return (
    <section
      className="flex flex-wrap justify-evenly"
      style={{
        width: "100%",
        padding: "40px 20px",
        margin: "0 auto",
        gap: "40px",
      }}
    >
      <div
        className="w-full h-fit flex flex-col"
        style={{ maxWidth: "900px", gap: "20px", justifyContent: "center" }}
      >
        {items?.map((datas, idx) => (
          <div className="w-full flex flex-wrap justify-center" key={idx}>
            <div
              className="w-full max-w-[450px] bg-center bg-cover min-h-[200px]"
              style={{
                backgroundImage: `url("/api/files${datas?.image}")`,
              }}
            ></div>
            <div className="w-full max-w-[450px] h-fit p-[20px] text-white bg-red-400 bg-opacity-80">
              <h1
                className="w-full h-[80px] font-bold text-[30px] overflow-hidden"
                style={{ lineHeight: "40px" }}
              >
                {datas?.title}
              </h1>
              <p
                className="w-full h-[155px] overflow-hidden py-[10px] text-[16px]"
                style={{ height: "155px", lineHeight: "25px" }}
              >
                {datas?.description}
              </p>
              <br />
              <Link href={`/news/${datas?._id}`}>
                <button className="w-fit py-[5px] px-[20px] bg-blue-500 hover:bg-blue-600 text-white transition-all duration-[300] rounded-full text-[16px]">
                  Read News!
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsLoader;
