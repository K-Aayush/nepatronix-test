"use client";
import React, { useEffect, useState } from "react";
import { getAccs } from "@/ApiRequest/GetData";
import Link from "next/link";

const InventoryList = ({ links }) => {
  const [list, setList] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAccs("transaction/billings", year, month);
      if (res) {
        setList(res);
      }
    };
    fetchData();
  }, [year, month]);

  return (
    <div className="w-full">
      <div
        className="w-full mx-auto flex flex-wrap justify-between"
        style={{ maxWidth: "1000px" }}
      >
        <Link href={`/${links}/billings/add`}>
          <button className="w-fit py-[5px] px-[30px] rounded-xl text-white text-[16px] bg-blue-500 hover:bg-blue-600 transition-all duration-300">
            Add New
          </button>
        </Link>
        <div className="w-fit flex gap-[20px]">
          <input
            type="number"
            value={year}
            className="w-[100px] text-[16px] px-[10px] py-[5px] border-2 text-slate-700"
            onChange={(e) => {
              setYear(e?.target?.value);
            }}
          />
          <select
            type="text"
            value={month}
            className="w-[70px] text-[16px] px-[10px] py-[5px] border-2 text-slate-700"
            onChange={(e) => {
              setMonth(e?.target?.value);
            }}
          >
            {Array.from(Array(12))?.map((_, index) => (
              <option value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <div
        className="w-full py-[40px] px-[20px] flex flex-wrap justify-evenly"
        style={{ maxWidth: "1000px", gap:"20px" }}
      >
        {Array.isArray(list) &&
          list.map((item, index) => (
            <div
              className="w-full max-w-[300px] bg-slate-100 shadow-xl rounded-xl p-[20px] "
              key={index}
            >
              <h2 className="text-[14px] text-slate-600">{item?.date}</h2>
              <h3 className="whitespace-nowrap truncate overflow-hidden text-[20px] text-slate-700 font-bold">
                {item?.company}
              </h3>
              <h4 className="text-[12px] text-slate-600">
                Type : {item?.type}
              </h4>
              <h2 className="text-[18px] font-bold text-slate-600">
                Total : Rs,{item?.total}
              </h2>
              <br />
              <Link href={`/${links}/billings/${item?._id}`}>
                <button className="w-fit px-[10px] py-[2.5px] rounded-xl text-[16px] text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300">
                  Edit
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InventoryList;
