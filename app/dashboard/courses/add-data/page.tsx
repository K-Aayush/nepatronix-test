import AddNewCourse from "@/AdminComponents/EditorComps/AddNewCourse";
import React from "react";

const page = () => {
  return (
    <main style={{width:"100%", minHeight:"100vh", background:"white"}}>
      <section
        style={{ width: "100%", margin: "0 auto", }}
      >
      <AddNewCourse/>
      </section>
    </main>
  );
};

export default page;
