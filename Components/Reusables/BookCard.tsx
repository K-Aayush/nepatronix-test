import Image from "next/image";
import React from "react";
import ThemeButton2 from "./ThemeButton2";

const BookCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full max-w-[350px] min-h-[550px] relative">
      <div className="absolute p-[25px] w-full h-full transition-all duration-500 bg-white  cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 rounded-2xl">
        <Image
          src={`/api/files${data?.image}`}
          alt={data?.title}
          width={400}
          height={400}
          loading="lazy"
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
        <ThemeButton2
          link={`/books/${data?.link ||data?._id}`}
          text="Read Books"
          style={{
            position: "absolute",
            left: "15px",
            right: "15px",
            bottom: "15px",
          }}
        />
        <div
          className="hidden"
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        ></div>
      </div>
    </div>
  );
};

export default BookCard;
