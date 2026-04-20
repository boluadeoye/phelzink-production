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
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col p-8"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-16">
            <CircularLogo className="w-24 h-24 -ml-4" />
            <button onClick={onClose} className="p-2">
              <X size={32} className="text-ink" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-8">
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-3xl font-bold text-ink hover:text-emerald transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="mt-auto">
            <Link
              href="https://wa.me/yournumber"
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 active:scale-[0.98] transition-transform"
            >
              <MessageCircle size={24} fill="white" />
              <span className="text-lg">Contact Us</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
