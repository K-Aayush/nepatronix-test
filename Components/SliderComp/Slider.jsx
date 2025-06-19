"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = ({ data, length, children }) => {
  const [index, setIndex] = useState(0);
  return (
    <section className="w-full relative overflow-hidden min-h-screen">
      <div
        style={{
          width: `${length * 100}%`,
          display: "flex",
          position: "absolute",
          transition: "1.5s",
          left: `calc(-100% * ${index})`,
        }}
      >
        {children}
      </div>
      <button
        className="text-blue-500"
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          fontSize: "50px",
        }}
        onClick={() => {
          if (index > 0) {
            setIndex((prev) => prev - 1);
          } else {
            setIndex(data?.length - 1);
          }
        }}
      >
        <FaAngleLeft />
      </button>
      <button
        className="text-blue-500"
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          fontSize: "50px",
        }}
        onClick={() => {
          if (index < data?.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
      >
        <FaAngleRight />
      </button>
    </section>
  );
};

export default Slider;
