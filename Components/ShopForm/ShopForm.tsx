"use client";
import { postData } from "@/ApiRequest/PostReqs";
import React, { useState } from "react";

const ShopForm = ({ itemData }: { itemData: any }) => {
  const [invalid, setInvalid] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [notPlaced, setNotPlaced] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [orderDetail, setOrderDetail] = useState({
    itemId: itemData?._id,
    itemName: itemData?.title,
    fullname: "",
    email: "",
    phone: "",
    quantity: 1,
    address: "",
  });

  const placeOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (orderDetail?.quantity < 1) {
      setInvalid(true);
      return;
    }
    const posted = await postData(orderDetail, "orders");
    if (!posted) return setNotPlaced(true);
    setPlaced(true);
    setNotPlaced(false);
    setInvalid(false);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-[18px] text-[18px] font-semibold rounded-[12px] transition-all duration-300 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {isOpen ? "Cancel Order" : "Order Now"}
      </button>

      {isOpen && (
        <form onSubmit={placeOrder} className="mt-[30px] space-y-[25px]">
          {/* Full Name */}
          <div className="space-y-[12px]">
            <label className="block text-[16px] font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={orderDetail.fullname}
              onChange={(e) =>
                setOrderDetail((prev) => ({
                  ...prev,
                  fullname: e.target.value,
                }))
              }
              className="w-full px-[16px] py-[12px] border-[2px] border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500 text-[16px]"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-[12px]">
            <label className="block text-[16px] font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={orderDetail.email}
              onChange={(e) =>
                setOrderDetail((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-[16px] py-[12px] border-[2px] border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500 text-[16px]"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-[12px]">
            <label className="block text-[16px] font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={orderDetail.phone}
              onChange={(e) =>
                setOrderDetail((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="w-full px-[16px] py-[12px] border-[2px] border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500 text-[16px]"
              placeholder="+977 9800000000"
              required
            />
          </div>

          {/* Quantity */}
          <div className="space-y-[12px]">
            <label className="block text-[16px] font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={orderDetail.quantity}
              onChange={(e) =>
                setOrderDetail((prev) => ({
                  ...prev,
                  quantity: parseInt(e.target.value || "1"),
                }))
              }
              className="w-full px-[16px] py-[12px] border-[2px] border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500 text-[16px]"
              required
            />
          </div>

          {/* Address */}
          <div className="space-y-[12px]">
            <label className="block text-[16px] font-medium text-gray-700">
              Shipping Address
            </label>
            <textarea
              value={orderDetail.address}
              onChange={(e) =>
                setOrderDetail((prev) => ({ ...prev, address: e.target.value }))
              }
              className="w-full px-[16px] py-[12px] border-[2px] border-gray-300 rounded-[8px] focus:outline-none focus:border-blue-500 text-[16px] h-[120px]"
              placeholder="Street, City, Country"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-[16px] bg-green-600 hover:bg-green-700 text-white text-[18px] font-semibold rounded-[12px] transition-all duration-300"
          >
            Confirm Order
          </button>

          {/* Status Messages */}
          <div className="mt-[20px] text-center">
            {invalid && (
              <p className="text-red-600 text-[16px] font-medium">
                Please enter a valid quantity (minimum 1)
              </p>
            )}
            {placed && (
              <p className="text-green-600 text-[16px] font-medium">
                Order placed successfully!
              </p>
            )}
            {notPlaced && (
              <p className="text-red-600 text-[16px] font-medium">
                Failed to place order. Please try again.
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default ShopForm;
