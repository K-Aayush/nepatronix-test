"use client";

import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
  variant?:
    | "medical"
    | "defense"
    | "ai"
    | "web"
    | "consulting"
    | "research"
    | "communication"
    | "submarine"
    | "monitoring"
    | "microagents"
    | "visualization"
    | "security";
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index,
  variant = "medical",
}: ServiceCardProps) {
  const variantStyles = {
    medical: "from-cyan-500/20 to-blue-500/20 border-cyan-400/30",
    defense: "from-orange-500/20 to-red-500/20 border-orange-400/30",
    ai: "from-purple-500/20 to-pink-500/20 border-purple-400/30",
    web: "from-emerald-500/20 to-teal-500/20 border-emerald-400/30",
    consulting: "from-teal-500/20 to-green-500/20 border-teal-400/30",
    research: "from-pink-500/20 to-purple-500/20 border-pink-400/30",
    communication: "from-emerald-500/20 to-green-500/20 border-emerald-400/30",
    submarine: "from-blue-500/20 to-indigo-500/20 border-blue-400/30",
    monitoring: "from-teal-500/20 to-cyan-500/20 border-teal-400/30",
    microagents: "from-amber-500/20 to-orange-500/20 border-amber-400/30",
    visualization: "from-lime-500/20 to-green-500/20 border-lime-400/30",
    security: "from-red-500/20 to-orange-500/20 border-red-400/30",
  };

  const iconColors = {
    medical: "text-cyan-400",
    defense: "text-orange-400",
    ai: "text-purple-400",
    web: "text-emerald-400",
    consulting: "text-teal-400",
    research: "text-pink-400",
    communication: "text-emerald-400",
    submarine: "text-blue-400",
    monitoring: "text-teal-400",
    microagents: "text-amber-400",
    visualization: "text-lime-400",
    security: "text-red-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`bg-gradient-to-br ${variantStyles[variant]} backdrop-blur-lg rounded-2xl p-8 border hover:border-opacity-50 transition-all duration-300 group`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${variantStyles[variant]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={32} className={iconColors[variant]} />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <p className="mb-6 text-xl leading-relaxed text-white/80">
        {description}
      </p>

      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4 }}
            className="flex items-center gap-3 text-xl transition-colors text-white/70 hover:text-white"
          >
            <div className={`w-2 h-2 ${iconColors[variant]} rounded-full`} />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
