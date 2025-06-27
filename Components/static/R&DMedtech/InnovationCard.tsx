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
      className="flex flex-col items-center gap-6 p-6 transition-shadow duration-300 rounded-lg shadow md:flex-row bg-blue-800/20 -md hover:shadow-lg"
      variants={rotateVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ rotate: 2, transition: { duration: 0.3 } }}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={1200}
        height={1200}
        loading="eager"
        className="object-cover w-[250px] h-auto mb-4 rounded-lg "
      />
      <div>
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default InnovationCard;
