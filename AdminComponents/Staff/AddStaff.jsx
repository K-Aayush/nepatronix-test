"use client";
import React, { useState } from "react";
import { postAdminData } from "@/ApiRequest/PostAdmin";

const AddStaff = ({ set }) => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    UID: "",
    monthlySalary: "",
    address: "",
    role:"user"
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postAdminData(JSON.stringify(data), "office");
      if (!response) {
        alert("Data Not Added!");
      } else {
        set((prev) => [data, ...prev]);
      }
    } catch (error) {
      console.error("Error adding data:", error);
      alert("An error occurred while adding data.");
    }
  };

  const defaultClass =
    "w-full max-w-[300px] p-[10px] border border-gray-800 rounded-xl bg-white text-[16px]";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[calc(100%-40px)] p-[20px] flex flex-wrap shadow-xl bg-white"
      style={{ gap: "20px", maxWidth:"calc(100% - 80px)", margin:"0 auto" }}
    >
      {Object.keys(data).map((item, index) => (
        item!=="role" &&
        <input
          type={item === "email" ? "email" : item === "monthlySalary" || item === "phone" ? "number" : "text"}
          name={item}
          value={data[item]}
          onChange={handleTextChange}
          key={index}
          className={defaultClass}
          placeholder={`Enter ${item}`}
          style={{maxWidth:"300px"}}
          required
        />
      ))}
      <select name="role" id="role" onChange={handleTextChange} value={data?.role} className={defaultClass} required>
        <option value="user">Staff</option>
        <option value="accountant">Accountant</option>
      </select>
      <button
        type="submit"
        className="w-fit bg-blue-500 text-white p-[10px] px-[30px] rounded-full text-[16px]"
      >
        Save Data
      </button>
    </form>
  );
};

export default AddStaff;