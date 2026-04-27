"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/2347072580692";
  const instagramUrl = "https://www.instagram.com/phelzink?igsh=MTUyYWViZDlmc3h0NA%3D%3D&utm_source=qr";
  const linkedinUrl = "https://www.linkedin.com/";

  return (
    <footer className="bg-black text-white pt-20 md:pt-28 pb-10 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* OUTER GRID: Decouples Brand from Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-16 lg:gap-24 mb-24 md:mb-32">
          
          {/* COLUMN 1: BRAND ANCHOR (Left) */}
          <div className="flex flex-col items-start">
            <div className="w-20 h-20 mb-10">
              <img 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776962525/blog_assets/tzasw1vrukgoz1proi8j.png" 
                alt="Phelzink Logo" 
                className="w-full h-full object-contain -rotate-12 origin-center"
              />
            </div>
            <p className="text-[#808080] text-[15px] leading-[1.7] max-w-[280px] font-medium">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          {/* COLUMN 2: MIDDLE GRID (The Content Cluster) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            
            {/* Sub-Col 1: Quick Links */}
            <div className="flex flex-col">
              <h4 className="text-[13px] font-[900] uppercase tracking-[0.3em] mb-10 text-white leading-none">
                Quick Links
              </h4>
              <ul className="space-y-5 text-[#808080] text-[15px] font-medium">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#portfolio" className="hover:text-white transition-colors">Our works</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>

            {/* Sub-Col 2: Services */}
            <div className="flex flex-col">
              <h4 className="text-[13px] font-[900] uppercase tracking-[0.3em] mb-10 text-white leading-none">
                Services
              </h4>
              <ul className="space-y-5 text-[#808080] text-[15px] font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Design</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Branding & Print services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Fabrication</Link></li>
              </ul>
            </div>

            {/* Sub-Col 3: Contact Us (Inner Grid) */}
            <div className="flex flex-col">
              <h4 className="text-[13px] font-[900] uppercase tracking-[0.3em] mb-10 text-white leading-none">
                Contact Us
              </h4>
              <div className="flex flex-col h-full justify-between">
                <ul className="space-y-6 text-[#808080] text-[14px] font-medium mb-12">
                  <li className="flex items-center gap-4 group">
                    <Mail size={16} className="text-[#22C55E] shrink-0 transition-transform group-hover:scale-110" />
                    <span className="group-hover:text-white transition-colors">Phelzink@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <Phone size={16} className="text-[#22C55E] shrink-0 transition-transform group-hover:scale-110" />
                    <span className="group-hover:text-white transition-colors">+234 707 258 0692</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <Phone size={16} className="text-[#22C55E] shrink-0 transition-transform group-hover:scale-110" />
                    <span className="group-hover:text-white transition-colors">+234 812 582 1771</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <MapPin size={16} className="text-[#22C55E] mt-1 shrink-0 transition-transform group-hover:scale-110" />
                    <span className="leading-relaxed group-hover:text-white transition-colors">24, Oguntolu street<br />Shomolu, Lagos</span>
                  </li>
                </ul>

                {/* SOCIAL ANCHOR: Geometrically locked to Column 3 */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <Link href={whatsappUrl} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#808080] hover:text-white hover:border-[#22C55E] hover:bg-[#22C55E]/10 transition-all">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </Link>
                  <Link href={instagramUrl} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#808080] hover:text-white hover:border-white transition-all">
                    <Instagram size={18} />
                  </Link>
                  <Link href={linkedinUrl} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#808080] hover:text-white hover:border-white transition-all">
                    <Linkedin size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Absolute Wall Anchoring */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#4D4D4D] text-[12px] font-medium tracking-wide">
            © 2026 Phelzink Production. All rights reserved.
          </p>
          <div className="text-white text-[10px] font-[900] uppercase tracking-[0.4em] opacity-80 hover:opacity-100 transition-opacity">
            <Link href="https://staymedia.ng/" target="_blank">
              DESIGNED & DEVELOPED BY STAY MEDIA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
