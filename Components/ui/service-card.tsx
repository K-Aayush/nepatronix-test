"use client";

import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="p-8 transition-all duration-300 border bg-white/10 backdrop-blur-lg rounded-2xl border-white/20 hover:border-white/30"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-white/20 rounded-xl">
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>

      <p className="mb-6 text-xl leading-relaxed text-white/80">
        {description}
      </p>

      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-xl text-white/70"
          >
            <span className="mt-1 text-emerald-400">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
