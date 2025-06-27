"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/Components/ui/button";
import Image from "next/image";

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
    <section className="relative py-32 text-white bg-gradient-to-b from-blue-900 to-gray-800 bg-opacity-10">
      <div className="flex flex-col items-center gap-8 px-6 mx-auto max-w-7xl md:flex-row">
        <motion.div className="md:w-1/2" variants={slideVariants}>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">{title}</h1>
          <p className="max-w-md mb-6 text-xl md:text-2xl">{subtitle}</p>
          <Button className="px-6 py-2 text-xl font-semibold transition-all duration-300 bg-teal-400 rounded-lg shadow-md text-blue-950 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400">
            {ctaText}
          </Button>
        </motion.div>
        <motion.div
          className="relative md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={"/static/R&DmedTech.png"}
            alt={title}
            width={1200}
            height={1200}
            loading="eager"
            className="object-cover w-[250px] h-auto mb-4 rounded-lg "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
