import { DelData } from "@/ApiRequest/DeleteReqs";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const Table = ({ data, handleDel, link }) => {
  const calculate = (amt, discount, vat) => {
    const discounted = amt - (amt * discount) / 100;
    const vatted = discounted + (discounted * vat) / 100;
    return vatted;
  };

  const deletes = async (id, index) => {
    const deleted = await DelData("transaction", id);
    if (deleted) handleDel(index);
    else return alert("Could Not Delete!");
  };

  const nav = useRouter();

  return (
    <div className="w-full" style={{ maxWidth: "800px" }}>
      <table
        className="w-full border-collapse max-w-[1000px] h-fit bg-white"
        style={{ maxWidth: "800px" }}
      >
        <thead>
          <tr>
            <th className="p-[5px] text-[12px] border">Date</th>
            <th className="p-[5px] text-[12px] border capitalize">
              Expense Type
            </th>
            <th className="p-[5px] text-[12px] border capitalize">
              Income Type
            </th>
            <th className="p-[5px] text-[12px] border">Initial Amount</th>
            <th className="p-[5px] text-[12px] border">Discount in {"%"}</th>
            <th className="p-[5px] text-[12px] border">Vat in {"%"}</th>
            <th className="p-[5px] text-[12px] border">Final Amount</th>
            <th className="p-[5px] text-[12px] border">Remarks</th>
            <th className="p-[5px] text-[12px] border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className="border-t text-center h-fit cursor-pointer transition-all duration-300 hover:bg-slate-200"
            >
              <td className="p-[5px] text-[12px] border">
                {item?.year}-{item?.month}-{item?.date}
              </td>
              <td className="p-[5px] text-[12px] border">
                {item?.expenseType}
              </td>
              <td className="p-[5px] text-[12px] border">{item?.incomeType}</td>
              <td className="p-[5px] text-[12px] border">{item?.amount}</td>
              <td className="p-[5px] text-[12px] border">{item?.discount}</td>
              <td className="p-[5px] text-[12px] border">{item?.vat}</td>
              <td className="p-[5px] text-[12px] border">
                {calculate(item?.amount, item?.discount, item?.vat)}
              </td>
              <td className="p-[5px] text-[12px] border">{item?.remarks}</td>
              <td className="text-[12px] border">
                <button
                  onClick={() => {
                    deletes(item?._id);
                  }}
                  className="w-full h-full flex  flex-col justify-center bg-transparent text-center text-[16px] text-red-400 transition-all duration-300 hover:text-red-500"
                >
                  <span className="w-full flex justify-center">
                    <FaTrash />
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
