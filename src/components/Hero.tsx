"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776939927/blog_assets/akarw2znltgqktvb8ecd.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776939881/blog_assets/vvsw4gjdnh0daydfknes.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776939898/blog_assets/t7h9ludvpcmtg76j8ypy.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776939941/blog_assets/lmfowmy5ffnzqdm6zlrc.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776939972/blog_assets/nhalpbll0vplalkztt7v.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776939996/blog_assets/ddyv2ivvfyv4enokrunf.jpg"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 6000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-ink h-[550px] lg:h-[750px] mt-[70px]">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentIndex]}
              alt="Phelzink Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/75 z-[1]" />
      </div>

      {/* Navigation Arrows - Precision Sizing & Edge Placement */}
      <button 
        onClick={prevImage}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-30"
      >
        <ChevronLeft size={18} className="md:w-6 md:h-6" />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-30"
      >
        <ChevronRight size={18} className="md:w-6 md:h-6" />
      </button>

      {/* Content Container - max-w-[85%] prevents arrow collision on mobile */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-20 text-center text-white mt-4">
        
        {/* MOBILE HEADING: FORCED 3 LINES, 900 WEIGHT */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden text-[32px] font-black tracking-[-0.02em] mb-6 font-sans leading-[1.1] max-w-[85%] mx-auto"
        >
          Transform Your Brand <br />
          with Creative Design <br />
          & Print Solutions
        </motion.h1>

        {/* DESKTOP HEADING: FORCED 2 LINES, 900 WEIGHT */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:block text-[52px] lg:text-[64px] font-black tracking-[-0.02em] mb-6 font-sans leading-[1.1]"
        >
          Transform Your Brand with <br />
          Creative Design & Print Solutions
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[14px] md:text-[18px] text-white/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          We bring your vision to life through exceptional branding, 
          innovative design, and high-quality printing services.
        </motion.p>

        {/* Sleek Buttons with 900 Weight Text */}
        <div className="flex flex-col w-[90%] mx-auto md:w-auto md:flex-row items-center justify-center gap-4">
          <Link 
            href="#contact"
            className="w-full md:w-auto h-12 px-8 bg-white text-ink rounded-lg font-black flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all text-[14px] font-sans uppercase tracking-wider"
          >
            Get Started
            <ArrowRight size={16} strokeWidth={3} />
          </Link>
          <Link 
            href="#portfolio"
            className="w-full md:w-auto h-12 px-8 bg-transparent border border-white text-white rounded-lg font-black flex items-center justify-center hover:bg-white hover:text-ink transition-all text-[14px] font-sans uppercase tracking-wider"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`transition-all duration-500 rounded-full ${
              currentIndex === i ? "w-10 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"
            }`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
