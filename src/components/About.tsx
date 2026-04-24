"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-white pt-[140px] pb-20 lg:pt-[180px] lg:pb-32">
      
      {/* STRICT BOXED CONTAINER: 1280px */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/*
          THE ARCHITECTURE:
          Mobile = 1-Column Grid (Order: Heading -> Visual Unit -> Story)
          Desktop = 12-Column Grid (Left: Cols 1-6 | Right: Cols 7-12)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 lg:gap-x-8">

          {/* 1. HEADER (Mobile: Top | Desktop: Top-Left, Row 1) */}
          <div className="order-1 lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-8 relative z-20">
            <h2 className="font-sans font-black leading-[0.85] tracking-[-0.04em] text-[36px] md:text-[48px] lg:text-[72px]">
              <span className="text-[#111111] block">About</span>
              <span className="text-[#888888] block">Phelzink <br className="hidden lg:block" /> Production</span>
            </h2>
          </div>

          {/* 2. VISUAL ANCHOR UNIT (Mobile: Middle | Desktop: Right Side, Spans Rows 1 & 2) */}
          {/* Negative margins on mobile pull the text tight against the character */}
          <div className="order-2 lg:order-none lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 relative w-full h-[400px] md:h-[500px] lg:h-[700px] mt-[-20px] mb-[-20px] lg:mt-0 lg:mb-0 z-10 pointer-events-none flex items-center justify-center">
            
            {/* Layer 1: The Halo (Fused to the container, shifted left on desktop to bleed) */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-[65%] w-[130%] lg:w-[150%] aspect-square z-0">
              <Image
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png"
                alt="Background Halo"
                fill
                className="object-contain opacity-90"
                priority
              />
            </div>

            {/* Layer 2: The 3D Character (Locked inside the container) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-10"
            >
              <Image
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png"
                alt="Phelzink Creative Character"
                fill
                className="object-contain object-center"
                priority
              />
            </motion.div>
          </div>

          {/* 3. STORY CONTENT (Mobile: Bottom | Desktop: Bottom-Left, Row 2) */}
          <div className="order-3 lg:order-none lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-12 relative z-20">
            <h3 className="font-sans text-[24px] font-black text-[#111111] mb-6 tracking-tight">Our story</h3>
            <div className="font-sans space-y-6 text-[16px] text-[#111111]/80 leading-[1.8] font-medium">
              <p>
                Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.
              </p>
              <p>
                Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.
              </p>
              <p>
                Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
