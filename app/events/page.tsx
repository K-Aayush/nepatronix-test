import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getLists } from "@/ApiRequest/GetData";
import Ads from "@/Components/AdvComps/Ads";
import EventsHolder from "@/Components/Holders/EventsHolder";
import React from "react";

const page = async () => {
  const data = await getLists("events", 0, null);
  return (
    <main className="min-h-screen pt-[80px] pb-[80px] text-center">
      <Ads page={"events"} index={1} />
      <AnalyticsRequester id="" />
      <EventsHolder data={data} linker="events" />
    </main>
  );
};

export default page;
