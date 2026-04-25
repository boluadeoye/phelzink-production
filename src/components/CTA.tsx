"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND LAYER: CMYK Rollers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776952913/blog_assets/sej2tcsnkvfkdw93tpwj.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* DEEP SHADOW OVERLAY: 80% Black for maximum text prominence */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* CONTENT LAYER: Precision Alignment */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 w-full max-w-[1280px] mx-auto">
        
        {/* HEADING: Forced "Brand?" isolation */}
        <h2 className="text-[clamp(32px,6vw,64px)] font-black tracking-[-0.04em] leading-[1.05] mb-6 drop-shadow-2xl">
          Ready to Elevate Your <br /> Brand?
        </h2>

        {/* SUBTEXT: Exact Figma line breaks */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-white/90 mb-10 leading-relaxed drop-shadow-md">
          Let's collaborate to create something <br />
          extraordinary. Get in touch with us today.
        </p>

        {/* THE BUTTON: Sleek Geometry (h-52px, rounded-12px) */}
        <Link
          href="#contact"
          className="group h-[52px] px-8 bg-white text-[#0C0608] rounded-[12px] font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
        >
          Contact Us Now
          <ArrowRight 
            size={20} 
            strokeWidth={2.5} 
            className="group-hover:translate-x-1 transition-transform duration-300" 
          />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
