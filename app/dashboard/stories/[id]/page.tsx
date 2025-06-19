import EditStory from "@/AdminComponents/storys/EditStory"
import { getSole } from "@/ApiRequest/GetData";
import React from "react";
import AdminComment from "@/AdminComponents/Commets/AdminComment";

const page = async ({ params }: { params: any }) => {
  const data = await getSole("stories", params?.id);
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "aliceblue",
      }}
    >
      <section style={{ width: "100%", padding: "20px", margin: "0 auto" }}>
        <EditStory data={data} />
        <AdminComment type={"stories"} id={params?.id} />
      </section>
    </main>
  );
};

export default page;
