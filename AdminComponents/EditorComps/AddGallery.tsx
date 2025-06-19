"use client";

import React, { useRef, useState } from "react";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import Image from "next/image";

const AddGallery = () => {
  const [image, setImage] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [blob, setBlob] = useState<string[]>([]);

  const imgRef = useRef<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!image || !title) return alert("Enter All Data");
    const newFormData: any = new FormData();

    for (const [index, value] of image.entries()) {
      newFormData.append(`image${index}`, value);
    }
    newFormData.append("description", title);
    newFormData.append("images", image?.length);
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "gallery");
    if (formReq) {
      alert("Image Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  const handleImage = async (e: any) => {
    const file: File[] = e?.target?.files;
    if (!file || file?.length < 1) return;
    setImage((prev: any) => [...prev, ...file]);
    const newBlobs: string[] = [];
    for (let item of file) {
      const newUri = URL.createObjectURL(item);
      newBlobs.push(newUri);
    }
    setBlob((prev: string[]) => [...prev, ...newBlobs]);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div
        className="w-full p-[10px] flex flex-wrap gap-[10px] "
        style={{ maxWidth: "660px", gap: "20px", margin: "0 auto" }}
      >
        {blob?.map((item: string, index: number) => (
          <Image
            src={item || "/relativeImages/add.png"}
            style={{ margin: "0 auto", cursor: "pointer" }}
            alt=""
            width={200}
            height={200}
            key={index}
          />
        ))}
      </div>

      <br />
      <br />
      <center>
        <button
          type="button"
          onClick={() => {
            imgRef?.current?.click();
          }}
          className="p-[15px] text-[18px] text-white mx-auto"
          style={{
            background: "#3495eb",
            maxWidth: "1000px",
            color: "white",
            padding: "10px",
            fontSize: "20px",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        >
          Choose Images
        </button>
      </center>
      <input
        type="file"
        onChange={handleImage}
        ref={imgRef}
        accept="image/**"
        style={{ display: "none" }}
        multiple={true}
      />
      <br />
      <br />
      <center>
        <textarea
          value={title}
          onChange={(e: any) => {
            setTitle(e?.target?.value);
          }}
          className="rounded-2xl resize-none"
          style={{
            width: "100%",
            height: "500px",
            maxWidth: "800px",
            margin: " 0 auto",
            padding: "10px",
            fontSize: "20px",
            border: "2px solid gray",
          }}
          placeholder="Enter Title Of Image"
        />

        <br />
        <button
          type="submit"
          className="w-full bg-blue-400 hover:shadow-xl transition-all duration-300"
          style={{
            background: "#3495eb",
            maxWidth: "1000px",
            color: "white",
            padding: "10px",
            fontSize: "20px",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        >
          Upload
        </button>
      </center>
    </form>
  );
};

export default AddGallery;
