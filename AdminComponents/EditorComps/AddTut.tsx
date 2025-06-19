"use client";

import React, { useState } from "react";
import DesAdd from "./AddComps/DesAdd";
import Quill from "@/Quill/Quill";
import { postAdminData } from "@/ApiRequest/PostAdmin";
import AddTitle from "./AddComps/AddTitle";

const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [vdo, setVdo] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description || !vdo) return alert("Enter All Data");
    const newFormData: any = new FormData();

    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("content", content);
    newFormData.append("youtube", vdo);
    // map to images
    if (images?.length > 0) {
      const lengthOfArr = images.length;
      newFormData.append("images", lengthOfArr);
      for (let i = 0; i < lengthOfArr; i++) {
        newFormData.append(`images${i}`, images[i]);
      }
    }
    //post reqs
    const formReq: boolean = await postAdminData(newFormData, "tutorials");
    if (formReq) {
      alert("Blog Added Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <center>
        <input
          type="text"
          className="w-full p-[10px] text-[20px] border-2 text-slate-500 bg-2 rounded-xl mx-auto"
          placeholder="Enter Youtube Link"
          style={{ maxWidth: "960px", margin: "0 auto", border:"2px solid dimgray" }}
          required
          onChange={(e: any) => {
            setVdo(e?.target?.value);
          }}
          value={vdo}
        />
      </center>

      <AddTitle title={title} setTitle={setTitle} />
      <DesAdd description={description} setDescription={setDescription} />
      <Quill contentEdit={setContent} imagesEdit={setImages} />

      {/* submit data */}
      <center>
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

export default AddNewBlog;
