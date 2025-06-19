import React from "react";
import DisplayTeam from "@/Components/Reusables/DisplayTeam";
import { getLists } from "@/ApiRequest/GetData";
import Slider from "@/Components/SliderComp/Slider";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";

const page = async () => {
  const data = await getLists("teams", 0, 0);
  return (
    <main className="min-h-fit pt-20 bg-gray-100">
      <AnalyticsRequester id="teams"/>
      <Slider data={data} length={data?.length}>
        {data?.map((item, idx) => (
          <DisplayTeam data={item} key={idx} />
        ))}
      </Slider>
    </main>
  );
};

export default page;
