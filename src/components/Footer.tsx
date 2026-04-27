"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/2347072580692";
  const instagramUrl = "https://www.instagram.com/phelzink?igsh=MTUyYWViZDlmc3h0NA%3D%3D&utm_source=qr";
  const linkedinUrl = "https://www.linkedin.com/";

  return (
    <footer className="bg-black pt-24 pb-10 text-white font-sans">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* 4-COLUMN BASELINE-LOCKED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start mb-24">
          
          {/* COLUMN 1: Logo & Brand Statement */}
          <div className="flex flex-col">
            <div className="w-24 h-24 mb-10 relative">
              <div className="absolute inset-0 -rotate-12 origin-center">
                <Image 
                  src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776962525/blog_assets/tzasw1vrukgoz1proi8j.png" 
                  alt="Logo" fill className="object-contain" priority 
                />
              </div>
            </div>
            <p className="text-[#808080] text-[15px] leading-[1.6] max-w-[320px] font-medium">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-[900] uppercase tracking-[0.2em] leading-none mt-[5px] mb-10 text-white">
              Quick Links
            </h4>
            <ul className="space-y-5 text-[#808080] text-[15px] font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Our works</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Services */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-[900] uppercase tracking-[0.2em] leading-none mt-[5px] mb-10 text-white">
              Services
            </h4>
            <ul className="space-y-5 text-[#808080] text-[15px] font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Branding & Print services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Fabrication</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact & Social Orbs */}
          <div className="flex flex-col">
            <h4 className="text-[14px] font-[900] uppercase tracking-[0.2em] leading-none mt-[5px] mb-10 text-white">
              Contact Us
            </h4>
            <ul className="space-y-6 text-[#808080] text-[15px] font-medium mb-12">
              <li className="flex items-center gap-4">
                <Mail size={18} strokeWidth={1.5} className="text-[#22C55E]" />
                <span>Phelzink@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} strokeWidth={1.5} className="text-[#22C55E]" />
                <span>+234 707 258 0692</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} strokeWidth={1.5} className="text-[#22C55E]" />
                <span>+234 812 582 1771</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1.5} className="text-[#22C55E] mt-1" />
                <span className="leading-relaxed">24, Oguntolu street<br />Shomolu, Lagos</span>
              </li>
            </ul>

            {/* SOCIAL ORB ROW */}
            <div className="flex items-center gap-4">
              {[
                { url: whatsappUrl, icon: "whatsapp" },
                { url: instagramUrl, icon: "instagram" },
                { url: linkedinUrl, icon: "linkedin" }
              ].map((social, i) => (
                <Link key={i} href={social.url} target="_blank" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#808080] hover:text-white hover:border-white transition-all duration-300">
                  {social.icon === "whatsapp" && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
                  {social.icon === "instagram" && <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                  {social.icon === "linkedin" && <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: 1:1 FIGMA SIGNATURE */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#666666] text-[13px] font-medium">
            © 2026 Phelzink Production. All rights reserved.
          </p>
          <div className="text-white text-[11px] font-[900] uppercase tracking-[0.3em]">
            <Link href="https://staymedia.ng/" target="_blank" className="hover:text-[#22C55E] transition-colors">
              DESIGNED & DEVELOPED BY STAY MEDIA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
