import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getLists } from "@/ApiRequest/GetData";
import Ads from "@/Components/AdvComps/Ads";
import GalleryHolder from "@/Components/Holders/GalleryHolder";
import GalleryLoader from "@/Components/Loaders/GalleryLoader";
import React from "react";

const page = async () => {
  const data: any = await getLists("gallery", 0, null);
  return (
    <main
      style={{ minHeight: "100vh", paddingTop: "80px", background: "#e8e8e8" }}
    >
      <Ads page={"gallery"} index={1} />
      <AnalyticsRequester id="" />
      <GalleryHolder isPage={true} isInfiniteScroll={false} data={data}>
        <Ads page={"gallery"} index={2} />
      </GalleryHolder>
      <GalleryLoader />
    </main>
  );
};

export default page;
