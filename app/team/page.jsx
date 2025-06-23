import React from "react";
import DisplayTeam from "@/Components/Reusables/DisplayTeam";
import { getLists } from "@/ApiRequest/GetData";
import Slider from "@/Components/SliderComp/Slider";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";

const page = async () => {
  const data = (await getLists("teams", 0, 0)) || [];
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      <AnalyticsRequester id="teams" />
      <Slider data={data} length={data?.length}>
        {data?.map((item, idx) => (
          <DisplayTeam data={item} key={item._id || idx} />
        ))}
      </Slider>
    </main>
  );
};

export default page;
