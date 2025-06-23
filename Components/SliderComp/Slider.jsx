"use client";

import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Slider = ({ data, length, children }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index > 0 ? index - 1 : data?.length - 1);
  };

  const handleNext = () => {
    setIndex(index < data?.length - 1 ? index + 1 : 0);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={index}>
        <motion.div
          key={index}
          custom={index}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex"
        >
          {children[index]}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handlePrev}
        className="absolute z-10 p-3 text-white transition-colors bg-blue-600 rounded-full shadow-lg top-1/2 left-12 hover:bg-blue-700"
        aria-label="Previous slide"
      >
        <FaAngleLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute z-10 p-3 text-white transition-colors bg-blue-600 rounded-full shadow-lg top-1/2 right-12 hover:bg-blue-700"
        aria-label="Next slide"
      >
        <FaAngleRight size={24} />
      </button>
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {data?.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === idx ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
