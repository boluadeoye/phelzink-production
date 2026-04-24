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
          LAYER 0: THE STATS CEILING (Structural Anchor)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full bg-[#F3F4F6] py-12 lg:py-16 z-40 border-b border-gray-200/50">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none tracking-tight">250+</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Projects Completed</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none tracking-tight">300+</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Happy Clients</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none tracking-tight">7+</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[36px] lg:text-[48px] font-black text-[#111111] leading-none tracking-tight">98%</span>
              <span className="font-sans text-[13px] lg:text-[14px] font-medium text-[#666666]">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          THE CANVAS: FIXED COORDINATE COMPOSITOR
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full pt-16 pb-20 lg:pt-28 lg:pb-32 min-h-[800px]">
        
        {/* ── LAYER 1: THE ATMOSPHERIC BLEED (Z-0) ── 
            Scaled massively and shifted right to eliminate the "porthole" effect.
        */}
        <div className="absolute top-[5%] right-[-60%] w-[200%] md:w-[150%] lg:w-[1400px] lg:right-[-30%] lg:top-[-10%] aspect-square z-0 pointer-events-none">
          <Image
            src={HALO}
            alt="Background Glow"
            fill
            sizes="100vw"
            className="object-contain opacity-90"
            priority
          />
        </div>

        {/* ── LAYER 2 & 3: THE EDITORIAL GRID ── */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
          {/* 
            Desktop: Hard-locked 440px left column. 
            Mobile: Flex column with strict ordering.
          */}
          <div className="flex flex-col lg:grid lg:grid-cols-[440px_1fr] gap-y-10 lg:gap-y-0 lg:gap-x-12">

            {/* ── LAYER 3: HEADING (Z-30, Order 1) ── */}
            <div className="order-1 lg:col-start-1 lg:row-start-1 relative z-30 lg:self-end lg:pb-8">
              {/* 
                Mobile: clamp(32px, 9vw, 42px) guarantees no wrapping.
                Desktop: 82px hard lock.
                -mt-[0.12em] forces the physical overlap.
              */}
              <h2 className="flex flex-col font-sans font-black tracking-[-0.05em] text-[clamp(32px,9vw,42px)] lg:text-[82px] leading-none">
                <span className="text-[#111111] relative z-30">
                  About
                </span>
                {/* Surgical Silver (#E5E7EB) lifted above the glow */}
                <span className="text-[#E5E7EB] relative z-20 -mt-[0.12em]">
                  Phelzink
                </span>
                <span className="text-[#111111] relative z-10 -mt-[0.12em]">
                  Production
                </span>
              </h2>
            </div>

            {/* ── LAYER 2: VISUAL UNIT (Z-10, Order 2) ── */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative flex justify-center lg:justify-end items-center w-full h-[400px] md:h-[500px] lg:h-[750px] z-10 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                {/* Sized by height, object-right on desktop to push away from text */}
                <Image
                  src={CHAR}
                  alt="Phelzink Creative Character"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center lg:object-right"
                  priority
                />
              </motion.div>
            </div>

            {/* ── LAYER 3: STORY TEXT (Z-30, Order 3) ── */}
            <div className="order-3 lg:col-start-1 lg:row-start-2 relative z-30 lg:self-start lg:pt-6">
              <h3 className="font-sans text-[20px] lg:text-[24px] font-extrabold text-[#111111] mb-6 tracking-tight">
                Our story
              </h3>
              {/* The 440px Editorial Pillar is enforced by the parent grid on desktop */}
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
