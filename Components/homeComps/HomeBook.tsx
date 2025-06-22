import React from "react";
import BookCard from "../Reusables/BookCard";
import ThemeButton from "../Reusables/ThemeButton";
import { getLists } from "@/ApiRequest/GetData";

const HomeBook = async () => {
  const data = await getLists("books", 0, 12);
  const limitedData = data.slice(0, 8);
  return (
    <section className="w-full py-[15px] text-[20px]  bg-gradient-to-tr  from-black via-indigo-900 to-black text-center relative">
      <>
        <br />
        <br />
        <h2 className="font-bold text-8xl text-[#ffffff]">Read Books</h2>
        <br />
        <br />
      </>
      <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
        {limitedData?.map((item: any, index: number) => (
          <BookCard key={index} data={item} />
        ))}
      </div>
      <>
        <br />
        <br />
        <ThemeButton style={{}} text="See All Books" link="/books" />
        <br />
        <br />
      </>
      <div className="absolute top-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-t from-transparent via-purple-600 to-[#8e39eb] backdrop-blur-md"></div>
    </section>
  );
};

export default HomeBook;
