import React from "react";
import ThemeButton from "../Reusables/ThemeButton";
import BlogCard from "../Reusables/BlogCard";

const BlogHolder = ({
  data,
  isPage,
  isInfiniteScroll,
  children,
}: {
  data: any;
  isPage: boolean;
  isInfiniteScroll: boolean;
  children: any;
}) => {
  return (
    <section className="w-full py-[15px] text-[20px]  text-center">
      {!isInfiniteScroll && (
        <>
          <br />
          <br />
          <h1 className="font-bold text-8xl text-[#ffffff]">
            Explore Our Blogs
          </h1>
          <br />
          <br />
          {children}
          <br />
          <br />
        </>
      )}

      <div className="w-full px-[40px] flex justify-center gap-[30px] flex-wrap">
        {data?.map((item: any, index: number) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
      {!isPage && (
        <>
          <br />
          <br />
          <ThemeButton style={{}} text="See All Blogs" link="/blogs" />
          <br />
          <br />
        </>
      )}
      {isInfiniteScroll && (
        <>
          <br />
          <br />
        </>
      )}
    </section>
  );
};

export default BlogHolder;
