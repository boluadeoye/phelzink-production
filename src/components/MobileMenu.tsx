"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Link from "next/link";
import CircularLogo from "./CircularLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Our Works", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-xl flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center px-8 h-20">
            <CircularLogo size="sm" />
            <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
              <X size={32} strokeWidth={1.5} className="text-ink" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-10 pt-12 gap-10">
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-4xl font-bold tracking-tighter text-ink/90 hover:text-emerald transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="https://wa.me/yournumber"
                className="group w-full bg-emerald text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-emerald/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle size={24} fill="white" className="group-hover:animate-bounce" />
                <span className="text-lg">Contact Us</span>
              </Link>
              <p className="text-center mt-6 text-ink/30 text-xs font-bold uppercase tracking-[0.2em]">
                Phelzink Productions © 2024
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
