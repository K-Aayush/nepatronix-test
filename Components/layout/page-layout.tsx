"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  gradientClass?: string;
}

export default function PageLayout({
  title,
  subtitle,
  children,
  gradientClass = "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen ${gradientClass}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Navigation */}
        <nav className="relative z-10 p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg transition-colors text-white/80 hover:text-white"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-6 py-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-3xl mx-auto text-xl leading-relaxed md:text-2xl text-white/80">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
