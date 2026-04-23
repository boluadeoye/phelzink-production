"use client";
import React from "react";
import Link from "next/link";
import CircularLogo from "./CircularLogo";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div className="flex flex-col">
            <CircularLogo className="w-28 h-28 -ml-4 mb-6" textColor="fill-white" />
            <p className="text-white/60 text-[15px] leading-relaxed max-w-[300px] font-sans">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-sans">Quick Links</h4>
            <ul className="space-y-4 font-sans text-white/60 text-[16px]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Our works</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 font-sans">Services</h4>
            <ul className="space-y-4 font-sans text-white/70 text-[16px]">
              <li><Link href="#" className="hover:text-white transition-colors">Designs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Branding & Print services</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Fabrication</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-sans">Contact Us</h4>
            <ul className="space-y-5 font-sans text-white/70 text-[15px] mb-10">
              <li className="flex items-center gap-3"><Mail size={20} strokeWidth={1.5} /><span>Phelzink@gmail.com</span></li>
              <li className="flex items-center gap-3"><Phone size={20} strokeWidth={1.5} /><span>+234 707 258 0692</span></li>
              <li className="flex items-center gap-3"><Phone size={20} strokeWidth={1.5} /><span>+234 812 582 1771</span></li>
              <li className="flex items-start gap-3"><MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0" /><span>24, Oguntolu street<br />Shomolu, Lagos</span></li>
            </ul>

            <div className="flex items-center gap-6">
              <Link href="https://wa.me/2348125821771" target="_blank" className="hover:text-emerald transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </Link>
              <Link href="#" className="hover:text-emerald transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="hover:text-emerald transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="https://www.youtube.com/@PelumiOgunyemi-h4g" target="_blank" className="hover:text-emerald transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[13px] font-sans">© 2026 Phelzink Production. All rights reserved.</p>
          <div className="text-white/40 text-[11px] font-bold font-sans uppercase tracking-[0.2em]">
            <Link href="https://staymedia.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white">
              Designed & Developed by STAY MEDIA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
