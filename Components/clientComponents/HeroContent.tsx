"use client";

import React from "react";
import { motion, Variants, Transition } from "framer-motion";

// Define transitions
const containerTransition: Transition = {
  duration: 0.8,
  ease: "easeOut",
};

const headingTransition: Transition = {
  duration: 0.6,
  delay: 0.2,
};

const paragraphTransition: Transition = {
  duration: 0.6,
  delay: 0.4,
};

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: containerTransition },
};

const headingVariants: Variants = {
  hidden: { scale: 0.9 },
  visible: { scale: 1, transition: headingTransition },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: paragraphTransition },
};

const HeroContent: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/assets/backgroundvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <motion.div
        className="relative z-10 px-4 mx-auto text-center text-white max-w-8xl sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-4 text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl drop-shadow-md bg-clip-text bg-gradient-to-tr from-indigo-700 to-indigo-600"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Where Creativity Meets Innovation
        </motion.h1>
        <motion.p
          className="max-w-5xl mx-auto mb-8 text-2xl text-red-600 sm:text-3xl lg:text-4xl opacity-90 drop-shadow-md"
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          Your one-stop solution for cutting-edge services and products.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-4 text-lg font-semibold text-white transition duration-300 bg-purple-500 rounded-full shadow-lg hover:bg-purple-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </motion.div>
      <div className="absolute inset-0" />
    </section>
  );
};

export default HeroContent;
