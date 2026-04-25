"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND LAYER */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776952913/blog_assets/sej2tcsnkvfkdw93tpwj.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 w-full max-w-[1280px] mx-auto">
        
        {/* HEADING: Stacked Span Architecture to kill the "Nonsense Gap" */}
        <h2 className="flex flex-col items-center text-[36px] md:text-[56px] lg:text-[64px] font-black tracking-[-0.05em] leading-[0.85] mb-8">
          {/* Line 1: Desktop & Mobile */}
          <span className="block md:hidden">Ready to Elevate</span>
          <span className="hidden md:block">Ready to Elevate Your</span>
          
          {/* Line 2: Mobile Only */}
          <span className="block md:hidden mt-1">Your</span>
          
          {/* Line 3: Desktop & Mobile */}
          <span className="block mt-1">Brand?</span>
        </h2>

        {/* SUBTEXT: Precision 2-line stack */}
        <p className="flex flex-col items-center text-[16px] md:text-[18px] lg:text-[20px] font-medium text-white/90 mb-12 leading-tight">
          <span>Let's collaborate to create something</span>
          <span className="mt-1">extraordinary. Get in touch with us today.</span>
        </p>

        {/* THE SLEEK BUTTON: h-52px, rounded-12px */}
        <Link
          href="#contact"
          className="group h-[52px] px-10 bg-white text-[#0C0608] rounded-[12px] font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
        >
          Contact Us Now
          <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
