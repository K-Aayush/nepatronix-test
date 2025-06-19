import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getLists } from "@/ApiRequest/GetData";
import ShopHolder from "@/Components/Holders/ShopHolder";
import ShopLoader from "@/Components/Loaders/ShopLoader";
import React from "react";

const page = async () => {
  const productData = await getLists("shop", 0, null);
  return (
    <main className="pt-[8rem] min-h-screen bg-[#f8fafc]">
      <AnalyticsRequester id="shop" />
      <ShopHolder data={productData} isInfiniteScroll={false} isPage={true} />
      <ShopLoader />
    </main>
  );
};

export default page;
