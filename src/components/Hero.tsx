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
  const nextImage = useCallback(() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)), []);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextImage, 6000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-ink h-[500px] md:h-[600px] lg:h-[700px] mt-[70px]">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
            <Image src={images[currentIndex]} alt="Phelzink" fill className="object-cover" priority />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/70 z-[1]" />
      </div>

      {/* Arrows: Absolute Edges */}
      <button onClick={prevImage} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white z-30 hover:bg-white/20 transition-all">
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextImage} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white z-30 hover:bg-white/20 transition-all">
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 md:px-24 text-center text-white">
        {/* MOBILE: 3 LINES | DESKTOP: 2 LINES */}
        <h1 className="font-black tracking-tighter leading-[1.1] font-sans text-[clamp(30px,7vw,64px)] mb-6">
          <span className="md:hidden">Transform Your Brand <br /> with Creative Design <br /> & Print Solutions</span>
          <span className="hidden md:block">Transform Your Brand with <br /> Creative Design & Print Solutions</span>
        </h1>

        <p className="text-[14px] md:text-lg text-white/80 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          We bring your vision to life through exceptional branding, innovative design, and high-quality printing services.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href="#contact" className="w-full md:w-auto h-12 px-8 bg-white text-ink rounded-lg font-black flex items-center justify-center gap-2 hover:bg-emerald hover:text-white transition-all text-sm uppercase tracking-widest">
            Get Started <ArrowRight size={16} strokeWidth={3} />
          </Link>
          <Link href="#portfolio" className="w-full md:w-auto h-12 px-8 bg-transparent border-2 border-white text-white rounded-lg font-black flex items-center justify-center hover:bg-white hover:text-ink transition-all text-sm uppercase tracking-widest">
            View Our Work
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {images.map((_, i) => (
          <div key={i} className={`transition-all duration-500 rounded-full ${currentIndex === i ? "w-10 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
