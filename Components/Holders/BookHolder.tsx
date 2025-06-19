import React from "react";
import ThemeButton from "../Reusables/ThemeButton";
import BookCard from "../Reusables/BookCard";

const BookHolder = ({
  data,
  isPage,
  isInfiniteScroll,
  children
}: {
  data: any;
  isPage: boolean;
  isInfiniteScroll: boolean;
  children:any
}) => {
  return (
    <section className="w-full py-[15px] text-[20px]  text-center">
      {!isInfiniteScroll && (
        <>
          <br />
          <br />
          <h1 className="font-bold text-8xl text-[#2c1b3d]">
            Read Books
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
          <BookCard key={index} data={item} />
        ))}
      </div>
      {!isPage && (
        <>
          <br />
          <br />
          <ThemeButton style={{}} text="See All Books" link="/books" />
          <br />
          <br />
        </>
      )}
      {
        isInfiniteScroll && <><br/><br/></>
      }
    </section>
  );
};

export default BookHolder;
