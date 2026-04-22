"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-ink h-[600px] lg:h-[700px] mt-[70px]">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Elegant, small slider arrows */}
      <button className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white items-center justify-center text-ink hover:scale-110 transition-transform z-20 shadow-lg">
        <ChevronLeft size={20} />
      </button>
      <button className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white items-center justify-center text-ink hover:scale-110 transition-transform z-20 shadow-lg">
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white">
        {/* 100% Sans-Serif, Scaled down, Tight Leading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[32px] md:text-[48px] lg:text-[56px] font-black tracking-tight mb-6 font-sans leading-[1.1]"
        >
          Transform Your Brand with <br className="hidden md:block" />
          Creative Design & Print Solutions
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[15px] md:text-[18px] text-white/90 font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We bring your vision to life through exceptional branding, 
          innovative design, and high-quality printing services.
        </motion.p>

        <div className="flex flex-col w-full md:flex-row md:w-auto items-center justify-center gap-4">
          <button className="w-full md:w-auto bg-white text-ink px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all text-[15px] font-sans">
            Get Started
            <ArrowRight size={16} />
          </button>
          <button className="w-full md:w-auto border border-white text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-ink transition-all text-[15px] font-sans">
            View Our Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        <div className="w-8 h-1.5 bg-white rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
