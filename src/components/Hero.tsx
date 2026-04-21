"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-ink">
      
      {/* Background Image - Using Next/Image for absolute stability */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png"
          alt="Industrial Printing Press"
          fill
          className="object-cover"
          priority
        />
        {/* Precision Gradient Overlay: Dark at top/bottom for text, transparent in middle for vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />
      </div>

      {/* Desktop Slider Arrows (Strictly hidden on mobile) */}
      <button className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20">
        <ChevronLeft size={24} />
      </button>
      <button className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20">
        <ChevronRight size={24} />
      </button>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-16">
        
        {/* Figma Exact: Serif, Italic, White, Tight Leading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[42px] leading-[1.05] md:text-[64px] lg:text-[80px] font-bold font-serif italic text-white mb-6 tracking-tight"
        >
          Transform Your Brand with <br className="hidden md:block" />
          Creative Design & Print Solutions
        </motion.h1>

        {/* Figma Exact: Sans-serif, Regular, White */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[15px] md:text-xl text-white/90 font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We bring your vision to life through exceptional branding, 
          innovative design, and high-quality printing services.
        </motion.p>

        {/* Buttons: Full width on mobile, auto on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col w-full sm:flex-row sm:w-auto items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-white text-ink px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all text-[16px] font-sans">
            Get Started
            <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-ink transition-all text-[16px] font-sans">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Pagination Dots (Figma Exact) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        <div className="w-8 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/40 rounded-full" />
        <div className="w-2 h-2 bg-white/40 rounded-full" />
        <div className="w-2 h-2 bg-white/40 rounded-full" />
      </div>
      
    </section>
  );
};

export default Hero;
