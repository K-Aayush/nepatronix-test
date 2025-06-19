"use server";
import Image from "next/image";
import Link from "next/link";
import { getSole } from "@/ApiRequest/GetData";
import React from "react";

const Ads = async ({ page, index }) => {
  const data = await getSole("ads", `${page}-${index}`);
  if (!data) return null;
  const horizontalStyle = {
    width: "100%",
    maxWidth: page === "home" ? "100%" : "1000px",
    margin: "0 auto",
    height: page === "home" ? "200px" : "150px",
    objectFit: "cover",
  };
  return (
    <Link
      href={data?.link}
      style={horizontalStyle}
    >
      <Image
        src={`/api/files${data?.banner}`}
        alt=""
        width={2000} // Adjust width for vertical
        height={250} // Adjust height for vertical
        style={horizontalStyle}
      />
    </Link>
  );
};

export default Ads;
