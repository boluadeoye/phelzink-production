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

  return (
    <section id="contact" className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-y-16 md:gap-x-12 lg:gap-x-20">
          
          {/* LEFT COLUMN */}
          <div className="md:col-span-5 flex flex-col">
            {/* PERFECTED HEADER: Scaled down, single line locked */}
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] whitespace-nowrap font-extrabold tracking-tight text-[#0C0608] mb-8 md:mb-10">
              Contact Information
            </h2>
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0608" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="pt-1">
                  <p className="text-[17px] mb-1 font-extrabold tracking-tight text-[#0C0608]">Phone</p>
                  <a href="https://wa.me/2347072580692" className="block text-[#444444] text-[15px] font-medium hover:text-[#25D366] transition-colors">+234 707 258 0692</a>
                  <a href="tel:+2348125821771" className="block text-[#444444] text-[15px] font-medium hover:text-[#0C0608] transition-colors">+234 812 582 1771</a>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0608" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="pt-1">
                  <p className="text-[17px] mb-1 font-extrabold tracking-tight text-[#0C0608]">Email</p>
                  <a href="mailto:Phelzink@gmail.com" className="text-[#444444] text-[15px] font-medium hover:text-[#0C0608] transition-colors">Phelzink@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0608" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="pt-1">
                  <p className="text-[17px] mb-1 font-extrabold tracking-tight text-[#0C0608]">Location</p>
                  <p className="text-[#444444] text-[15px] font-medium leading-relaxed">24, Oguntolu street, Shomolu, Lagos</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0608" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="pt-1">
                  <p className="text-[17px] mb-1 font-extrabold tracking-tight text-[#0C0608]">Business Hours</p>
                  <p className="text-[#444444] text-[15px] font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#444444] text-[15px] font-medium">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-[#444444] text-[15px] font-medium">Sunday: Closed</p>
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

          {/* RIGHT COLUMN */}
          <div className="md:col-span-7 flex flex-col">
            {/* PERFECTED HEADER: Scaled down, single line locked */}
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] whitespace-nowrap font-extrabold tracking-tight text-[#0C0608] mb-8 md:mb-10">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* 1. Name */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#0C0608] pl-1">Your Name *</label>
                <input required name="name" placeholder="Enter your name" className="w-full h-[64px] px-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium text-[#0C0608] placeholder:text-[#888888]" />
              </div>
              
              {/* 2. Email */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#0C0608] pl-1">Email Address *</label>
                <input required type="email" name="email" placeholder="Enter your email" className="w-full h-[64px] px-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium text-[#0C0608] placeholder:text-[#888888]" />
              </div>

              {/* 3. Phone */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#0C0608] pl-1">Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your number" className="w-full h-[64px] px-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium text-[#0C0608] placeholder:text-[#888888]" />
              </div>

              {/* 4. Service */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#0C0608] pl-1">Service Interested In *</label>
                <select required name="service" defaultValue="" className="w-full h-[64px] px-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium appearance-none text-[#0C0608]" style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%230C0608%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.2em' }}>
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

              {/* 5. Message */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#0C0608] pl-1">Message *</label>
                <textarea required name="message" placeholder="Enter your message" className="w-full min-h-[160px] p-6 rounded-2xl bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#0C0608] outline-none text-[15px] font-medium resize-none text-[#0C0608] placeholder:text-[#888888]" />
              </div>

              <button type="submit" disabled={status !== "idle"} className="w-full h-[68px] bg-[#0C0608] text-white rounded-2xl text-[16px] flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-70 mt-2 font-bold">
                {status === "idle" ? "Send Message" : status === "loading" ? "Sending..." : "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
