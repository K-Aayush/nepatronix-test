"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Zap,
  Terminal,
  Palette,
  Database,
  Monitor,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WebAppDevelopmentPage() {
  const techStack = [
    { name: "React", color: "#61DAFB", progress: 97 },
    { name: "Next.js", color: "#000000", progress: 95 },
    { name: "TypeScript", color: "#3178C6", progress: 90 },
    { name: "Node.js", color: "#339933", progress: 88 },
    { name: "Flutter", color: "#e02d26", progress: 94 },
    { name: "dot net", color: "#8c5889", progress: 86 },
    { name: "Javascript", color: "#f27976", progress: 98 },
    { name: "AWS", color: "#FF9900", progress: 85 },
    { name: "Tailwind CSS", color: "#06B6D4", progress: 95 },
    { name: "Framer Motion", color: "#f79c59", progress: 94 },
    { name: "Figma Design", color: "#01686d", progress: 90 },
    { name: "MongoDB", color: "#b6cc82", progress: 97 },
    { name: "My SQL", color: "#04476b", progress: 93 },
    { name: "PostgressSQL", color: "#d5b5c2", progress: 88 },
  ];

  const projects = [
    {
      name: "Campsite Nepal",
      type: "Web App",
      status: "Completed",
      tech: ["Next.js", "TypeScript", "MongoDB", "Framer Motion", "Prisma ORM"],
      image: "/static/websitelogo1.png",
      description:
        "A scalable online booking platform with seamless booking features including packages.",
    },
    {
      name: "Linder",
      type: "Mobile App",
      status: "In Progress",
      tech: ["Flutter", "Firebase"],
      image: "/static/websitelogo2.png",
      description:
        "A dating app for single people with real-time messaging and matchmaking feature.",
    },
    {
      name: "Innovator",
      type: "Mobile App",
      status: "In Progress",
      tech: ["Flutter", "Node", "MongoDB", "VPS server", "Firebase"],
      image: "/static/websitelogo3.jpg",
      description:
        "A social media app with real time messaging and many more for innovators/education.",
    },
  ];

  const portfolio = [
    {
      title: "Campsite Nepal",
      image: "/static/website1.png",
      url: "https://campsitenepal.com",
      description:
        "A scalable online booking platform with seamless booking features including packages.",
    },
    {
      title: "Innovator",
      image: "/static/website2.jpg",
      url: "https://play.google.com/store/apps/details?id=com.innovation.innovator&hl=en",
      description:
        "A social media app with real time messaging and many more for innovators/education.",
    },
    {
      title: "Linder",
      image: "/static/website.jpg",
      url: "",
      description:
        "A dating app for single people with real-time messaging and matchmaking feature.",
    },
  ];

  const screenHeight =
    typeof window !== "undefined" ? window.innerHeight : 1080;

  return (
    <div className="relative min-h-screen py-32 text-white bg-gradient-to-br from-blue-900 via-teal-900 to-purple-900">
      {/* Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-sm text-teal-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
            }}
            animate={{
              y: [0, screenHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? "<" : "/>"}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-8 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 font-mono border rounded bg-teal-500/20 border-teal-400/30">
            <Terminal className="text-teal-400" size={24} />
            <span className="text-teal-300">$ npx create-nepatronix-app</span>
          </div>

          <h1 className="mb-6 font-mono text-5xl font-bold lg:text-7xl">
            <span className="text-teal-400">&lt;</span>
            <span className="text-white">Nepatronix</span>
            <span className="text-teal-400">/</span>
            <span className="text-purple-400">Web</span>
            <span className="text-teal-400">&gt;</span>
            <br />
            <span className="text-yellow-400">Development</span>
          </h1>
        </motion.div>

        {/* Code Editor Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 overflow-hidden bg-gray-900 border border-gray-700 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between px-6 py-3 bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-mono text-sm text-gray-400">
                nepatronix-app.tsx
              </span>
            </div>
            <div className="font-mono text-sm text-gray-400">
              TypeScript Next.js
            </div>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="space-y-2">
              <div>
                <span className="text-purple-400">import</span>{" "}
                <span className="text-blue-400">React</span>{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">&apos;react&apos;</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                `<span className="text-purple-400">import</span>{" "}
                <span className="text-blue-400">Link</span>{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">&apos;next/link&apos;</span>
                <span className="text-gray-400">;</span>
              </div>
              <div className="mt-4"></div>
              <div>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-yellow-400">NepatronixApp</span>
                <span className="text-gray-400">() </span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-gray-400">(</span>
              </div>
              <div className="ml-8">
                <span className="text-red-Disposition: 0px; white-space: nowrap;">
                  &lt;
                </span>
                <span className="text-blue-400">div</span>{" "}
                <span className="text-blue-400">className</span>=
                <span className="text-green-400">
                  &quot;container mx-auto&quot;
                </span>
                <span className="text-red-400">&gt;</span>
              </div>
              <div className="ml-12">
                <span className="text-red-400">&lt;</span>
                <span className="text-blue-400">h1</span>{" "}
                <span className="text-blue-400">className</span>=
                <span className="text-green-400">
                  &quot;text-2xl font-bold mb-4&quot;
                </span>
                <span className="text-red-400">&gt;</span>Welcome to Nepatronix
                <span className="text-red-400">&lt;/</span>
                <span className="text-blue-400">h1</span>
                <span className="text-red-400">&gt;</span>
              </div>
              <div className="ml-12">
                <span className="text-red-400">&lt;</span>
                <span className="text-blue-400">p</span>{" "}
                <span className="text-blue-400">className</span>=
                <span className="text-green-400">
                  &quot;text-gray-300&quot;
                </span>
                <span className="text-red-400">&gt;</span>Innovative web &
                mobile solutions<span className="text-red-400">&lt;/</span>
                <span className="text-blue-400">p</span>
                <span className="text-red-400">&gt;</span>
              </div>
              <div className="ml-8">
                <span className="text-red-400">&lt;/</span>
                <span className="text-blue-400">div</span>
                <span className="text-red-400">&gt;</span>
              </div>
              <div className="ml-4">
                <span className="text-gray-400">);</span>
              </div>
              <div>
                <span className="text-gray-400">{"}"}</span>
              </div>
              <div>
                <span className="text-purple-400">export</span>{" "}
                <span className="text-purple-400">default</span>{" "}
                <span className="text-yellow-400">NepatronixApp</span>
                <span className="text-gray-400">;</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="flex items-center justify-center gap-3 mb-8 text-3xl font-bold text-white">
            <ImageIcon size={28} className="text-teal-400" />
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg group"
              >
                <Image
                  width={1200}
                  height={1200}
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-64 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col p-4">
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-lg text-gray-300">
                    {item.description}
                  </p>
                  <Link
                    href={item.url}
                    className="inline-block px-4 py-2 text-lg font-medium text-white transition bg-teal-500 rounded w-fit hover:bg-teal-600"
                  >
                    Visit Site
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack & Projects Grid */}
        <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-2">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-lg rounded-2xl"
          >
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-white">
              <Code size={24} className="text-teal-400" />
              Our Tech Expertise
            </h2>
            <div className="space-y-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    ></div>
                    <span className="text-xl font-medium text-white">
                      {tech.name}
                    </span>
                  </div>
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-2 transition-all duration-500 rounded-full"
                      style={{
                        width: `${tech.progress}%`,
                        backgroundColor: tech.color,
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-lg rounded-2xl"
          >
            <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-white">
              <Monitor size={24} className="text-purple-400" />
              Recent Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="flex gap-4 p-4 border border-gray-600 rounded-lg bg-gray-900/50"
                >
                  <Image
                    width={1200}
                    height={1200}
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-24 h-24 rounded"
                  />
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {project.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : project.status === "In Progress"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="mb-2 text-lg text-gray-400">
                      {project.type}
                    </div>
                    <div className="mb-2 text-lg text-gray-300">
                      {project.description}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm text-gray-300 bg-gray-700 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="p-8 border bg-gradient-to-r from-teal-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl border-teal-400/30"
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {[
              {
                step: "Discover",
                icon: Layers,
                desc: "Understand Your Vision",
              },
              { step: "Design", icon: Palette, desc: "Craft Intuitive UI/UX" },
              { step: "Build", icon: Code, desc: "Develop Robust Solutions" },
              { step: "Launch", icon: Zap, desc: "Seamless Deployment" },
              { step: "Grow", icon: Database, desc: "Support & Scale" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-purple-500 rounded-2xl">
                  <phase.icon size={32} className="text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {phase.step}
                </h3>
                <p className="text-lg text-gray-300">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
