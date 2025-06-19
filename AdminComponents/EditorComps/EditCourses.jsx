"use client";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";

const EditCourses = ({oldItem}) => {
  const [data, setData] = useState(oldItem);
  const [blob, setBlob] = useState("");
  const [newLearn, setNewLearn] = useState("");
  const [newSyllabus, setNewSyllabus] = useState("");

  const handleText = (e) => {
    const { name, value } = e?.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const imgRef = useRef(null);

  const handleLearnAdd = () => {
    if (!newLearn) return;
    const LearnArray = [...data?.learn];
    LearnArray.push(newLearn);
    setData((prev) => ({ ...prev, learn: LearnArray }));
    setNewLearn("");
  };
  const handleSyllabusAdd = () => {
    if (!newSyllabus) return;
    const LearnArray = [...data?.syllabus];
    LearnArray.push(newSyllabus);
    setData((prev) => ({ ...prev, syllabus: LearnArray }));
    setNewSyllabus("");
  };

  const handleDeleteList = (index, keyName) => {
    const newList = [...data?.[keyName]];
    newList.splice(index, 1);
    setData((prev) => ({ ...prev, [keyName]: newList }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !data?.icon ||
      data?.learn?.length === 0 ||
      data?.syllabus?.length === 0
    ) {
      return alert("Enter all Data!");
    }
    const newFormData = new FormData();
    for (const key in data) {
      newFormData.append(
        key,
        key === "learn" || key === "syllabus"
          ? JSON.stringify(data?.[key])
          : data?.[key]
      );
    }

    //post reqs
    const formReq = await putAdmin(newFormData, "courses", data?._id);
    if (formReq) {
      alert("Course Edited Successfully!");
      return window.location.reload();
    } else {
      return alert("Failed to add Data!");
    }
  };
  return (
    <form className="w-full p-0 m-0" onSubmit={handleSubmit}>
      <div
        className="w-full py-[100px] flex flex-wrap justify-evenly px-[20px] bg-gray-800"
        style={{ gap: "20px" }}
      >
        <Image
          className="cursor-pointer bg-white rounded-3xl"
          src={blob || `/api/files${data?.icon}`}
          width={300}
          height={300}
          alt=""
          onClick={() => {
            imgRef?.current?.click();
          }}
        />
        <div className="w-fit" style={{ minWidth: "300px" }}>
          <input
            name="title"
            className="p-[10px] text-white"
            value={data?.title}
            placeholder="Enter Title"
            style={{ fontSize: "5rem", background: "transparent" }}
            required
            onChange={handleText}
          />
          <br />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e?.target?.files[0];
              if (!file) return;
              setData((prev) => ({ ...prev, icon: file }));
              const url = URL.createObjectURL(file);
              setBlob(url);
            }}
            ref={imgRef}
          />
          <textarea
            name="description"
            className="p-[10px] text-white w-full h-[150px]"
            value={data?.description}
            placeholder="Enter subtitle resize-none"
            style={{
              fontSize: "2rem",
              background: "transparent",
              resize: "none",
            }}
            required
            onChange={handleText}
          />
        </div>
      </div>
      <br />
      <br />
      <div
        className="w-full p-[40px] rounded-lg"
        style={{
          margin: "20px auto",
          maxWidth: "960px",
          border: "1px solid dimgray",
        }}
      >
        <h2 className="text-[25px] font-semibold text-gray-800">
          What you will learn
        </h2>
        <br />
        <div className="w-full flex">
          <input
            value={newLearn}
            onChange={(e) => {
              setNewLearn(e?.target?.value);
            }}
            type="text"
            className="w-full border border-gray-800 p-[10px] text-[18px]"
            placeholder="Enter New Things Client will learn"
          />
          <button
            type="button"
            className="bg-blue-500 text-white text-[30px] font-bold px-[20px]"
            onClick={handleLearnAdd}
          >
            +
          </button>
        </div>
        <br />
        {data?.learn?.map((item, index) => (
          <div className="w-full flex my-[10px]">
            <span
              className="w-full flex flex-col justify-center p-0 text-[18px]  border px-[10px]"
              key={index}
            >
              {item}
            </span>
            <button
            type="button"
              className="w-fit p-[10px] bg-red-400 text-white text-[18px]"
              onClick={() => {
                handleDeleteList(index, "learn");
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div
        className="w-full p-[40px] rounded-lg"
        style={{
          margin: "20px auto",
          maxWidth: "960px",
          border: "1px solid dimgray",
        }}
      >
        <h2 className="text-[25px] font-semibold text-gray-800">Syllabus</h2>
        <br />
        <div className="w-full flex">
          <input
            value={newSyllabus}
            onChange={(e) => {
              setNewSyllabus(e?.target?.value);
            }}
            type="text"
            className="w-full border border-gray-800 p-[10px] text-[18px]"
            placeholder="Enter Syllabus"
          />
          <button
            type="button"
            className="bg-blue-500 text-white text-[30px] font-bold px-[20px]"
            onClick={handleSyllabusAdd}
          >
            +
          </button>
        </div>
        <br />
        {data?.syllabus?.map((item, index) => (
          <div className="w-full flex my-[10px]">
            <span
              className="w-full flex flex-col justify-center p-0 text-[18px]  border px-[10px]"
              key={index}
            >
              {item}
            </span>
            <button
            type="button"
              className="w-fit p-[10px] bg-red-400 text-white text-[18px]"
              onClick={() => {
                handleDeleteList(index, "syllabus");
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <center>
        <button
          type="submit"
          className="w-full p-[10px] bg-blue-500 text-white font-semibold text-[18px] mx-auto rounded-2xl"
          style={{ maxWidth: "960px", margin: "0 auto" }}
        >
          Submit
        </button>
      </center>
      <br />
      <br />
    </form>
  );
};

export default EditCourses;
