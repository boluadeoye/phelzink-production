"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-ink/60 backdrop-brightness-75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
        >
          Transform Your Brand with <br />
          <span className="serif-display text-emerald">Creative Design & Print Solutions</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          We bring your vision to life through exceptional branding, 
          innovative design, and high-quality printing services.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-white text-ink px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all group">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto border border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={cn(
              "h-1 transition-all duration-500",
              i === 1 ? "w-8 bg-white" : "w-2 bg-white/30"
            )} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
