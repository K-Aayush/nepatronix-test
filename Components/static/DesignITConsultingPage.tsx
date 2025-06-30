"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Palette,
  Monitor,
  Users,
  TrendingUp,
  Shield,
  Wrench,
  Code,
  Lightbulb,
  Settings,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export default function DesignITConsultingPage() {
  const consultingAreas = [
    { title: "UI/UX Design", icon: Palette, clients: 150, satisfaction: 98 },
    {
      title: "Digital Strategy",
      icon: TrendingUp,
      clients: 89,
      satisfaction: 96,
    },
    {
      title: "IT Infrastructure",
      icon: Monitor,
      clients: 67,
      satisfaction: 94,
    },
    { title: "Security Audit", icon: Shield, clients: 45, satisfaction: 99 },
  ];

  const processSteps = [
    {
      phase: "Discovery",
      duration: "1-2 weeks",
      activities: [
        "Stakeholder interviews",
        "Current state analysis",
        "Requirements gathering",
      ],
    },
    {
      phase: "Strategy",
      duration: "2-3 weeks",
      activities: [
        "Solution architecture",
        "Technology roadmap",
        "Risk assessment",
      ],
    },
    {
      phase: "Design",
      duration: "3-4 weeks",
      activities: ["Wireframing", "Prototyping", "User testing"],
    },
    {
      phase: "Implementation",
      duration: "4-8 weeks",
      activities: ["Development", "Integration", "Quality assurance"],
    },
    {
      phase: "Optimization",
      duration: "Ongoing",
      activities: [
        "Performance monitoring",
        "User feedback",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg text-blue-600 transition-colors hover:text-blue-800"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </nav>

      {/* Consulting Office Layout */}
      <div className="px-6 py-8 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-blue-100 rounded-full">
            <Briefcase className="text-blue-600" size={24} />
            <span className="font-medium text-blue-800">
              Professional Consulting Services
            </span>
          </div>

          <h1 className="mb-6 text-6xl font-bold lg:text-8xl">
            <span className="text-blue-600">Design</span>
            <span className="text-gray-800"> & </span>
            <span className="text-indigo-600">IT</span>
            <br />
            <span className="text-gray-800">Consulting</span>
          </h1>

          <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-600">
            Strategic technology consulting and design services to transform
            your business operations and user experiences
          </p>
        </motion.div>

        {/* Consulting Dashboard */}
        <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-4">
          {consultingAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 transition-shadow bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl">
                <area.icon size={32} className="text-white" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {area.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Clients Served
                    </span>
                    <span className="font-bold text-blue-600">
                      {area.clients}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(area.clients / 150) * 100}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Satisfaction</span>
                    <span className="font-bold text-green-600">
                      {area.satisfaction}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${area.satisfaction}%` }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-12 mb-16 bg-white border border-gray-200 shadow-lg rounded-3xl"
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Our Consulting Process
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 w-full h-1 rounded-full top-8 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 text-lg font-bold text-white rounded-full bg-gradient-to-br from-blue-500 to-indigo-500">
                    {index + 1}
                  </div>

                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {step.phase}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-blue-600">
                      {step.duration}
                    </p>

                    <ul className="space-y-1 text-sm text-gray-600">
                      {step.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-center gap-2"
                        >
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Palette,
              title: "Design Systems",
              desc: "Comprehensive design language and component libraries",
            },
            {
              icon: Monitor,
              title: "Digital Transformation",
              desc: "Strategic technology adoption and process optimization",
            },
            {
              icon: Shield,
              title: "Security Assessment",
              desc: "Comprehensive security audits and compliance consulting",
            },
            {
              icon: TrendingUp,
              title: "Performance Optimization",
              desc: "System performance analysis and improvement strategies",
            },
            {
              icon: Users,
              title: "User Experience",
              desc: "User research, testing, and experience optimization",
            },
            {
              icon: Wrench,
              title: "Technical Support",
              desc: "24/7 technical support and system maintenance",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="p-8 transition-all duration-300 bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                <service.icon size={24} className="text-white" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="p-12 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl"
        >
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Let our expert consultants help you navigate the digital landscape
            and achieve your technology goals
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-4 text-lg font-semibold text-blue-600 transition-colors bg-white rounded-full hover:bg-blue-50">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-white transition-colors border-2 border-white rounded-full hover:bg-white/10">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
