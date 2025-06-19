import AdminNav from "@/AdminComponents/AdminNav/AdminNav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminNav />
      <main className="w-full pl-0 min-h-screen md:pl-[200px] ">
        {children}
      </main>
    </>
  );
};

export default layout;
