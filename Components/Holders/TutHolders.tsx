"use client";
import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useState } from "react";
import Yt from "../Reusables/Yt";

const TutHolders = ({ oldData }: any) => {
  const [data, setData] = useState([...oldData]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (data?.length > 0  && index>0) {
      const handleScroll = async () => {
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight
        ) {
          const fetched = await getLists("tutorials", index, 12);
          if (fetched.length === 0) return;
          setIndex((prev) => prev + 1);
          setData((prev: any) => [...prev, ...fetched]);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [index, data.length]);
  return (
    <div
      className="w-full max-w-[1400px] flex flex-wrap justify-center "
      style={{ maxWidth: "1600px", margin: "0 auto", gap: "20px" }}
    >
      {Array.isArray(data) &&
        data?.map((item: any, index: number) => <Yt data={item} key={index} />)}
    </div>
  );
};

export default TutHolders;
