"use client";
import Link from "next/link";
import React, { useState } from "react";

const Yt = ({ data }: { data: any }) => {
  const [auto, setAuto] = useState("?controls=0&modestbranding=1");
  const gen = (link: string) => {
    const replacedEmbed = link
      .split("watch?v=")
      .join("embed/")
      .split("&")[0];
    return `${replacedEmbed}${auto}`;
  };
  return (
    <Link
      href={`/tutorials/${data?.link || data?._id}`}
      onMouseOver={() => {
        setAuto("?autoplay=1");
      }}
      onMouseLeave={() => {
        setAuto("?controls=0&modestbranding=1");
      }}
      className="w-full relative max-w-[35rem] rounded-2xl bg-slate-100 p-[10px] transition-all duration-300 hover:bg-white hover:shadow-xl"
    >
      <iframe
        src={gen(data?.youtube)}
        className="rounded-xl"
        style={{ width: "100%", height: "20rem" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="p-[10px]">
        <h3 className="whitespace-nowrap overflow-hidden truncate w-full text-[22px] text-slate-700">
          {data?.title}
        </h3>
        <p className="w-full text-[18px] overflow-hidden h-[65px]">
          {data?.description?.split(" ").slice(0, 11).join(" ")}...
        </p>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0"></div>
    </Link>
  );
};

export default Yt;
