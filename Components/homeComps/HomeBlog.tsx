import { getLists } from "@/ApiRequest/GetData";
import React from "react";
import ThemeButton from "../Reusables/ThemeButton";
import BlogCard from "../Reusables/BlogCard";

const HomeBlog = async () => {
  const data = await getLists("blogs", 0, 18) || [];;
  const limitedData = data.slice(0, 8);

  return (
    <section className="w-full py-[15px] text-[20px]  bg-gradient-to-tl from-purple-600 to-indigo-500 text-center">
      <>
        <br />
        <br />
        <h2 className="font-bold text-8xl text-[#2c1b3d]">Explore Our Blogs</h2>
        <br />
        <br />
      </>

      <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
        {limitedData?.map((item: any, index: number) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
      <>
        <br />
        <br />
        <ThemeButton style={{}} text="See All Blogs" link="/blogs" />
        <br />
        <br />
      </>

    </section>
  );
};

export default HomeBlog;
