import Link from "next/link";
import React from "react";

const StaffNav = ({ isAccountant }) => {
  return (
    <nav
      className="w-[200px] pt-[80px] z-10 text-white font-semibold bg-blue-950 fixed top-0 bottom-0 left-0 flex flex-col gap-[10px]"
      style={{
        background: "#172554",
        width: "170px",
        position: "fixed",
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Link
        href="/profile"
        className="w-full text-center p-[10px] px-[40px] bg-transparent transition-all duration-300 hover:bg-blue-400"
        style={{ fontSize: "16px" }}
      >
        Profile
      </Link>
      <Link
        href="/profile/change-password"
        className="w-full text-center p-[10px] px-[40px] bg-transparent transition-all duration-300 hover:bg-blue-400"
        style={{ fontSize: "16px" }}
      >
        Password
      </Link>
      <Link
        href="/profile/tasks"
        className="w-full text-center p-[10px] px-[40px] bg-transparent transition-all duration-300 hover:bg-blue-400"
        style={{ fontSize: "16px" }}
      >
        Tasks
      </Link>
      {isAccountant && (
        <Link
          href="/accountant"
          className="w-full text-center p-[10px] px-[40px] bg-transparent transition-all duration-300 hover:bg-blue-400"
          style={{ fontSize: "16px" }}
        >
          Account
        </Link>
      )}
      {isAccountant && (
        <Link
          href="/accountant/billings"
          className="w-full text-center p-[10px] px-[40px] bg-transparent transition-all duration-300 hover:bg-blue-400"
          style={{ fontSize: "16px" }}
        >
          Billings
        </Link>
      )}
      <Link
        href="/"
        className="w-full text-center p-[10px] px-[40px] bg-transparent transition-all duration-300 hover:bg-blue-400"
        style={{ fontSize: "16px" }}
      >
        {"<-"} Back
      </Link>
    </nav>
  );
};

export default StaffNav;
