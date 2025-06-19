"use client";
import { getComments } from "@/ApiRequest/GetData";
import { postComment, postData } from "@/ApiRequest/PostReqs";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Comment = ({ type, id }) => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const [comment, setComment] = useState({
    name: "",
    comment: "",
    type,
    id,
  });

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

  const handleText = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setData((prev) => [comment, ...prev]);
    const success = await postComment(comment, "comment", type);
    if (!success) return alert("Could not add comment!");
    setComment((prev) => ({ ...prev, name: "", comment: "" }));
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
      <h4 style={{ fontSize: "30px", fontWeight: 600 }}>Comments</h4>
      <br />
      <form className="w-full relative" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="w-full p-[10px] text-[18px] border-2"
          placeholder="Enter Your Name"
          value={comment?.name}
          onChange={handleText}
          required
        />
        <br />
        <br />
        <textarea
          name="comment"
          className="w-full p-[10px] text-[18px] border-2 resize-none"
          style={{ height: "100px" }}
          value={comment?.comment}
          placeholder="Write Your comment here"
          onChange={handleText}
        />
        <button
          type="submit"
          className="absolute bottom-[30px] right-[20px] text-[25px] text-blue-400 hover:text-blue-500 transition-all duration-300"
          required
        >
          <IoSend />
        </button>
      </form>
      <br />
      <hr />
      <br />
      <div
        className="w-full flex flex-col"
        style={{ fontSize: "16px", color: "dimgray", gap: "20px" }}
      >
        {data?.map((item, index) => (
          <div key={index} className="bg-gray-50 p-[20px] rounded-xl shadow-lg">
            <h5 className="font-semibold flex">
              <FaUserAlt style={{ margin: "7.5px" }} />
              {item?.name}
            </h5>
            <p>
              {item?.comment}</p>
              <h5 className="font-semibold mt-[10px]">Replies:</h5>
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
        ))}
      </div>
    </div>
  );
};

export default Comment;
