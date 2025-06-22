"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden ">
      <video
        className="absolute inset-0 object-cover w-full h-full "
        src="/assets/backgroundvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <motion.div
        className="relative z-10 px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="mb-4 text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-7xl drop-shadow-md bg-clip-text bg-gradient-to-tr from-indigo-700 to-indigo-600"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where Creativity Meets Innovation
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mb-8 text-base text-red-600 sm:text-lg lg:text-2xl opacity-90 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your one-stop solution for cutting-edge services and products.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-purple-500 rounded-full shadow-lg hover:bg-purple-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </motion.div>
      <div className="absolute inset-0" />
    </section>
  );
}
