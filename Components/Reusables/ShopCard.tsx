"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const SuccessMessage = () => {
  return (
    <div
      style={{ zIndex: 100 }}
      className="fixed top-[100px] right-[40px] bg-[#4CAF50] text-white px-[16px] py-[8px] rounded-[8px] text-[16px] shadow-md"
    >
      Item added to cart successfully! 🎉
    </div>
  );
};

const ShopCard = ({ data }: { data: any }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.push({ ...data, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setShowSuccess(true);
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <>
      <div className="w-full max-w-[300px] bg-white rounded-[8px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-[1px] border-[#eeeeee]">
        {/* Image Container */}
        <div className="relative w-full h-[240px] bg-[#f5f5f5]">
          <Image
            src={"/api/files" + data?.cover}
            alt="Product image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        {/* Product Info */}
        <div className="p-[16px] flex flex-col gap-[12px]">
          <h3 className="text-[16px] font-medium text-[#333333] leading-[1.3]">
            {data?.title}
          </h3>

          <p className="text-[20px] font-bold text-[#2196F3]">
            NPR {data?.price}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-[8px] mt-[8px]">
            <Link href={`/shop/${data?.link || data?._id}`} className="flex-1">
              <button className="w-full px-[12px] py-[8px] bg-[#2196F3] text-white text-[16px] rounded-[6px] hover:bg-[#1976D2] transition-colors">
                View Details
              </button>
            </Link>

            <button
              onClick={handleAddToCart}
              className="flex-1 px-[12px] py-[8px] bg-[#4CAF50] text-white text-[16px] rounded-[6px] hover:bg-[#388E3C] transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {showSuccess && <SuccessMessage />}
    </>
  );
};

export default ShopCard;
