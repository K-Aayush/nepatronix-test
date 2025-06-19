import StaffNav from "@/StaffBox/StaffNav/StaffNav";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <StaffNav isAccountant={true} />
      <main className="w-full min-h-screen pl-[170px]">{children}</main>
    </>
  );
};

export default layout;
