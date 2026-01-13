"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo1.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why JustGold", href: "#why-justgold" },
    { label: "Security", href: "#security" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-100"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 rounded-lg">
        <div className="flex items-center justify-between h-28 rounded-lg">
          {" "}
          {/* taller navbar for big logo */}
          {/* Logo */}
          <a href="#" className="flex items-center rounded-lg">
            <div className="w-24 h-24 md:w-36 md:h-36 relative rounded-lg">
              {" "}
              {/* big square box */}
              <img
                src={logo}
                alt="JustGold & Silver Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-navy-800 hover:text-gold-600"
                    : "text-navy-100 hover:text-gold-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-navy-800 hover:text-gold-600"
                  : "text-navy-100 hover:text-gold-600"
              }`}
            >
              Sign In
            </a>
            <a
              href="#cta"
              className="btn-gold rounded-full text-sm px-6 py-2.5"
            >
              Get Started
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-navy-800" : "text-navy-400"
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gold-100"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-navy-800 hover:text-gold-600 py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gold-100 space-y-3">
                <a href="#" className="block text-navy-800">
                  Sign In
                </a>
                <a
                  href="#cta"
                  className="btn-gold rounded-full text-center block py-3"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
