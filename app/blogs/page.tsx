import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import BlogHolder from "@/Components/Holders/BlogHolder";
import BlogLoader from "@/Components/Loaders/BlogLoader";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";

const page = async () => {
  const serviceData = await getLists("blogs", 0, 18);

  return (
    <main className="pt-[8rem] min-h-screen bg-gradient-to-l from-red-200 to-blue-200">
      <Ads page={"blogs"} index={1} />
      <AnalyticsRequester id="" />
      <BlogHolder data={serviceData} isInfiniteScroll={false} isPage={true}>
        <Ads page={"blogs"} index={2} />
      </BlogHolder>
      <BlogLoader />
    </main>
  );
};

export default page;
