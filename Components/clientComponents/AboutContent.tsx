"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ClientHolder from "@/Components/Holders/ClientHolder";

// Define the props interface
interface AboutContentProps {
  content: string; 
  cards: Array<{ [key: string]: any }>; 
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutContent: React.FC<AboutContentProps> = ({ content, cards }) => {
  return (
    <section
      className="w-full h-fit"
      style={{
        backgroundImage: "url('/api/files/variable/aboutBg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="w-full h-fit bg-gradient-to-b from-[#002d58] to-transparent text-left text-white text-[20px]"
        style={{
          padding: "80px 20px",
          minHeight: "calc(100vh - 80px)",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: "100%",
            padding: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <motion.b variants={childVariants} className="text-red-500">
            ABOUT US
          </motion.b>
          <br />
          <br />
          <motion.h2 variants={childVariants} className="font-bold text-8xl">
            Who We Are
          </motion.h2>
          <br />
          <motion.p
            variants={childVariants}
            className="text-4xl"
            style={{ lineHeight: "3.5rem" }}
          >
            {content}
          </motion.p>
          <motion.div variants={childVariants}>
            <ClientHolder cards={cards} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
