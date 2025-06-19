"use client";
import React, { useEffect, useState } from "react";
import AddAcc from "@/AdminComponents/Accounting/AddAcc";
import {getAccs} from "@/ApiRequest/GetData"
import Table from "./Table";
const TransactionsHolder = () => {
  const [data, setData] = useState([]);
  const handleDelete = async (index) => {
    const copy = [...data];
    copy.splice(index, 1);
    setData(copy);
  };

  const handleAdd = async (item) => {
    const year = item?.year;
    const month = item?.month;
    const date = item?.date;

    const currentYear = new Date().getFullYear().toString();
    console.log(currentYear);
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate().toString();

    if (year !== currentYear || month !== currentMonth.toString()) return;
    if (date == currentDate) {
      setData((prev) => [item, ...prev]);
      return;
    }

    const copy = [...data];

    let copyIdx = 0;

    for (let i = 0; i < copy?.length; i++) {
      if (copy[i]?.date === date) {
        copyIdx = i;
        break;
      }
    }

    copy.splice(copyIdx, 0, item);
    setData(copy);
  };

  const [date, setDate] = useState({
    year:new Date().getFullYear().toString(),
    month: (new Date().getMonth()+1).toString()
  })

  useEffect(()=>{
    const fetchData = async()=>{
      console.log("fetching...")
      const datas = await getAccs("transaction", date?.year, date?.month);;
      if(!datas) setData([]);
      setData(datas)
    }
    fetchData();
  },[date])

  return (
    <section
      className="w-full p-[20px] pl-[120px] flex align-top flex-wrap-reverse gap-[20px] justify-between"
      style={{ paddingLeft: "100px" }}
    >
      <Table data={data} handleDel={handleDelete} link={"/dashboard/account"}/>
      <AddAcc update={handleAdd} setDate={setDate} date={date}/>
    </section>
  );
};

export default TransactionsHolder;
