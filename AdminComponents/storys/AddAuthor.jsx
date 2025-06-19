"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

const AddAuthor = ({ setProfile, setAuthor, author, profileImage }) => {
  const [profileBlob, setProfileBlob] = useState("");
  const ref = useRef(null);
  const handleImage = (e) => {
    const image = e?.target?.files[0];
    if (!image) return;
    setProfile(image);
    const blob = URL.createObjectURL(image);
    setProfileBlob(blob);
  };
  return (
    <div
      className="w-full mx-auto flex flex-wrap justify-center gap-[20px] rounded-xl bg-slate-200"
      style={{ maxWidth: "600px", background: "#ededed", padding: "20px" }}
    >
      <Image
        src={profileBlob || profileImage || `/api/files/variable/add.png`}
        width={300}
        height={300}
        className="w-full max-w-[200px] h-[200px]"
        onClick={() => {
          ref?.current?.click();
        }}
      />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={ref}
        onChange={handleImage}
      />
      <input
        type="text"
        required
        placeholder="Enter Your Name"
        className="w-[300px] p-[10px] my-[20px] h-fit text-[18px] border border-black rounded-xl"
        style={{ margin: "20px 0", border: "2px solid dimgray" }}
        onChange={(e) => {
          setAuthor(e?.target?.value);
        }}
        value={author}
      />
    </div>
  );
};

export default AddAuthor;
