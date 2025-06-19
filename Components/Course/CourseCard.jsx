import Image from "next/image";
import React from "react";
import Link from "next/link";

const CourseCard = ({ data }) => {
  return (
    <div
      className="relative w-full bg-gray-50"
      style={{ maxWidth: "320px", padding: "20px", boxShadow:"0 0 5px darkgray", borderRadius:"20px"}}
    >
      <br />
      <Image
        src={`/api/files${data?.icon}`}
        width={150}
        className="rounded-full bg-white"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          border: "3px solid #263240",
          padding:"20px"
        }}
        height={150}
        alt=""
      />
      <br />
      <h2
        className="text-gray-800 text-[20px] h-[100px] font-semibold text-left"
        style={{ textTransform: "uppercase" }}
      >
        {data?.title?.split("").slice(0, 46).join("")}...
      </h2>
      <ul
        className="w-full pl-[20px] text-left text-[18px] pt-[10px] overflow-hidden"
        style={{ listStyle: "circle", height: "160px" }}
      >
        {data?.syllabus?.map((item, idx) => (
          <li key={idx} style={{ wordWrap: "wrap" }}>
            {item}
          </li>
        ))}
      </ul>
      <br />
      <Link href={`/courses/${data?._id}`} style={{ marginTop: "10px" }}>
        <button className="w-full p-[10px] text-[18px] text-white font-semibold bg-blue-500 hover:bg-blue-400 transition-all duration-300">
          See Details
        </button>
      </Link>
      <Image src={`/relativeImages/banner.png`} style={{position:"absolute", top:"-35px", left:"50%", transform:"translateX(-50%)"}} width={200} height={200} alt="" />
    </div>
  );
};

export default CourseCard;
