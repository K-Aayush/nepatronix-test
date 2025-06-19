import { getStats } from "@/ApiRequest/GetData";
import React from "react";
import { IoPeopleSharp } from "react-icons/io5";

// Helper function to format numbers
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "m"; // Convert to 'm' format
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k"; // Convert to 'k' format
  }
  return num; // Return the number as is if less than 1000
};

const DailyStats = async ({ type }) => {
  const data = await getStats(type);
  const formattedData = formatNumber(data);

  return (
    <div
      className="w-full h-fit text-[20px] text-center text-gray-800 rounded-2xl"
      style={{
        maxWidth: "350px",
        height: "fit-content",
        padding: "40px",
        boxShadow: "0 0 10px darkgray",
        background: "#ffd9d9",
      }}
    >
      <br />
      <h1 className="text-[60px] font-bold" style={{ fontSize: "60px" }}>
        <span
          className="w-fit h-fit py-[20px] px-[80px] rounded-full"
          style={{ padding: "20px 40px", background: "white" }}
        >
          {formattedData}
        </span>
      </h1>
      <br />
      <br />
      <p
        className="font-semibold flex justify-center"
        style={{ textTransform: "Capitalize", gap: "10px" }}
      >
        <IoPeopleSharp style={{ margin: "5px" }} />
        {type} Visitors
      </p>
    </div>
  );
};

export default DailyStats;
