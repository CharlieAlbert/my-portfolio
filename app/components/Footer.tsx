"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Github, Linkedin, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links - same as in Hero for consistency
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/_thisguycharles",
      icon: Twitter,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/thisguycharles_",
      icon: Instagram,
    },
    {
      name: "GitHub",
      url: "https://github.com/CharlieAlbert",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/charles-nderitu",
      icon: Linkedin,
    },
  ];

  const navLinks = ["About", "Projects", "Resume", "Contact"];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Charles Nderitu
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Building delightful, functional digital experiences that empower
              people and businesses to grow and thrive.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a
                  href="mailto:charlieraph36@gmail.com"
                  className="hover:text-indigo-600 transition-colors duration-300"
                >
                  charlieraph36@gmail.com
                </a>
              </li>
              <li className="text-gray-600">
                <a
                  href="tel:+254741773276"
                  className="hover:text-indigo-600 transition-colors duration-300"
                >
                  +254 741 773 276
                </a>
              </li>
              <li className="text-gray-600 mt-2">
                <a
                  href="https://calendly.com/charlieraph36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  Schedule a call
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Charles Nderitu. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using
            Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
