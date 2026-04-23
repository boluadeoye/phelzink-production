"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brandLogos = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750098/blog_assets/dxujejs6yya0ekeqvnam.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750146/blog_assets/qu0ucu1ui4ikqoytb4ec.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750131/blog_assets/pumej7z26mxpkaiabcwv.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750121/blog_assets/i7iqntcfqbisgxwtiwui.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750108/blog_assets/ijq2mxzzivitson9qxtr.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750105/blog_assets/wnnogrkgnhq5l8s1eeq4.png"
];

const Brands = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-center text-sm font-bold text-ink/40 uppercase tracking-[0.3em] font-sans">
          Some of the brands we have worked with
        </h2>
      </div>
      
      <div className="relative flex">
        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div 
              key={i} 
              className="relative w-32 h-16 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <Image 
                src={logo} 
                alt="Partner Brand" 
                fill 
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
