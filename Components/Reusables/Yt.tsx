"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Yt = ({ data }: { data: any }) => {
  const [auto, setAuto] = useState("?controls=0&modestbranding=1");

  const gen = (link: string) => {
    const replacedEmbed = link.split("watch?v=").join("embed/").split("&")[0];
    return `${replacedEmbed}${auto}`;
  };

  return (
    <Link href={`/tutorials/${data?.link || data?._id}`}>
      <motion.div
        className="relative flex flex-col w-full h-full overflow-hidden border rounded-xl bg-indigo-900/30 backdrop-blur-sm border-white/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="relative aspect-[16/9]">
          <iframe
            src={gen(data?.youtube)}
            className="absolute inset-0 w-full h-full rounded-t-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-b from-transparent to-black/40 hover:opacity-100 rounded-t-xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            onMouseOver={() => setAuto("?autoplay=1")}
            onMouseLeave={() => setAuto("?controls=0&modestbranding=1")}
          >
            <svg
              className="w-10 h-10 text-purple-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 16.5l6-4.5-6-4.5v9z" />
            </svg>
          </motion.div>
        </div>
        <div className="p-4 flex flex-col flex-grow min-h-[5rem]">
          <h3 className="text-2xl font-semibold text-white truncate">
            {data?.title}
          </h3>
          <p className="flex-grow mt-1 text-lg text-gray-300 line-clamp-3">
            {data?.description?.split(" ").slice(0, 11).join(" ")}...
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Yt;
