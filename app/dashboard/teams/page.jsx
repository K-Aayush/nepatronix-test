import { getLists } from "@/ApiRequest/GetData";
import React from "react";
import PortfolioList from "@/AdminComponents/Portfolio/PortfolioList"

const page = async () => {
  const data = await getLists("teams", 0, 0);
  return <main className="relative w-full min-h-screen pt-[80px]">
    <PortfolioList data={data}/>
  </main>;
};

export default page;
