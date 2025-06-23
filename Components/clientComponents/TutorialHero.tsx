"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TutorialHero = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-transparent sm:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
          Tutorials
        </h1>
        <Link
          href="https://www.youtube.com/@razushrestha3518"
          className="px-6 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-md w-fit bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
          target="_blank"
        >
          Subscribe
        </Link>
      </motion.div>
    </section>
  );
};

export default TutorialHero;
