import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import StoryHolder from "@/Components/Holders/StoryHolder";
import StoryLoader from "@/Components/Loaders/StoryLoader";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";

const page = async () => {
  const serviceData = await getLists("client-blogs", 0, 18);

  return (
    <main className="pt-[8rem] min-h-screen bg-gradient-to-l from-red-200 to-blue-200">
      <Ads page={"stories"} index={1} />
      <AnalyticsRequester id="" />
      <StoryHolder data={serviceData} isInfiniteScroll={false} isPage={true}>
        <Ads page={"stories"} index={2} />
      </StoryHolder>
      <StoryLoader />
    </main>
  );
};

export default page;
