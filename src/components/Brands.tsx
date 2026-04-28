"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brandLogos = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1777372722/blog_assets/q131tbatzcnhwmjvcjcv.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750146/blog_assets/qu0ucu1ui4ikqoytb4ec.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750131/blog_assets/pumej7z26mxpkaiabcwv.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750121/blog_assets/i7iqntcfqbisgxwtiwui.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750108/blog_assets/ijq2mxzzivitson9qxtr.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750105/blog_assets/wnnogrkgnhq5l8s1eeq4.png"
];

const Brands = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-center text-[11px] md:text-sm font-bold text-ink/40 uppercase tracking-[0.3em] font-sans">
          Some of the brands we have worked with
        </h2>
      </div>

      <div className="relative flex items-center">
        {/* Gradient Overlays for Luxury Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="relative w-36 h-12 md:w-44 md:h-16 flex-shrink-0 transition-all duration-500 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo}
                alt="Partner Brand"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
