"use client";
import { postAdminData, putAdmin } from "@/ApiRequest/PostAdmin";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AddNewTeam = () => {
  const [user, setUser] = useState({});
  const [blob, setBlob] = useState("");

  const handleText = (e) => {
    const { name, value } = e?.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const imageRef = useRef(null);

  const handleImage = (e) => {
    const image = e?.target?.files[0];
    if (!image) return;
    setUser((prev) => ({ ...prev, picture: image }));
    const newUrl = URL.createObjectURL(image);
    setBlob(newUrl);
  };

  const handleLinks = (e) => {
    const { name } = e?.target;
    const value = window.prompt(user?.[name] || `Enter ${name} link`);
    if (!value) return;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user?.[key]);
    }
    const edited = await postAdminData(formData, "teams");
    if (!edited) return alert("Unsuccessful To Edit!");
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-wrap-reverse bg-gray-100 justify-evenly"
      style={{ gap: "20px", padding: "0", borderBottom:"3px solid darkgray" }}
    >
      <div className="w-1/2 p-[20px] py-[100px] min-w-[350px]">
        <input
          name="title"
          className="font-bold text-gray-800 bg-gray-100"
          style={{ fontSize: "5rem" }}
          value={user?.title}
          onChange={handleText}
          placeholder="Enter Title"
        />

        <br />
        <input
          name="profession"
          className="font-bold text-blue-500 my-[20px] bg-gray-100"
          style={{ fontSize: "4rem", margin: "20px 0" }}
          value={user?.profession}
          onChange={handleText}
          placeholder="Enter Profession"
        />
        <br />
        <br />
        <textarea
          name="about"
          value={user?.about}
          onChange={handleText}
          className="w-full h-[200px] text-gray-600 bg-gray-100"
          placeholder="Enter about details!"
          style={{
            height: "200px",
            fontSize: "22px",
            color: "dimgray",
          }}
        />
        <br />
        <div className="flex flex-wrap" style={{ gap: "20px" }}>
          <button
            name="portfolio"
            type="button"
            className="text-[18px] bg-red-400 p-[10px] border-2 border-red-400 text-white font-semibold rounded-3xl"
            style={{ borderColor: "rgb(248 113 113)" }}
            onClick={handleLinks}
          >
            Visit Full Page
          </button>
          <button
            name="resume"
            type="button"
            className="text-[18px] bg-white p-[10px] text-red-400 border-2 border-red-400 font-semibold rounded-3xl"
            style={{ borderColor: "rgb(248 113 113)" }}
            onClick={handleLinks}
          >
            View Resume
          </button>
        </div>
        <div
          className="flex flex-wrap"
          style={{ gap: "15px", padding: "75px 0 0 0" }}
        >
          <button
            name="facebook"
            type="button"
            className="w-fit p-[10px] text-[18px] text-white bg-blue-500 rounded-full"
            onClick={handleLinks}
          >
            <FaFacebookF />
          </button>
          <button
            name="instagram"
            type="button"
            className="w-fit p-[10px] text-[18px] text-white bg-blue-500 rounded-full"
            onClick={handleLinks}
          >
            <FaInstagram />
          </button>
          <button
            name="linkedin"
            type="button"
            className="w-fit p-[10px] text-[18px] text-white bg-blue-500 rounded-full"
            onClick={handleLinks}
          >
            <FaLinkedinIn />
          </button>
        </div>
        <br />
        <br />
        <div className="w-full flex" style={{ gap: "20px" }}>
          <button
            button="submit"
            className="w-fit bg-blue-500 text-white rounded-xl"
            style={{ padding: "10px", fontSize: "18px" }}
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Image
          src={blob || `/relativeImages/add.png`}
          width={1000}
          height={1000}
          className="bg-red-400"
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "fit",
            minWidth: "350px",
            objectFit: "contain",
            objectPosition: "center",
            borderRadius: "50%",
          }}
          onClick={() => {
            imageRef?.current?.click();
          }}
          alt=""
        />

        <input
          type="file"
          className="hidden"
          accept="image/png"
          onChange={handleImage}
          ref={imageRef}
        />
      </div>
    </form>
  );
};

export default AddNewTeam;
