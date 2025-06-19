"use client";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import React, { useEffect, useState } from "react";

const AddTask = ({ data, userName }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    members: [],
    startingDate: "",
    status: "ongoing",
    deadline: "",
    description: "",
    files: [],
    updates: [],
    requirements: "",
    totalProgress: 0,
    individualProgress: {},
  });

  const [updates, setUpdates] = useState("");

  useEffect(() => {
    if (data && Object.keys(data)?.length > 0) {
      setNewTask(data);
    }
  }, [data]);
  const handleSubmit = async (e) => {
    if(!updates) return alert("Must Add Updates!")
    e?.preventDefault();
    const form = new FormData();
    //  append data
    for (const key in newTask) {
      if (key === "files") {
        const allFiles = [...newTask?.files];
        if (allFiles.length > 0) {
          for (let i = 0; i < allFiles?.length; i++) {
            form.append(`file${i}`, allFiles?.[i]);
          }
          form.append("files", allFiles?.length);
        } else {
          form.append("files", 0);
        }
      } else if (key === "updates") {
        if (updates) {
          const newUpdate = [...newTask?.updates];
          newUpdate.unshift({ member: userName, text: updates, remarks: [] });
          form.append("updates", JSON.stringify(newUpdate));
        }
      } else if (
        Array.isArray(newTask?.[key]) ||
        key === "individualProgress"
      ) {
        const stringed = JSON.stringify(newTask?.[key]);
        form.append(key, stringed);
      } else {
        form.append(key, newTask?.[key]);
      }
    }

    const post = await putAdmin(form, "tasks/staff", data?._id);
    if (!post) return alert("Data Could Not be Edited!");
    window.location.reload();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-wrap bg-slate-100 p-[20px] gap-[20px]"
      style={{ maxWidth: "1160px", margin: "0 auto" }}
    >
      <div
        className="w-full h-fit rounded-xl bg-white shadow-2xl"
        style={{ maxWidth: "360px", padding: "20px" }}
      >
        <h1 className="w-full p-[10px] text-[30px] text-gray-600">
          {newTask?.title}
        </h1>
        <p className="w-full focus:outline-none outline-none outline-white text-[18px] text-gray-800 p-[10px] resize-none h-[150px]">
          {newTask?.description}
        </p>
      </div>
      <div
        className="w-full max-w-[700px] bg-white rounded-2xl shadow-2xl flex p-[20px] flex-wrap"
        style={{ maxWidth: "360px" }}
      >
        <h3 className="w-full py-[10px] text-slate-700 text-[24px]">Members</h3>
        {Array.isArray(newTask?.members) &&
          newTask?.members?.map((item, insx) => (
            <button
              type="button"
              key={insx}
              className="w-fit text-[12px] align-top h-fit border text-black bg-slate-200 rounded-full py-[2px] px-[10px] flex gap-[5px]"
            >
              {item}
            </button>
          ))}
      </div>
      <div
        className="w-full p-[20px] rounded-2xl bg-white shadow-xl"
        style={{ maxWidth: "360px" }}
      >
        <label
          htmlFor="startingDate"
          className="text-[14px] text-gray-700 font-medium"
        >
          Starting Date
        </label>
        <input
          type="date"
          onChange={() => {}}
          className="w-full p-[10px] text-[16px] bg-slate-100 rounded-xl "
          value={newTask?.startingDate}
          disabled
        />
        <br />
        <br />
        <label
          htmlFor="startingDate"
          className="text-[14px] text-gray-700 font-medium"
        >
          Deadline Date
        </label>
        <input
          type="date"
          onChange={() => {}}
          className="w-full p-[10px] text-[16px] bg-slate-100 rounded-xl "
          disabled
          value={newTask?.deadline}
        />
      </div>
      <div
        className="w-full flex flex-col justify-center h-fit rounded-xl bg-slate-600 shadow-2xl"
        style={{
          maxWidth: "360px",
          padding: "20px",
          minHeight: "300px",
          backgroundColor: "#475569",
        }}
      >
        <h3
          className="w-full h-full text-center flex flex-col justify-center text-[30px] text-white"
          style={{ lineHeight: "50px" }}
        >
          Project is {newTask?.status}
        </h3>
      </div>

      <div
        className="w-full flex flex-col justify-center h-fit rounded-xl shadow-2xl bg-red-400"
        style={{
          padding: "20px",
          minHeight: "300px",
          backgroundColor: newTask?.totalProgress > 50 ? "#60a5fa" : "#f87171",
          maxWidth: "calc(100% - 20px - 360px)",
        }}
      >
        <h3
          className="w-full h-full text-center flex flex-col justify-center text-[30px] text-white"
          style={{ lineHeight: "50px" }}
        >
          Total Progress is {newTask?.totalProgress}%
        </h3>
      </div>
      <div
        className="w-full p-[20px] flex gap-[20px] justify-evenly flex-wrap bg-white shadow-2xl rounded-2xl"
        style={{ maxWidth: "1120px" }}
      >
        <div
          className="w-1/2 min-w-[350px] text-[18px"
          style={{ width: "calc(50% - 10px)", minWidth: "350px" }}
        >
          <h3 className="w-full text-center text-[20px] text-slate-700">
            Download Files
          </h3>
          <br />
          <br />
          <div
            className="w-full flex flex-wrap justify-evenly gap-[10px] h-[320px] overflow-y-scroll customScroll"
            style={{ height: "320px" }}
          >
            {newTask?.files?.map((item, index) => (
              <a
                key={index}
                href={`/api/files${item?.name}`}
                className="w-full h-fit py-[5px] px-[20px] whitespace-nowrap truncate overflow-hidden shadow-lg justify-evenly text-[14px] bg-slate-100 hover:bg-slate-300 transition-all duration-300 rounded-2xl"
                style={{
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Download This File {index + 1}
              </a>
            ))}
          </div>
        </div>

        <div
          className="w-1/2 min-w-[350px] bg-slate-100 text-[16px] p-[20px] ronded-xl"
          style={{ width: "calc(50% - 10px)", minWidth: "350px" }}
        >
          <h2 className="text-gray-800 font-semibold">
            Additional Requirements
          </h2>
          <br />
          <textarea
            name="requirements"
            className="w-full h-[350px] p-[20px] text-[18px] rounded-xl bg-white my-[20px]"
            style={{ height: "350px" }}
            value={newTask?.requirements || "No Requirements"}
            onChange={() => {}}
            placeholder="Enter Additional Requirements"
            disabled
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-[20px] p-0">
        {Object.keys(newTask?.individualProgress)?.map((item, index) => {
          if (userName === item) {
            return (
              <div
                key={index}
                className="w-full rounded-3xl shadow-xl flex flex-wrap justify-center gap-[20px] p-[20px] text-white text-[16px]"
                style={{
                  backgroundColor:
                    newTask?.totalProgress > 50 ? "#60a5fa" : "#f87171",
                  maxWidth: "200px",
                }}
              >
                <br />
                <div
                  className="w-[100px] bg-transparent h-[100px] border-2 flex flex-col justify-center rounded-full text-[20px]"
                  style={{ borderColor: "white" }}
                >
                  <input
                    className="font-bold w-full text-center bg-transparent"
                    value={newTask?.individualProgress?.[item]}
                    onChange={(e) => {
                      const val = e?.target?.value;
                      const newIndis = { ...newTask?.individualProgress };
                      newIndis[item] = val;
                      setNewTask((prev) => ({
                        ...prev,
                        individualProgress: newIndis,
                      }));
                    }}
                  />
                </div>
                <br />
                <h2 className="w-fit font-semibold">{item}</h2>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="w-full rounded-3xl shadow-xl flex flex-wrap justify-center gap-[20px] p-[20px] text-white text-[16px]"
                style={{
                  backgroundColor:
                    newTask?.totalProgress > 50 ? "#60a5fa" : "#f87171",
                  maxWidth: "200px",
                }}
              >
                <br />
                <div
                  className="w-[100px] bg-transparent h-[100px] border-2 flex flex-col justify-center rounded-full text-[20px]"
                  style={{ borderColor: "white" }}
                >
                  <h2 className="font-bold w-full text-center">
                    {newTask?.individualProgress?.[item]}%
                  </h2>
                </div>
                <br />
                <h2 className="w-fit font-semibold">{item}</h2>
              </div>
            );
          }
        })}
      </div>
      <div className="w-full p-[20px] bg-white">
        <h3 className="text-[22px] text-gray-700">Updates</h3>
        <br />
        <div className="w-full">
          <textarea
            value={updates}
            onChange={(e) => {
              setUpdates(e?.target?.value);
            }}
            className="w-full p-[10px] resize-none border-2 rounded-xl text-[16px]"
            placeholder="Leave Updates"
            required
          />
        </div>
        <div className="w-full flex p-[20px] flex-col gap-[20px]">
          {
            newTask?.updates?.map((item, index)=>(
              <div className="w-full rounded-xl shadow-lg p-[20px] text-[16px]" key={index}>
                <h3>
                  {item?.member}
                </h3>
                <p>{item?.text}</p>
                {
                  item?.remarks?.map((main, idx)=>(
                    <div className="w-full h-fit p-[10px] rounded-3xl my-[10px] px-[30px] bg-slate-100" key={idx}><b>{"(Admin)"}</b> &nbsp;&nbsp;&nbsp; {main}</div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
      <div
        className="w-full flex gap-[20px] flex-wrap"
        style={{ maxWidth: "1120px" }}
      >
        <button
          type="submit"
          className="w-fit py-[5px] px-[20px] bg-blue-500 text-white text-[16px] rounded-2xl hover:bg-blue-500 transition-all duration-300"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddTask;
