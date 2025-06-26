"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/Components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText }) => {
  return (
    <section className="relative py-20 text-white bg-gradient-to-b from-blue-950 to-gray-900 bg-opacity-10">
      <div className="flex flex-col items-center max-w-6xl gap-8 px-6 mx-auto md:flex-row">
        <motion.div className="md:w-1/2" variants={slideVariants}>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="max-w-md mb-6 text-lg md:text-xl">{subtitle}</p>
          <Button className="px-6 py-2 font-semibold transition-all duration-300 bg-teal-400 rounded-lg shadow-md text-blue-950 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400">
            {ctaText}
          </Button>
        </motion.div>
        <motion.div
          className="relative md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex items-center justify-center w-full h-64 rounded-lg bg-blue-800/30">
            <span className="text-2xl font-semibold text-teal-400">
              R&D Visualization
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
