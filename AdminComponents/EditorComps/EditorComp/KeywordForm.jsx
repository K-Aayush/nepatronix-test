"use client";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import React, { useState } from "react";

const KeywordForm = ({ data }) => {
  const [key, setKey] = useState(data?.join(","));

  const handleAddKey = async (e) => {
    setKey(e?.target?.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const keyWords = key?.split(",");
    const res = await postAdminData(
      JSON.stringify({ keyword: keyWords }),
      "seo"
    );
    if (res) return alert("Keywords added successfully!");
    else alert("Failed To Add!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit p-[40px] mx-auto my-[40px] shadow-2xl rounded-xl flex flex-col bg-white"
      style={{
        maxWidth: "1800px",
        gap: "20px",
        margin: "80px auto",
        overflow: "hidden",
      }}
    >
      <div className="w-full text-[30px] text-gray-800 rounded-full p-0" >
        <h1>Enter Meta Keywords!</h1>
        <br />
        <textarea
          name=""
          id=""
          value={key}
          onChange={handleAddKey}
          className="w-full h-[500px] overflow-y-scroll text-[8px] resize-none p-[5px] border-2 text-gray-700 custom-scroll"
          style={{ height: "500px", fontSize:"11px", lineHeight:"20px", padding:"5px" }}
        />
        <br />
        <br />
        <button className="bg-blue-500 text-white p-[10px] w-full rounded-xl text-[20px]">
          Submit
        </button>
      </div>
    </form>
  );
};

export default KeywordForm;
