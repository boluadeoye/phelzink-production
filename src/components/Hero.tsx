"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Precision Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 tracking-tight"
        >
          Transform Your Brand with <br />
          <span className="serif-display text-emerald">Creative Design & Print Solutions</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          We bring your vision to life through exceptional branding, 
          innovative design, and high-quality printing services.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="w-full sm:w-auto bg-white text-ink px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all group text-sm uppercase tracking-wider">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto border border-white/40 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wider">
            View Our Work
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={cn(
              "h-1 rounded-full transition-all duration-700",
              i === 1 ? "w-10 bg-emerald" : "w-3 bg-white/20"
            )} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
