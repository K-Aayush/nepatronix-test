"use client";
import React, { useEffect, useRef, useState } from "react";

const AbtCard = ({ data }: { data: { title: string; value: number } }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [num, setNum] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = cardRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const finalVal: number = data.value;
      const duration: number = 1500; // 2.5 seconds
      const increment: number = finalVal / (duration / 100); // increment value for each interval
      let currentNum: number = 0;

      const interval = setInterval(() => {
        currentNum += increment;
        if (currentNum >= finalVal) {
          currentNum = finalVal;
          clearInterval(interval);
        }
        setNum(Math.round(currentNum));
      }, 100); // update every 100ms

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible, data.value]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col justify-center p-8 text-center text-red-500 bg-white rounded-full shadow-2xl w-fit h-fit bg-opacity-65"
      style={{ width: "20rem", height: "20rem" }}
    >
      <p className="text-6xl font-bold">+{num}</p>
      <p className="text-2xl font-semibold mt-4 text-[#143269]">
        {data?.title}
      </p>
    </div>
  );
};

export default AbtCard;
