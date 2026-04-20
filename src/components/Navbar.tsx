"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import CircularLogo from "./CircularLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <CircularLogo size="sm" />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "Services", "Our Works", "About"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70 hover:text-emerald transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-emerald text-white px-7 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-emerald/20">
            Get started
          </button>

          {/* Mobile Trigger */}
          <button 
            className="md:hidden p-2 group"
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="space-y-1.5">
              <div className="w-8 h-0.5 bg-ink group-hover:w-6 transition-all"></div>
              <div className="w-6 h-0.5 bg-ink group-hover:w-8 transition-all"></div>
              <div className="w-8 h-0.5 bg-ink group-hover:w-4 transition-all"></div>
            </div>
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
