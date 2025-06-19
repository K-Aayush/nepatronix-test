import { getSole } from "@/ApiRequest/GetData";
import React from "react";
import AdminComment from "@/AdminComponents/Commets/AdminComment";
import EditNews from "@/AdminComponents/EditorComps/EditNews";

const page = async ({ params }: { params: any }) => {
  const data = await getSole("news", params?.id);
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "aliceblue",
      }}
    >
      <section style={{ width: "100%", padding: "20px", margin: "0 auto" }}>
        <EditNews data={data} />
        <AdminComment type={"news"} id={params?.id} />
      </section>
    </main>
  );
};

export default page;
