"use client";

import { motion } from "framer-motion";
import {
  FlaskRound as Flask,
  Rocket,
  Database,
  TestTube,
  Brain,
  Award,
} from "lucide-react";
import ServiceCard from "@/components/ui/service-card";

export default function RnDAIMLProductsPage() {
  const researchProjects = [
    {
      title: "NeuroVision AI",
      status: "Production",
      description:
        "Computer vision platform processing 50M+ medical images with 98.7% accuracy",
      achievements: [
        "FDA approval for clinical use",
        "Deployed in 150+ hospitals",
        "Reduced diagnostic time by 75%",
        "Published in Nature Medicine",
      ],
      funding: "$15M",
      patents: 8,
    },
    {
      title: "AgentSwarm Framework",
      status: "Beta Testing",
      description:
        "Multi-agent AI system for autonomous decision-making in complex environments",
      achievements: [
        "1000+ autonomous agents coordinated",
        "99.9% task completion rate",
        "Real-time learning capabilities",
        "Military defense applications",
      ],
      funding: "$12M",
      patents: 5,
    },
    {
      title: "PredictiveHealth Engine",
      status: "Clinical Trials",
      description:
        "AI platform predicting health outcomes 6 months in advance with 94% accuracy",
      achievements: [
        "Phase II clinical trials completed",
        "500K+ patient records analyzed",
        "Early disease detection breakthrough",
        "Partnership with Mayo Clinic",
      ],
      funding: "$8M",
      patents: 12,
    },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "Deep Learning Research",
      description:
        "Breakthrough neural network architectures with proprietary algorithms achieving state-of-the-art performance.",
      metrics: [
        "25+ research papers published",
        "150+ citations in top journals",
        "12 novel architectures developed",
        "8 industry awards received",
      ],
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description:
        "Scalable data processing platforms handling petabytes of information with real-time insights.",
      metrics: [
        "10PB+ data processed daily",
        "Sub-second query responses",
        "99.99% uptime achieved",
        "500+ enterprise clients",
      ],
    },
    {
      icon: Rocket,
      title: "Product Development",
      description:
        "End-to-end AI product development from research to market deployment with proven ROI.",
      metrics: [
        "15 products successfully launched",
        "$50M+ revenue generated",
        "2M+ active users",
        "95% customer retention rate",
      ],
    },
    {
      icon: TestTube,
      title: "Experimental Validation",
      description:
        "Rigorous testing methodologies ensuring AI reliability and safety in critical applications.",
      metrics: [
        "10,000+ experiments conducted",
        "99.7% model reliability",
        "Zero critical failures",
        "ISO 27001 certified",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 px-8 py-20 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border rounded-full bg-rose-500/20 border-rose-400/30">
          <Award className="text-rose-400" size={24} />
          <span className="font-medium text-rose-300">
            Award-Winning AI Research
          </span>
        </div>

        <h1 className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl">
          <span className="text-transparent bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 bg-clip-text">
            R&D on AI/ML
          </span>
          <br />
          <span className="text-4xl text-white/90 md:text-5xl lg:text-6xl">
            Products
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl mx-auto text-2xl font-light leading-relaxed md:text-3xl text-rose-100/90"
        >
          Leading AI/ML research with $50M+ funding, 25+ patents, and
          breakthrough products deployed in healthcare, defense, and enterprise
          applications.
        </motion.p>
      </motion.div>

      {/* Research Projects Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-8 mx-auto mb-20"
      >
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Breakthrough Research Projects
        </h2>
        <div className="max-w-6xl mx-auto space-y-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-8 border bg-white/5 backdrop-blur-xl rounded-3xl border-rose-400/30"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-lg font-medium ${
                        project.status === "Production"
                          ? "bg-green-500/20 text-green-400"
                          : project.status === "Beta Testing"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="mb-6 text-xl text-rose-200">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                        <span className="text-lg text-rose-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 border bg-rose-500/10 rounded-2xl border-rose-400/20">
                    <div className="mb-2 text-3xl font-bold text-rose-400">
                      {project.funding}
                    </div>
                    <div className="text-rose-300">Research Funding</div>
                  </div>
                  <div className="p-6 border bg-pink-500/10 rounded-2xl border-pink-400/20">
                    <div className="mb-2 text-3xl font-bold text-pink-400">
                      {project.patents}
                    </div>
                    <div className="text-pink-300">Patents Filed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
          <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Research Capabilities
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500"></div>
            <Flask className="text-rose-400" size={24} />
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 mx-auto lg:grid-cols-2 max-w-7xl">
          {capabilities.map((capability, index) => (
            <ServiceCard
              key={capability.title}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              features={capability.metrics}
              index={index}
              variant="research"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
