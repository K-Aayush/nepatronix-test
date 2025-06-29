"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Crosshair,
  Zap,
  Eye,
  Lock,
  Rocket,
  Target,
  Radar,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ui/service-card";

export default function RnDSecurityDefensePage() {
  const services = [
    {
      icon: Shield,
      title: "Defense Research",
      description:
        "Advanced research programs focused on next-generation defense technologies and strategies.",
      features: [
        "Advanced materials research",
        "Armor and protection systems",
        "Ballistic testing and simulation",
        "Threat assessment modeling",
      ],
    },
    {
      icon: Crosshair,
      title: "Weapons Systems R&D",
      description:
        "Research and development of precision weapons and targeting systems for modern warfare.",
      features: [
        "Precision guidance systems",
        "Smart munitions development",
        "Fire control algorithms",
        "Target acquisition technology",
      ],
    },
    {
      icon: Zap,
      title: "Electronic Warfare",
      description:
        "Cutting-edge electronic warfare systems and countermeasures for battlefield dominance.",
      features: [
        "Electronic jamming systems",
        "Cyber warfare capabilities",
        "Signal intelligence platforms",
        "Communications disruption",
      ],
    },
    {
      icon: Eye,
      title: "Surveillance Innovation",
      description:
        "Advanced surveillance and reconnaissance technologies for intelligence gathering.",
      features: [
        "AI-powered threat detection",
        "Multi-sensor fusion systems",
        "Behavioral analysis algorithms",
        "Predictive intelligence tools",
      ],
    },
    {
      icon: Lock,
      title: "Cybersecurity Research",
      description:
        "Next-generation cybersecurity solutions for protecting critical defense infrastructure.",
      features: [
        "Zero-trust security architectures",
        "AI-driven threat hunting",
        "Quantum cryptography research",
        "Incident response automation",
      ],
    },
    {
      icon: Rocket,
      title: "Advanced Propulsion",
      description:
        "Revolutionary propulsion technologies for aerospace and defense applications.",
      features: [
        "Hypersonic vehicle research",
        "Advanced rocket propulsion",
        "Electric propulsion systems",
        "Scramjet engine development",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-amber-900">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,69,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,69,0,0.3) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Radar Sweep Animation */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 top-1/4 right-1/4"
      >
        <div className="relative w-full h-full border-2 rounded-full border-red-400/20">
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-px origin-left transform -translate-y-1/2 top-1/2 left-1/2 bg-gradient-to-r from-red-400/60 to-transparent"
          />
          <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-red-400/80" />
        </div>
      </motion.div>

      {/* Floating Defense Icons */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 text-red-400/30"
      >
        <Target size={60} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 right-20 text-orange-400/30"
      >
        <Radar size={50} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Navigation */}
        <nav className="p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xl font-medium tracking-wide text-red-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={24} />
            MISSION ABORT
          </Link>
        </nav>

        {/* Hero Section with Defense Shield */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative px-8 py-20 text-center"
        >
          {/* Animated Defense Shield */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative mb-12"
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Central shield */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-32 h-32"
              >
                <Shield size={128} className="text-red-400" />

                {/* Pulsing defense perimeter */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 rounded-full border-red-400/40"
                />

                {/* Secondary defense ring */}
                <motion.div
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.4, 0.1, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 border rounded-full border-orange-400/30"
                />
              </motion.div>

              {/* Tactical markers */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute w-3 h-3 rounded-full bg-red-400/60"
                  style={{
                    top: `${Math.sin((i * Math.PI) / 4) * 100 + 50}%`,
                    left: `${Math.cos((i * Math.PI) / 4) * 100 + 50}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          </motion.div>

          <div className="mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="h-1 max-w-lg mx-auto mb-8 bg-gradient-to-r from-red-500 to-orange-500"
            ></motion.div>

            <h1 className="mb-4 text-5xl font-bold tracking-wider md:text-7xl lg:text-8xl">
              <span className="text-red-400">R&D SECURITY</span>
              <br />
              <span className="text-white">& DEFENSE</span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="h-1 max-w-lg mx-auto bg-gradient-to-r from-orange-500 to-amber-500"
            ></motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="max-w-4xl mx-auto text-2xl font-light leading-relaxed tracking-wide md:text-3xl text-red-100/90"
          >
            PIONEERING RESEARCH AND DEVELOPMENT IN SECURITY AND DEFENSE
            TECHNOLOGIES, CREATING TOMORROW`S SOLUTIONS FOR NATIONAL SECURITY
            CHALLENGES.
          </motion.p>
        </motion.div>

        {/* Threat Level Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-8 mx-auto mb-20"
        >
          <div className="max-w-6xl p-8 mx-auto border bg-red-900/40 backdrop-blur-xl rounded-3xl border-red-400/30">
            <h3 className="mb-8 text-3xl font-bold tracking-wide text-center text-red-200">
              DEFENSE READINESS STATUS
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="p-6 text-center border bg-red-500/10 rounded-2xl border-red-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="text-red-400" size={24} />
                  <span className="text-xl text-red-200">DEFCON Level</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-bold text-red-400"
                >
                  3
                </motion.div>
                <div className="mt-2 text-sm text-red-300/70">ELEVATED</div>
              </div>

              <div className="p-6 text-center border bg-orange-500/10 rounded-2xl border-orange-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Eye className="text-orange-400" size={24} />
                  <span className="text-xl text-orange-200">Surveillance</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl font-bold text-orange-400"
                >
                  ACTIVE
                </motion.div>
                <div className="mt-2 text-sm text-orange-300/70">
                  24/7 Monitoring
                </div>
              </div>

              <div className="p-6 text-center border bg-amber-500/10 rounded-2xl border-amber-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Lock className="text-amber-400" size={24} />
                  <span className="text-xl text-amber-200">Security</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl font-bold text-amber-400"
                >
                  SECURE
                </motion.div>
                <div className="mt-2 text-sm text-amber-300/70">
                  All Systems
                </div>
              </div>

              <div className="p-6 text-center border bg-yellow-500/10 rounded-2xl border-yellow-400/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Rocket className="text-yellow-400" size={24} />
                  <span className="text-xl text-yellow-200">R&D Projects</span>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl font-bold text-yellow-400"
                >
                  47
                </motion.div>
                <div className="mt-2 text-sm text-yellow-300/70">
                  In Progress
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
            <h2 className="mb-6 text-4xl font-bold tracking-wider text-white md:text-6xl">
              DEFENSE CAPABILITIES
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-1 bg-red-500"></div>
              <Crosshair className="text-red-500" size={24} />
              <div className="w-12 h-1 bg-red-500"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
                variant="security"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
