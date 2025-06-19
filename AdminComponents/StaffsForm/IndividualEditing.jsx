"use client";
import { DelData } from "@/ApiRequest/DeleteReqs";
import { postAdminData, putAdmin } from "@/ApiRequest/PostAdmin";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

function isObject(data) {
  console.log(typeof data)
  return data !== null && typeof data === 'object' && !Array.isArray(data);
}



const IndividualEditing = ({ data, method, allMembers }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    members: [],
    startingDate: "",
    status: "ongoing",
    deadline: "",
    description: "",
    newFiles: [],
    files: [],
    updates: [],
    requirements: "",
    totalProgress: 0,
    individualProgress: {},
  });

  const redirector = useRouter();
  useEffect(() => {
    if (data && Object.keys(data)?.length > 0) {
      const newData = { ...data };
      newData.newFiles = [];
      setNewTask(newData);
    }
  }, [data]);

  const handleText = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };
  const assignMembers = (e) => {
    const name = e?.target?.value;
    const members = [...newTask?.members];
    const indiProg = { ...newTask?.individualProgress };
    if (members?.includes(name) && indiProg?.[name]) {
      return (e.target.value = "");
    }
    indiProg[name] = 0;
    members.push(name);
    setNewTask((prev) => ({
      ...prev,
      members: members,
      individualProgress: indiProg,
    }));

    return (e.target.value = "");
  };

  const handleDelMember = (idx) => {
    const members = [...newTask?.members];
    const prog = { ...newTask?.individualProgress };
    const name = members[idx];
    delete prog?.[name];
    members?.splice(idx, 1);
    setNewTask((prev) => ({
      ...prev,
      members: members,
      individualProgress: prog,
    }));
    return;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if(newTask?.members?.length===0)return alert ("Members Required")
    const form = new FormData();
    //  append data
    for (const key in newTask) {
      if (key === "newFiles") {
        const allFiles = [...newTask?.newFiles];
        if (allFiles.length > 0) {
          for (let i = 0; i < allFiles?.length; i++) {
            form.append(`newFile${i}`, allFiles?.[i]);
          }
          form.append("newFiles", allFiles?.length);
        } else {
          form.append("newFiles", 0);
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

    if (method === "POST") {
      const post = await postAdminData(form, "tasks");
      if (!post) return alert("Data Could Not be Posted!");
      window.location.reload();
    } else if (method === "PUT") {
      const post = await putAdmin(form, "tasks", data?._id);
      if (!post) return alert("Data Could Not be Edited!");
      window.location.reload();
    } else {
      return alert("UnAuthorized!");
    }
  };

  const fileRef = useRef(null);
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
        <input
          type=""
          name="title"
          value={newTask?.title}
          className="w-full p-[10px] text-[30px] text-gray-600"
          onChange={handleText}
          placeholder="Enter Title"
          required
        />
        <br />
        <textarea
          name="description"
          value={newTask?.description}
          id=""
          onChange={handleText}
          className="w-full focus:outline-none outline-none outline-white text-[18px] text-gray-800 p-[10px] resize-none h-[150px]"
          placeholder="Enter Description"
        />
      </div>
      <div
        className="w-full max-w-[700px] bg-white rounded-2xl shadow-2xl flex p-[20px] flex-wrap"
        style={{ maxWidth: "360px" }}
      >
        <select
          defaultValue={""}
          onChange={assignMembers}
          className="w-full p-[10px] h-fit rounded-xl border-black bg-slate-100 text-black border-2 text-[16px]"
          style={{ borderColor: "black" }}
        >
          <option value={""}>Select Member</option>
          {Array.isArray(allMembers) &&
            allMembers?.map((item, index) => (
              <option value={item?.fullname} key={index}>
                {item?.fullname}
              </option>
            ))}
        </select>
        {Array.isArray(newTask?.members) &&
          newTask?.members?.map((item, insx) => (
            <button
              type="button"
              onClick={() => {
                handleDelMember(insx);
              }}
              key={insx}
              className="w-fit text-[12px] align-top h-fit border text-black bg-slate-200 rounded-full py-[2px] px-[10px] flex gap-[5px]"
            >
              {item} <IoMdClose style={{ margin: "8px 5px" }} />
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
          Select Starting Date
        </label>
        <input
          type="date"
          name="startingDate"
          className="w-full p-[10px] text-[16px] bg-slate-100 rounded-xl "
          value={newTask?.startingDate}
          onChange={handleText}
        />
        <br />
        <br />
        <label
          htmlFor="startingDate"
          className="text-[14px] text-gray-700 font-medium"
        >
          Select Deadline Date
        </label>
        <input
          type="date"
          name="deadline"
          className="w-full p-[10px] text-[16px] bg-slate-100 rounded-xl "
          value={newTask?.deadline}
          onChange={handleText}
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
        className="w-full p-[20px] flex gap-[20px] justify-evenly  flex-wrap bg-white shadow-2xl rounded-2xl"
        style={{ maxWidth: "1120px" }}
      >
        <div
          className="w-1/2 min-w-[350px] text-[18px"
          style={{ width: "calc(50% - 10px)", minWidth: "350px" }}
        >
          <button
            type="button"
            className="w-full bg-slate-100 text-gray-800 p-[10px] rounded-full border-dashed border-2  text-[16px]"
            onClick={() => {
              fileRef?.current?.click();
            }}
          >
            Choose Files
          </button>
          <input
            type="file"
            multiple
            accept="*"
            className="hidden"
            ref={fileRef}
            onChange={(e) => {
              const files = e?.target?.files;
              if (!files || files?.length < 0) return;
              const oldFile = [...newTask?.newFiles];
              for (const itemsWithin of files) {
                oldFile.push(itemsWithin);
              }
              setNewTask((prev) => ({ ...prev, newFiles: oldFile }));
            }}
          />
          <br />
          <br />
          <br />
          <div
            className="w-full flex flex-wrap justify-evenly gap-[10px] h-[320px] overflow-y-scroll customScroll"
            style={{ height: "320px" }}
          >
            {newTask?.files?.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  const files = [...newTask?.files];
                  files.splice(index, 1);
                  setNewTask((prev) => ({ ...prev, files }));
                }}
                type="button"
                className="w-full h-fit py-[5px] px-[20px] whitespace-nowrap truncate overflow-hidden shadow-lg justify-evenly text-[14px] bg-slate-100 hover:bg-slate-300 transition-all duration-300 rounded-2xl"
                style={{
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item?.name}
              </button>
            ))}
            {newTask?.newFiles?.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  const files = [...newTask?.newFiles];
                  files.splice(index, 1);
                  setNewTask((prev) => ({ ...prev, newFiles: files }));
                }}
                type="button"
                className="w-full h-fit py-[5px] px-[20px] whitespace-nowrap truncate overflow-hidden shadow-lg justify-evenly text-[14px] bg-slate-100 hover:bg-slate-300 transition-all duration-300 rounded-2xl"
                style={{
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item?.name}
              </button>
            ))}
          </div>
        </div>

        <div
          className="w-1/2 min-w-[350px] bg-slate-100 text-[16px] p-[20px] ronded-xl"
          style={{ width: "calc(50% - 10px)", minWidth: "350px" }}
        >
          <h2 className="text-gray-800 font-semibold">
            Enter Additional Requirements
          </h2>
          <br />
          <textarea
            name="requirements"
            className="w-full h-[350px] p-[20px] text-[18px] rounded-xl bg-white my-[20px]"
            style={{ height: "350px" }}
            onChange={handleText}
            placeholder="Enter Additional Requirements"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-[20px] p-0">
        {isObject(newTask?.individualProgress) && Object?.keys(newTask?.individualProgress)?.map((item, index) => (
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
        ))}
      </div>
      <div className="w-full flex flex-col text-slate-700 p-[20px] bg-white r text-[22px] gap-[20px] rounded-xl">
        <h3 className="w-full font-semibold">Updates</h3>
        {newTask?.updates?.map((item, index) => (
          <div
            key={index}
            className="w-full bg-slate-100 p-[20px] text-[16px] font-medium"
          >
            {"(" + item?.member + ")"} &nbsp; &nbsp; {item?.text}
            <br />
            <br />
            <textarea
              name=""
              id=""
              className="w-full p-[10px] border-2 resize-none rounded-2xl"
              placeholder="Add your comment as an Admin"
              value={item?.remarks[0]}
              onChange={(e) => {
                const val = e?.target?.value;
                const fullData = { ...item };
                const remark = [val];
                fullData.remarks = remark;
                const updates = [...newTask?.updates];
                updates.splice(index, 1, fullData);
                setNewTask((prev) => ({ ...prev, updates: updates }));
              }}
            />
          </div>
        ))}
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
        {method !== "POST" && (
          <button
            onClick={async () => {
              const deleted = await DelData("tasks", data?._id);
              if (!deleted) return alert("Could Not Delete");

              redirector.push("/dashboard/tasks");
            }}
            type="button"
            className="w-fit py-[5px] px-[20px] bg-red-500 text-white text-[16px] rounded-2xl hover:bg-red-500 transition-all duration-300"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default IndividualEditing;
