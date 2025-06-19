import LinkData from "@/Components/Reusables/LinkData";
import Image from "next/image";
import React from "react";
import { FaPen } from "react-icons/fa";
import DeleteBtn from "../reusables/DeleteBtn";

const EditableCard = ({ data, type }: { data: any; type: string }) => {
  return (
    <div
      className="p-[20px] w-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
      style={{ maxWidth: "350px", minHeight: "350px" }}
    >
      <center>
        <Image
          src={
            data?.image || data?.cover || data?.icon
              ? `/api/files${data?.image || data?.cover || data?.icon}`
              : "/tut.jpg"
          }
          alt={data?.title || `image ${type}`}
          width={100}
          height={100}
          style={{ width: "100%", height: "100px", objectFit: "contain" }}
        />
        <br />
        <p style={{ fontSize: "16px", padding: "10px 0" }}>
          <strong>Author : </strong>
          {data?.author}
        </p>
        <h1 className="text-4xl">
          <strong>{data?.title}</strong>
        </h1>
        <br />
        <LinkData link={`/dashboard/${type}/${data?._id}`}>
          <button
            className="bg-blue-500 text-white text-4xl rounded-2xl"
            style={{ padding: "10px" }}
          >
            <FaPen />
          </button>
        </LinkData>
        &nbsp;&nbsp;
        <DeleteBtn type={type} id={data?._id} />
      </center>
      <br />
    </div>
  );
};

export default EditableCard;
