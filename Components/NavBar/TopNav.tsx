import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import ShopSearch from "../forms/ShopSearch";
import { IoMdMenu } from "react-icons/io";

const TopNav = ({
  setOpen,
  isOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  isOpen: Boolean;
}) => {
  const opener = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className="w-full top-0 bg-white fixed px-[20px] py-[20px] flex gap-[20px] shadow-md justify-between"
      style={{ zIndex: "1000" }}
    >
      <Link href={"/"} className="hidden xl:block">
        <Image
          src={"/logo.png"}
          alt="logo"
          className="w-fit h-[40px]"
          width={500}
          height={500}
        />
      </Link>
      <Link href={"/"} className="block xl:hidden">
        <Image
          src={"/logo2.png"}
          alt="logo"
          className="w-fit h-[40px]"
          width={500}
          height={500}
        />
      </Link>
      <ul className="w-fit hidden gap-[20px] lg:flex">
        <li>
          <Link
            href={"/services"}
            className="h-full font-semibold text-[16px] text-slate-700 hover:text-blue-500 hover:underline transition-all duration-300 active:text-blue-500"
          >
            <button className="h-full border-b-[3px] border-transparent hover:border-b-[3px] hover:border-blue-500">
              SERVICES
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={"/products"}
            className="h-full font-semibold text-[16px] text-slate-700 hover:text-blue-500 hover:underline transition-all duration-300 active:text-blue-500"
          >
            <button className="h-full border-b-[3px] border-transparent hover:border-b-[3px] hover:border-blue-500">
              PRODUCTS
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={"/tutorials"}
            className="h-full font-semibold text-[16px] text-slate-700 hover:text-blue-500 hover:underline transition-all duration-300 active:text-blue-500"
          >
            <button className="h-full border-b-[3px] border-transparent hover:border-b-[3px] hover:border-blue-500">
              TUTORIALS
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={"/blogs"}
            className="h-full font-semibold text-[16px] text-slate-700 hover:text-blue-500 hover:underline transition-all duration-300 active:text-blue-500"
          >
            <button className="h-full border-b-[3px] border-transparent hover:border-b-[3px] hover:border-blue-500">
              BLOGS
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={"/books"}
            className="h-full font-semibold text-[16px] text-slate-700 hover:text-blue-500 hover:underline transition-all duration-300 active:text-blue-500"
          >
            <button className="h-full border-b-[3px] border-transparent hover:border-b-[3px] hover:border-blue-500">
              BOOKS
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={"/shop"}
            className="h-full font-semibold text-[16px] text-slate-700 hover:text-blue-500 hover:underline transition-all duration-300 active:text-blue-500"
          >
            <button className="h-full border-b-[3px] border-transparent hover:border-b-[3px] hover:border-blue-500">
              SHOP
            </button>
          </Link>
        </li>
      </ul>
      <ShopSearch />
      <button
        onClick={opener}
        className="h-[40px] text-[16px] font-semibold text-slate-700 hover:text-blue-500 transition-all duration-300"
      >
        <span className="flex">
          <IoMdMenu style={{ margin: "0 2.5px", fontSize: "30px" }} />
          {!isOpen ? (
            <FaAngleDown style={{ margin: "5px 2.5px" }} />
          ) : (
            <FaAngleUp style={{ margin: "5px 2.5px" }} />
          )}
        </span>
      </button>
    </nav>
  );
};

export default TopNav;
