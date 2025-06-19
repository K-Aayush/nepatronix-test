import Image from "next/image";
import React from "react";
import LinkData from "./LinkData";

const EventCard = ({ data, link }: { data: any, link:string }) => {
  return (
    <div className="w-full py-[60px]">
      <Image
        src={`/api/files${data?.cover}`}
        width={1600}
        height={1600}
        loading="lazy"
        style={{ width: "100%", height: "350px", objectFit: "cover" }}
        alt={data?.title}
      />
      <br />
      <div className="w-full flex flex-wrap text-left justify-between shadow-xl">
        <div style={{ width: "calc(50% - 40px)", minWidth: "350px" }}>
          <div
            className="contentEvents"
            style={{
              width: "100%",
              height: "180px",
              overflow: "hidden",
              textAlign: "left",
              fontSize: "20px",
              padding:"30px 20px"
            }}
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
          <br/>
          <LinkData link={`/${link}/${data?.link||data?._id}`}>
            <button className="w-fit p-[10px] text-[20px] rounded-xl text-white bg-blue-500 mx-[20px]">
              Read More
            </button>
          </LinkData>
          <br/>
          <br/>
        </div>
        <div
          className="hidden"
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        ></div>

        {/* for images */}
        <div
          className="hidden lg:flex"
          style={{
            width: "calc(50% - 40px)",
            minWidth: "350px",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            paddingBottom:"20px"
          }}
        >
          {data?.images?.map((item: string, index: number) => (
            <Image
              src={`/api/files${item}`}
              key={index}
              width={250}
              height={250}
              loading="lazy"
              style={{
                height: "",
                objectFit: "cover",
                width: "30%",
                minWidth: "25rem",
              }}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
