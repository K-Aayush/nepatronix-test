"use client";
import { getLikes } from "@/ApiRequest/GetData";
import React, { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

const Like = ({ likes, type, id }) => {
  const [liked, setLiked] = useState(false);
  const [like, setLike] = useState(likes);

  const handleLike = async(e)=>{
    e.preventDefault();
    setLiked(true);
    setLike((prev)=> prev+1);
    await getLikes(type, id)
  }

  return (
    <form
      className="w-full relative min-h-[100px] p-[20px]"
      type={"submit"} onSubmit={handleLike}
      style={{ maxWidth: "1000px", margin: "0 auto", fontSize:"16px" }}
    >
      <button className="p-[10px] text-[30px]" disabled={liked}>
        {liked ? (
          <span className="flex" style={{ gap: "20px" }}>
            <FaThumbsUp />
            Liked!
          </span>
        ) : (
          <FaRegThumbsUp />
        )}
      </button>
      <br/><br/>
      Total likes : {like}
    </form>
  );
};

export default Like;
