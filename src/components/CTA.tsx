"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden flex items-center justify-center">
      {/* BACKGROUND LAYER: Industrial Texture */}
      <div
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* OVERLAY: High-Contrast Depth */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* CONTENT LAYER: Precision Alignment */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center text-white">
        
        {/* HEADING: Montserrat 800 (ExtraBold) */}
        <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-extrabold tracking-tighter leading-[1.1] mb-6">
          Ready to Elevate <br className="hidden md:block" /> Your Brand?
        </h2>

        {/* SUBTEXT: Montserrat 400 (Regular) - Forced 2-line geometry */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/90 max-w-[620px] mx-auto mb-12 leading-relaxed">
          Let's collaborate to create something extraordinary. <br className="hidden md:block" /> 
          Get in touch with us today.
        </p>

        {/* THE INDUSTRIAL BUTTON: Rounded-Rectangle Geometry */}
        <Link
          href="#contact"
          className="group h-[64px] px-10 bg-white text-[#0C0608] rounded-[16px] font-bold text-[18px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
        >
          Contact Us Now
          <ArrowRight 
            size={22} 
            strokeWidth={2.5} 
            className="group-hover:translate-x-1.5 transition-transform duration-300" 
          />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
