"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";
import { useEffect, useState } from "react";
import { Twitter, Instagram, Github, Linkedin } from "lucide-react";

const navLinks = ["About", "Projects", "Resume", "Contact"];

export default function Hero() {
  const [activeSection, setActiveSection] = useState("");

  // Optional: track current section (if you have matching IDs in the page)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100; // offset for better detection
      for (let link of navLinks) {
        const section = document.getElementById(link.toLowerCase());
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(link.toLowerCase());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Social media links
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/_thisguycharles",
      icon: Twitter,
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/thisguycharles_/",
      icon: Instagram,
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/CharlieAlbert",
      icon: Github,
      hoverColor: "hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/charles-nderitu",
      icon: Linkedin,
      hoverColor: "hover:text-blue-600",
    },
  ];

  // Animation variants for the social icons
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
      <Particles />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-4"
      >
        Charles Nderitu
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4"
      >
        Full Stack Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8"
      >
        I build delightful, functional digital experiences that empower people
        and businesses to grow and thrive.
      </motion.p>

      {/* Social Media Icons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex justify-center gap-5 mb-10"
      >
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              className={`bg-white p-3 rounded-full shadow-md text-gray-500 ${social.hoverColor} transition-colors duration-300`}
              aria-label={social.name}
            >
              <IconComponent size={20} />
            </motion.a>
          );
        })}
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex gap-8 flex-wrap justify-center border-t border-gray-200 pt-6"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.toLowerCase();
          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative text-gray-700 hover:text-indigo-600 text-sm md:text-base transition duration-200 font-medium
                ${isActive ? "text-indigo-600" : ""}`}
            >
              {link}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </a>
          );
        })}
      </motion.nav>
    </section>
  );
}
