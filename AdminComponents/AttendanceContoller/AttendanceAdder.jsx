"use client";
import { revalidatePath } from "next/cache";
import React, { useState } from "react";

const AttendanceAdder = ({ domain }) => {
  const [uid, setUid] = useState("");
  const [devId, setDevId] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const d = date?.split("-");
    const year = parseInt(d[0]);
    const month = parseInt(d[1]);
    const day = parseInt(d[2]);
    const obj = {
      logs: {
        [uid]: [
          `${year}/${month}/${day} 10 45`,
          `${year}/${month}/${day} 18 45`,
        ],
      },
      device_uid: devId,
    };
    const data = JSON.stringify(obj);
    try {
      const res = await fetch(`${domain}/api/v1/office/attendance`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      if (!res.ok) throw new Error("Something went wrong!");
      alert("Added Successfully!");
      return window.location.reload()
    } catch (error) {
      console.log(error);
      return alert(error?.message);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full flex flex-wrap gap-[20px] p-[40px]"
    >
      <h3 className="w-full text-[30px] font-semibold text-slate-700">
        Add Attendance
      </h3>
      <input
        type="text"
        value={uid}
        className="w-full p-[10px] border rounded-xl max-w-[200px] text-[14px]"
        placeholder="Enter Staff's UID"
        onChange={(e) => {
          setUid(e?.target?.value);
        }}
        required
      />
      <input
        type="text"
        value={devId}
        className="w-full p-[10px] border rounded-xl max-w-[200px] text-[14px]"
        onChange={(e) => {
          setDevId(e?.target?.value);
        }}
        placeholder="Enter Device UID"
        required
      />
      <input
        type="date"
        value={date}
        className="w-full p-[10px] border rounded-xl max-w-[200px] text-[14px]"
        onChange={(e) => {
          setDate(e?.target?.value);
        }}
        required
      />
      <button
        type="submit"
        className="w-fit rounded-xl bg-blue-500 text-[14px] hover:bg-blue-600 py-[5px] px-[30px] text-white transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AttendanceAdder;
