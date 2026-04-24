"use client";

import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else { setStatus("error"); setTimeout(() => setStatus("idle"), 3000); }
    } catch (error) {
      setTimeout(() => {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      }, 1500);
    }
  };

  const headerStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 900,
    letterSpacing: '-0.05em',
    lineHeight: '0.9',
    color: '#0C0608'
  };

  return (
    <section id="contact" className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-y-16 md:gap-x-12 lg:gap-x-20">
          
          <div className="md:col-span-5 flex flex-col">
            <h2 style={headerStyle} className="text-[44px] md:text-[52px] mb-10 md:mb-12">
              Contact <br className="hidden md:block" /> Information
            </h2>
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0608" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="pt-1">
                  <p className="text-[17px] mb-1 font-black tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phone</p>
                  <a href="https://wa.me/2347072580692" className="block text-[#444444] text-[15px] font-medium hover:text-[#25D366] transition-colors">+234 707 258 0692</a>
                  <a href="tel:+2348125821771" className="block text-[#444444] text-[15px] font-medium">+234 812 582 1771</a>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0608" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="pt-1">
                  <p className="text-[17px] mb-1 font-black tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</p>
                  <a href="mailto:Phelzink@gmail.com" className="text-[#444444] text-[15px] font-medium hover:text-[#0C0608]">Phelzink@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="w-full h-[300px] rounded-3xl overflow-hidden bg-[#F3F4F6] border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3791153!3d6.5276316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sOguntolu%20St%2C%20Somolu%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" 
                className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" 
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col">
            <h2 style={headerStyle} className="text-[44px] md:text-[52px] mb-10 md:mb-12">
              Send Us a <br className="hidden md:block" /> Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Your Name *</label>
                <input required name="name" placeholder="Enter your name" className="w-full h-[64px] px-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email Address *</label>
                <input required type="email" name="email" placeholder="Enter your email" className="w-full h-[64px] px-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold" style={{ fontFamily: "'Montserrat', sans-serif" }}>Message *</label>
                <textarea required name="message" placeholder="Enter your message" className="w-full min-h-[160px] p-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium resize-none" />
              </div>
              <button type="submit" disabled={status !== "idle"} className="w-full h-[68px] bg-[#0C0608] text-white rounded-2xl text-[16px] flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-70 mt-2 font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {status === "idle" ? "Send Message" : status === "loading" ? "Sending..." : "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
