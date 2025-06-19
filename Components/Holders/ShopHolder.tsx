import React from "react";
import ShopCard from "../Reusables/ShopCard";

const ShopHolder = ({
  data,
  isPage,
  isInfiniteScroll,
}: {
  data: any;
  isPage: boolean;
  isInfiniteScroll: boolean;
}) => {
  return (
    <section className="w-full pt-[50px] py-[15px] text-[20px] text-left">
      {" "}
      {/* Changed to text-left */}
      
      <div className="w-full max-w-[1600px] mx-auto px-[40px] flex justify-center gap-[30px] flex-wrap">
        {" "}
        {/* Changed to justify-start */}
        {data?.map((item: any, index: number) => (
          <ShopCard key={index} data={item} />
        ))}
      </div>
      {!isPage && !isInfiniteScroll && (
        <div className="mt-[60px]">
          {" "}
          {/* 60px=3.75rem */}
          <br />
          <br />
        </div>
      )}
    </section>
  );
};

export default ShopHolder;
