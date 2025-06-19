import EditServ from "@/AdminComponents/EditorComps/EditServ";
import { getSole } from "@/ApiRequest/GetData";
import React from "react";

const page = async({params}:{params:any}) => {
    const data = await getSole("services", params?.id)
  return (
    <main style={{width:"100%", minHeight:"100vh", background:"aliceblue"}}>
      <section
        style={{ width: "100%", padding: "20px", margin: "0 auto", }}
      >
      <EditServ data={data}/>
      </section>
    </main>
  );
};

export default page;
