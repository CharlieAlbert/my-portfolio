"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Mail,
  Phone,
  Copy,
  Check,
} from "lucide-react";

export default function Contact() {
  // State for copy feedback
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // References to the contact info
  const emailRef = useRef("charlieraph36@gmail.com");
  const phoneRef = useRef("+254 741 773 276");

  // Social media links - same as in Hero for consistency
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/_thisguycharles",
      icon: Twitter,
      bgColor: "bg-blue-500",
      hoverBg: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/thisguycharles_",
      icon: Instagram,
      bgColor: "bg-pink-500",
      hoverBg: "hover:bg-pink-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/CharlieAlbert",
      icon: Github,
      bgColor: "bg-gray-800",
      hoverBg: "hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/charles-nderitu",
      icon: Linkedin,
      bgColor: "bg-blue-600",
      hoverBg: "hover:bg-blue-700",
    },
  ];

  // Function to copy text to clipboard
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-indigo-50"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 relative">
              Contact Me
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-6">
              Feel free to reach out for collaborations, opportunities, or just a
              friendly chat.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 transition-all hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl">Email</h3>
                  <p className="text-gray-500">
                    Usually respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700" id="email-text">
                {emailRef.current}
              </p>
              <motion.button
                onClick={() => copyToClipboard(emailRef.current, "email")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </motion.button>
            </div>
            {copiedEmail && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-500 text-sm mt-2 text-right"
              >
                Email copied to clipboard!
              </motion.p>
            )}

            <motion.a
              href={`mailto:${emailRef.current}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-block w-full text-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition-colors"
            >
              Send Email
            </motion.a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md p-8 transition-all hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl">Phone</h3>
                  <p className="text-gray-500">
                    Available during business hours
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700" id="phone-text">
                {phoneRef.current}
              </p>
              <motion.button
                onClick={() => copyToClipboard(phoneRef.current, "phone")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </motion.button>
            </div>
            {copiedPhone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-500 text-sm mt-2 text-right"
              >
                Phone number copied to clipboard!
              </motion.p>
            )}

            <motion.a
              href={`tel:${phoneRef.current.replace(/\s/g, "")}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-block w-full text-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition-colors"
            >
              Call Me
            </motion.a>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">
            Connect With Me
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, i) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.bgColor} ${social.hoverBg} p-5 rounded-full shadow-lg text-white transition-all duration-300`}
                  aria-label={social.name}
                >
                  <IconComponent size={28} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form Alternative */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-10 rounded-2xl shadow-lg text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Looking to start a project or have a job opportunity? Feel free to
            reach out directly or schedule a call through my calendar.
          </p>
          <motion.a
            href="https://calendly.com/charlieraph36"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            Schedule a Call
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
