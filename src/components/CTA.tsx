"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-black overflow-hidden flex items-center justify-center antialiased">
      
      {/* BACKGROUND LAYER: Full vibrancy with a clean dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776952913/blog_assets/sej2tcsnkvfkdw93tpwj.jpg"
          alt="Industrial Printing"
          fill
          className="object-cover"
          priority
        />
        {/* The 75% overlay ensures the image is visible but text pops */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* CONTENT LAYER: Precision Alignment */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 w-full max-w-[1280px] mx-auto">
        
        {/* HEADING: Hard-coded line-height (0.85) to kill the gap forever */}
        <h2 
          className="text-[36px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] mb-6"
          style={{ lineHeight: 0.85 }}
        >
          {/* MOBILE VIEW: 3-Line Stack */}
          <span className="block md:hidden">
            Ready to Elevate<br />
            Your<br />
            Brand?
          </span>
          
          {/* DESKTOP VIEW: 2-Line Stack */}
          <span className="hidden md:block">
            Ready to Elevate Your<br />
            Brand?
          </span>
        </h2>

        {/* SUBTEXT: Precision 2-line stack */}
        <p 
          className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-white/90 mb-10"
          style={{ lineHeight: 1.4 }}
        >
          Let's collaborate to create something <br />
          extraordinary. Get in touch with us today.
        </p>

        {/* THE SLEEK BUTTON: h-50px, rounded-12px */}
        <Link
          href="#contact"
          className="group h-[50px] px-8 bg-white text-[#0C0608] rounded-[12px] font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl"
        >
          Contact Us Now
          <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
