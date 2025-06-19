import Link from "next/link";
import React from "react";

const SideNav = ({ isOpen }) => {
  return (
    <nav
      className="w-[250px] fixed top-0 pt-[80px] right-0 bottom-0 overflow-y-scroll customScroll bg-slate-100 transition-all duration-300"
      style={{ right: isOpen ? 0 : "-250px", zIndex: "999" }}
    >
      <Link href={"/services"} className="w-full block lg:hidden">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          SERVICES
        </button>
      </Link>
      <Link href={"/products"} className="w-full block lg:hidden">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          PRODUCTS
        </button>
      </Link>
      <Link href={"/tutorials"} className="w-full block lg:hidden">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          TUTORIALS
        </button>
      </Link>
      <Link href={"/blogs"} className="w-full block lg:hidden">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          BLOGS
        </button>
      </Link>
      <Link href={"/books"} className="w-full block lg:hidden">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          BOOKS
        </button>
      </Link>
      <Link href={"/shop"} className="w-full block lg:hidden">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          SHOP
        </button>
      </Link>
      <Link href={"/about"} className="w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          ABOUT
        </button>
      </Link>
      <Link href={"/team"} className="w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          TEAM
        </button>
      </Link>
      <Link href={"/gallery"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          GALLERY
        </button>
      </Link>
      <Link href={"/stories"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          CLIENT{"'"}S BLOG
        </button>
      </Link>
      <Link href={"/achievements"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          ACHIEVEMENTS
        </button>
      </Link>

      <Link href={"/events"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          EVENTS
        </button>
      </Link>
      <Link href={"/news"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          NEWS
        </button>
      </Link>
      <Link href={"/courses"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          COURSES
        </button>
      </Link>
      <Link href={"/contact"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          CONTACT
        </button>
      </Link>
      <Link href={"/pad"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          PAD COUNTER
        </button>
      </Link>
      <Link href={"/upload"} className="w-full">
        <button className="w-full py-[20px] px-[40px] text-left font-semibold text-[16px] text-slate-700 hover:bg-slate-300 transition-all duration-500">
          UPLOAD
        </button>
      </Link>
    </nav>
  );
};

export default SideNav;
