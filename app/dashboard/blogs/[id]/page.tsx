import EditBlog from "@/AdminComponents/EditorComps/EditBlog";
import { getSole } from "@/ApiRequest/GetData";
import React from "react";
import AdminComment from "@/AdminComponents/Commets/AdminComment";

const page = async ({ params }: { params: any }) => {
  const data = await getSole("blogs", params?.id);
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "aliceblue",
      }}
    >
      <section style={{ width: "100%", padding: "20px", margin: "0 auto" }}>
        <EditBlog data={data} />
        <AdminComment type={"blogs"} id={params?.id} />
      </section>
    </main>
  );
};

export default page;
