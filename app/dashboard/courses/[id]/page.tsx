import { getSole } from "@/ApiRequest/GetData";
import EditCourses from "@/AdminComponents/EditorComps/EditCourses"
import React from "react";

const page = async ({ params }: { params: any }) => {
  const data = await getSole("courses", params?.id);
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <EditCourses oldItem={data}/>
    </main>
  );
};

export default page;
