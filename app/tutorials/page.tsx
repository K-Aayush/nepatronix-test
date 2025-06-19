import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import TutHolders from "@/Components/Holders/TutHolders";
import Link from "next/link";

const page = async () => {
  const serviceData = (await getLists("tutorials", 0, 18)) || [];

  return (
    <main className="pt-[8rem] min-h-screen bg-gradient-to-l from-red-200 to-blue-200">
      <AnalyticsRequester id="" />
      <br />
      <br />
      <div className="w-full flex flex-wrap justify-evenly gap-[20px]">
        <h1 className="font-bold text-8xl text-[#2c1b3d]">Tutorials</h1>
        <Link
          href={`https://www.youtube.com/@razushrestha3518`}
          className="w-fit text-[20px] rounded-xl bg-red-500 h-fit text-white px-[20px] font-medium py-[10px] transition-all duration-300 hover:bg-red-600"
          target="_blank"
        >
          Subscribe
        </Link>
      </div>

      <br />
      <br />
      <TutHolders oldData={serviceData || []} />
    </main>
  );
};

export default page;
