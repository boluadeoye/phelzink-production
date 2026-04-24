"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden min-h-[800px] lg:min-h-[900px] flex flex-col justify-center">
      
      {/* 1. THE BACKGROUND ATMOSPHERE (Absolute Layer 0) */}
      <div className="absolute right-[-10%] bottom-[-5%] w-[100%] lg:w-[70%] aspect-square z-0 pointer-events-none opacity-90">
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png" 
          alt="" 
          fill 
          className="object-contain" 
        />
      </div>

      {/* 2. THE BOXED CONTENT LAYER (Absolute Layer 10) */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-end">
          
          {/* TEXT COLUMN */}
          <div className="w-full lg:w-7/12 flex flex-col">
            {/* HEADER: Order 1 on Mobile, Title Case, 0.85 Leading */}
            <h2 className="text-[48px] lg:text-[82px] font-sans leading-[0.85] tracking-[-0.04em] mb-10 lg:mb-16 order-1">
              <span className="text-[#111111] font-black block">About</span>
              <span className="text-[#888888] font-bold block">Phelzink <br className="hidden lg:block" /> Production</span>
            </h2>

            {/* IMAGE PLACEHOLDER FOR MOBILE SPACING (Order 2 on Mobile, Hidden on Desktop) */}
            <div className="w-full aspect-square lg:hidden order-2 mb-12" />

            {/* STORY: Order 3 on Mobile */}
            <div className="order-3 max-w-lg">
              <h3 className="text-[22px] font-black text-ink mb-5 font-sans tracking-tight">Our story</h3>
              <div className="space-y-6 text-[15px] text-ink/70 leading-[1.8] font-sans font-medium">
                <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
                <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.</p>
                <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE CHARACTER ANCHOR (Absolute Layer 20) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[-5%] lg:right-[5%] bottom-0 w-[90%] lg:w-[50%] h-[50%] lg:h-[80%] z-20 pointer-events-none"
      >
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png" 
          alt="Phelzink Creative" 
          fill 
          className="object-contain object-bottom" 
          priority 
        />
      </motion.div>

    </section>
  );
};

export default About;
