"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
  variant?:
    | "default"
    | "medical"
    | "defense"
    | "ai"
    | "web"
    | "research"
    | "security"
    | "submarine"
    | "communication"
    | "monitoring"
    | "consulting"
    | "microagents"
    | "visualization";
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index,
  variant = "default",
}: ServiceCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "medical":
        return {
          card: "bg-cyan-500/10 border-cyan-400/30 hover:border-cyan-300/50",
          icon: "bg-gradient-to-br from-cyan-500 to-blue-600",
          title: "text-cyan-100",
          description: "text-cyan-200/80",
          feature: "text-cyan-300/70 hover:text-cyan-200",
        };
      case "defense":
        return {
          card: "bg-slate-800/60 border-orange-500/30 hover:border-orange-400/50",
          icon: "bg-gradient-to-br from-orange-500 to-red-600",
          title: "text-orange-100",
          description: "text-slate-200/80",
          feature: "text-orange-300/70 hover:text-orange-200",
        };
      case "ai":
        return {
          card: "bg-purple-500/10 border-purple-400/30 hover:border-purple-300/50",
          icon: "bg-gradient-to-br from-purple-500 to-pink-600",
          title: "text-purple-100",
          description: "text-purple-200/80",
          feature: "text-purple-300/70 hover:text-purple-200",
        };
      case "web":
        return {
          card: "bg-emerald-500/10 border-emerald-400/30 hover:border-emerald-300/50",
          icon: "bg-gradient-to-br from-emerald-500 to-teal-600",
          title: "text-emerald-100",
          description: "text-emerald-200/80",
          feature: "text-emerald-300/70 hover:text-emerald-200",
        };
      case "research":
        return {
          card: "bg-pink-500/10 border-pink-400/30 hover:border-pink-300/50",
          icon: "bg-gradient-to-br from-pink-500 to-purple-600",
          title: "text-pink-100",
          description: "text-pink-200/80",
          feature: "text-pink-300/70 hover:text-pink-200",
        };
      case "security":
        return {
          card: "bg-red-500/10 border-red-400/30 hover:border-red-300/50",
          icon: "bg-gradient-to-br from-red-500 to-orange-600",
          title: "text-red-100",
          description: "text-red-200/80",
          feature: "text-red-300/70 hover:text-red-200",
        };
      case "submarine":
        return {
          card: "bg-blue-500/10 border-blue-400/30 hover:border-blue-300/50",
          icon: "bg-gradient-to-br from-blue-500 to-indigo-600",
          title: "text-blue-100",
          description: "text-blue-200/80",
          feature: "text-blue-300/70 hover:text-blue-200",
        };
      case "communication":
        return {
          card: "bg-green-500/10 border-green-400/30 hover:border-green-300/50",
          icon: "bg-gradient-to-br from-green-500 to-emerald-600",
          title: "text-green-100",
          description: "text-green-200/80",
          feature: "text-green-300/70 hover:text-green-200",
        };
      case "monitoring":
        return {
          card: "bg-teal-500/10 border-teal-400/30 hover:border-teal-300/50",
          icon: "bg-gradient-to-br from-teal-500 to-cyan-600",
          title: "text-teal-100",
          description: "text-teal-200/80",
          feature: "text-teal-300/70 hover:text-teal-200",
        };
      case "consulting":
        return {
          card: "bg-emerald-500/10 border-emerald-400/30 hover:border-emerald-300/50",
          icon: "bg-gradient-to-br from-emerald-500 to-green-600",
          title: "text-emerald-100",
          description: "text-emerald-200/80",
          feature: "text-emerald-300/70 hover:text-emerald-200",
        };
      case "microagents":
        return {
          card: "bg-amber-500/10 border-amber-400/30 hover:border-amber-300/50",
          icon: "bg-gradient-to-br from-amber-500 to-orange-600",
          title: "text-amber-100",
          description: "text-amber-200/80",
          feature: "text-amber-300/70 hover:text-amber-200",
        };
      case "visualization":
        return {
          card: "bg-lime-500/10 border-lime-400/30 hover:border-lime-300/50",
          icon: "bg-gradient-to-br from-lime-500 to-green-600",
          title: "text-lime-100",
          description: "text-lime-200/80",
          feature: "text-lime-300/70 hover:text-lime-200",
        };
      default:
        return {
          card: "bg-white/10 border-white/20 hover:border-white/30",
          icon: "bg-gradient-to-br from-blue-500 to-purple-600",
          title: "text-white",
          description: "text-white/80",
          feature: "text-white/70 hover:text-white",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`${styles.card} backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group`}
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`${styles.icon} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={32} className="text-white" />
        </motion.div>
        <h3 className={`text-2xl md:text-3xl font-bold ${styles.title}`}>
          {title}
        </h3>
      </div>

      <p className={`${styles.description} text-xl mb-8 leading-relaxed`}>
        {description}
      </p>

      <div className="space-y-3">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4 }}
            className={`${styles.feature} text-xl flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer`}
          >
            <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
            {feature}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
