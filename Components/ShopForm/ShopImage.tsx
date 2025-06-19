"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ShopImage = ({ oldData }: { oldData: string[] }) => {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imgUrls: string[] = [];

      for (const item of oldData) {
        try {
          const res = await fetch(`/api/files${item}`);
          if (res.ok) {
            const blob = await res.blob();
            const imgUrl = URL.createObjectURL(blob);
            imgUrls.push(imgUrl);
          }
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }

      setImages(imgUrls);
    };

    fetchImages();

    // Cleanup: Revoke object URLs when component unmounts or images change
    return () => {
      images.forEach((imgUrl) => URL.revokeObjectURL(imgUrl));
    };
  }, [oldData]);

  return (
    <div className="w-full flex flex-col gap-[20px] border border-gray-200 rounded-[10px] overflow-hidden">
      {images.length > 0 ? (
        <Image
          src={images[index]}
          alt="Shop image"
          width={500}
          height={500}
          className="object-cover rounded-xl"
          style={{height:"500px"}}
        />
      ) : (
        <div className="w-[500px] h-[500px] flex items-center text-[20px] justify-center text-gray-500">
          Loading ...
        </div>
      )}

      <div className="w-full overflow-x-scroll custom-scrollbar">
        <div className="w-fit flex gap-[20px]">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`rounded-xl bg-cover ${index === idx ? "border-2 border-blue-500" : ""}`}
              onClick={() => setIndex(idx)}
              style={{
                width: "75px",
                height: "75px",
                backgroundImage: `url("${img}")`,
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopImage;
