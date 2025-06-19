import InfiniteCardHolder from "@/AdminComponents/AdminHolders/InfiniteCardHolder";
import PreCardHolder from "@/AdminComponents/AdminHolders/PreCardHolder";
import AddCaard from "@/AdminComponents/reusables/AddCaard";
import React from "react";

const page = async () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f0fff2",
        textAlign: "center",
      }}
    >
      <br />
      <br />
      <h1 className="text-8xl font-bold" style={{ color: "#1b2d40" }}>
        Edit Client Blogs
      </h1>
      <br />
      <br />
      <br />
      {/* pre card */}
      <AddCaard type={"stories"}/>
      
      <br />
      <br />
      <br />
      <PreCardHolder type="stories" />
      <InfiniteCardHolder type="stories" />
    </main>
  );
};

export default page;
