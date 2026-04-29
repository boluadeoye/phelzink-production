"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const whatsappUrl = "https://wa.me/2347072580692";
  const instagramUrl = "https://www.instagram.com/phelzink?igsh=MTUyYWViZDlmc3h0NA%3D%3D&utm_source=qr";
  const linkedinUrl = "https://www.linkedin.com/";
  const youtubeUrl = "https://www.youtube.com/@PelumiOgunyemi-h4g/shorts";

  return (
    <footer className="bg-black text-white pt-16 md:pt-24 pb-8 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.8fr] gap-16 lg:gap-24 mb-20 md:mb-28">
          <div className="flex flex-col items-start">
            <div className="relative grid place-items-center w-32 h-32 md:w-48 md:h-48 mb-8 -ml-4">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                <defs>
                  <path id="footerCirclePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text className="text-[7.5px] font-bold uppercase tracking-[0.15em] fill-white/40 font-sans">
                  <textPath xlinkHref="#footerCirclePath" startOffset="0%">
                    Phelzink Production • Phelzink Production •
                  </textPath>
                </text>
              </svg>
              <div className="relative w-[55%] h-[55%] z-10">
                <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1777361257/blog_assets/slz8cnkgwuf2xplkodj2.png" alt="Phelzink" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-[#808080] text-[15px] leading-[1.7] max-w-[280px] font-medium">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col">
              <h4 className="text-[13px] font-[900] uppercase tracking-[0.3em] mb-10 text-white leading-none">Quick Links</h4>
              <ul className="space-y-5 text-[#808080] text-[15px] font-medium">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#portfolio" className="hover:text-white transition-colors">Our works</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[13px] font-[900] uppercase tracking-[0.3em] mb-10 text-white leading-none">Services</h4>
              <ul className="space-y-5 text-[#808080] text-[15px] font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Design</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Branding & Print</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Fabrication</Link></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[13px] font-[900] uppercase tracking-[0.3em] mb-10 text-white leading-none">Contact Us</h4>
              <div className="flex flex-col h-full justify-between">
                <ul className="space-y-6 text-[#808080] text-[14px] font-medium mb-12">
                  <li className="flex items-center gap-4 group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    <span className="group-hover:text-white transition-colors">Phelzink@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span className="group-hover:text-white transition-colors">+234 707 258 0692</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <Link href={whatsappUrl} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#808080] hover:text-white hover:border-[#22C55E] hover:bg-[#22C55E]/10 transition-all">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </Link>
                  <Link href={instagramUrl} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#808080] hover:text-white hover:border-white transition-all">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </Link>
                  <Link href={youtubeUrl} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#808080] hover:text-white hover:border-[#FF0000] hover:bg-[#FF0000]/10 transition-all">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/90 text-[11px] sm:text-[14px] font-bold tracking-tight sm:tracking-wide whitespace-nowrap">
            © 2026 Phelzink Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
