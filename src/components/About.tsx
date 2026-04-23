"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      {/* POINT 1: STRICT BOXED CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* POINT 7: Desktop 2 Columns | Mobile Vertical Stack */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* 1. HEADER (Order 1 on Mobile) */}
          <div className="w-full order-1">
            {/* POINT 7: 900 Weight, 0.9 Leading, Color Split */}
            <h2 className="text-[48px] lg:text-[72px] font-black leading-[0.9] tracking-[-0.04em] font-sans">
              <span className="text-[#111111] block">About</span>
              <span className="text-[#888888] block">Phelzink <br className="hidden lg:block" /> Production</span>
            </h2>
          </div>

          {/* 2. IMAGE & HALO (Order 2 on Mobile) */}
          <div className="relative w-full aspect-square flex justify-center items-center order-2 md:row-span-2 mt-8 md:mt-0">
            {/* Layer 1: The White Halo Asset (Atmospheric Bleed) */}
            <div className="absolute inset-0 w-[140%] h-[140%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png" 
                alt="" 
                fill 
                className="object-contain" 
              />
            </div>

            {/* Layer 2: The 3D Character Asset */}
            <div className="relative w-[85%] h-[85%] z-10">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png" 
                alt="Phelzink Creative" 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
          </div>

          {/* 3. STORY CONTENT (Order 3 on Mobile) */}
          <div className="w-full order-3 md:mt-[-20px] lg:mt-[-40px]">
            <h3 className="text-[22px] font-black text-ink mb-6 font-sans tracking-tight">Our story</h3>
            <div className="space-y-6 text-[16px] text-ink/70 leading-[1.8] max-w-lg font-sans font-medium">
              <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
              <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.</p>
              <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
