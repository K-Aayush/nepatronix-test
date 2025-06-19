"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Set initial screen width as null to avoid SSR issues
  const [screen, setScreen] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreen(window.innerWidth);

      const handleResize = () => {
        setScreen(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Avoid rendering until screen width is set
  if (screen === null) return null;

  return (
    <>
      {/* Sidebar */}
      <nav
        className="transition-all duration-300"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: screen < 768 ? (isOpen ? "0px" : "-250px") : "0px",
          width: "200px",
          paddingTop: "80px",
          backgroundColor: "#172554",
          color: "white",
          fontWeight: "600",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 40,
        }}
      >
        <NavLink href="/dashboard" pathname={pathname}>
          Dashboard
        </NavLink>
        <NavLink href="/dashboard/seo" pathname={pathname}>
          Seo
        </NavLink>
        <NavLink href="/dashboard/change-password" pathname={pathname}>
          Password
        </NavLink>
        <NavLink href="/dashboard/staff" pathname={pathname}>
          Staff
        </NavLink>
        <NavLink href="/dashboard/tasks" pathname={pathname}>
          Tasks
        </NavLink>
        <NavLink href="/dashboard/account" pathname={pathname}>
          Account
        </NavLink>
        <NavLink href="/dashboard/billings" pathname={pathname}>
          Billings
        </NavLink>
        <NavLink href="/dashboard/ads" pathname={pathname}>
          Ads
        </NavLink>
        <NavLink href="/dashboard/mails" pathname={pathname}>
          Mails
        </NavLink>
        <NavLink href="/dashboard/orders" pathname={pathname}>
          Orders
        </NavLink>
        <NavLink href="/" pathname={pathname}>
          {"<-"} Back
        </NavLink>
      </nav>

      {/* Mobile Toggle Button */}
      {screen < 768 && (
        <button
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 50,
            padding: "10px",
            backgroundColor: "#172554",
            color: "white",
            borderRadius: "8px",
            fontSize: "12px",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}
    </>
  );
};

const NavLink = ({ href, pathname, children }: { href: string; pathname: string; children: React.ReactNode }) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      style={{
        width: "100%",
        textAlign: "center",
        padding: "10px 40px",
        backgroundColor: isActive ? "#1E40AF" : "transparent",
        transition: "all 0.3s",
        fontSize: "16px",
        display: "block",
        textDecoration: "none",
        color: "white",
      }}
    >
      {children}
    </Link>
  );
};

export default AdminNav;
