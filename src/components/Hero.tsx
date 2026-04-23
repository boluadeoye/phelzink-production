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
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-ink h-[600px] lg:h-[750px] mt-[70px]">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentIndex]}
              alt={`Phelzink Production Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Precision Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
      </div>

      {/* Desktop Slider Arrows */}
      <button 
        onClick={prevImage}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20 shadow-lg"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={nextImage}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white hover:text-ink transition-all z-20 shadow-lg"
      >
        <ChevronRight size={20} />
      </button>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[36px] md:text-[56px] lg:text-[72px] font-black tracking-tighter mb-6 font-sans leading-[0.95]"
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

        <div className="flex flex-col w-full md:flex-row md:w-auto items-center justify-center gap-5">
          <Link 
            href="#contact"
            className="w-full md:w-auto h-16 px-10 bg-white text-ink rounded-xl font-black flex items-center justify-center gap-2 hover:bg-emerald hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-[16px] font-sans shadow-xl"
          >
            Get Started
            <ArrowRight size={18} strokeWidth={3} />
          </Link>
          <Link 
            href="#portfolio"
            className="w-full md:w-auto h-16 px-10 bg-transparent border-2 border-white text-white rounded-xl font-black flex items-center justify-center hover:bg-white hover:text-ink hover:scale-[1.02] active:scale-[0.98] transition-all text-[16px] font-sans"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Pagination Dots (6 Dots for 6 Images) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-500 rounded-full ${
              currentIndex === i ? "w-10 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
