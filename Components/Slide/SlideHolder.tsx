"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TopSlide from "../Reusables/TopSlide";

const SlideHolder = () => {
  const [index, setIndex] = useState(0);

  const ref = useRef<any>(null);
  const [data, setData] = useState([]);
  const [transiction, setTransiction] = useState(false);
  const [hover, setHover] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const setDatas = await getLists("slides", 0, 0);
      return setData(setDatas);
    };

    if (data?.length === 0 && load === false) {
      getData();
      setLoad(true)
    }
  }, [data, load]);

  useEffect(() => {
    if (data?.length > 0 && transiction && !hover) {
      const interval = setInterval(() => {
        return ref?.current?.click();
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }

    if (!transiction && data?.length > 1) {
      setTimeout(() => {
        setTransiction(true);
      }, 3000);
    }
  }, [data, transiction, hover]);

  return (
    <section className="w-full overflow-x-hidden sm:overflow-hidden relative h-fit min-h-screen pt-[8rem]" onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
      <div
        className={`absolute min-h-[calc(100vh-8rem)] flex`}
        style={{
          width: `calc(100% * ${data?.length})`,
          transition: transiction ? "1.5s" : "0s",
          left: `calc(-100% * ${index})`,
        }}
      >
        <div
          className="innerSlide"
          style={{
            width: "100%",
            minHeight: "calc(100vh - 8rem)",
            display: "flex",
          }}
        >
          {data?.map((item: any, index: number) => (
            <TopSlide
              slideData={item}
              width={`calc(100% / ${data?.length})`}
              key={index}
              index={index}
              length={data?.length}
            />
          ))}
        </div>
      </div>
      <button
        name="left"
        className="absolute top-[50%] translate-y-[-50%] text-8xl text-red-400 left-0 hover:text-red-500"
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
        name="right"
        className="absolute top-[50%] translate-y-[-50%] text-8xl text-red-400 right-0 hover:text-red-500"
        onClick={() => {
          if (index < data?.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
        ref={ref}
      >
        <FaAngleRight />
      </button>
    </section>
  );
};

export default SlideHolder;
