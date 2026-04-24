"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND LAYER: Vibrant CMYK Rollers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776952913/blog_assets/sej2tcsnkvfkdw93tpwj.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* OVERLAY: Lightened to 40% to keep the colors vibrant */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT LAYER: Precision Alignment */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 w-full max-w-[1280px] mx-auto">
        
        {/* HEADING: Forced 2-line break, crushed leading, text-shadow for pop */}
        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-black tracking-[-0.04em] leading-[1.05] mb-6 drop-shadow-xl">
          Ready to Elevate <br /> Your Brand?
        </h2>

        {/* SUBTEXT: Forced 2-line break exactly after "something" */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-white/95 mb-10 leading-relaxed drop-shadow-md">
          Let's collaborate to create something <br className="hidden sm:block" />
          extraordinary. Get in touch with us today.
        </p>

        {/* THE BUTTON: Sleek Geometry (h-54px, rounded-14px) */}
        <Link
          href="#contact"
          className="group h-[54px] px-8 bg-white text-[#0C0608] rounded-[14px] font-bold text-[16px] flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
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
