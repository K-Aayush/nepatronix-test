"use client";
import React, { useState } from "react";
import EditStaff from "./EditStaff";
import AddStaff from "./AddStaff";

const StaffControl = ({ data }) => {
  const [list, setList] = useState(data);

  return (
    <main
      className="w-full min-h-screen pt-[80px] bg-gray-50 pl-[70px] pr-[20px] pb-[20px] text-gray-700 flex flex-col"
      style={{ gap: "20px" }}
    >
      <h1
        className="py-[20px] text-[30px] text-gray-800 font-semibold"
        style={{ padding: "40px" }}
      >
        Edit Client Data
      </h1>
      <AddStaff set={setList} />
      {Array.isArray(list) &&
        list.map((item, idx) => <EditStaff item={item} key={idx} />)}
    </main>
  );
};

export default StaffControl;
