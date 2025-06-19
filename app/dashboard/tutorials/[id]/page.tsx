import EditTut from "@/AdminComponents/EditorComps/EditTut";
import { getSole } from "@/ApiRequest/GetData";
import React from "react";

const page = async ({ params }: { params: any }) => {
  const data = await getSole("tutorials", params?.id);
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "aliceblue",
      }}
    >
      <section style={{ width: "100%", padding: "20px", margin: "0 auto" }}>
        <EditTut data={data} />
      </section>
    </main>
  );
};

export default page;
