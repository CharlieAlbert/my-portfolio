"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["About", "Projects", "Resume", "Contact"];

export default function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > window.innerHeight * 0.75);

      const scrollY = window.scrollY + 100; // offset for detection
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

  return (
    <AnimatePresence>
      {showSticky && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md"
        >
          <div className="max-w-5xl mx-auto flex justify-center gap-8 py-4 px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`relative text-sm md:text-base font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-700 hover:text-indigo-500"
                    }`}
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
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
