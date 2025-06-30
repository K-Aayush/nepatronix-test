"use client";

import { motion } from "framer-motion";
import { BarChart3, Cpu, Eye, TrendingUp, Activity } from "lucide-react";
import Link from "next/link";

export default function STEAMIoTRoboticsDataVisualizationPage() {
  const dataStreams = [
    {
      sensor: "Temperature",
      value: "23.5°C",
      status: "Normal",
      trend: "stable",
    },
    { sensor: "Humidity", value: "45%", status: "Normal", trend: "down" },
    { sensor: "Pressure", value: "1013 hPa", status: "Normal", trend: "up" },
    { sensor: "Motion", value: "Active", status: "Detected", trend: "active" },
  ];

  const roboticSystems = [
    {
      id: "ROB-001",
      name: "Assembly Unit",
      status: "Operating",
      efficiency: 94,
      tasks: 1247,
      progress: "Task Completed",
    },
    {
      id: "ROB-002",
      name: "Quality Control",
      status: "Scanning",
      efficiency: 98,
      tasks: 856,
      progress: "In Progress",
    },
    {
      id: "ROB-003",
      name: "Material Handler",
      status: "Moving",
      efficiency: 87,
      tasks: 2134,
      progress: "On Hold",
    },
    {
      id: "ROB-004",
      name: "Packaging System",
      status: "Idle",
      efficiency: 0,
      tasks: 0,
      progress: "In Progress",
    },
  ];

  return (
    <div className="relative min-h-screen py-32 text-white bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
      {/* Data Visualization Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Data Points */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -50, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#10b981"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Data Visualization Dashboard */}
      <div className="relative z-10 px-6 py-8 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border rounded-full bg-green-500/20 border-green-400/30">
            <BarChart3 className="text-green-400" size={24} />
            <span className="text-lg font-medium text-green-300">
              Real-time Data Analytics
            </span>
          </div>

          <h1 className="mb-6 text-6xl font-bold lg:text-8xl">
            <span className="text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text">
              STEAM/IoT/Robotics
            </span>
            <br />
            <span className="text-white">Data Visualization</span>
          </h1>

          <p className="max-w-4xl mx-auto text-2xl leading-relaxed text-green-200">
            Advanced data visualization platforms for educational technology,
            IoT systems, and robotic applications
          </p>
        </motion.div>

        {/* Live Data Dashboard */}
        <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-3">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 border bg-black/30 backdrop-blur-lg rounded-3xl border-green-400/30"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-400">
                  Live Data Streams
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg text-green-300">Live</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="p-6 border h-80 bg-gray-900/50 rounded-2xl border-green-400/20">
                <div className="flex items-end justify-between h-full gap-2">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-green-500 to-teal-500"
                      initial={{ height: 0 }}
                      animate={{
                        height: `${Math.sin(i * 0.5) * 30 + 50}%`,
                      }}
                      transition={{
                        delay: i * 0.1,
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </div>

                {/* Chart Labels */}
                <div className="flex justify-between mt-4 text-sm text-green-300">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sensor Data */}
          <div className="space-y-4">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              IoT Sensors
            </h2>
            {dataStreams.map((stream, index) => (
              <motion.div
                key={stream.sensor}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 border bg-teal-900/30 backdrop-blur-lg rounded-2xl border-teal-400/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {stream.sensor}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      stream.status === "Normal"
                        ? "bg-green-500/20 text-green-400"
                        : stream.status === "Detected"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {stream.status}
                  </span>
                </div>

                <div className="mb-2 text-2xl font-bold text-teal-400">
                  {stream.value}
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      stream.trend === "up"
                        ? "bg-green-500"
                        : stream.trend === "down"
                        ? "bg-red-500"
                        : stream.trend === "active"
                        ? "bg-yellow-500 animate-pulse"
                        : "bg-gray-500"
                    }`}
                  ></div>
                  <span className="text-lg capitalize teal-300 text-">
                    {stream.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Robotics Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-8 mb-12 border bg-blue-900/30 backdrop-blur-lg rounded-3xl border-blue-400/30"
        >
          <h2 className="mb-8 text-2xl font-bold text-center text-blue-400">
            Robotics Systems Status
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roboticSystems.map((robot, index) => (
              <motion.div
                key={robot.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`p-6 rounded-2xl border-2 ${
                  robot.status === "Operating" ||
                  robot.status === "Scanning" ||
                  robot.status === "Moving"
                    ? "border-green-400/50 bg-green-500/10"
                    : "border-gray-400/50 bg-gray-500/10"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-blue-300">{robot.id}</div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      robot.status === "Idle"
                        ? "bg-gray-500"
                        : "bg-green-500 animate-pulse"
                    }`}
                  ></div>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {robot.name}
                </h3>
                <div className="mb-4 text-lg text-blue-300">{robot.status}</div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1 text-lg">
                      <span className="text-blue-300">Efficiency</span>
                      <span className="text-white">{robot.efficiency}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-blue-800/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${robot.efficiency}%` }}
                        transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      {robot.tasks}
                    </div>
                    <div className="text-lg text-blue-300">
                      {robot.progress}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="p-8 border bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-lg rounded-3xl border-green-400/30"
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            System Analytics
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                metric: "2,847",
                label: "IoT Devices",
                icon: Cpu,
                color: "text-green-400",
              },
              {
                metric: "15.7K",
                label: "Data Points/sec",
                icon: Activity,
                color: "text-teal-400",
              },
              {
                metric: "127",
                label: "Active Dashboards",
                icon: Eye,
                color: "text-blue-400",
              },
              {
                metric: "99.2%",
                label: "System Uptime",
                icon: TrendingUp,
                color: "text-cyan-400",
              },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl">
                  <stat.icon size={32} className="text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                >
                  {stat.metric}
                </motion.div>
                <div className="text-green-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
