"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Scan,
  Target,
  Database,
  Zap,
  Eye,
  Activity,
  Stethoscope,
  Microscope,
} from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ui/service-card";

export default function AIAssistedDiagnosticsPage() {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Diagnostics",
      description:
        "Advanced ML algorithms that assist healthcare professionals in accurate and rapid diagnosis.",
      features: [
        "Deep learning image analysis",
        "Pattern recognition for rare diseases",
        "Continuous learning from medical data",
        "Integration with existing diagnostic tools",
      ],
    },
    {
      icon: Scan,
      title: "Medical Imaging AI",
      description:
        "Sophisticated AI systems for analyzing medical images with precision and speed.",
      features: [
        "Radiology image interpretation",
        "Automated anomaly detection",
        "3D medical image reconstruction",
        "Cross-modality image fusion",
      ],
    },
    {
      icon: Target,
      title: "Precision Medicine",
      description:
        "Personalized treatment recommendations based on individual patient data and AI analysis.",
      features: [
        "Genomic data analysis",
        "Drug interaction predictions",
        "Treatment outcome forecasting",
        "Personalized therapy optimization",
      ],
    },
    {
      icon: Database,
      title: "Clinical Decision Support",
      description:
        "AI-powered systems that provide evidence-based recommendations for clinical decision-making.",
      features: [
        "Real-time clinical alerts",
        "Evidence-based treatment suggestions",
        "Risk assessment algorithms",
        "Protocol compliance monitoring",
      ],
    },
    {
      icon: Zap,
      title: "Rapid Screening Tools",
      description:
        "Lightning-fast AI screening tools for early detection and prevention of diseases.",
      features: [
        "Automated health screening",
        "Early disease detection algorithms",
        "Population health monitoring",
        "Preventive care recommendations",
      ],
    },
    {
      icon: Eye,
      title: "Computer Vision Diagnostics",
      description:
        "Advanced computer vision systems for medical image analysis and diagnostic support.",
      features: [
        "Retinal disease detection",
        "Skin lesion analysis",
        "Pathology slide examination",
        "Surgical guidance systems",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* DNA Helix Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 top-1/4 left-10"
        >
          <div className="relative w-full h-full">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: i * 45,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute w-4 h-4 rounded-full bg-purple-400/30"
                style={{
                  top: `${Math.sin((i * Math.PI) / 4) * 40 + 50}%`,
                  left: `${Math.cos((i * Math.PI) / 4) * 40 + 50}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Medical Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 text-indigo-400/20"
      >
        <Stethoscope size={60} />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-1/4 text-purple-400/20"
      >
        <Microscope size={50} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hero Section with Brain Scan Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative px-8 py-20 text-center"
        >
          {/* Animated Brain Scan */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative mb-12"
          >
            <div className="relative inline-flex items-center justify-center w-32 h-32">
              <Brain size={80} className="text-purple-400" />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border-2 rounded-full border-purple-400/50"
              />
              <motion.div
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 border-2 rounded-full border-indigo-400/50"
              />
            </div>
          </motion.div>

          <h1 className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl">
            <span className="text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 bg-clip-text">
              AI Assisted
            </span>
            <br />
            <span className="text-4xl text-white/90 md:text-5xl lg:text-6xl">
              Diagnostics
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl mx-auto text-2xl font-light leading-relaxed md:text-3xl text-indigo-100/90"
          >
            Transforming medical diagnosis through artificial intelligence,
            machine learning, and advanced analytics to improve patient outcomes
            and clinical efficiency.
          </motion.p>
        </motion.div>

        {/* Diagnostic Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-8 mx-auto mb-20"
        >
          <div className="max-w-6xl p-8 mx-auto border bg-white/5 backdrop-blur-xl rounded-3xl border-purple-400/30">
            <h3 className="mb-8 text-3xl font-bold text-center text-purple-200">
              Diagnostic Performance Metrics
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="mb-2 text-5xl font-bold text-purple-400"
                >
                  98.7%
                </motion.div>
                <div className="text-lg text-purple-200/80">Accuracy Rate</div>
                <div className="w-full h-2 mt-3 rounded-full bg-purple-900/30">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.7%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                  />
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                  className="mb-2 text-5xl font-bold text-indigo-400"
                >
                  2.3s
                </motion.div>
                <div className="text-lg text-indigo-200/80">
                  Average Analysis Time
                </div>
                <Activity className="w-8 h-8 mx-auto mt-3 text-indigo-400" />
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
                  className="mb-2 text-5xl font-bold text-blue-400"
                >
                  1M+
                </motion.div>
                <div className="text-lg text-blue-200/80">Cases Analyzed</div>
                <div className="flex justify-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="w-2 h-6 mx-1 bg-blue-400 rounded"
                      style={{ height: `${Math.random() * 20 + 10}px` }}
                    />
                  ))}
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
              Diagnostic Solutions
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <Brain className="text-purple-400" size={24} />
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
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
                variant="medical"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
