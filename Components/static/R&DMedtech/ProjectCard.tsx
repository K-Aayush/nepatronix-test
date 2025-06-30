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
      className="relative flex flex-col items-center justify-between h-full p-6 overflow-hidden"
      variants={slideVariants}
      role="article"
    >
      <div className="absolute inset-0 transition-opacity rounded-lg opacity-0 bg-gradient-to-r from-teal-500 to-purple-500 hover:opacity-20"></div>
      <Image
        src={imgSrc}
        alt={title}
        width={1200}
        height={1200}
        loading="eager"
        className="flex-1 object-cover w-full h-auto mb-4 rounded-lg "
      />
      <div className="">
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="text-xl text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
