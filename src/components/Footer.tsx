"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-ink pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="relative w-32 h-10 mb-6">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688534/blog_assets/fkckb41bhbezjlcpjhnl.png"
                alt="Phelzink Logo"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Transforming brands through creative excellence and high-quality print solutions. Your vision, our precision.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-emerald">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-emerald">Social</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-white/20 text-xs font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Phelzink Production. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
