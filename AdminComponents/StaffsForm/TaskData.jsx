"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAccs } from "@/ApiRequest/GetData";

const TaskData = () => {
  const [datas, setDatas] = useState([]);
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState(() => {
    const month = new Date().getMonth() + 1;
    return month.toString();
  });
  const [projects, setProjects] = useState({
    total: 0,
    ongoing: 0,
    completed: 0,
  });
  const [filter, setFilter] = useState("ongoing");
  useEffect(() => {
    const get = async () => {
      const dataList = await getAccs("tasks", year, month);
      const data = dataList?.logs;
      console.log(data);
      setDatas(data);
      setProjects({
        total: dataList?.total,
        ongoing: dataList?.ongoing,
        completed: dataList?.completed,
      });
    };

    if (year?.length === 4) {
      get();
    }
  }, [year, month]);

  return (
    <section
      className="w-full min-h-screen bg-gray-100"
      style={{ gap: "20px", padding: "20px" }}
    >
      <h1 className="w-full text-center text-gray-800 font-semibold text-[40px] p-[20px]">
        Assigned Tasks List
      </h1>
      <br />
      <Link href={"/dashboard/tasks/add"}>
        <button className="w-fit py-[5px] px-[20px] bg-blue-500 text-[16px] rounded-3xl text-white transition-all duration-300">
          Add Tasks
        </button>
      </Link>
      <br />
      <br />
      <div className="w-full flex flex-wrap gap-[20px]">
        <button
          onClick={() => {
            setFilter("ongoing");
          }}
          className="w-full flex flex-col rounded-3xl shadow-2xl bg-red-500 text-white text-[20px] justify-center max-w-[300px] gap-[20px] transition-all duration-300 hover:bg-red-700"
          style={{ maxWidth: "300px", minHeight: "200px" }}
        >
          <h2 className="w-full text-center">Ongoing Projects</h2>
          <p className="w-full text-center">{projects?.ongoing}</p>
        </button>
        <button
          onClick={() => {
            setFilter("completed");
          }}
          className="w-full flex flex-col rounded-3xl shadow-2xl bg-blue-500 text-white text-[20px] justify-center max-w-[300px] gap-[20px] transition-all duration-300 hover:bg-blue-600"
          style={{ maxWidth: "300px", minHeight: "200px" }}
        >
          <h2 className="w-full text-center">Completed Projects</h2>
          <p className="w-full text-center">{projects?.completed}</p>
        </button>
        <div
          className="w-full flex flex-col bg-white rounded-3xl shadow-2xl bg-white-500 text-gray-800 text-[20px] justify-center max-w-[300px] gap-[20px] transition-all duration-300"
          style={{ maxWidth: "300px", minHeight: "200px" }}
        >
          <h2 className="w-full text-center">For</h2>
          <div className="w-full flex justify-center">
            <input
              type="text"
              value={year}
              className="w-[70px] text-center"
              style={{ width: "80px" }}
              onChange={(e) => {
                setYear(e?.target?.value);
              }}
              placeholder="Enter Year"
            />
            <select
              name=""
              className="w-[70px]"
              id=""
              value={month}
              style={{ width: "50px" }}
              onChange={(e) => {
                setMonth(e?.target?.value);
              }}
            >
              {Array.from(Array(12)).map((_, item) => (
                <option key={item} value={(item + 1)?.toString()}>{item + 1}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full p-[0px] gap-[30px] flex flex-wrap">
        <h1 className="w-full text-[30px] text-gray-700">
          Showing {filter} projects
        </h1>

        {datas?.map((item, index) => {
          if (item?.status === filter) {
            return (
              <div
              key={index}
                className="w-full p-[20px] text-[14px] bg-white shadow-2xl rounded-3xl text-gray-700"
                style={{ maxWidth: "300px" }}
              >
                <h4>
                  {item?.startingDate} &nbsp;&nbsp; to &nbsp;&nbsp; {item?.deadline}
                </h4>
                <h3 className="w-full py-[10px] text-[22px] whitespace-nowrap overflow-hidden text-blue-500 truncate">
                  {item?.totalProgress+"%"}  {item?.title}
                </h3>
                
                <h4 className="w-full pt-[10px] text-[16px] font-bold">Members</h4>
                <ul className="w-full list-disc h-[100px] overflow-hidden">
                  {typeof(item?.individualProgress)==="object" && Object?.keys(item?.individualProgress)?.map((prog, idx) => (
                    <li key={idx} className="w-full pl-[10px] list-disc font-semibold whitespace-nowrap truncate overflow-hidden">
                      {item?.individualProgress[prog]}
                      {"%"} {prog}
                    </li>
                ))}
                </ul>
                <br />
                <Link href={`/dashboard/tasks/${item?._id}`}>
                <button className="w-fit py-[5px] transition-all duration-300 hover:bg-blue-600 text-[16px] rounded-xl text-white bg-blue-500 px-[20px]">See Detais</button></Link>

              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default TaskData;
