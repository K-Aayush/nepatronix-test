"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {changePwd} from "../requests/RequestData"

const StaffPwd = () => {
  const [passwords, setPasswords] = useState({
    oldPwd: "",
    newPwd: "",
    rePwd: "",
  });

  const redirect = useRouter();

  const hanlePwd = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handler = async (e) => {
    e.preventDefault();
    if (passwords?.newPwd !== passwords?.rePwd) {
      return alert("New Passwords didn't match!");
    }
    const res = await changePwd (JSON.stringify(passwords), "staffLogin", "");
    if (!res) {
      return alert("Something Went Wrong! Check Password and your Auth Token!");
    } else {
      alert("Password Edited Successfully!");
      return redirect.push("/profile");
    }
  };

  return (
    <form
      className="absolute w-full p-[20px] max-w-[400px] text-center bg-white top-1/2 left-1/2"
      style={{
        maxWidth: "400px",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 10px rgba(0,0,0,0.25)",
      }}
      onSubmit={handler}
    >
      <h1 className="text-[25px] text-gray-800 font-semibold">
        Change Password
      </h1>
      <br />
      <input
        name="oldPwd"
        type="text"
        className="w-full rounded-xl border-2 p-[10px] text-[16px] border-gray-800"
        value={passwords?.oldPwd}
        onChange={hanlePwd}
        placeholder="Enter Old Password"
        required
      />
      <br />
      <br />
      <input
        name="rePwd"
        type="password"
        className="w-full rounded-xl border-2 p-[10px] text-[16px] border-gray-800"
        value={passwords?.rePwd}
        onChange={hanlePwd}
        placeholder="Enter New Password"
        required
      />
      <br />
      <br />
      <input
        name="newPwd"
        type="text"
        className="w-full rounded-xl border-2 p-[10px] text-[16px] border-gray-800"
        value={passwords?.newPwd}
        onChange={hanlePwd}
        placeholder="Re-Enter New Password"
        required
      />
      <br />
      <br />
      <button
        type="submit"
        className="w-full rounded-xl  p-[10px] text-[16px] text-white bg-blue-500 font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default StaffPwd;
