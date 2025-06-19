import React from "react";
import Cards from "../AdminJsons/dashCardJson.json";
import DashCard from "../DashBoardTopCard/DashCard";
import LinkAdminCards from "../reusables/LinkAdminCards";
import DailyStats from "@/AdminComponents/Stats/DailyStats";
import { IoIosStats } from "react-icons/io";

const DashHolder = () => {
  return (
    <div className="w-full min-h-screen p-[20px] bg-slate-100">
      {/* Cards Grid */}
      <div
        className="w-full max-w-[1200px] mx-auto flex flex-wrap gap-[2rem] justify-center"
        style={{ maxWidth: "1200px" }}
      >
        <h1 className="w-full text-center mx-auto text-[30px] text-blue-950">
          Website Control
        </h1>
        {Cards.map(({ title, link, image }, index) => (
          <LinkAdminCards link={link} key={index}>
            <DashCard image={image} title={title} />
          </LinkAdminCards>
        ))}
      </div>
    </div>
  );
};

export default DashHolder;
