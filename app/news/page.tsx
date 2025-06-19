import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import NewsLoader from "@/Components/news/NewsLoader"
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";

const page = async () => {
  const serviceData = await getLists("news", 0, 8);

  return (
    <main className="relative min-h-screen bg-gradient-to-l pt-[120px] bg-white">
      <AnalyticsRequester id=""/>
      <Ads page={"news"} index={1}/>
      <h1 className="w-full text-[50px] font-bold text-center text-gray-800">READ NEWS</h1>
      <Ads page={"news"} index={2}/>
      <NewsLoader data={serviceData}></NewsLoader>
    </main>
  );
};

export default page;
