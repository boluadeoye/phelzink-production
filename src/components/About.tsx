"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      {/* STRICT BOXED CONTAINER: 1140px */}
      <div className="max-w-[1140px] mx-auto px-6 md:px-12">
        
        {/* Grid logic to handle Mobile Order and Desktop Split */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
          
          {/* 1. HEADER: Order 1 on Mobile, Column 1 on Desktop */}
          <div className="w-full order-1 md:col-span-1">
            <h2 className="text-[48px] lg:text-[82px] font-black text-ink leading-[0.85] tracking-[-0.05em] font-sans uppercase md:normal-case">
              About <br /> Phelzink <br /> Production
            </h2>
          </div>

          {/* 2. IMAGE: Order 2 on Mobile, Column 2 on Desktop */}
          <div className="relative w-full aspect-square flex justify-center items-center order-2 md:row-span-2">
            {/* Layer 1: The White Halo Asset (Atmospheric Bleed) */}
            <div className="absolute inset-0 w-[140%] h-[140%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png" 
                alt="" 
                fill 
                className="object-contain opacity-100" 
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

          {/* 3. STORY: Order 3 on Mobile, Column 1 on Desktop (Under Header) */}
          <div className="w-full order-3 md:col-span-1 md:mt-[-20px] lg:mt-[-40px]">
            <h3 className="text-[22px] font-black text-ink mb-5 font-sans tracking-tight">Our story</h3>
            <div className="space-y-6 text-[15px] text-ink/70 leading-[1.7] max-w-lg font-sans font-medium">
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
