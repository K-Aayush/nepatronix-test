"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface InnovationCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const rotateVariants: Variants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const InnovationCard: React.FC<InnovationCardProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <motion.div
      className="flex items-center gap-6 p-6 transition-shadow duration-300 rounded-lg shadow bg-blue-800/20 -md hover:shadow-lg"
      variants={rotateVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ rotate: 2, transition: { duration: 0.3 } }}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={100}
        height={100}
        className="object-cover rounded-md"
        loading="eager"
        quality={100}
      />
      <div>
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default InnovationCard;
