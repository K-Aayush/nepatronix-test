import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const DisplayTeam = ({ data }) => {
  return (
    <div
      className="w-full flex flex-wrap-reverse bg-gray-100 justify-evenly py-[10rem]"
      style={{ gap: "2rem", lineHeight:"6rem" }}
    >
      <div className="w-full p-[2rem] max-w-[50rem] xl:max-w-[80rem] xl:py-[5rem]">
        <h2
          className="font-bold text-gray-800 bg-gray-100"
          style={{ fontSize: "4rem" }}
        >
          {data?.title}
        </h2>
        <h3
          className="font-bold text-blue-500  bg-gray-100"
          style={{ fontSize: "3rem",padding:"20px" }}
        >
          {data?.profession}
        </h3>
        <p
          className="w-full text-gray-600 bg-gray-100  overflow-y-scroll h-[100px] xl:h-[220px] custom-scrollbar custom-scroll2"
          style={{ fontSize: "1.8rem", color: "dimgray", lineHeight:"3rem", padding:"20px" }}
        >
          {data?.about}
        </p>
        <br/>
        <div className="flex flex-wrap" style={{ gap: "2rem" }}>
          <Link
            href={data?.portfolio || ""}
            className="text-[1.8rem] bg-red-400 p-[1rem] border-2 border-red-400 text-white font-semibold rounded-3xl"
            style={{ borderColor: "rgb(248 113 113)", lineHeight:"2.6rem" }}
          >
            Visit Full Page
          </Link>
          <Link
            href={data.resume  || ""}
            className="text-[1.8rem] bg-white p-[1rem] text-red-400 border-2 border-red-400 font-semibold rounded-3xl"
            style={{ borderColor: "rgb(248 113 113)" , lineHeight:"2.6rem"}}
          >
            View Resume
          </Link>
        </div>
        <div
          className="flex flex-wrap"
          style={{ gap: "15px", padding: "30px 0 0 0" }}
        >
          <Link
            href={data?.facebook || ""}
            className="w-fit p-[1rem] text-[18px] text-white bg-blue-500 rounded-full"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={data?.instagram || ""}
            className="w-fit p-[1rem] text-[18px] text-white bg-blue-500 rounded-full"
          >
            <FaInstagram />
          </Link>
          <Link
            href={data?.linkedin  || ""}
            className="w-fit p-[1rem] text-[18px] text-white bg-blue-500 rounded-full"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
      <div className="flex flex-col  w-full justify-center max-w-[35rem] xl:max-w-[60rem]">
        <Image
          src={`/api/files${data?.picture}`}
          width={1000}
          height={1000}
          className="bg-red-400"
          style={{
            width: "100%",
            height: "fit",
            objectFit: "contain",
            objectPosition: "center",
            borderRadius: "50%",
          }}
          alt={`${data?.title}'s picture`}
        />
      </div>
    </div>
  );
};

export default DisplayTeam;
