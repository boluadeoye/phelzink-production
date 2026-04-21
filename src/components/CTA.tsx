"use client";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-sans tracking-tight">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-12 font-sans max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary. Get in touch with us today.
        </p>
        <button className="bg-white text-ink px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-emerald hover:text-white transition-all shadow-2xl">
          Contact Us Now
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </section>
  );
};

export default CTA;
