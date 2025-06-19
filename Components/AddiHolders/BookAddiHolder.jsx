import Image from "next/image";
import React from "react";
import ThemeButton2 from "../Reusables/ThemeButton2";
const url = process.env.NEXT_APP_BACKEND;

const BookAddiHolders = async ({ currId }) => {
  const res = await fetch(`${url}/api/v1/books/more`, {
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
        See More Books!
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
              <h3 className="font-bold text-[16px]">{data?.title}</h3>
              <p
                className="pt-0 text-[11px]"
                style={{ height: "70px", overflow: "hidden" }}
              >
                {data.description}
              </p>
              <br />
              <ThemeButton2
                link={`/books/${data?.link||data?._id}}`}
                text="Read Book"
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

export default BookAddiHolders;
