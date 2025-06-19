import InfiniteCardHolder from "@/AdminComponents/AdminHolders/InfiniteCardHolder";
import PreCardHolder from "@/AdminComponents/AdminHolders/PreCardHolder";
import AddCaard from "@/AdminComponents/reusables/AddCaard";
import React from "react";

const page = async () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8e8ff",
        textAlign: "center",
      }}
    >
      <br />
      <br />
      <h1 className="text-8xl font-bold" style={{ color: "#1b2d40" }}>
        Edit Achievements
      </h1>
      <br />
      <br />
      <br />
      {/* pre card */}
      <AddCaard type={"achievements"}/>
      
      <br />
      <br />
      <br />
      <PreCardHolder type="achievements" />
      <InfiniteCardHolder type="achievements" />
    </main>
  );
};

export default page;
