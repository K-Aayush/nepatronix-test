"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Radio,
  Satellite,
  Lock,
  Wifi,
  Antenna,
  Signal,
  Radar,
  Zap,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ui/service-card";

export default function CommunicationTechnologyPage() {
  const services = [
    {
      icon: Radio,
      title: "Tactical Communications",
      description:
        "Military-grade radio systems for secure battlefield communications and coordination.",
      features: [
        "Frequency hopping technology",
        "Multi-band radio systems",
        "Encrypted voice communication",
        "Jamming-resistant protocols",
      ],
    },
    {
      icon: Satellite,
      title: "Satellite Communication",
      description:
        "Advanced satellite communication systems for global connectivity and data transmission.",
      features: [
        "High-throughput satellite links",
        "Mobile satellite terminals",
        "Redundant communication paths",
        "Global coverage capabilities",
      ],
    },
    {
      icon: Lock,
      title: "Secure Encryption",
      description:
        "Military-grade encryption and cybersecurity solutions for sensitive communications.",
      features: [
        "End-to-end encryption protocols",
        "Quantum-resistant cryptography",
        "Key management systems",
        "Secure authentication methods",
      ],
    },
    {
      icon: Wifi,
      title: "Mesh Networks",
      description:
        "Self-healing mesh network systems for resilient communication in challenging environments.",
      features: [
        "Self-organizing network topology",
        "Automatic route optimization",
        "Fault-tolerant communication",
        "Dynamic bandwidth allocation",
      ],
    },
    {
      icon: Antenna,
      title: "Advanced Antenna Systems",
      description:
        "High-performance antenna arrays and beam-forming technology for optimized signal transmission.",
      features: [
        "Phased array antennas",
        "Adaptive beam steering",
        "MIMO technology integration",
        "Multi-frequency operation",
      ],
    },
    {
      icon: Signal,
      title: "Signal Intelligence",
      description:
        "Advanced signal processing and intelligence gathering systems for electronic warfare.",
      features: [
        "Signal interception capabilities",
        "Direction finding systems",
        "Electronic countermeasures",
        "Spectrum analysis tools",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
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
            className="absolute border-2 rounded-full border-green-400/20"
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
        <div className="relative w-full h-full border rounded-full border-green-400/20">
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
          >
            <Satellite size={24} className="text-green-400/60" />
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
        className="absolute top-20 left-20 text-emerald-400/30"
      >
        <Radar size={60} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-20 text-teal-400/30"
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
              <div className="relative w-2 h-32 bg-gradient-to-t from-green-600/60 to-emerald-400/60">
                {/* Antenna arrays */}
                <div className="absolute top-0 transform -translate-x-1/2 -translate-y-2 left-1/2">
                  <div className="w-16 h-1 rounded-full bg-emerald-400/80" />
                </div>
                <div className="absolute transform -translate-x-1/2 top-8 left-1/2">
                  <div className="w-12 h-1 rounded-full bg-green-400/80" />
                </div>
                <div className="absolute transform -translate-x-1/2 top-16 left-1/2">
                  <div className="w-8 h-1 rounded-full bg-teal-400/80" />
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
                    className="absolute top-0 w-8 h-8 transform -translate-x-1/2 -translate-y-4 border rounded-full left-1/2 border-emerald-400/40"
                  />
                ))}
              </div>

              {/* Base */}
              <div className="w-8 h-4 rounded-b-lg bg-gradient-to-b from-green-600/60 to-emerald-800/60" />
            </div>
          </motion.div>

          <h1 className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl">
            <span className="text-transparent bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 bg-clip-text">
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
            className="max-w-4xl mx-auto text-2xl font-light leading-relaxed md:text-3xl text-emerald-100/90"
          >
            Advanced military and defense communication systems providing
            secure, reliable, and resilient connectivity in critical operations.
          </motion.p>
        </motion.div>

        {/* Signal Strength Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-8 mx-auto mb-20"
        >
          <div className="max-w-6xl p-8 mx-auto border bg-emerald-900/40 backdrop-blur-xl rounded-3xl border-emerald-400/30">
            <h3 className="mb-8 text-3xl font-bold text-center text-emerald-200">
              Communication Network Status
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="p-6 text-center border bg-emerald-500/10 rounded-2xl border-emerald-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Signal className="text-emerald-400" size={24} />
                  <span className="text-xl text-emerald-200">
                    Signal Strength
                  </span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-bold text-emerald-400"
                >
                  -65 dBm
                </motion.div>
                <div className="mt-2 text-sm text-emerald-300/70">
                  Excellent
                </div>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(i + 1) * 4}px` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="w-2 rounded-t bg-emerald-400"
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 text-center border bg-green-500/10 rounded-2xl border-green-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Lock className="text-green-400" size={24} />
                  <span className="text-xl text-green-200">Encryption</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl font-bold text-green-400"
                >
                  AES-256
                </motion.div>
                <div className="mt-2 text-sm text-green-300/70">Secure</div>
              </div>

              <div className="p-6 text-center border bg-teal-500/10 rounded-2xl border-teal-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wifi className="text-teal-400" size={24} />
                  <span className="text-xl text-teal-200">Network</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl font-bold text-teal-400"
                >
                  MESH
                </motion.div>
                <div className="mt-2 text-sm text-teal-300/70">Active</div>
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
                  12ms
                </motion.div>
                <div className="mt-2 text-sm text-cyan-300/70">Ultra Low</div>
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
              Communication Systems
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500"></div>
              <Radio className="text-emerald-400" size={24} />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
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
