"use client";
import { DelData } from "@/ApiRequest/DeleteReqs";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";

const AdsDeleteCard = ({ data }) => {
  const handleDel = async () => {
    const confirmed = window.confirm("Delete This Ads!");
    if (!confirmed) return;
    const deleted = await DelData("ads", data?._id);
    if (deleted) return window.location.reload();
  };
  return (
    <div className="relative w-full h-[200px] flex" style={{ height: "200px" }}>
      <Image
        src={`/api/files${data?.banner}`}
        width={1000}
        height={1000}
        className="w-full h-[200px] bg-white shadow-xl"
        style={{ objectFit: "cover" }}
      />
      <button
        onClick={handleDel}
        className="w-fit p-[10px] bg-red-400 text-white text-[20px] transition-all duration-300 hover:bg-red-500"
      >
        <FaTrash />
      </button>
      <div
        className="text-left w-[250px] text-white font-medium h-full left-0 absolute bg-black bg-opacity-80"
        style={{
          width: "250px",
          height: "100%",
          padding: "10px",
          position: "absolute",
          fontSize:"22px"
        }}
      >
        <h1>Page : {data?.page}</h1>
        <h1>Index : {data?.index}</h1>
      </div>
    </div>
  );
};

export default AdsDeleteCard;
