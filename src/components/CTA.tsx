"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-ink/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center text-white">
        <h2 className="text-4xl md:text-6xl font-black mb-6 font-sans tracking-tighter leading-tight">
          Ready to Elevate <br /> Your Brand?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-12 font-sans max-w-2xl mx-auto leading-relaxed">
          Let's collaborate to create something extraordinary. <br className="hidden md:block" /> Get in touch with us today.
        </p>
        <Link 
          href="#contact"
          className="bg-white text-ink px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-emerald hover:text-white transition-all shadow-2xl active:scale-[0.95]"
        >
          Contact Us Now
          <ArrowRight size={22} strokeWidth={3} />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
