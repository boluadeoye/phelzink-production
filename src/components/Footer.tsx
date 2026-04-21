"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CircularLogo from "./CircularLogo";

const Footer = () => {
  return (
    <footer className="bg-ink pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <CircularLogo className="w-24 h-24 -ml-4 mb-8 invert brightness-0" />
            <p className="text-white/50 max-w-sm leading-relaxed font-sans text-lg">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-sans">Quick Links</h4>
            <ul className="space-y-4 font-sans text-white/60">
              <li><Link href="/" className="hover:text-emerald transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-emerald transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-emerald transition-colors">Our works</Link></li>
              <li><Link href="#about" className="hover:text-emerald transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-sans">Services</h4>
            <ul className="space-y-4 font-sans text-white/60">
              <li><Link href="#" className="hover:text-emerald transition-colors">Branding</Link></li>
              <li><Link href="#" className="hover:text-emerald transition-colors">Printing</Link></li>
              <li><Link href="#" className="hover:text-emerald transition-colors">Fabrication</Link></li>
              <li><Link href="#" className="hover:text-emerald transition-colors">Design</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-sm font-sans uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Phelzink Production. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
