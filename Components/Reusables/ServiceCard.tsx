import Image from "next/image";
import React from "react";

const ServiceCard = ({ data }: { data: any }) => {
  console.log(data?.image)
  return (
    <div className="absolute w-full max-w-[350px] h-full min-h-[480px] p-[4rem] bg-[#f5faff] rounded-2xl shadow-lg  hover:shadow-2xl transition-all duration-500 text-center cursor-pointer hover:scale-105">
      <Image
        src={`/api/files${data?.image}`}
        alt={data?.title}
        width={200}
        loading="lazy"
        height={200}
        className="object-contain w-[100%] h-[100px] mx-auto"
      />
      <br />
      <h3 className="font-bold text-[20px] overflow-hidden h-[60px]">{data?.title.split("")?.slice(0, 40)?.join("")}...</h3>
        <p
          className="pt-5 text-[16px]"
          style={{ height: "100px", overflow: "hidden" }}
        >
          {data.description?.split("")?.slice(0, 100)?.join("")}....
        </p>
    </div>
  );
};

export default ServiceCard;
