"use client";
import { DelData } from "@/ApiRequest/DeleteReqs";
import { getComments } from "@/ApiRequest/GetData";
import { replyPut } from "@/ApiRequest/PostAdmin";
import React, { useEffect, useState } from "react";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const AdminComment = ({ type, id }) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getComments(type, id, 0);
      if (newData && newData?.length > 0) {
        setData(newData);
        setIndex(1);
      }
    };
    if (data.length === 0) {
      fetchData();
    }

    const handleScroll = async () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        const fetched = await getComments(type, id, index);
        if (!fetched || fetched.length === 0) return;
        setIndex((prev) => prev + 1);
        setData((prev) => [...prev, ...fetched]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [type, id, data.length, index]);

  const submitText = async (e, index) => {
    e.preventDefault();
    const val = e.target.elements.replies.value;
    const comments = [...data];
    const newMessage = { ...data[index] };
    const replyOn = [...(newMessage?.reply || [])];
    replyOn.unshift(val);
    newMessage.reply = replyOn;
    comments.splice(index, 1, newMessage);
    setData(comments);
    const replied = await replyPut(newMessage, newMessage?._id);
    e.target.elements.replies.value = "";
    if (!replied) return alert("Could not add a reply!");
  };

  const handleDelete = async (id) => {
    const del = await DelData("comment", id);
    if (del) return window.location.reload();
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <hr />
      <br />
      <h1 style={{ fontSize: "30px", fontWeight: 600 }}>Comments</h1>
      <br />
      <div
        className="w-full flex flex-col"
        style={{ fontSize: "16px", color: "dimgray", gap: "20px" }}
      >
        {data?.map((item, index) => (
          <form
            key={index}
            className="bg-gray-50 p-[20px] rounded-xl shadow-lg"
            onSubmit={(e) => submitText(e, index)}
          >
            <h1 className="font-semibold flex">
              <FaUserAlt style={{ margin: "7.5px" }} />
              {item?.name}
            </h1>
            <p>{item?.comment}</p>
            <br />
            <div className="w-full flex flex-wrap" style={{ gap: "20px" }}>
              <button
                className="w-fit h-fit p-[10px] bg-red-400 hover:bg-red-500 transition-all duration-300 rounded-2xl"
                type="button"
                style={{ fontSize: "18px", padding: "10px", color: "white" }}
                onClick={() => handleDelete(item?._id)}
              >
                <FaTrash />
              </button>
              <textarea
                name="replies"
                id="replies"
                className="border-2"
                placeholder="Add a reply"
                style={{ padding: "10px", width: "400px", resize: "none" }}
                required
              />
            </div>
            <button
              type="submit"
              className="p-[10px] text-[14px] rounded-xl text-white bg-blue-500 flex hover:bg-blue-400 transition-all duration-300"
              style={{ gap: "0px", margin: "15px 60px", padding: "5px 30px" }}
            >
              Send <IoSend style={{ margin: "7px" }} />
            </button>
            <div
              className="w-full flex-wrap flex-col "
              style={{ padding: "10px 60px", display: "flex", gap: "20px" }}
            >
              {Array.isArray(item?.reply) &&
                item?.reply?.map((list, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 w-full rounded-xl shadow-md"
                    style={{ padding: "10px" }}
                  >
                    {list}
                  </div>
                ))}
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default AdminComment;
