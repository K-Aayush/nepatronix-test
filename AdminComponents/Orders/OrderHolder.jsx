"use client";

import { getLists } from "@/ApiRequest/GetData";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Cookie from "js-cookie";

const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const OrderHolder = () => {
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const stateRef = useRef({ index, loading, hasMore });
  useEffect(() => {
    stateRef.current = { index, loading, hasMore };
  }, [index, loading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        const {
          index: currentIndex,
          loading: currentLoading,
          hasMore: currentHasMore,
        } = stateRef.current;

        if (entry.isIntersecting && !currentLoading && currentHasMore) {
          setLoading(true);
          try {
            const datas = await getLists("orders", currentIndex, 100);
            if (Array.isArray(datas)) {
              if (datas.length > 0) {
                setData((prev) => [...prev, ...datas]);
                setIndex((prev) => prev + 1);
                setHasMore(datas.length === 100);
              } else {
                setHasMore(false);
              }
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            setHasMore(false);
          } finally {
            setLoading(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const remData = (idx) => {
    const dataLis = [...data];
    dataLis.splice(idx, 1);
    setData(dataLis);
  };

  const token = Cookie.get("token");

  const handler = async (idx, method) => {
    // Add confirmation dialog
    const action = method === "PUT" ? "mark as delivered" : "cancel";
    const confirmation = window.confirm(
      `Are you sure you want to ${action} this order?`
    );
    if (!confirmation) return;

    const dataID = data[idx]?._id;
    try {
      const res = await fetch(`/api/v1/orders/${dataID}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const jsn = await res.json();
      if (res.ok) remData(idx);
      alert(jsn?.message);
    } catch (error) {
      console.error("Error processing request:", error);
      alert("An error occurred while processing your request");
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-100 flex flex-col items-center p-[20px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[20px]">
        <h1 className="text-[30px] font-bold text-gray-800 mb-[10px]">
          Order Management
        </h1>

        {data.map((item, index) => (
          <div
            key={index}
            className="w-full p-[24px] bg-white rounded-[12px] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[20px]">
              <div className="space-y-[8px]">
                <DetailItem label="Customer Name" value={item?.fullname} />
                <DetailItem
                  label="Contact"
                  value={`${item?.phone} / ${item?.email}`}
                />
                <DetailItem label="Address" value={item?.address} />
              </div>
              <div className="space-y-[8px]">
                <DetailItem label="Product" value={item?.itemName} />
                <DetailItem label="Quantity" value={item?.quantity} />
                <DetailItem label="Order Date" value={formatDate(item?.date)} />
              </div>
            </div>

            <div className="flex flex-wrap gap-[16px] items-center justify-between border-t-[1px] border-gray-100 pt-[20px]">
              <Link
                href={`/shop/${item?.itemId}`}
                target="_blank"
                className="px-[20px] py-[10px] bg-gray-600 text-white rounded-[8px] hover:bg-gray-700 transition-colors duration-200 text-[16px] font-medium"
              >
                View Product
              </Link>
              <div className="flex gap-[20px]">
                <button
                  onClick={() => handler(index, "PUT")}
                  className="px-[20px] py-[10px] bg-green-600 text-white rounded-[8px] hover:bg-green-700 transition-colors duration-200 text-[16px] font-medium"
                >
                  Mark Delivered
                </button>
                <button
                  onClick={() => handler(index, "DELETE")}
                  className="px-[20px] py-[10px] bg-red-500 text-white rounded-[8px] hover:bg-red-700 transition-colors duration-200 text-[16px] font-medium"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        ))}

        <div
          ref={ref}
          className="w-full text-center p-[24px] text-gray-500 text-[16px] bg-white rounded-[12px] shadow-md"
        >
          {hasMore ? "Loading more orders..." : "All orders loaded"}
        </div>
      </div>
    </main>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="text-[16px]">
    <span className="font-bold text-gray-600 min-w-[120px]">{label} : </span>
    <span className="text-gray-800"> {value || "-"}</span>
  </div>
);

export default OrderHolder;
