import Image from "next/image";
import React from "react";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import ThemeButton2 from "../Reusables/ThemeButton2";
const url = process.env.NEXT_APP_BACKEND;

const BlogAddiHolders = async ({ currId }) => {
  const res = await fetch(`${url}/api/v1/blogs/more`, {
    cache: "no-store",
    method: "GET",
    headers: {
      currentId: currId,
    },
  });
  const item = await res.json();

  const formatNumber = (number) => {
    if (number < 1000) return number;
    if (number < 10000) return (number / 1000).toFixed(1) + "k";
    if (number < 1000000) return Math.floor(number / 1000) + "k";
    if (number < 10000000) return (number / 1000000).toFixed(1) + "m";
    if (number < 1000000000) return Math.floor(number / 1000000) + "m";
    return Math.floor(number / 1000000000) + "b";
  };
  return (
    <div
      className="w-full flex flex-wrap justify-center px-[20px] py-[40px] rounded-xl"
      style={{ gap: "20px", maxWidth: "1000px", justifyContent: "center" }}
    >
      <h2 className="w-full pb-[10px] font-semibold text-[3rem] text-gray-800">
        Read More Blogs!
      </h2>
      {Array.isArray(item) &&
        item?.map((data, index) => (
          <div
            className="w-full max-w-[200px] min-h-[350px] relative"
            key={index}
          >
            <div className="absolute p-[10px] w-full h-full transition-all duration-500 bg-white cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 rounded-2xl">
              <Image
                src={`/api/files${data?.image}`}
                alt=""
                width={400}
                height={400}
                className="h-[100px] object-cover"
              />
              <h3 className="font-bold text-[16px] h-[20px] overflow-hidden whitespace-nowrap truncate">{data?.title}</h3>
              <p
                className="pt-0 text-[11px]"
                style={{ height: "70px", overflow: "hidden" }}
              >
                {data.description}
              </p>
              <br />
              <div className="w-full flex justify-evenly">
                <span style={{ fontSize: "11px", display: "flex" }}>
                  <FaEye style={{ margin: "8px 3px" }} />
                  {formatNumber(data?.views)}
                </span>
                <span style={{ fontSize: "11px", display: "flex" }}>
                  <FaMessage style={{ margin: "8px 3px" }} />
                  {Array.isArray(data?.comments) || !data?.comments
                    ? 0
                    : formatNumber(data?.comments)}
                </span>
                <span style={{ fontSize: "11px", display: "flex" }}>
                  <FaThumbsUp style={{ margin: "8px 3px" }} />
                  {formatNumber(data?.likes)}
                </span>
              </div>
          
              <ThemeButton2
                link={`/blogs/${data?.link||data?._id}`}
                text="Read Blog"
                style={{
                  position: "absolute",
                  left: "15px",
                  right: "15px",
                  bottom: "15px",
                  fontSize:"12px",
                  padding:"2.5px"
                }}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogAddiHolders;
