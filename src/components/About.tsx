"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      
      {/* 
        Z-0: THE HALO (ABSOLUTE BACKGROUND)
        Decoupled from the grid to prevent layout trapping. 
        Centered on mobile, shifted to the 75% mark (right hemisphere) on desktop.
      */}
      <div className="absolute top-[30%] lg:top-1/2 left-1/2 lg:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:w-[1100px] lg:h-[1100px] z-0 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png"
          alt="Background Halo"
          fill
          className="object-contain opacity-90"
          priority
        />
      </div>

      {/* STRICT BOXED CONTAINER: 1280px */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/*
          THE ARCHITECTURE:
          Mobile = Flex Column (Order: Heading -> Image -> Story)
          Desktop = 12-Column Grid (Auto-rows prevent vertical collision)
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-8">

          {/* 1. HEADER (Mobile: Top | Desktop: Top-Left, Row 1) */}
          <div className="order-1 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-8">
            <h2 className="font-black leading-[0.85] tracking-[-0.04em] text-[clamp(2.75rem,6vw,4.5rem)]">
              <span className="text-[#111111] block">About</span>
              <span className="text-[#888888] block">Phelzink <br className="hidden lg:block" /> Production</span>
            </h2>
          </div>

          {/* 2. IMAGE (Mobile: Middle | Desktop: Right Side, Spans Rows 1 & 2) */}
          <div className="order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 relative w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] lg:max-w-[600px] h-[350px] md:h-[450px] lg:h-[650px] z-20"
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
          <div className="order-3 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-4">
            <h3 className="text-[24px] font-black text-[#111111] mb-6 tracking-tight">Our story</h3>
            <div className="space-y-6 text-[16px] text-[#111111]/80 leading-[1.8] font-medium">
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
