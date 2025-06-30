"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getLists } from "@/ApiRequest/GetData";

// Define the TeamMember interface based on your data structure
interface TeamMember {
  title: string;
  profession: string;
  about: string;
  picture: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  portfolio?: string;
  resume?: string;
}

export default function TeamSection() {
  const [currentPage, setCurrentPage] = useState(0);
  // Define the type for teamMembers state
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const membersPerPage = 6; // Show 6 members at a time

  // Fetch team data
  useEffect(() => {
    async function fetchData() {
      const data = await getLists("teams", 0, 0);
      setTeamMembers(data || []);
    }
    fetchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentMembers = () => {
    const start = currentPage * membersPerPage;
    return teamMembers.slice(start, start + membersPerPage);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 7 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-[1440px] sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-transparent lg:text-8xl bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
            Our Amazing Team
          </h2>
          <p className="text-xl text-gray-300">
            Meet the brilliant minds behind our innovation
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {getCurrentMembers().map((member, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative p-4 overflow-hidden transition-all duration-300 rounded-xl bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-lg hover:shadow-xl hover:shadow-purple-500/20">
                    {/* Image Container */}
                    <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={`/api/files${member.picture}`}
                          width={200}
                          height={200}
                          alt={`${member.title}'s picture`}
                          className="object-cover w-full h-full"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="mb-1 text-2xl font-bold text-white">
                        {member.title}
                      </h3>
                      <p className="mb-1 text-xl font-medium text-purple-300">
                        {member.profession}
                      </p>
                      <p className="mb-3 text-lg text-gray-400 line-clamp-2">
                        {member.about}
                      </p>

                      {/* Social Icons */}
                      <div className="flex justify-center space-x-3">
                        {member.facebook && (
                          <motion.a
                            href={member.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className="text-blue-400 transition-colors hover:text-blue-300"
                          >
                            <FaFacebookF className="text-xl" />
                          </motion.a>
                        )}
                        {member.instagram && (
                          <motion.a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className="text-blue-400 transition-colors hover:text-blue-300"
                          >
                            <FaInstagram className="text-xl" />
                          </motion.a>
                        )}
                        {member.linkedin && (
                          <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className="text-blue-400 transition-colors hover:text-blue-300"
                          >
                            <FaLinkedinIn className="text-xl" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute flex justify-between w-full px-4 -translate-y-1/2 pointer-events-none top-1/2">
            <button
              onClick={() =>
                setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
              }
              className="p-2 text-white transition-all rounded-full pointer-events-auto bg-white/10 backdrop-blur-lg hover:bg-white/20"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
              className="p-2 text-white transition-all rounded-full pointer-events-auto bg-white/10 backdrop-blur-lg hover:bg-white/20"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === i ? "bg-purple-400 w-4" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
