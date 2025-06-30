"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bot,
  Puzzle,
  Zap,
  Network,
  Cog,
  Target,
  Cpu,
  Code,
  Layers,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function AIMLAgentsMicroAgentsDevelopmentPage() {
  const microAgents = [
    {
      id: "MA-001",
      name: "Data Processor",
      type: "Processing",
      load: 67,
      status: "Active",
    },
    {
      id: "MA-002",
      name: "Task Scheduler",
      type: "Coordination",
      load: 45,
      status: "Active",
    },
    {
      id: "MA-003",
      name: "Error Handler",
      type: "Monitoring",
      load: 23,
      status: "Standby",
    },
    {
      id: "MA-004",
      name: "API Gateway",
      type: "Communication",
      load: 89,
      status: "Active",
    },
    {
      id: "MA-005",
      name: "Cache Manager",
      type: "Storage",
      load: 34,
      status: "Active",
    },
    {
      id: "MA-006",
      name: "Security Guard",
      type: "Security",
      load: 56,
      status: "Active",
    },
  ];

  const systemMetrics = [
    {
      metric: "Active Agents",
      value: "1,247",
      change: "+12%",
      color: "text-green-500",
    },
    {
      metric: "Tasks/Second",
      value: "15.7K",
      change: "+8%",
      color: "text-blue-500",
    },
    {
      metric: "Success Rate",
      value: "99.7%",
      change: "+0.3%",
      color: "text-purple-500",
    },
    {
      metric: "Response Time",
      value: "0.12ms",
      change: "-5%",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      {/* Microservices Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid h-full grid-cols-12 gap-2 p-8 grid-rows-8">
          {[...Array(96)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-orange-400 rounded"
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg text-orange-300 transition-colors hover:text-white"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </nav>

      {/* Microservices Architecture Layout */}
      <div className="relative z-10 px-6 py-8 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border rounded-full bg-orange-500/20 border-orange-400/30">
            <Puzzle className="text-orange-400" size={24} />
            <span className="font-medium text-orange-300">
              Microagent Architecture
            </span>
          </div>

          <h1 className="mb-6 text-6xl font-bold lg:text-8xl">
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text">
              AI/ML Agents
            </span>
            <br />
            <span className="text-white">& MicroAgents</span>
          </h1>

          <p className="max-w-4xl mx-auto text-xl leading-relaxed text-orange-200">
            Specialized microagent development for distributed AI systems and
            intelligent automation
          </p>
        </motion.div>

        {/* System Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-4"
        >
          {systemMetrics.map((metric, index) => (
            <div
              key={metric.metric}
              className="p-6 border bg-black/30 backdrop-blur-lg rounded-2xl border-orange-400/30"
            >
              <div className="mb-2 text-sm text-orange-300">
                {metric.metric}
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className={`text-3xl font-bold ${metric.color} mb-2`}
              >
                {metric.value}
              </motion.div>
              <div
                className={`text-sm ${
                  metric.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {metric.change} from last hour
              </div>
            </div>
          ))}
        </motion.div>

        {/* Microagent Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="p-8 mb-12 border bg-black/30 backdrop-blur-lg rounded-3xl border-orange-400/30"
        >
          <h2 className="mb-8 text-2xl font-bold text-center text-orange-400">
            Microagent Network
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {microAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`relative p-4 rounded-2xl border-2 ${
                  agent.status === "Active"
                    ? "border-green-400/50 bg-green-500/10"
                    : "border-yellow-400/50 bg-yellow-500/10"
                }`}
              >
                {/* Agent Icon */}
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                  <Bot size={24} className="text-white" />
                </div>

                {/* Agent Info */}
                <div className="text-center">
                  <div className="mb-1 text-xs text-orange-300">{agent.id}</div>
                  <div className="mb-1 text-sm font-semibold text-white">
                    {agent.name}
                  </div>
                  <div className="mb-3 text-xs text-gray-400">{agent.type}</div>

                  {/* Load Indicator */}
                  <div className="w-full h-2 mb-2 bg-gray-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${agent.load}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                      className={`h-2 rounded-full ${
                        agent.load > 80
                          ? "bg-red-500"
                          : agent.load > 50
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    />
                  </div>
                  <div className="text-xs text-gray-400">
                    {agent.load}% load
                  </div>
                </div>

                {/* Status Indicator */}
                <div
                  className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                    agent.status === "Active"
                      ? "bg-green-500 animate-pulse"
                      : "bg-yellow-500"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
          {/* Agent Types */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="p-8 border bg-orange-900/30 backdrop-blur-lg rounded-2xl border-orange-400/30"
          >
            <h3 className="mb-6 text-2xl font-bold text-orange-400">
              Agent Types
            </h3>
            <div className="space-y-4">
              {[
                {
                  type: "Processing Agents",
                  count: 342,
                  desc: "Data processing and transformation",
                },
                {
                  type: "Coordination Agents",
                  count: 156,
                  desc: "Task scheduling and orchestration",
                },
                {
                  type: "Monitoring Agents",
                  count: 89,
                  desc: "System health and error handling",
                },
                {
                  type: "Communication Agents",
                  count: 234,
                  desc: "Inter-service communication",
                },
                {
                  type: "Security Agents",
                  count: 67,
                  desc: "Authentication and authorization",
                },
                {
                  type: "Storage Agents",
                  count: 123,
                  desc: "Data persistence and caching",
                },
              ].map((type, index) => (
                <motion.div
                  key={type.type}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between p-4 border rounded-lg bg-black/30 border-orange-400/20"
                >
                  <div>
                    <div className="font-semibold text-white">{type.type}</div>
                    <div className="text-sm text-orange-300">{type.desc}</div>
                  </div>
                  <div className="text-2xl font-bold text-orange-400">
                    {type.count}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="p-8 border bg-red-900/30 backdrop-blur-lg rounded-2xl border-red-400/30"
          >
            <h3 className="mb-6 text-2xl font-bold text-red-400">
              Performance Analytics
            </h3>

            {/* Real-time Chart Simulation */}
            <div className="h-48 p-4 mb-6 border rounded-lg bg-black/30 border-red-400/20">
              <div className="mb-4 text-sm text-red-300">
                Agent Performance (Real-time)
              </div>
              <div className="flex items-end justify-between h-32 gap-2">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-red-500 to-orange-500"
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.random() * 100 + 20}%` }}
                    transition={{
                      delay: 1.2 + i * 0.1,
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              {[
                {
                  label: "Average Response Time",
                  value: "0.12ms",
                  trend: "down",
                },
                { label: "Memory Usage", value: "67%", trend: "stable" },
                { label: "CPU Utilization", value: "45%", trend: "up" },
                { label: "Network Throughput", value: "2.3 GB/s", trend: "up" },
              ].map((metric, index) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-red-300">{metric.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">
                      {metric.value}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        metric.trend === "up"
                          ? "bg-green-500"
                          : metric.trend === "down"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="p-8 border bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-lg rounded-3xl border-green-400/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Activity className="text-green-400" size={64} />
              <div>
                <h3 className="mb-2 text-3xl font-bold text-green-400">
                  SYSTEM OPERATIONAL
                </h3>
                <p className="text-green-300">
                  All microagents functioning within normal parameters
                </p>
                <p className="mt-2 text-sm text-green-400">
                  Last updated: {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-green-400">99.7%</div>
              <div className="text-green-300">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
