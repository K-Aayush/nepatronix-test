"use client";
import React, { useEffect, useState } from "react";
import { getLists } from "@/ApiRequest/GetData.ts";
import CourseCard from "./CourseCard";

const CourseHandler = ({ data }) => {
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getLists("courses", index, 12);
        setIndex((prev) => prev + 1);
        setItems((prev) => [...prev, ...fetched]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  return (
    <section
      className="w-full flex flex-wrap justify-center"
      style={{ gap: "20px" }}
    >
      {items?.map((item, idx) => (
        <CourseCard key={idx} data={item} />
      ))}
    </section>
  );
};

export default CourseHandler;
