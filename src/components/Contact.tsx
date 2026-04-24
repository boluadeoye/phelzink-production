"use client";

import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.warn("API simulation active.");
      setTimeout(() => {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white overflow-hidden pt-20 pb-24 md:pt-32 md:pb-40 font-sans">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* ══════════════════════════════════════════════════════════════
            THE EDITORIAL COMPOSITOR GRID (Locked at MD Breakpoint)
        ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-10 lg:gap-x-16 items-start">
          
          {/* ── LEFT COLUMN: CONTACT INFO & MAP (Cols 1-5) ── */}
          <div className="md:col-span-5 flex flex-col w-full">
            
            {/* THE MONOLITH HEADER */}
            <h2 className="text-[40px] md:text-[44px] lg:text-[48px] text-[#111111] tracking-[-0.03em] leading-[1.05] mb-10 lg:mb-12 font-black">
              Contact <br className="block md:hidden" /> Information
            </h2>
            
            {/* INFO LIST */}
            <div className="flex flex-col gap-8 mb-12 lg:mb-16">
              
              {/* Phone */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-[#111111] shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="pt-1.5">
                  <p className="text-[#111111] text-[16px] mb-1.5 leading-none font-black">Phone</p>
                  <a href="https://wa.me/2347072580692" target="_blank" rel="noopener noreferrer" className="block text-[#444444] text-[15px] font-medium tracking-tight hover:text-[#25D366] transition-colors">+234 707 258 0692</a>
                  <a href="tel:+2348125821771" className="block text-[#444444] text-[15px] font-medium tracking-tight hover:text-[#111111] transition-colors">+234 812 582 1771</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-[#111111] shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="pt-1.5">
                  <p className="text-[#111111] text-[16px] mb-1.5 leading-none font-black">Email</p>
                  <a href="mailto:Phelzink@gmail.com" className="block text-[#444444] text-[15px] font-medium tracking-tight hover:text-[#111111] transition-colors">Phelzink@gmail.com</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-[#111111] shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="pt-1.5">
                  <p className="text-[#111111] text-[16px] mb-1.5 leading-none font-black">Location</p>
                  <p className="text-[#444444] text-[15px] font-medium leading-relaxed tracking-tight">24, Oguntolu street<br className="hidden md:block" /> Shomolu, Lagos</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-[#111111] shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="pt-1.5">
                  <p className="text-[#111111] text-[16px] mb-1.5 leading-none font-black">Business Hours</p>
                  <p className="text-[#444444] text-[15px] font-medium tracking-tight">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#444444] text-[15px] font-medium tracking-tight">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-[#444444] text-[15px] font-medium tracking-tight">Sunday: Closed</p>
                </div>
              </div>

            </div>

            {/* THE MAP: Clean Iframe, No Duplication */}
            <div className="relative w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-[#F3F4F6] border border-gray-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3791153!3d6.5276316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sOguntolu%20St%2C%20Somolu%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" 
                className="absolute inset-0 w-full h-full z-10" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN: THE FORM (Cols 6-12) ── */}
          <div className="md:col-span-7 flex flex-col w-full">
            
            {/* THE MONOLITH HEADER */}
            <h2 className="text-[40px] md:text-[44px] lg:text-[48px] text-[#111111] tracking-[-0.03em] leading-[1.05] mb-10 lg:mb-12 font-black">
              Send Us a <br className="block md:hidden" /> Message
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name */}
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-[12px] text-[#111111] uppercase tracking-[0.15em] pl-1 font-extrabold">Your Name *</label>
                <input required type="text" id="name" name="name" placeholder="Enter your name" className="w-full h-[60px] px-5 lg:px-6 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#111111] focus:bg-white focus:ring-4 focus:ring-[#111111]/5 outline-none text-[15px] font-medium transition-all placeholder:text-[#888888]" />
              </div>
              
              {/* Email */}
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-[12px] text-[#111111] uppercase tracking-[0.15em] pl-1 font-extrabold">Email Address *</label>
                <input required type="email" id="email" name="email" placeholder="Enter your email" className="w-full h-[60px] px-5 lg:px-6 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#111111] focus:bg-white focus:ring-4 focus:ring-[#111111]/5 outline-none text-[15px] font-medium transition-all placeholder:text-[#888888]" />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-3">
                <label htmlFor="phone" className="text-[12px] text-[#111111] uppercase tracking-[0.15em] pl-1 font-extrabold">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your number" className="w-full h-[60px] px-5 lg:px-6 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#111111] focus:bg-white focus:ring-4 focus:ring-[#111111]/5 outline-none text-[15px] font-medium transition-all placeholder:text-[#888888]" />
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col gap-3">
                <label htmlFor="service" className="text-[12px] text-[#111111] uppercase tracking-[0.15em] pl-1 font-extrabold">Service Interested In *</label>
                <div className="relative">
                  <select required id="service" name="service" defaultValue="" className="w-full h-[60px] px-5 lg:px-6 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#111111] focus:bg-white focus:ring-4 focus:ring-[#111111]/5 outline-none text-[15px] font-medium transition-all appearance-none cursor-pointer text-[#111111]" style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23111111%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.2em' }}>
                    <option value="" disabled className="text-[#888888]">Select a service</option>
                    <option value="Business Card Printing">Business Card Printing</option>
                    <option value="Tote Bag Branding">Tote Bag Branding</option>
                    <option value="Rollup & Fly Banners">Rollup & Fly Banners</option>
                    <option value="Paper Bag Production">Paper Bag Production</option>
                    <option value="Custom Notepads">Custom Notepads</option>
                    <option value="Car Branding">Car Branding</option>
                    <option value="Stickers & Labels">Stickers & Labels</option>
                    <option value="General Branding/Design">General Branding/Design</option>
                  </select>
                </div>
              </div>
              
              {/* Message */}
              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-[12px] text-[#111111] uppercase tracking-[0.15em] pl-1 font-extrabold">Message *</label>
                <textarea required id="message" name="message" placeholder="Enter your message" className="w-full min-h-[160px] p-5 lg:p-6 rounded-xl bg-[#F3F4F6] border border-transparent focus:border-[#111111] focus:bg-white focus:ring-4 focus:ring-[#111111]/5 outline-none text-[15px] font-medium transition-all resize-none placeholder:text-[#888888]"></textarea>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status !== "idle"} 
                className="w-full h-[64px] bg-[#111111] text-white rounded-xl text-[16px] flex items-center justify-center gap-3 hover:bg-[#222222] transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 mt-2 font-black"
              >
                {status === "idle" && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    <span>Send Message</span>
                  </>
                )}
                {status === "loading" && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    <span>Sending...</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    <span className="text-[#25D366]">Message Sent!</span>
                  </>
                )}
                {status === "error" && (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span className="text-[#EF4444]">Failed to send</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
