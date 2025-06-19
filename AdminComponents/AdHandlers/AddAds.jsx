"use client";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

const AddAds = () => {
  const [datas, setDatas] = useState({
    banner: null,
    index: 0,
    page: "",
    link: "",
  });
  const [banner, setBanner] = useState("");
  const handleImage = (e) => {
    const file = e?.target?.files[0];
    if (!file) return;
    setDatas((prev) => ({ ...prev, banner: file }));
    const newURL = URL.createObjectURL(file);
    setBanner(newURL);
  };
  const bannerRef = useRef(null);
  const handleSelection = (e) => {
    const { name, value } = e?.target;
    setDatas((prev) => ({ ...prev, [name]: value }));
    return;
  };

  const arrayOfPages = [
    "home",
    "services",
    "news",
    "blogs",
    "books",
    "gallery",
    "products",
    "products[id]",
    "services[id]",
    "events",
    "events[id]",
    "achievements",
    "achievements[id]",
    "blogs[id]",
    "news[id]",
  ];

  const handleSUbmit = async (e) => {
    e?.preventDefault();
    const { banner, index, page, link } = datas;
    if (!banner || !index || !page || !link) return alert("Enter All Fields!");
    const newForm = new FormData();
    newForm.append("banner", banner);
    newForm.append("index", index);
    newForm.append("page", page);
    newForm.append("link", link);
    const posted = await postAdminData(newForm, "ads");
    if (!posted) return alert("Advertisement Could Not Be Posted!");
    return window.location.reload();
  };

  return (
    <form
      onSubmit={handleSUbmit}
      className="w-full h-fit p-[20px] flex flex-wrap bg-white shadow-xl"
      style={{ gap: "20px" }}
    >
      <Image
        src={banner || "/api/files/variable/add.png"}
        width={1000}
        height={500}
        style={{
          width: "100%",
          height: "200px",
          objectFit: banner ? "cover" : "contain",
          backgroundColor: "#f2f2f2",
          cursor: "pointer",
        }}
        onClick={() => {
          bannerRef?.current?.click();
        }}
        alt=""
      />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImage}
        ref={bannerRef}
      />
      <input
        type="text"
        name="link"
        id=""
        className="w-full p-[10px] text-gray-800 border border-solid rounded-xl"
        style={{ maxWidth: "250px" }}
        value={datas?.link}
        onChange={(e) => {
          setDatas((prev) => ({ ...prev, link: e?.target?.value }));
        }}
        placeholder="Enter Link For Ad!"
      />
      <select
        name="page"
        className="w-full text-[14px] p-[10px] bg-gray-500"
        style={{ maxWidth: "200px" }}
        onChange={handleSelection}
        required
      >
        <optgroup className="p-[10px]">
          <option>Select Page</option>
          {arrayOfPages?.map((nameOfPage, ix) => (
            <option value={nameOfPage} key={ix}>
              {nameOfPage}
            </option>
          ))}
        </optgroup>
      </select>
      {datas?.page && (
        <select
          name="index"
          className="w-full text-[14px] p-[10px] bg-gray-500"
          style={{ maxWidth: "200px" }}
          onChange={handleSelection}
        >
          <optgroup className="p-[10px]">
            <option>Select Index</option>
            {Array.from(Array(datas?.page === "home" ? 7 : 2))?.map((_, ix) => (
              <option value={ix + 1} key={ix}>
                {ix + 1}
              </option>
            ))}
          </optgroup>
        </select>
      )}{" "}
      <button
        type="submit"
        className="w-fit p-[20px] bg-blue-500 text-[18px] text-white rounded-xl hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddAds;
