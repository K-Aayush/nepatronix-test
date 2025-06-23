"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ data }: { data: any }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div
      className="relative group w-full max-w-[350px] min-h-[480px]"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="h-full p-8 text-center shadow-lg rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500"
        initial={{ rotateY: -5, opacity: 0, y: 50 }}
        animate={{ rotateY: 0, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, rotate: 5 }}
        variants={containerVariants}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        style={{ transformStyle: "preserve-3d", position: "relative" }}
      >
        <div className="relative z-10">
          <motion.div
            className="mb-4 transition-transform duration-500 transform group-hover:scale-110"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={`/api/files${data?.image}`}
              alt={data?.title}
              width={200}
              height={100}
              loading="lazy"
              className="object-contain w-full h-[100px] mx-auto"
            />
          </motion.div>
          <motion.h3
            className="text-2xl font-bold text-white mb-4 overflow-hidden h-[60px]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {data?.title.slice(0, 40)}...
          </motion.h3>
          <motion.p
            className="mb-6 text-lg text-gray-200"
            style={{ height: "100px", overflow: "hidden" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {data?.description.slice(0, 100)}...
          </motion.p>
          <motion.button
            className="flex items-center justify-center mx-auto space-x-2 text-white group/button"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn More</span>
            <FaArrowRight className="transition-transform group-hover/button:translate-x-2" />
          </motion.button>
        </div>
        <div className="absolute inset-0 transition-transform duration-500 transform bg-white/5 rounded-2xl group-hover:rotate-y-12"></div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
