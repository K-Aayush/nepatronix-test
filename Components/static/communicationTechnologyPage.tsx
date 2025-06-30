"use client";

import { motion } from "framer-motion";
import {
  Radio,
  Satellite,
  Lock,
  Wifi,
  Antenna,
  Signal,
  Radar,
  Zap,
} from "lucide-react";
import ServiceCard from "../ui/service-card";

export default function CommunicationTechnologyPage() {
  const services = [
    {
      icon: Radio,
      title: "Wireless Communication",
      description:
        "Cutting-edge wireless solutions for seamless connectivity in smart cities, businesses, and homes.",
      features: [
        "5G and Wi-Fi 6 integration",
        "High-speed data transfer",
        "IoT device connectivity",
        "Scalable network solutions",
      ],
    },
    {
      icon: Satellite,
      title: "Satellite Connectivity",
      description:
        "Reliable satellite-based communication systems for remote and global connectivity.",
      features: [
        "High-speed satellite internet",
        "Portable satellite terminals",
        "Global IoT connectivity",
        "Real-time data streaming",
      ],
    },
    {
      icon: Lock,
      title: "Secure Data Solutions",
      description:
        "Advanced encryption and cybersecurity for protecting sensitive business and personal data.",
      features: [
        "End-to-end encryption",
        "Secure cloud integration",
        "User authentication systems",
        "Data privacy compliance",
      ],
    },
    {
      icon: Wifi,
      title: "Smart Mesh Networks",
      description:
        "Intelligent mesh networks for robust and flexible connectivity in dynamic environments.",
      features: [
        "Self-configuring networks",
        "Optimized bandwidth allocation",
        "Resilient network topology",
        "Smart device integration",
      ],
    },
    {
      icon: Antenna,
      title: "Next-Gen Antennas",
      description:
        "Innovative antenna systems for enhanced signal quality and efficient data transmission.",
      features: [
        "Compact antenna designs",
        "Multi-band compatibility",
        "Beam-forming technology",
        "Energy-efficient systems",
      ],
    },
    {
      icon: Signal,
      title: "Signal Optimization",
      description:
        "Advanced signal processing to ensure clear and reliable communication in any environment.",
      features: [
        "Signal enhancement algorithms",
        "Interference reduction",
        "Real-time signal monitoring",
        "Cross-platform compatibility",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Radio Wave Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 4, 1],
              opacity: [0.8, 0.1, 0.8],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute border-2 rounded-full border-blue-400/20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: "50px",
              height: "50px",
            }}
          />
        ))}
      </div>

      {/* Satellite Orbit Animation */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 top-1/4 right-1/4"
      >
        <div className="relative w-full h-full border rounded-full border-blue-400/20">
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
          >
            <Satellite size={24} className="text-blue-400/60" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Communication Icons */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 text-blue-400/30"
      >
        <Radar size={60} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-20 text-indigo-400/30"
      >
        <Antenna size={50} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hero Section with Communication Tower */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative px-8 py-20 text-center"
        >
          {/* Animated Communication Tower */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative mb-12"
          >
            <div className="relative inline-flex flex-col items-center justify-center">
              {/* Tower structure */}
              <div className="relative w-2 h-32 bg-gradient-to-t from-blue-600/60 to-indigo-400/60">
                {/* Antenna arrays */}
                <div className="absolute top-0 transform -translate-x-1/2 -translate-y-2 left-1/2">
                  <div className="w-16 h-1 rounded-full bg-blue-400/80" />
                </div>
                <div className="absolute transform -translate-x-1/2 top-8 left-1/2">
                  <div className="w-12 h-1 rounded-full bg-indigo-400/80" />
                </div>
                <div className="absolute transform -translate-x-1/2 top-16 left-1/2">
                  <div className="w-8 h-1 rounded-full bg-purple-400/80" />
                </div>

                {/* Signal waves */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 2.5, 1],
                      opacity: [0.8, 0.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute top-0 w-8 h-8 transform -translate-x-1/2 -translate-y-4 border rounded-full left-1/2 border-blue-400/40"
                  />
                ))}
              </div>

              {/* Base */}
              <div className="w-8 h-4 rounded-b-lg bg-gradient-to-b from-blue-600/60 to-indigo-800/60" />
            </div>
          </motion.div>

          <h1 className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl">
            <span className="text-transparent bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text">
              Communication
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
            Innovative communication solutions by Nepatronix, delivering fast,
            secure, and reliable connectivity for businesses, communities, and
            IoT ecosystems.
          </motion.p>
        </motion.div>

        {/* Network Status Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-8 mx-auto mb-20"
        >
          <div className="max-w-6xl p-8 mx-auto border bg-blue-900/40 backdrop-blur-xl rounded-3xl border-blue-400/30">
            <h3 className="mb-8 text-3xl font-bold text-center text-blue-200">
              Network Performance Overview
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="p-6 text-center border bg-blue-500/10 rounded-2xl border-blue-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Signal className="text-blue-400" size={24} />
                  <span className="text-xl text-blue-200">Signal Strength</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-bold text-blue-400"
                >
                  -70 dBm
                </motion.div>
                <div className="mt-2 text-sm text-blue-300/70">
                  High Quality
                </div>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(i + 1) * 4}px` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="w-2 bg-blue-400 rounded-t"
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 text-center border bg-indigo-500/10 rounded-2xl border-indigo-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Lock className="text-indigo-400" size={24} />
                  <span className="text-xl text-indigo-200">Security</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl font-bold text-indigo-400"
                >
                  AES-256
                </motion.div>
                <div className="mt-2 text-sm text-indigo-300/70">Protected</div>
              </div>

              <div className="p-6 text-center border bg-purple-500/10 rounded-2xl border-purple-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wifi className="text-purple-400" size={24} />
                  <span className="text-xl text-purple-200">Network</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl font-bold text-purple-400"
                >
                  MESH
                </motion.div>
                <div className="mt-2 text-sm text-purple-300/70">Connected</div>
              </div>

              <div className="p-6 text-center border bg-cyan-500/10 rounded-2xl border-cyan-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Zap className="text-cyan-400" size={24} />
                  <span className="text-xl text-cyan-200">Latency</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl font-bold text-cyan-400"
                >
                  10ms
                </motion.div>
                <div className="mt-2 text-sm text-cyan-300/70">Ultra Fast</div>
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
              Our Communication Solutions
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <Radio className="text-blue-400" size={24} />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
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
                variant="communication"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
