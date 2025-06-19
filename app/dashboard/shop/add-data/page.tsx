import EditShop from "@/AdminComponents/EditorComps/EditShop";
import React from "react";

const page = () => {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "aliceblue",
      }}
    >
      <section style={{ width: "100%", padding: "20px", margin: "0 auto" }}>
        <EditShop data={null} />
      </section>
    </main>
  );
};

export default page;
