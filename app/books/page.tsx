import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import BookHolder from "@/Components/Holders/BookHolder";
import BookLoader from "@/Components/Loaders/BookLoader";
import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import Ads from "@/Components/AdvComps/Ads";

const page = async () => {
  const serviceData = await getLists("books", 0, null);

  return (
    <main className="pt-[8rem] min-h-screen bg-gradient-to-tr  from-black via-indigo-900 to-black">
      <AnalyticsRequester id="" />
      <Ads page={"books"} index={1} />
      <BookHolder data={serviceData} isInfiniteScroll={false} isPage={true}>
        <Ads page={"books"} index={2} />
      </BookHolder>
      <BookLoader />
    </main>
  );
};

export default page;
