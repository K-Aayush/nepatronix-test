import { getLists } from "@/ApiRequest/GetData";
import React from "react";
import AdsDeleteCard from "@/AdminComponents/AdHandlers/AdsDeleteCard";
import AddAds from "@/AdminComponents/AdHandlers/AddAds";

const domain = process.env.NEXT_APP_BACKEND;
const page = async () => {
  const data = await getLists(`ads`, 0, 0);
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f0fff2",
        textAlign: "center",
      }}
    >
      <section
        className="w-full mx-auto py-[20px] flex justify-center flex-wrap"
        style={{ maxWidth: "1000px", gap: "20px" }}
      >
        <AddAds />
        {data?.map((item, indx) => (
          <AdsDeleteCard data={item} key={indx} />
        ))}
      </section>
    </main>
  );
};

export default page;
