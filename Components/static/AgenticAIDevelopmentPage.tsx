"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cpu,
  Workflow,
  Target,
  Layers,
  Cog,
  Network,
  Brain,
  Bot,
  Zap,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function AgenticAIDevelopmentPage() {
  const agents = [
    {
      id: "AGENT-001",
      name: "Data Processor",
      status: "Active",
      tasks: 247,
      efficiency: 94,
    },
    {
      id: "AGENT-002",
      name: "Decision Maker",
      status: "Learning",
      tasks: 156,
      efficiency: 87,
    },
    {
      id: "AGENT-003",
      name: "Task Coordinator",
      status: "Active",
      tasks: 389,
      efficiency: 96,
    },
    {
      id: "AGENT-004",
      name: "Pattern Analyzer",
      status: "Idle",
      tasks: 0,
      efficiency: 0,
    },
  ];

  const capabilities = [
    "Autonomous Decision Making",
    "Multi-Agent Coordination",
    "Real-time Learning",
    "Goal-oriented Behavior",
    "Environmental Adaptation",
    "Collaborative Problem Solving",
  ];

  return (
    <div className="relative min-h-screen py-32 text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {/* Neural Nodes */}
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="3"
              fill="currentColor"
              className="text-purple-400"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Neural Connections */}
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-purple-400/30"
              animate={{
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </div>

      {/* AI Control Center Layout */}
      <div className="relative z-10 px-6 py-8 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border rounded-full bg-purple-500/20 border-purple-400/30">
            <Brain className="text-purple-400" size={24} />
            <span className="text-lg font-medium text-purple-300">
              Autonomous AI Systems
            </span>
          </div>

          <h1 className="mb-6 text-6xl font-bold lg:text-8xl">
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text">
              Agentic AI
            </span>
            <br />
            Development
          </h1>

          <p className="max-w-4xl mx-auto text-xl leading-relaxed text-purple-200">
            Advanced autonomous AI agents with decision-making capabilities and
            collaborative intelligence
          </p>
        </motion.div>

        {/* Agent Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 mb-12 border bg-black/30 backdrop-blur-lg rounded-3xl border-purple-400/30"
        >
          <h2 className="mb-8 text-2xl font-bold text-center text-purple-400">
            Agent Network Status
          </h2>

          <div className="relative h-80">
            {/* Central Hub */}
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex items-center justify-center w-24 h-24 border-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-purple-400/50"
              >
                <Brain size={40} className="text-white" />
              </motion.div>
            </div>

            {/* Agent Nodes */}
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                className="absolute"
                style={{
                  top: `${50 + Math.sin((index * Math.PI) / 2) * 30}%`,
                  left: `${50 + Math.cos((index * Math.PI) / 2) * 30}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                    agent.status === "Active"
                      ? "bg-green-500/20 border-green-400"
                      : agent.status === "Learning"
                      ? "bg-yellow-500/20 border-yellow-400"
                      : "bg-gray-500/20 border-gray-400"
                  }`}
                >
                  <Bot size={24} className="text-white" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-xs text-purple-300">{agent.id}</div>
                  <div
                    className={`text-xs ${
                      agent.status === "Active"
                        ? "text-green-400"
                        : agent.status === "Learning"
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  >
                    {agent.status}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {agents.map((_, index) => (
                <motion.line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + Math.cos((index * Math.PI) / 2) * 30}%`}
                  y2={`${50 + Math.sin((index * Math.PI) / 2) * 30}%`}
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-400/50"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Agent Performance Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 border bg-purple-900/30 backdrop-blur-lg rounded-2xl border-purple-400/30"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {agent.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    agent.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : agent.status === "Learning"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {agent.status}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-lg">
                    <span className="text-purple-300">Tasks Completed</span>
                    <span className="font-medium text-white">
                      {agent.tasks}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-lg">
                    <span className="text-purple-300">Efficiency</span>
                    <span className="font-medium text-white">
                      {agent.efficiency}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-purple-800/50">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${agent.efficiency}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="p-8 border bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl border-purple-400/30"
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            AI Agent Capabilities
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="p-6 text-center border bg-black/30 rounded-2xl border-purple-400/20"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {capability}
                </h3>
                <div className="w-full h-1 rounded-full bg-purple-800/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                    className="h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
