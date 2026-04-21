"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-ink">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Desktop Slider Arrows (Strictly Hidden on Mobile) */}
      <button className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20">
        <ChevronLeft size={24} />
      </button>
      <button className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20">
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[36px] leading-[1.1] md:text-[60px] lg:text-[72px] font-bold tracking-tight mb-8"
        >
          <span className="font-sans block mb-2">Transform Your Brand with</span>
          <span className="font-serif italic text-white">Creative Design & Print Solutions</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[16px] md:text-xl lg:text-2xl text-white/90 font-sans max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We bring your vision to life through exceptional branding, 
          innovative design, and high-quality printing services.
        </motion.p>

        <div className="flex flex-col w-full sm:flex-row sm:w-auto items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-white text-ink px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all text-lg font-sans">
            Get Started
            <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-ink transition-all text-lg font-sans">
            View Our Work
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <div className="w-2 h-2 bg-white/40 rounded-full" />
        <div className="w-10 h-2 bg-white rounded-full" />
        <div className="w-2 h-2 bg-white/40 rounded-full" />
        <div className="w-2 h-2 bg-white/40 rounded-full" />
      </div>
      
    </section>
  );
};

export default Hero;
