"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      {/* STRICT BOXED CONTAINER: 1280px */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* 
          THE ARCHITECTURE: 
          Mobile = Flex Column (Stacks 1, 2, 3 safely)
          Desktop = 12-Column Grid (Text gets 5 cols, Image gets 7 cols)
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-12 lg:gap-0">
          
          {/* 1. HEADER (Mobile: Top | Desktop: Top-Left) */}
          <div className="order-1 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-8 relative z-20">
            <h2 className="text-[48px] lg:text-[72px] font-black leading-[0.9] tracking-[-0.04em] font-sans">
              <span className="text-[#111111] block">About</span>
              <span className="text-[#888888] block">Phelzink <br className="hidden lg:block" /> Production</span>
            </h2>
          </div>

          {/* 2. IMAGE & HALO (Mobile: Middle | Desktop: Right Side spanning both rows) */}
          <div className="order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 relative w-full aspect-square max-w-[500px] mx-auto lg:max-w-none lg:w-full z-10">
            
            {/* Layer 1: The White Halo Asset (Scaled to 160% to bleed behind text safely) */}
            <div className="absolute inset-0 w-[160%] h-[160%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png" 
                alt="" 
                fill 
                className="object-contain opacity-90" 
              />
            </div>

            {/* Layer 2: The 3D Character Asset (Safely in document flow) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
              className="relative w-full h-full z-10"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png" 
                alt="Phelzink Creative" 
                fill 
                className="object-contain" 
                priority 
              />
            </motion.div>
          </div>

          {/* 3. STORY CONTENT (Mobile: Bottom | Desktop: Bottom-Left) */}
          <div className="order-3 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-8 relative z-20">
            <h3 className="text-[22px] font-black text-ink mb-6 font-sans tracking-tight">Our story</h3>
            <div className="space-y-6 text-[16px] text-ink/70 leading-[1.8] font-sans font-medium">
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
