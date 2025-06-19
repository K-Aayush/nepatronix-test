"use client";
import { DelData } from "@/ApiRequest/DeleteReqs";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import { postData } from "@/ApiRequest/PostReqs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import DownLoadVat from "./DownLoadVat";
import EstimateBill from "./EstimateBill";

const Inventory = ({ oldData, id, url }) => {
  const [data, setData] = useState(
    oldData || {
      company: "",
      billType: "",
      billNo: "",
      type: "purchase",
      date: "",
      total: 0,
      contact:"",
      address:"",
      items: [],
    }
  );

  const [item, setItem] = useState({
    name: "",
    qty: "",
    price: "",
    discount: "",
    vat: "",
  });

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTotal = (inner) => {
    const price = parseInt(inner?.price);
    const qty = parseInt(inner?.qty);
    const discount = parseFloat(inner?.discount || "0");
    const vat = parseFloat(inner?.vat || "0");
    const initial = price * qty;
    const discounted_price = initial - initial * (discount / 100);
    const final = discounted_price + discounted_price * (vat / 100);
    return Math.round(final);
  };

  const handleItem = () => {
    if (!item?.name || !item?.qty || !item?.price) return;
    const items = [...data?.items];
    items.unshift(item);

    const ttl = handleTotal(item);
    setData((prev) => ({ ...prev, items, total: data?.total + ttl }));
    return setItem({
      name: "",
      qty: "",
      price: "",
      discount: "",
      vat: "",
    });
  };

  const redirect = useRouter()

  const handleDel = async()=>{
    const confirm = window.confirm("Delete This Item!")
    if(!confirm) return
    const deleted = await DelData("transaction/billings", id);
    if(deleted){
      redirect.push(`/${url}/billings`)
    }
    else{
      return alert("Could Not Delete!")
    }
  }

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const stringified = JSON.stringify(data);
    if (id) {
      const posted = await putAdmin(stringified, "transaction/billings", id);

      if (!posted) return alert("Data could not be added");
      else {
        alert("Added Successfully");
        return window.location.reload();
      }
    } else {
      const posted = await postData(stringified, "transaction/billings");

      if (!posted) return alert("Data could not be added");
      else {
        alert("Added Successfully");
        return window.location.reload();
      }
    }
  };

  return (
    <div
      className="w-full max-w-[1000px] mx-auto"
      style={{ maxWidth: "1000px" }}
    >
      <h2 className="w-full text-[22px] text-slate-700">Add Inventory</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-wrap gap-[15px] text-slate-800"
        style={{ gap: "10px" }}
      >
        <input
          type="text"
          value={data?.company}
          name="company"
          className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
          style={{ borderColor: "gray" }}
          placeholder="Enter Company"
          onChange={handleChange}
        />
        <select
          name="billType"
          style={{ borderColor: "gray" }}
          required
          value={data?.billType}
          className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
          onChange={handleChange}
          id=""
        >
          <option value="">Select bill type</option>
          <option value="vat">Vat</option>
          <option value="pan">Pan</option>
        </select>
        <input
          type="text"
          value={data?.billNo}
          name="billNo"
          className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
          style={{ borderColor: "gray" }}
          placeholder="Enter Bill No."
          onChange={handleChange}
        />
        <input
          type="text"
          value={data?.contact}
          name="contact"
          className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
          style={{ borderColor: "gray" }}
          placeholder="Enter Contact No."
          onChange={handleChange}
        />
        <input
          type="text"
          value={data?.address}
          name="address"
          className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
          style={{ borderColor: "gray" }}
          placeholder="Enter address."
          onChange={handleChange}
        />
        <select
          name="type"
          style={{ borderColor: "gray" }}
          required
          value={data?.type}
          className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
          onChange={handleChange}
          id=""
        >
          <option value="purchase">Purchase</option>
          <option value="sales">Sales</option>
        </select>{" "}
        <input
          type="date"
          value={data?.date}
          name="date"
          className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
          style={{ borderColor: "gray" }}
          placeholder="Enter Bill No."
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-fit py-[2.5px] px-[20px] text-white text-[16px] bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl"
        >
          Submit
        </button>{id&&
        <button
          type="button"
          onClick={handleDel}
          className="w-fit py-[2.5px] px-[20px] text-white text-[16px] bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-xl"
        >
          Delete
        </button>}
        <div className="w-full h-0"></div>
        {
          id && data?.type==="sales"&&<DownLoadVat data={data}/>
        }
        {
          id && data?.type==="sales"&&<EstimateBill data={data}/>
        }
        <h3 className="w-fit text-[16px]">Total : Rs,{data?.total}</h3>
        <div className="w-full py-[20px]">
          <div className="w-full flex flex-wrap gap-[20px]">
            <input
              type="text"
              value={item?.name}
              name="name"
              className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
              style={{ borderColor: "gray" }}
              placeholder="Enter Name."
              onChange={handleItemChange}
            />{" "}
            <input
              type="number"
              value={item?.qty}
              name="qty"
              className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
              style={{ borderColor: "gray" }}
              placeholder="Enter Quantity."
              onChange={handleItemChange}
            />{" "}
            <input
              type="number"
              value={item?.price}
              name="price"
              className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
              style={{ borderColor: "gray" }}
              placeholder="Enter Price."
              onChange={handleItemChange}
            />
            <input
              type="number"
              value={item?.discount}
              name="discount"
              className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
              style={{ borderColor: "gray" }}
              placeholder="Enter Discount %."
              onChange={handleItemChange}
            />
            <input
              type="number"
              value={item?.vat}
              name="vat"
              className="W-[100px] px-[10px] py-[2.5px] text-[16px] border-2 rounded-xl"
              style={{ borderColor: "gray" }}
              placeholder="Enter Vat %."
              onChange={handleItemChange}
            />
            <button
              type="button"
              onClick={handleItem}
              className="w-fit py-[2.5px] px-[20px] text-white text-[16px] bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl"
            >
              Add
            </button>
          </div>
          <div className="w-full text-[16px]" style={{ padding: "40px 0" }}>
            <table className="w-full bg-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-700 text-white">
                <tr>
                  <th className="p-[10px]">Item name</th>
                  <th className="p-[10px]">Quantity</th>
                  <th className="p-[10px]">Price</th>
                  <th className="p-[10px]">Discount {"%"}</th>
                  <th className="p-[10px]">Vat {"%"}</th>
                  <th className="p-[10px]">Total</th>
                  <th className="p-[10px]">Delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.items?.map((itm, idx) => (
                  <tr key={idx} className="even:bg-slate-300 odd:bg-slate-100">
                    <td className="p-[10px] text-center">{itm?.name}</td>
                    <td className="p-[10px] text-center">{itm?.qty}</td>
                    <td className="p-[10px] text-center">{itm?.price}</td>
                    <td className="p-[10px] text-center">
                      {itm?.discount || 0}
                    </td>
                    <td className="p-[10px] text-center">{itm?.vat || 0}</td>
                    <td className="p-[10px] text-center">{handleTotal(itm)}</td>
                    <td className="p-[10px] text-center">
                      <button
                        type="button"
                        onClick={() => {
                          const newItem = [...data?.items];
                          const dataInd = data?.items?.[idx];
                          newItem.splice(idx, 1);
                          const totl = handleTotal(dataInd);
                          setData((prev) => ({
                            ...prev,
                            items: newItem,
                            total: data?.total - totl,
                          }));
                        }}
                        className="w-full p-[10px] bg-red-500 text-center flex justify-center hover:bg-red-600 text-white transition-all text-[12px] duration-300 rounded-full"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inventory;
