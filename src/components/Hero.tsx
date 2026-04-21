"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-ink">
      {/* Background Image with Precision Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Slider Navigation Arrows (Desktop) */}
      <button className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20">
        <ChevronLeft size={32} />
      </button>
      <button className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20">
        <ChevronRight size={32} />
      </button>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[42px] md:text-[64px] lg:text-[80px] font-bold leading-[1.1] mb-8 tracking-tight font-sans"
        >
          Transform Your Brand with <br className="hidden md:block" />
          Creative Design & Print Solutions
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          We bring your vision to life through exceptional branding, 
          innovative design, and high-quality printing services.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-white text-ink px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all text-lg">
            Get Started
            <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-ink transition-all text-lg">
            View Our Work
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`transition-all duration-500 rounded-full ${
              i === 1 ? "w-12 h-2 bg-white" : "w-2 h-2 bg-white/40"
            }`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
