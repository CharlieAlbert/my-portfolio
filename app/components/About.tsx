"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { skills } from "@/lib/skills";

export default function About() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const frontendSkills = skills.filter(
    (skill) => skill.category === "Frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "Backend");
  const databaseSkills = skills.filter(
    (skill) => skill.category === "Database"
  );
  const cloudSkills = skills.filter((skill) => skill.category === "Cloud");

  const categories = [
    { id: "Frontend", label: "Frontend", icon: "💻", skills: frontendSkills },
    { id: "Backend", label: "Backend", icon: "⚙️", skills: backendSkills },
    { id: "Database", label: "Databases", icon: "🗄️", skills: databaseSkills },
    { id: "Cloud", label: "Cloud", icon: "☁️", skills: cloudSkills },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <section
      id="about"
      className="min-h-screen py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        {/* Hero Section with Profile */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute -inset-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-70 blur-md"
            />
            <Image
              src="/profile.jpg"
              alt="Charles Nderitu"
              width={180}
              height={180}
              className="rounded-full relative shadow-xl object-cover border-4 border-white"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center md:text-left max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3"
            >
              Full-Stack Developer
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative">
              About Me
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-6">
              I'm a passionate full-stack developer with over 3 years of
              experience building robust, scalable, and user-centric web
              applications. I focus on shipping clean code and delightful
              experiences.
            </p>
            <motion.a
              href="/CHARLES_NDERITU_RESUME.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-full shadow-lg hover:from-indigo-700 hover:to-indigo-800 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            {
              icon: "🎓",
              title: "Education",
              content: "BSc. Computer Science - Kabarak University",
            },
            {
              icon: "💼",
              title: "Experience",
              content:
                "1.5+ years in full-stack development across startups and freelance work",
            },
            {
              icon: "🚀",
              title: "Strengths",
              content:
                "Problem solving, UI/UX thinking, scalability & performance",
            },
            { icon: "🌍", title: "Location", content: "Nairobi, Kenya" },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl">
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-md p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              My Tech Stack
            </span>
          </h3>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                  activeTab === category.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
          >
            {categories
              .find((c) => c.id === activeTab)
              ?.skills?.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={skillVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center group"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-20 h-20 flex items-center justify-center transition-all group-hover:shadow-md">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={45}
                      height={45}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="mt-3 text-sm font-medium text-gray-700"
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              )) || []}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-lg text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Looking for a developer who can bring your vision to life? I'm
            always open to discussing new projects and opportunities.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
