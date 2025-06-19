"use client";
import React, { useEffect, useState } from "react";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import { DelData } from "@/ApiRequest/DeleteReqs";

const EditStaff = ({ item }) => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    UID: "",
    monthlySalary: "",
    address: "",
    role:"user"
  });

  console.log(data)

  useEffect(() => {
    if (item) {
      for (const datas in item) {
        if (datas !== "attendance" && datas!== "_id" && datas !== "__v") {
          setData((prev) => ({ ...prev, [datas]: item?.[datas] }));
        }
      }
    }
  }, [item]);

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
      const response = await putAdmin(
        JSON.stringify(data),
        "office",
        item?._id
      );
      if (!response) {
        alert("Data Not Added!");
      } else {
        return;
      }
    } catch (error) {
      console.error("Error adding data:", error);
      alert("An error occurred while adding data.");
    }
  };

  const defaultClass =
    "w-full max-w-[300px] p-[10px] border border-gray-800 rounded-xl bg-white text-[16px]";

  const handleDelete = async () => {
    const deleted = await DelData("office", item?._id);
    if (deleted) return window.location.reload();
    return alert("Could Not Delete!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[calc(100%-40px)] p-[20px] flex flex-wrap shadow-xl bg-white"
      style={{ gap: "20px", maxWidth: "calc(100% - 80px)", margin: "0 auto" }}
    >
      {data &&
        Object?.keys(data)?.map((item, index) =>
          item !== "attendance" && item!=="role"? (
            <input
              type={
                item === "email"
                  ? "email"
                  : item === "monthlySalary" || item === "phone"
                  ? "number"
                  : "text"
              }
              name={item}
              value={data[item]}
              onChange={handleTextChange}
              key={index}
              className={defaultClass}
              placeholder={`Enter ${item}`}
              style={{ maxWidth: "300px" }}
              required
            />
          ) : null
        )}
         <select name="role" id="role" onChange={handleTextChange} value={data?.role} className={defaultClass} required>
        <option value="user">Staff</option>
        <option value="accountant">Accountant</option>
      </select>
      <button
        type="submit"
        className="w-fit bg-blue-500 text-white p-[10px] px-[30px] rounded-full text-[16px]"
      >
        Save Changes
      </button>
      <button
        onClick={handleDelete}
        type="button"
        className="w-fit bg-red-500 text-white p-[10px] px-[30px] rounded-full text-[16px]"
      >
        Delete
      </button>
    </form>
  );
};

export default EditStaff;
