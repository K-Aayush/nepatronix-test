"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Plane,
  Camera,
  Radar,
  Shield,
  Zap,
  Satellite,
  Target,
  Eye,
  Navigation,
  Award,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "../ui/service-card";

export default function DroneTechnologyPage() {
  const droneCapabilities = [
    {
      icon: Plane,
      title: "Smart Flight Systems",
      description:
        "Advanced drone systems with 30km range, 6-hour flight time, and intelligent navigation for commercial applications.",
      features: [
        "Smart obstacle avoidance",
        "High-precision GPS navigation",
        "Fleet coordination technology",
        "Weather-resistant flight planning",
        "Automated mission scheduling",
        "Real-time route optimization",
      ],
    },
    {
      icon: Camera,
      title: "High-Performance Imaging",
      description:
        "Cutting-edge imaging platforms with 4K video, thermal capabilities, and real-time data capture for diverse industries.",
      features: [
        "Multi-spectral imaging (RGB, IR)",
        "Real-time video streaming",
        "Thermal imaging up to 10km range",
        "Object detection algorithms",
        "Low-light performance",
        "Customizable imaging solutions",
      ],
    },
    {
      icon: Radar,
      title: "Sensor Integration",
      description:
        "Versatile sensor systems integrating LiDAR, radar, and environmental sensors for comprehensive data collection.",
      features: [
        "High-resolution LiDAR mapping",
        "Environmental monitoring sensors",
        "Air quality detection",
        "Data fusion technology",
        "Real-time analytics",
        "Custom sensor configurations",
      ],
    },
    {
      icon: Shield,
      title: "Drone Safety Systems",
      description:
        "Robust safety and security features to protect operations, including geofencing and advanced encryption.",
      features: [
        "Geofencing technology",
        "Secure data transmission",
        "Collision avoidance systems",
        "Automated safety protocols",
        "Regulatory compliance features",
        "Remote monitoring integration",
      ],
    },
    {
      icon: Zap,
      title: "High-Efficiency Drones",
      description:
        "Reliable, high-performance drones designed for precision tasks with energy-efficient technology.",
      features: [
        "High-capacity battery systems",
        "Energy-efficient motors",
        "Precision task execution",
        "Durable composite materials",
        "Encrypted control links",
        "Customizable payload options",
      ],
    },
    {
      icon: Satellite,
      title: "Connectivity Solutions",
      description:
        "Seamless, long-range communication systems with reliable data transmission for mission-critical operations.",
      features: [
        "Long-range communication links",
        "Encrypted data transfer (AES-256)",
        "Mesh networking support",
        "Low-latency controls (<50ms)",
        "Redundant connectivity options",
        "Cloud-based mission management",
      ],
    },
  ];

  const nepatronixSpecs = [
    { metric: "30km", label: "Max Range", description: "Operational radius" },
    {
      metric: "6hrs",
      label: "Flight Time",
      description: "Continuous operation",
    },
    {
      metric: "10kg",
      label: "Payload Capacity",
      description: "Equipment weight",
    },
    {
      metric: "99.5%",
      label: "Reliability",
      description: "Operational uptime",
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-zinc-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 px-8 py-20 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 font-mono border rounded bg-blue-500/20 border-blue-500/50">
          <Target className="text-blue-400" size={20} />
          <span className="text-blue-400">NEPATRONIX INNOVATION</span>
        </div>

        <h1 className="mb-8 font-mono text-6xl font-bold tracking-wider lg:text-8xl">
          <span className="text-blue-400">DRONE</span>
          <br />
          <span className="text-white">TECHNOLOGY</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl mx-auto text-2xl font-light leading-relaxed tracking-wide md:text-3xl text-slate-200/90"
        >
          Nepatronix delivers cutting-edge drone solutions with 30km range,
          smart navigation, and advanced imaging for industries like
          agriculture, logistics, and surveying.
        </motion.p>
      </motion.div>

      {/* Technical Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-8 mx-auto mb-20"
      >
        <div className="max-w-6xl p-8 mx-auto border-l-4 border-blue-500 rounded-lg bg-slate-800/80 backdrop-blur-lg">
          <h3 className="mb-6 font-mono text-2xl font-bold tracking-wide text-blue-400">
            TECHNICAL SPECIFICATIONS
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {nepatronixSpecs.map((spec, index) => (
              <div key={spec.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  className="mb-2 font-mono text-3xl font-bold text-blue-400"
                >
                  {spec.metric}
                </motion.div>
                <div className="text-xl font-semibold text-slate-300">
                  {spec.label}
                </div>
                <div className="text-lg text-slate-400">{spec.description}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Capabilities Grid */}
      <div className="container relative z-10 px-8 pb-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-mono text-4xl font-bold tracking-wider text-white md:text-6xl">
            INNOVATIVE SOLUTIONS
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-1 bg-blue-500"></div>
            <Eye className="text-blue-500" size={24} />
            <div className="w-12 h-1 bg-blue-500"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
          {droneCapabilities.map((capability, index) => (
            <ServiceCard
              key={capability.title}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              features={capability.features}
              index={index}
              variant="submarine"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
