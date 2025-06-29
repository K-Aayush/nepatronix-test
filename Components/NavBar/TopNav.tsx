"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import ShopSearch from "../forms/ShopSearch";
import Image from "next/image";

interface NavbarProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownItems {
  [key: string]: DropdownItem[];
}

export default function TopNav({ setOpen, isOpen }: NavbarProps) {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownItems: DropdownItems = {
    "Med-Tech": [
      { label: "Telemedicine", href: "/static/telemedicine" },
      {
        label: "AI Assisted Diagnostics",
        href: "/static/ai-assisted-diagnostics",
      },
      {
        label: "Portable Patient Monitoring",
        href: "/static/portable-patient-monitoring",
      },
      { label: "R&D Med-Tech", href: "/static/research" },
    ],
    "Security & Defense": [
      { label: "Drone Technology", href: "/static/drone-technology" },
      { label: "Submarine Technology", href: "/static/submarine-technology" },
      {
        label: "Communication Technology",
        href: "/static/communication-technology",
      },
      { label: "R&D Security & Defense", href: "/static/rnd-security-defense" },
    ],
    "AI & ML Agents": [
      { label: "Chatbots Development", href: "/static/chatbots-development" },
      {
        label: "Agentic AI Development",
        href: "/static/agentic-ai-development",
      },
      { label: "AI/ML Agents", href: "/static/ai-ml-agents" },
      { label: "R&D on AI/ML Products", href: "/static/rnd-ai-ml-products" },
    ],
    "Web/App": [
      { label: "Web/App Development", href: "/static/web-app-development" },
      { label: "Design/IT Consulting", href: "/static/design-it-consulting" },
      {
        label: "AI/ML Agents or MicroAgents Development",
        href: "/static/ai-ml-agents-or-microagents-development",
      },
      {
        label: "STEAM/IOT/Robotics Data Visualization",
        href: "/static/steam-iot-robotics-data-visualization",
      },
    ],
  };

  // const dropdownItems: DropdownItems = {
  //   Services: [
  //     { label: "Services Overview", href: "/services" },
  //     { label: "Telemedicine", href: "/services/telemedicine" },
  //     {
  //       label: "AI Assisted Diagnostics",
  //       href: "/services/ai-assisted-diagnostics",
  //     },
  //     {
  //       label: "Portable Patient Monitoring",
  //       href: "/services/portable-patient-monitoring",
  //     },
  //     { label: "R&D Med-Tech", href: "/services/research" },
  //   ],
  //   Products: [
  //     { label: "Products Overview", href: "/products" },
  //     { label: "Drone Technology", href: "/products/drone-technology" },
  //     { label: "Submarine Technology", href: "/products/submarine-technology" },
  //     {
  //       label: "Communication Technology",
  //       href: "/products/communication-technology",
  //     },
  //     {
  //       label: "R&D Security & Defense",
  //       href: "/products/rnd-security-defense",
  //     },
  //   ],
  //   Tutorials: [
  //     { label: "Tutorials Overview", href: "/tutorials" },
  //     {
  //       label: "Chatbots Development",
  //       href: "/tutorials/chatbots-development",
  //     },
  //     {
  //       label: "Agentic AI Development",
  //       href: "/tutorials/agentic-ai-development",
  //     },
  //     { label: "AI/ML Agents", href: "/tutorials/ai-ml-agents" },
  //     { label: "R&D on AI/ML Products", href: "/tutorials/rnd-ai-ml-products" },
  //   ],
  //   Blogs: [
  //     { label: "Blogs Overview", href: "/blogs" },
  //     { label: "Web/App Development", href: "/blogs/web-app-development" },
  //     { label: "Design/IT Consulting", href: "/blogs/design-it-consulting" },
  //     {
  //       label: "AI/ML Agents Development",
  //       href: "/blogs/ai-ml-agents-development",
  //     },
  //     {
  //       label: "STEAM/IOT/Robotics Visualization",
  //       href: "/blogs/steam-iot-robotics-visualization",
  //     },
  //   ],
  //   Books: [
  //     { label: "Books Overview", href: "/books" },
  //     { label: "Technology Books", href: "/books/technology" },
  //     { label: "AI and ML Books", href: "/books/ai-ml" },
  //     { label: "Security & Defense Books", href: "/books/security-defense" },
  //   ],
  //   Shop: [
  //     { label: "Shop Overview", href: "/shop" },
  //     { label: "Tech Gadgets", href: "/shop/gadgets" },
  //     { label: "Educational Kits", href: "/shop/educational-kits" },
  //     { label: "Software Licenses", href: "/shop/software" },
  //   ],
  //   About: [
  //     { label: "About Us", href: "/about" },
  //     { label: "Our Mission", href: "/about/mission" },
  //     { label: "Our Vision", href: "/about/vision" },
  //   ],
  //   Team: [
  //     { label: "Our Team", href: "/team" },
  //     { label: "Leadership", href: "/team/leadership" },
  //     { label: "Experts", href: "/team/experts" },
  //   ],
  //   More: [
  //     { label: "Gallery", href: "/gallery" },
  //     { label: "Client's Blog", href: "/stories" },
  //     { label: "Achievements", href: "/achievements" },
  //     { label: "Events", href: "/events" },
  //     { label: "News", href: "/news" },
  //     { label: "Courses", href: "/courses" },
  //     { label: "Usual", href: "/usual" },
  //     { label: "Pad Counter", href: "/pad" },
  //     { label: "Upload", href: "/upload" },
  //   ],
  // };

  const renderDropdown = (category: string) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute mt-2 border shadow-xl w-80 rounded-xl bg-white/40 backdrop-blur-lg border-white/20"
      style={{
        transformOrigin: "top",
        perspective: "1000px",
      }}
    >
      <div className="py-4">
        {dropdownItems[category].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="block px-6 py-4 text-2xl font-semibold text-gray-600 transition-all duration-300 transform hover:bg-white/30 hover:translate-x-2"
              onClick={() => setDropdown(null)}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[rgba(30,58,138,0.9)] backdrop-blur-lg shadow-lg"
          : "bg-[rgba(30,58,138,0.9)] backdrop-blur-lg shadow-lg"
      }`}
    >
      <div className="w-full px-4 py-4 pt-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                className="w-fit h-[60px] hidden xl:block"
                width={300}
                height={300}
              />
              <Image
                src="/logo2.png"
                alt="logo"
                className="w-fit h-[40px] block xl:hidden"
                width={300}
                height={300}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {Object.keys(dropdownItems).map((category) => (
              <div key={category} className="relative">
                <motion.button
                  className={`flex items-center px-4 py-2 space-x-1 text-2xl font-semibold transition-all duration-300 rounded-lg ${
                    isScrolled ? "text-white/90" : "text-white/90"
                  } hover:bg-white/10`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    setDropdown(dropdown === category ? null : category)
                  }
                >
                  <span>{category}</span>
                  <motion.div
                    animate={{ rotate: dropdown === category ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
                {dropdown === category && (
                  <AnimatePresence>{renderDropdown(category)}</AnimatePresence>
                )}
              </div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className={`px-4 py-2 text-2xl font-semibold transition-all duration-300 rounded-lg ${
                  isScrolled
                    ? "text-gray-400 bg-blue-500/80 hover:bg-blue-500"
                    : "text-gray-900 bg-blue-500/80 hover:bg-blue-500"
                }`}
              >
                Contact
              </Link>
            </motion.div>
            <ShopSearch />
          </div>

          {/* Toggle Button for SideNav */}
          <motion.button
            className="flex items-center"
            onClick={() => setOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <FaTimes
                className={`w-6 h-6 ${
                  isScrolled ? "text-white" : "text-gray-900"
                }`}
              />
            ) : (
              <FaBars
                className={`w-6 h-6 ${
                  isScrolled ? "text-white" : "text-gray-900"
                }`}
              />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
