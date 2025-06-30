"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import ThemeButton2 from "./ThemeButton2";

const ProductCard = ({ data }: { data: any }) => {
  console.log(data);                                                  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="relative w-full max-w-[300px] min-h-[350px]"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.05 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute w-full h-full p-4 overflow-hidden text-center shadow-xl rounded-2xl bg-white/10"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 flex flex-col justify-between h-full ">
          <div>
            <motion.div
              className="mb-2 transition-transform duration-500 rounded-lg hover:scale-105"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={`/api/files${data?.image}`}
                alt={data?.title}
                width={300}
                height={150}
                loading="lazy"
                className="w-full h-[150px] object-contain mx-auto rounded-xl"
              />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-white mb-2 overflow-hidden h-[40px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {data?.title.split("").slice(0, 30).join("")}...
            </motion.h3>
            <motion.p
              className="mb-4 text-lg text-white gray-300"
              style={{ height: "60px", overflow: "hidden" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {data?.description?.split("").slice(0, 80).join("")}...
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ThemeButton2
              link={`/products/${data?.link || data?._id}`}
              text="View Details"
              style={{
                position: "relative",
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                padding: "0.25rem",
              }}
            />
          </motion.div>
        </div>
        {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl" /> */}
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
