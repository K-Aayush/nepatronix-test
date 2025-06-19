"use client";
import { postAndRecieve } from "@/ApiRequest/PostAdmin";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AddAcc = ({ update, setDate, date }) => {
  const [data, setData] = useState({
    type: "expense",
    expenseType: "",
    incomeType: "",
    year: `${new Date().getFullYear()}`,
    month: `${new Date().getMonth() + 1}`,
    date: `${new Date().getDate()}`,
    amount: 0,
    remarks: "",
    discount: 0,
    vat: 0,
    panNo: "",
    vatNo: "",
    companyName: "",
    contact: "",
    address: "",
  });

  const [openForm, setOpenForm] = useState(true);

  const handleText = (e) => {
    const { name, value } = e?.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const change = {
    exp: [
      "purchase",
      "administrative",
      "miscellaneous",
      "repairing",
      "advertisement",
    ],
    inc: ["sales", "classes"],
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const posted = await postAndRecieve(JSON.stringify(data), "transaction");
    if (!posted?.success) return alert("Could Not add transaction!");
    return window.location.reload()
  };

  const handleDateChange = (e) => {
    const { name, value } = e?.target;
    setDate((prev) => ({ ...prev, [name]: value }));
  };
  const genYears = () => {
    const currentYear = new Date().getFullYear();
    const smallestYear = 2020;
    const years = [];
    for (let year = smallestYear; year <= currentYear; year++) {
      years.push(year);
    }
    return years.reverse();
  }
  
  {genYears().map((year, idx) => (
    <option key={idx} value={year.toString()}>{year}</option>
  ))}
  
  return (
    <div className="w-full" style={{ maxWidth: "380px" }}>
    <div className="w-full py-[15px] flex flex-wrap justify-evenly bg-white rounded-3xl shadow-2xl">
      <select
        name="year"
        id=""
        className="w-[150px] p-[10px] text-[16px]"
        value={date?.year}
        onChange={handleDateChange}
      >
       {genYears().map((year, idx) => (
<option key={idx} value={year.toString()}>{year}</option>
))}
      </select>
    <select
        name="month"
        id=""
        className="w-[150px] p-[10px] text-[16px]"
        value={date?.month}
        onChange={handleDateChange}
      >
        {Array.from(Array(12))?.map((_, item) => (
          <option key={item} value={(item + 1).toString()}>{item + 1}</option>
        ))}
      </select>
    </div>
       
       <br />
      <form
        onSubmit={handleSubmit}
        className="w-full p-[20px] text-[14px] flex flex-wrap gap-[20px] bg-white rounded-2xl shadow-xl justify-between overflow-hidden"
        style={{
          maxWidth: "380px",
          height: "fit-content",
          height: openForm ? "fit-content" : "70px",
          transition: "0.5s",
        }}
      >
        <h2
          className="w-full cursor-pointer p-[0px]text-[16px] text-gray-800 font-semibold flex justify-between hover:bg-slate-200 transition-all duration-300"
          onClick={() => {
            setOpenForm((prev) => !prev);
          }}
        >
          Make Transactions{" "}
          {!openForm ? (
            <FaAngleDown style={{ marginTop: "5px" }} />
          ) : (
            <FaAngleUp style={{ marginTop: "5px" }} />
          )}
        </h2>
        <input
          name="year"
          type="text"
          value={data?.year}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          style={{ maxWidth: "100px" }}
          placeholder="Year"
          required
        />
        <input
          name="month"
          type="text"
          value={data?.month}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          style={{ maxWidth: "100px" }}
          placeholder="Month"
          required
        />
        <input
          name="date"
          type="text"
          value={data?.date}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          style={{ maxWidth: "100px" }}
          placeholder="Date"
          required
        />
        <input
          name="panNo"
          type="text"
          value={data?.panNo}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          placeholder="Pan.No"
        />
        <input
          name="vatNo"
          type="text"
          value={data?.vatNo}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          placeholder="Vat.No"
        />
        <input
          name="companyName"
          type="text"
          value={data?.companyName}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          placeholder="Company Name"
          required
        />
        <input
          name="address"
          type="text"
          value={data?.address}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          placeholder="Company Address"
          required
        />
        <input
          name="contact"
          type="text"
          value={data?.contact}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          placeholder="Contact No."
          required
        />
        <select
          name="type"
          type="text"
          value={data?.type}
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          required
        >
          <option value={"expense"}>Expense</option>
          <option value={"income"}>Income</option>
        </select>

        <select
          name={data?.type === "expense" ? "expenseType" : "incomeType"}
          type="text"
          value={
            data?.type === "expense" ? data?.expenseType : data?.incomeType
          }
          onChange={handleText}
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
          placeholder="Date"
          required
        >
          <option value="">Select {data?.type}s</option>
          {change?.[data?.type === "expense" ? "exp" : "inc"]?.map(
            (item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            )
          )}
        </select>
        <div className="w-full flex gap-[20px]">
          <label htmlFor="amount" className="py-[10px] w-[150px]">
            Amount
          </label>
          <input
            name="amount"
            type="number"
            value={data?.amount}
            onChange={handleText}
            className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
            placeholder="Amount"
            required
          />
        </div>
        <div className="w-full flex gap-[20px]">
          <label htmlFor="discount" className="py-[10px] w-[150px]">
            {"Discount %"}
          </label>
          <input
            name="discount"
            type="number"
            value={data?.discount}
            onChange={handleText}
            className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
            placeholder="Discount"
            required
          />
        </div>
        <div className="w-full flex gap-[20px]">
          <label htmlFor="vat" className="py-[10px] w-[150px]">
            {"Vat %"}
          </label>
          <input
            name="vat"
            type="number"
            value={data?.vat}
            onChange={handleText}
            className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg"
            placeholder="Vat"
            required
          />
        </div>

        <textarea
          name="remarks"
          className="w-full px-[5px] py-[2px] text-[8px] border-2 rounded-lg resize-none"
          required
          placeholder="Remarks"
          onChange={handleText}
          value={data?.remarks}
          id=""
          maxLength={40}
        />
        <button className="w-fit px-[20px] pyx-[5px] py-[2px] text-[8px] text-white transition-all duration-300 bg-blue-500 hover:bg-blue-600 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAcc;
