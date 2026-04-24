"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Asset URLs ─────────────────────────────────────────────────────────── */
const HALO = "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png";
const CHAR = "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden">
      
      {/* ══════════════════════════════════════════════════════════════
          THE STATS CEILING (The Structural Anchor)
      ══════════════════════════════════════════════════════════════ */}
      <div className="w-full bg-[#F3F4F6] py-12 lg:py-16 relative z-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none">250+</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Projects Completed</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none">300+</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Happy Clients</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none">7+</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none">98%</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          THE CORE CONTENT (The Fixed-Coordinate Canvas)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-32">
        
        {/* ── THE ATMOSPHERIC HALO (Decoupled & Massive) ── */}
        <div className="absolute top-[10%] right-[-30%] w-[150%] md:w-[800px] lg:w-[1200px] lg:right-[-15%] lg:top-[5%] aspect-square z-0 pointer-events-none">
          <Image
            src={HALO}
            alt="Background Glow"
            fill
            sizes="100vw"
            className="object-contain opacity-90"
            priority
          />
        </div>

        {/* ── THE EDITORIAL GRID ── */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          {/* 
            Desktop: Left column is hard-locked to a maximum of 480px. 
            Mobile: Single column stack.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_1fr] gap-y-10 lg:gap-y-0 lg:gap-x-12">

            {/* 1. HEADING (Row 1, Col 1) */}
            <div className="lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-8">
              {/* 
                The em-based crush: -mt-[0.15em] physically pulls the text blocks together 
                proportionally, bypassing browser line-height math.
                Mobile is locked to 32px to guarantee "Production" never wraps.
              */}
              <h2 className="flex flex-col font-sans font-black tracking-[-0.05em] text-[32px] md:text-[56px] lg:text-[82px] leading-none">
                <span className="text-[#111111] relative z-30">
                  About
                </span>
                <span className="text-[#C4C4C4] relative z-20 -mt-[0.15em]">
                  Phelzink
                </span>
                <span className="text-[#111111] relative z-10 -mt-[0.15em]">
                  Production
                </span>
              </h2>
            </div>

            {/* 2. VISUAL UNIT (Row 1 & 2, Col 2) */}
            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 relative flex justify-center items-center w-full h-[400px] md:h-[500px] lg:h-[750px] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
                className="relative w-full h-full z-10"
              >
                <Image
                  src={CHAR}
                  alt="Phelzink Creative Character"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                  priority
                />
              </motion.div>
            </div>

            {/* 3. STORY TEXT (Row 2, Col 1) */}
            <div className="lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-6 max-w-[90%] lg:max-w-none">
              <h3 className="font-sans text-[20px] lg:text-[24px] font-extrabold text-[#111111] mb-6 tracking-tight">
                Our story
              </h3>
              <div className="flex flex-col gap-5 font-sans font-medium text-[14px] lg:text-[15px] leading-[1.8] text-[#3A3A3A]">
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
      </div>
    </section>
  );
}
