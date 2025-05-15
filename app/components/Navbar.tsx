"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

const navLinks = ["About", "Projects", "Resume", "Contact"];

export default function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > window.innerHeight * 0.75);
      const scrollY = window.scrollY + 100;
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
          <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition duration-200"
            >
              <Image
                src={Logo}
                alt="thisguycharles logo"
                width={250}
                height={10}
                className="rounded-full"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.toLowerCase();
                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`relative text-sm font-medium transition-colors duration-200 ${
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

              <a
                href="https://github.com/CharlieAlbert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t border-gray-200 shadow-sm"
              >
                <div className="flex flex-col gap-4 px-6 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className={`text-base font-medium transition-colors duration-200 ${
                        activeSection === link.toLowerCase()
                          ? "text-indigo-600"
                          : "text-gray-700 hover:text-indigo-500"
                      }`}
                    >
                      {link}
                    </a>
                  ))}
                  <a
                    href="https://github.com/CharlieAlbert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
