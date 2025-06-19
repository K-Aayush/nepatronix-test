"use client";
import React, { useState } from "react";
import { loginStaff } from "../requests/LoginStaff";
import { useRouter } from "next/navigation";

const StaffLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleTxt = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const route = useRouter();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const isLoggedIn = await loginStaff(JSON.stringify(data));
    if(!isLoggedIn.success) return alert(isLoggedIn?.msg);
    return route.push(`/profile`)
  }

  return (
    <form
      className="w-full p-[20px] shadow-2xl rounded-xl text-center"
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 className="text-gray-800 text-[30px] font-bold">Login</h1>
      <br />
      <input
        value={data?.email}
        type="email"
        name="email"
        onChange={handleTxt}
        className="w-full p-[10px] text-[16px] text-center border-2 rounded-xl"
        placeholder="Enter email"
      />
      <br />
      <br />
      <input
        value={data?.password}
        type="password"
        name="password"
        onChange={handleTxt}
        className="w-full p-[10px] text-[16px] border-2 rounded-xl text-center"
        placeholder="Enter Password"
        required
      />
      <br />
      <br />
      <button type="submit" className="w-full p-[10px] rounded-xl text-[16px] bg-blue-500 text-white">
        Submit
      </button>
    </form>
  );
};

export default StaffLogin;
