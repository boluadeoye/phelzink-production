"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND LAYER: CMYK Rollers with Contrast Boost */}
      <div
        className="absolute inset-0 z-0 contrast-125"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776952913/blog_assets/sej2tcsnkvfkdw93tpwj.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* DEEP SHADOW OVERLAY: 85% Black for maximum text prominence */}
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* CONTENT LAYER: Precision Alignment */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 w-full max-w-[1280px] mx-auto">
        
        {/* HEADING: Scaled down (48px/28px), Weight 700, Tight Leading */}
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
          Ready to Elevate 
          <br className="block md:hidden" /> {/* Mobile Break 1 */}
          Your 
          <br className="hidden md:block" /> {/* Desktop Break */}
          <br className="block md:hidden" /> {/* Mobile Break 2 */}
          Brand?
        </h2>

        {/* SUBTEXT: Scaled down, Forced 2-line break exactly after "something" */}
        <p className="text-[15px] md:text-[16px] lg:text-[18px] font-medium text-white/80 mb-10 leading-relaxed max-w-[500px]">
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
