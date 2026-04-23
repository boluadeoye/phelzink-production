"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-ink">
      {/* Background Image with Precision Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776952913/blog_assets/sej2tcsnkvfkdw93tpwj.jpg"
          alt="Industrial Printing"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-[1]" />
      </div>

      {/* STRICT BOXED CONTAINER: 1140px */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="max-w-3xl">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-black text-white leading-[1.1] tracking-tighter font-sans mb-6">
            Ready to Elevate <br className="hidden md:block" /> Your Brand?
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl font-sans font-medium mb-10 max-w-xl leading-relaxed">
            Let's collaborate to create something extraordinary. Get in touch with us today.
          </p>

          <Link 
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-ink px-10 py-4 rounded-full font-black text-[15px] font-sans uppercase tracking-widest hover:bg-emerald hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Contact Us Now
            <ArrowRight size={20} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
