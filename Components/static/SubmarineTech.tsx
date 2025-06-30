"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Waves,
  BinaryIcon as Sonar,
  Battery,
  Shield,
  Navigation,
  Anchor,
  Compass,
  Zap,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "../ui/service-card";

export default function SubmarineTechnologyPage() {
  const services = [
    {
      icon: Waves,
      title: "Underwater Propulsion",
      description:
        "Advanced propulsion systems designed for stealth and efficiency in underwater operations.",
      features: [
        "Silent running capabilities",
        "Advanced hull design optimization",
        "Energy-efficient propulsion",
        "Cavitation noise reduction",
      ],
    },
    {
      icon: Sonar,
      title: "Sonar & Detection Systems",
      description:
        "State-of-the-art sonar technology for underwater navigation and threat detection.",
      features: [
        "Passive and active sonar arrays",
        "Acoustic signature analysis",
        "Underwater obstacle detection",
        "Long-range surveillance capabilities",
      ],
    },
    {
      icon: Battery,
      title: "Power & Life Support",
      description:
        "Advanced power generation and life support systems for extended underwater missions.",
      features: [
        "Air-independent propulsion systems",
        "Advanced battery technology",
        "Oxygen generation systems",
        "CO2 scrubbing technology",
      ],
    },
    {
      icon: Shield,
      title: "Stealth Technology",
      description:
        "Cutting-edge stealth capabilities to minimize detection by enemy sonar and sensors.",
      features: [
        "Acoustic signature reduction",
        "Radar cross-section minimization",
        "Thermal signature management",
        "Electromagnetic shielding",
      ],
    },
    {
      icon: Navigation,
      title: "Navigation Systems",
      description:
        "Precision underwater navigation systems for accurate positioning and route planning.",
      features: [
        "Inertial navigation systems",
        "GPS surface integration",
        "Underwater terrain mapping",
        "Dead reckoning algorithms",
      ],
    },
    {
      icon: Anchor,
      title: "Deep Sea Operations",
      description:
        "Specialized systems for deep-sea operations and extreme underwater environments.",
      features: [
        "High-pressure hull design",
        "Deep-sea rescue capabilities",
        "Underwater construction tools",
        "Scientific research equipment",
      ],
    },
  ];

  const windowHeight =
    typeof window !== "undefined" ? window.innerHeight : 1080;

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Underwater Bubble Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [windowHeight + 50, -50],
              x: [0, Math.sin(i) * 100, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-4 h-4 rounded-full bg-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Sonar Wave Animation */}
      <motion.div
        animate={{
          scale: [1, 3, 1],
          opacity: [0.8, 0.2, 0.8],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-32 h-32 border-2 rounded-full top-1/2 left-1/4 border-blue-400/30"
      />

      {/* Floating Naval Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 text-blue-400/30"
      >
        <Compass size={60} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-20 text-indigo-400/30"
      >
        <Anchor size={50} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hero Section with Submarine Silhouette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative px-8 py-20 text-center"
        >
          {/* Animated Submarine */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
            className="relative mb-12"
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Submarine body */}
              <div className="relative w-48 h-16 border rounded-full bg-gradient-to-r from-slate-600/40 to-blue-600/40 border-blue-400/30">
                {/* Conning tower */}
                <div className="absolute top-0 w-8 h-6 transform -translate-y-4 border rounded-t-lg left-1/3 bg-slate-600/60 border-blue-400/30" />
                {/* Propeller */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute right-0 w-6 h-6 transform translate-x-3 -translate-y-1/2 top-1/2"
                >
                  <Zap size={24} className="text-blue-400/60" />
                </motion.div>
                {/* Sonar waves */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.6, 0.1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-0 w-8 h-8 transform -translate-x-4 -translate-y-1/2 border rounded-full top-1/2 border-blue-400/40"
                />
              </div>
            </div>
          </motion.div>

          <h1 className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl">
            <span className="text-transparent bg-gradient-to-r from-blue-200 via-indigo-200 to-slate-200 bg-clip-text">
              Submarine
            </span>
            <br />
            <span className="text-4xl text-white/90 md:text-5xl lg:text-6xl">
              Technology
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl mx-auto text-2xl font-light leading-relaxed md:text-3xl text-blue-100/90"
          >
            Advanced underwater vehicle technology and submarine systems for
            naval defense, research, and deep-sea operations.
          </motion.p>
        </motion.div>

        {/* Depth & Navigation Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-8 mx-auto mb-20"
        >
          <div className="max-w-6xl p-8 mx-auto border bg-slate-800/60 backdrop-blur-xl rounded-3xl border-blue-400/30">
            <h3 className="mb-8 text-3xl font-bold text-center text-blue-200">
              Mission Control Dashboard
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="p-6 text-center border bg-blue-500/10 rounded-2xl border-blue-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Waves className="text-blue-400" size={24} />
                  <span className="text-xl text-blue-200">Depth</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-bold text-blue-400"
                >
                  -450m
                </motion.div>
                <div className="mt-2 text-sm text-blue-300/70">Operational</div>
              </div>

              <div className="p-6 text-center border bg-indigo-500/10 rounded-2xl border-indigo-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Navigation className="text-indigo-400" size={24} />
                  <span className="text-xl text-indigo-200">Heading</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl font-bold text-indigo-400"
                >
                  270°
                </motion.div>
                <div className="mt-2 text-sm text-indigo-300/70">West</div>
              </div>

              <div className="p-6 text-center border bg-slate-500/10 rounded-2xl border-slate-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="text-slate-400" size={24} />
                  <span className="text-xl text-slate-200">Stealth Mode</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl font-bold text-green-400"
                >
                  ACTIVE
                </motion.div>
                <div className="mt-2 text-sm text-slate-300/70">
                  Silent Running
                </div>
              </div>

              <div className="p-6 text-center border bg-cyan-500/10 rounded-2xl border-cyan-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Battery className="text-cyan-400" size={24} />
                  <span className="text-xl text-cyan-200">Power</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl font-bold text-cyan-400"
                >
                  92%
                </motion.div>
                <div className="mt-2 text-sm text-cyan-300/70">
                  48h Remaining
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="container px-8 pb-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Naval Systems
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <Waves className="text-blue-400" size={24} />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 mx-auto lg:grid-cols-2 max-w-7xl">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
                variant="submarine"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
