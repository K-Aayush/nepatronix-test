import Image from "next/image";
import Link from "next/link";
import React from "react";
const url = process.env.NEXT_APP_BACKEND;

const NewsAddiHolders = async ({ currId }) => {
  const res = await fetch(`${url}/api/v1/news/more`, {
    cache: "no-store",
    method: "GET",
    headers: {
      currentId: currId,
    },
  });
  const item = await res.json();

  return (
    <div
      className="w-full flex flex-wrap justify-center px-[20px] py-[40px] rounded-xl"
      style={{ gap: "20px", maxWidth: "1000px", justifyContent: "center" }}
    >
      <h2 className="w-full pb-[10px] font-semibold text-[3rem] text-gray-800">
        Trending News
      </h2>
      {Array.isArray(item) &&
        item?.map((data, index) => (
          <Link
            href={`/news/${data?.link||data?._id}}`}
            className="w-full max-w-[225px] min-h-[200px] relative text-gray-800 hover:text-blue-500"
            key={index}
            style={{maxWidth:"225px"}}
          >
            <div className="absolute overflow-hidden p-[10px] w-full h-full transition-all duration-500 bg-white cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 rounded-2xl">
              <Image
                src={`/api/files${data?.image}`}
                alt=""
                width={400}
                height={400}
                className="h-[100px] object-cover"
              />
              <h3 className="font-semibold text-left text-[14px]" style={{lineHeight:"20px", paddingTop:"10px"}}>{data?.title}</h3>
              
            </div>
          </Link>
        ))}
    </div>
  );
};

export default NewsAddiHolders;
