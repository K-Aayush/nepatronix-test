"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageCircle,
  Brain,
  Mic,
  Users,
  Bot,
  Zap,
  Sparkles,
  Code,
  Send,
  User,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function ChatbotsDevelopmentPage() {
  const chatbotSolutions = [
    {
      title: "Enterprise Customer Service Bot",
      description:
        "AI-powered customer service platform handling 50K+ conversations daily with 95% resolution rate",
      capabilities: [
        "Natural Language Understanding (NLU)",
        "Multi-language support (25+ languages)",
        "Sentiment analysis and emotion detection",
        "Integration with CRM and ticketing systems",
        "Voice and text conversation handling",
        "Real-time escalation to human agents",
      ],
      metrics: {
        conversations: "2M+",
        accuracy: "95%",
        responseTime: "0.3s",
        satisfaction: "4.8/5",
      },
    },
    {
      title: "Healthcare Virtual Assistant",
      description:
        "HIPAA-compliant medical chatbot providing symptom assessment and appointment scheduling",
      capabilities: [
        "Medical symptom analysis (FDA guidelines)",
        "Appointment scheduling automation",
        "Medication reminder systems",
        "Patient data privacy protection",
        "Integration with EHR systems",
        "Emergency situation detection",
      ],
      metrics: {
        patients: "500K+",
        accuracy: "94%",
        appointments: "100K+",
        compliance: "100%",
      },
    },
    {
      title: "Financial Advisory Chatbot",
      description:
        "Intelligent financial advisor providing personalized investment recommendations and portfolio management",
      capabilities: [
        "Portfolio analysis and optimization",
        "Risk assessment algorithms",
        "Market trend analysis",
        "Regulatory compliance (SEC/FINRA)",
        "Real-time trading alerts",
        "Personalized financial planning",
      ],
      metrics: {
        users: "250K+",
        assets: "$2.5B",
        returns: "12.5%",
        retention: "89%",
      },
    },
  ];

  const technicalCapabilities = [
    {
      category: "Natural Language Processing",
      technologies: [
        "Transformer-based models (GPT, BERT)",
        "Custom NER and intent recognition",
        "Multilingual conversation handling",
        "Context-aware response generation",
      ],
    },
    {
      category: "Machine Learning",
      technologies: [
        "Reinforcement learning from human feedback",
        "Continuous model improvement",
        "A/B testing for conversation flows",
        "Predictive analytics for user behavior",
      ],
    },
    {
      category: "Integration & Deployment",
      technologies: [
        "RESTful API and webhook integrations",
        "Cloud-native architecture (AWS/Azure)",
        "Real-time analytics and monitoring",
        "Enterprise security and compliance",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 px-8 py-20 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border rounded-full bg-purple-500/20 border-purple-400/30">
          <Award className="text-purple-400" size={24} />
          <span className="text-lg font-medium text-purple-300">
            Industry-Leading Conversational AI
          </span>
        </div>

        <h1 className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl">
          <span className="text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text">
            Chatbots
          </span>
          <br />
          <span className="text-4xl text-white/90 md:text-5xl lg:text-6xl">
            Development
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl mx-auto text-2xl font-light leading-relaxed md:text-3xl text-purple-100/90"
        >
          Enterprise-grade conversational AI solutions processing 2M+
          conversations monthly with 95% accuracy and 4.8/5 user satisfaction
          across healthcare, finance, and customer service.
        </motion.p>
      </motion.div>

      {/* Chatbot Solutions Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-8 mx-auto mb-20"
      >
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Production Chatbot Solutions
        </h2>
        <div className="mx-auto space-y-12 max-w-7xl">
          {chatbotSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-8 border bg-white/5 backdrop-blur-xl rounded-3xl border-purple-400/30"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {solution.title}
                  </h3>
                  <p className="mb-6 text-xl text-purple-200">
                    {solution.description}
                  </p>

                  <h4 className="mb-4 text-xl font-semibold text-purple-300">
                    Key Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {solution.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-lg text-purple-200">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(solution.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-4 text-center border bg-purple-500/10 rounded-2xl border-purple-400/20"
                    >
                      <div className="mb-1 text-2xl font-bold text-purple-400">
                        {value}
                      </div>
                      <div className="text-lg text-purple-300 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Capabilities */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-8 mx-auto mb-20"
      >
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Technical Capabilities
        </h2>
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          {technicalCapabilities.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-6 border bg-indigo-900/30 backdrop-blur-lg rounded-2xl border-indigo-400/30"
            >
              <h3 className="mb-6 text-xl font-bold text-indigo-300">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></div>
                    <span className="text-lg text-indigo-200">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-8 pb-24 mx-auto"
      >
        <div className="p-8 border bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl border-purple-400/30">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Platform Performance
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                metric: "2M+",
                label: "Monthly Conversations",
                icon: MessageCircle,
                color: "text-purple-400",
              },
              {
                metric: "95%",
                label: "Resolution Rate",
                icon: TrendingUp,
                color: "text-pink-400",
              },
              {
                metric: "0.3s",
                label: "Response Time",
                icon: Zap,
                color: "text-blue-400",
              },
              {
                metric: "4.8/5",
                label: "User Satisfaction",
                icon: Sparkles,
                color: "text-indigo-400",
              },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                  <stat.icon size={32} className="text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                >
                  {stat.metric}
                </motion.div>
                <div className="text-purple-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
