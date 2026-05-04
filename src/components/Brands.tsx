"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brandLogos =[
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1777372722/blog_assets/q131tbatzcnhwmjvcjcv.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750098/blog_assets/dxujejs6yya0ekeqvnam.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750108/blog_assets/ijq2mxzzivitson9qxtr.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750121/blog_assets/i7iqntcfqbisgxwtiwui.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750131/blog_assets/pumej7z26mxpkaiabcwv.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750146/blog_assets/qu0ucu1ui4ikqoytb4ec.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1777468968/blog_assets/ie1s33hzbga7d988hf2y.jpg"
];

const Brands = () => {
  // Triple logos for a perfectly seamless, long-running loop
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-[#0C0608]/5">
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
        <h2 className="text-center text-[11px] md:text-[13px] font-bold text-[#0C0608]/40 uppercase tracking-[0.3em]">
          Some of the brands we have worked with
        </h2>
      </div>
      <div className="relative flex items-center">
        {/* Luxury Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
        
        <motion.div
          className="flex gap-16 md:gap-28 items-center whitespace-nowrap"
          animate={{ x:["0%", "-33.3333%"] }}
          transition={{
            duration: 40, // Slowed down for larger logos
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="relative w-48 h-16 md:w-64 md:h-24 flex-shrink-0 transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={logo}
                alt="Partner Brand"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, 256px"
                priority={i < 7}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
