import React from "react";
import ServiceHolder from "@/Components/Holders/ServiceHolder";
import { getLists } from "@/ApiRequest/GetData";
import ServLoader from "@/Components/Loaders/ServLoader";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";

const page = async () => {
  const serviceData = await getLists("services", 0, null);

  return (
    <main className="pt-[8rem]  bg-[#daeeff] ">
      <AnalyticsRequester id="" />

      <Ads page={"services"} index={1} />
      <ServiceHolder data={serviceData} isInfiniteScroll={false} isPage={true}>
        <Ads page={"services"} index={2} />
      </ServiceHolder>
      <ServLoader />
    </main>
  );
};

export default page;
