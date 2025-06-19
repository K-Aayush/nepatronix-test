"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FOOTER from "./FOOTER.json";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const location = usePathname();
  const isAdmin = location.includes("dashboard");
  return (
    <footer
      className="w-full py-[50px] bg-gray-800"
      style={{ display: isAdmin ? "none" : "block" }}
    >
      <div
        className="w-full flex justify-center flex-wrap"
        style={{ gap: "20px" }}
      >
        <Link
          href={FOOTER?.facebook}
          className="p-[10px] text-[20px] rounded-full bg-blue-500"
        >
          <FaFacebookF />
        </Link>
        <Link
          href={FOOTER?.linkedin}
          className="p-[10px] text-[20px] rounded-full bg-blue-500"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href={FOOTER?.youtube}
          className="p-[10px] text-[20px] rounded-full bg-blue-500"
        >
          <FaYoutube />
        </Link>
        <Link
          href={FOOTER?.twitter}
          className="p-[10px] text-[20px] rounded-full bg-blue-500"
        >
          <FaTwitter />
        </Link>
      </div>
      <br />
      <div
        className="w-full flex justify-center flex-wrap"
        style={{ gap: "10px" }}
      >
        <Link href={"/"} className="text-[14px] text-white font-semibold">
          HOME
        </Link>
        <Link href={"/about"} className="text-[14px] text-white font-semibold">
          ABOUT
        </Link>
        <Link
          href={"/services"}
          className="text-[14px] text-white font-semibold"
        >
          SERVICES
        </Link>
        <Link href={"/blogs"} className="text-[14px] text-white font-semibold">
          BLOGS
        </Link>
        <Link href={"/books"} className="text-[14px] text-white font-semibold">
          BOOKS
        </Link>

        <Link href={"/shop"} className="text-[14px] text-white font-semibold">
          SHOP
        </Link>

        <Link
          href={"/contact"}
          className="text-[14px] text-white font-semibold"
        >
          CONTACT
        </Link>
      </div>
      <br />
      <div className="w-full bg-blue-500 p-[20px] my-[10px] flex flex-wrap justify-evenly " style={{gap:"20px"}}>
      <span
          className="w-fit text-gray-800 text-[16px] font-medium flex"
          style={{ gap: "10px" }}
        >
          <FaPhoneAlt style={{ margin: "5px 0", fontSize: "20px" }} />
          {FOOTER?.phone}
        </span>
        <span
          className="w-fit text-gray-800 text-[16px] font-medium flex"
          style={{ gap: "10px" }}
        >
          <MdMail style={{ margin: "5px 0", fontSize: "20px" }} />
          {FOOTER?.mail}
        </span>
        <span
          className="w-fit text-gray-800 text-[16px] font-medium flex"
          style={{ gap: "10px" }}
        >
          <FaLocationDot style={{ margin: "5px 0", fontSize: "20px" }} />
          {FOOTER?.location}
        </span>
      </div>
      <br />
      <div className="w-full text-center text-white px-[20px] py-[0px] text-[16px]">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">Nepa</span>
        <span className="text-blue-500 font-semibold">Tronix</span> all rigths
        reserved
      </div>
    </footer>
  );
};

export default Footer;
