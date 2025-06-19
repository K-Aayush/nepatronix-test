import Image from "next/image";
import React from "react";

const DashCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      className="transform p-[20px] w-full h-full rounded-3xl shadow-xl bg-white cursor-pointer transition-all duration-500 hover:scale-105 text-center
      font-semibold"style={{fontSize:"16px"}}
    >
      <center>
        <Image
          src={image}
          width={50}
          height={50}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        <br />
        {title}
      </center>
    </div>
  );
};

export default DashCard;
