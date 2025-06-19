import Image from "next/image";
import React from "react";
import ThemeButton2 from "./ThemeButton2";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const formatNumber = (number: number) => {
  if (number < 1000) return number;
  if (number < 10000) return (number / 1000).toFixed(1) + "k";
  if (number < 1000000) return Math.floor(number / 1000) + "k";
  if (number < 10000000) return (number / 1000000).toFixed(1) + "m";
  if (number < 1000000000) return Math.floor(number / 1000000) + "m";
  return Math.floor(number / 1000000000) + "b";
};

const StoryCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full max-w-[350px] min-h-[550px] relative">
      <div className="absolute p-[25px] w-full h-full transition-all duration-500 bg-white cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 rounded-2xl">
        <Image
          src={`/api/files${data?.image}`}
          alt={data?.title}
          width={400}
          loading="lazy"
          height={400}
          className="h-[150px] object-cover"
        />
        <br />

        <h3 className="font-bold text-[20px] overflow-hidden h-[60px]">{data?.title.split("")?.slice(0, 40)?.join("")}...</h3>
        <p
          className="pt-5 text-[16px]"
          style={{ height: "100px", overflow: "hidden" }}
        >
          {data.description?.split("")?.slice(0, 100)?.join("")}....
        </p>
        <br />
        <div className="w-full flex justify-evenly">
          <span style={{ fontSize: "14px", display: "flex" }}>
            <FaEye style={{ margin: "7.5px" }} />
            {formatNumber(data?.views)}
          </span>
          <span style={{ fontSize: "14px", display: "flex" }}>
            <FaMessage style={{ margin: "7.5px" }} />
            {Array.isArray(data?.comments) || !data?.comments
              ? 0
              : formatNumber(data?.comments)}
          </span>
          <span style={{ fontSize: "14px", display: "flex" }}>
            <FaThumbsUp style={{ margin: "7.5px" }} />
            {formatNumber(data?.likes)}
          </span>
        </div>

        <div
          className="hidden"
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        ></div>
        <ThemeButton2
          link={`/stories/${data?.link||data?._id}`}
          text="Read Blog"
          style={{
            position: "absolute",
            left: "15px",
            right: "15px",
            bottom: "15px",
          }}
        />
      </div>
    </div>
  );
};

export default StoryCard;
