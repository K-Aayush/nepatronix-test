"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const DisplayTeam = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center w-full gap-12 px-4 py-16 lg:flex-row bg-gradient-to-r from-gray-50 to-white"
    >
      <div className="flex justify-center w-full max-w-md lg:max-w-xl">
        <div className="relative overflow-hidden border-4 border-blue-100 rounded-full shadow-xl w-[360px] h-[360px]">
          <Image
            src={`/api/files${data?.picture}`}
            alt={`${data?.title}'s picture`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwABygO3zL3zOQAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
      <div className="flex flex-col w-full max-w-md gap-6 lg:max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
          {data?.title}
        </h2>
        <h3 className="text-xl font-semibold text-blue-600 lg:text-2xl">
          {data?.profession}
        </h3>
        <p className="pr-4 overflow-y-auto text-lg leading-relaxed text-gray-600 max-h-40 lg:max-h-56 custom-scrollbar">
          {data?.about}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={data?.portfolio || "#"}
            className="px-6 py-3 text-base font-semibold text-white transition-colors bg-red-500 rounded-full shadow-md hover:bg-red-600"
          >
            Visit Full Page
          </Link>
          <Link
            href={data?.resume || "#"}
            className="px-6 py-3 text-base font-semibold text-red-500 transition-colors bg-white border-2 border-red-500 rounded-full shadow-md hover:bg-red-50"
          >
            View Resume
          </Link>
        </div>
        <div className="flex gap-4 mt-4">
          {data?.facebook && (
            <Link
              href={data.facebook}
              className="p-3 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
              aria-label="Facebook profile"
            >
              <FaFacebookF size={18} />
            </Link>
          )}
          {data?.instagram && (
            <Link
              href={data.instagram}
              className="p-3 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
              aria-label="Instagram profile"
            >
              <FaInstagram size={18} />
            </Link>
          )}
          {data?.linkedin && (
            <Link
              href={data.linkedin}
              className="p-3 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
              aria-label="LinkedIn profile"
            >
              <FaLinkedinIn size={18} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DisplayTeam;
