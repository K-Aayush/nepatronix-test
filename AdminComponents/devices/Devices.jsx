"use client";
import React, { useEffect, useState } from "react";

import { getLists } from "../../ApiRequest/GetData";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import { FaTrash } from "react-icons/fa";
import { DelData } from "@/ApiRequest/DeleteReqs";

const Devices = () => {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    const gets = async () => {
      const data = await getLists("office/attendance", 0, 0);
      if (data) setDevices(data);
    };
    gets();
  }, []);

  console.log(devices);

  const handleSubmission=async(e)=>{
    e.preventDefault();
    const vals =e?.target?.device?.value
      const data = JSON.stringify({
        device_uid: e?.target?.device?.value
      });
     const res = await putAdmin(data, "office","attendance")
     if(res){
        setDevices((prev)=>([{device_uid:vals},...prev]));
        return e.target.device.value = ""
     }else{
        return alert("Could Not add device!")
     }
  }

  const handleDel = async(id, index)=>{
    const deleted = await DelData("office/attendance", id)
    if(deleted){
      const copy = [...devices];
      copy.splice(index, 1);
      setDevices(copy)
    }else{
        return alert ("Could not Delete device!")
    }
  }

  return <div className="w-full flex flex-wrap py-[30px] px-[40px] gap-[20px]">
    <h1 className="w-full text-gray-800 text-[20px] font-semibold">Devices:</h1>
    <form onSubmit={handleSubmission} className="w-full max-w-[300px] flex" style={{maxWidth:"300px"}}>
        <input id="device" type="text" className="w-full p-[5px] text-[16px] border-2" placeholder="New Device" />
        <button type={"submit"} className="w-fit px-[20px] bg-blue-500 transition-all duration-300 hover:bg-blue-600 text-white">Add</button>
    </form>
    {
    Array?.isArray(devices) && devices?.map((item, index)=>(
        <div onSubmit={handleSubmission} className="w-full max-w-[300px] flex" style={{maxWidth:"300px"}} key={index}>
        <h2 id="device"className="w-full p-[5px] text-[16px] border-2">{item?.device_uid}</h2>
        <button onClick={()=>{
            handleDel(item?.device_uid, index)
        }} type={"button"} className="w-fit px-[20px] bg-red-400 transition-all duration-300 hover:bg-red-500 text-white"><FaTrash/></button>
    </div>
    ))
    }
  </div>;
};

export default Devices;
