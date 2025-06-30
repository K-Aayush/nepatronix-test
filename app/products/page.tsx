import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getLists } from "@/ApiRequest/GetData";
import Ads from "@/Components/AdvComps/Ads";
import ProductHolder from "@/Components/Holders/ProductHolder";
import ProductLoader from "@/Components/Loaders/ProductLoader";
import React from "react";

const page = async () => {
  const productData = await getLists("products", 0, null);
  return (
    <main className="pt-[8rem] min-h-screen bg-gradient-to-br from-purple-800 via-indigo-600 to-pink-500">
      <AnalyticsRequester id="" />
      <Ads page={"products"} index={1} />
      <ProductHolder data={productData} isInfiniteScroll={false} isPage={true}>
        <Ads page={"products"} index={2} />
      </ProductHolder>
      <ProductLoader />
    </main>
  );
};

export default page;
