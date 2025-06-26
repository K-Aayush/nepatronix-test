"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <motion.div
      className="relative p-6 transition-shadow duration-300 bg-gray-800 rounded-lg shadow-md hover:shadow-xl"
      variants={slideVariants}
      role="article"
    >
      <div className="absolute inset-0 transition-opacity rounded-lg opacity-0 bg-gradient-to-r from-teal-500 to-purple-500 hover:opacity-20"></div>
      <Image
        src={imgSrc}
        alt={title}
        width={80}
        height={80}
        className="object-cover mb-4 rounded-lg"
        loading="eager"
        quality={100}
      />
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
