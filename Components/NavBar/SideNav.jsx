"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const SideNav = ({ isOpen, setOpen }) => {
  return (
    <nav
      className="fixed top-0 right-0 w-[250px] pt-[80px] h-full bg-blue-900/90 backdrop-blur-sm transition-all duration-300 overflow-y-auto customScroll z-[1001] lg:w-[250px] lg:pt-[100px] lg:h-screen lg:min-h-[400px]"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(250px)" }}
    >
      <motion.button
        className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full top-4 right-4 hover:bg-white/20"
        onClick={() => setOpen(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaTimes className="w-6 h-6 text-white" />
      </motion.button>
      <Link href="/services" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          SERVICES
        </button>
      </Link>
      <Link href="/products" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          PRODUCTS
        </button>
      </Link>
      <Link href="/tutorials" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          TUTORIALS
        </button>
      </Link>
      <Link href="/blogs" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          BLOGS
        </button>
      </Link>
      <Link href="/books" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          BOOKS
        </button>
      </Link>
      <Link href="/shop" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          SHOP
        </button>
      </Link>
      <Link href="/about" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          ABOUT
        </button>
      </Link>
      <Link href="/team" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          TEAM
        </button>
      </Link>
      <Link href="/gallery" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          GALLERY
        </button>
      </Link>
      <Link href="/stories" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          CLIENT`S BLOG
        </button>
      </Link>
      <Link href="/achievements" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          ACHIEVEMENTS
        </button>
      </Link>
      <Link href="/events" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          EVENTS
        </button>
      </Link>
      <Link href="/news" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          NEWS
        </button>
      </Link>
      <Link href="/courses" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          COURSES
        </button>
      </Link>
      <Link href="/contact" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          CONTACT
        </button>
      </Link>
      <Link href="/pad" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          PAD COUNTER
        </button>
      </Link>
      <Link href="/upload" className="block w-full">
        <button className="w-full text-left py-[20px] px-[40px] font-semibold text-[16px] text-white hover:bg-white/20 transition-all duration-300">
          UPLOAD
        </button>
      </Link>
    </nav>
  );
};

export default SideNav;
