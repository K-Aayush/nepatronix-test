"use client";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import Image from "next/image";
import React, { useRef, useState } from "react";

const NewClients = () => {
  const [blob, setBlob] = useState("");
  const [image, setImage] = useState();

  const ref = useRef(null)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!image || !blob) return;
    const newForm = new FormData();
    newForm.append("image", image);
    const posted = await postAdminData(newForm, "clients");
    if(!posted) return alert("Not Added");
    return window.location.reload()
  }

  return (
    <form
    onSubmit={handleSubmit}
      className="w-fit flex mx-auto p-[20px] rounded-xl shadow-xl bg-white"
      style={{ maxWidth: "500px", gap:"20px" }}
    >
      <input type="file" name="" id="" ref={ref} className="hidden" onChange={(e)=>{
        const file= e?.target?.files[0];
        if(!file) return
        setImage(file);
        const url = URL.createObjectURL(file);
        setBlob(url)
      }}/>
      <Image
        src={blob || "/relativeImages/add.png"}
        width={100}
        height={100}
        className="object-contain"
        alt=""
        accept="image/png"
        style={{ width: "100px", height: "100px" }}
        onClick={() => {
          ref.current.click();
        }}
      />
      <br />
      <button type="submit" className="py-[5px] px-[20px] text-[16px] bg-blue-500 rounded-xl text-white">
        Submit
      </button>
    </form>
  );
};

export default NewClients;
