import React, { ReactNode } from "react";
import StaffNav from "@/StaffBox/StaffNav/StaffNav";
import { cookies } from "next/headers";
const webUrl = process.env.NEXT_APP_BACKEND || "http://localhost:3000";
const layout = async ({ children }: { children: ReactNode }) => {
  const token: any = cookies().get("token");

  const res = await fetch(`${webUrl}/api/v1/staff-login`, {
    cache: "no-store",
    method: "GET",
    headers: {
      authorization: `Bearer ${token.value}`,
    },
  });
  const data = await res.json();
  return (
    <>
      <StaffNav isAccountant={data?.role==="accountant"} />
      <main className="pl-[170px] m-0 min-h-screen">{children}</main>
    </>
  );
};

export default layout;
