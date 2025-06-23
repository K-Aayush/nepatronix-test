import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import TutHolders from "@/Components/Holders/TutHolders";
import TutorialHero from "@/Components/clientComponents/TutorialHero";

const Page = async () => {
  const serviceData = (await getLists("tutorials", 0, 18)) || [];

  return (
    <main className="pt-[8rem] min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900">
      <AnalyticsRequester id="" />
      <TutorialHero />
      <TutHolders oldData={serviceData || []} />
    </main>
  );
};

export default Page;
