import React from "react";
import Pwd from "@/AdminComponents/AdminHolders/Password/Pwd";
const page = async () => {
  return (
    <main
      style={{
        height: "fit-content",
        minHeight: "100vh",
        background: "aliceblue",
        textAlign: "center",
      }}
    >
      <Pwd />
    </main>
  );
};

export default page;
