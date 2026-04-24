"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Asset URLs ─────────────────────────────────────────────────────────── */
const HALO = "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png";
const CHAR = "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png";

export default function About() {
  return (
    <section
      id="about"
      /* pt-[120px] mathematically clears the fixed header + logo padding */
      className="relative w-full bg-white overflow-hidden pt-[120px] pb-20 lg:pt-[160px] lg:pb-32"
    >
      {/* ── Max-width shell ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        
        {/*
         * ── LAYOUT ENGINE ────────────────────────────────────────────────
         * Mobile : flex-col (Strict spacing, no negative margins)
         * Desktop: 12-col CSS Grid
         */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 1 · HEADING
              Mobile  : Top
              Desktop : col 1–6 / row 1
          ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-2 relative z-20 lg:self-end lg:pb-6">
            <h2 className="font-sans font-black tracking-[-0.05em] leading-[0.75] flex flex-col">
              {/* 
                38px mobile guarantees "Production" fits the 342px safe-zone.
                Z-index stacking ensures clean overlaps if ascenders/descenders touch.
              */}
              <span className="text-[38px] md:text-[56px] lg:text-[82px] text-[#111111] relative z-30">
                About
              </span>
              <span className="text-[38px] md:text-[56px] lg:text-[82px] text-[#A3A3A3] relative z-20">
                Phelzink
              </span>
              <span className="text-[38px] md:text-[56px] lg:text-[82px] text-[#111111] relative z-10">
                Production
              </span>
            </h2>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 2 · FUSED VISUAL UNIT
              Mobile  : Middle (w-[85%] to breathe, mb-14 to protect text)
              Desktop : col 7–12 / row 1–2
          ══════════════════════════════════════════════════════════════ */}
          <div className="w-[85%] mx-auto mt-10 mb-14 lg:w-full lg:mt-0 lg:mb-0 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-3 flex justify-center items-center pointer-events-none">
            
            {/* ASPECT-SQUARE ANCHOR */}
            <div className="relative w-full max-w-[400px] lg:max-w-none aspect-square">
              
              {/* ── HALO (Inset -10% forces the massive atmospheric bleed) ── */}
              <div className="absolute inset-[-10%] z-0">
                <Image
                  src={HALO}
                  alt="Background Glow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain opacity-90"
                  priority
                />
              </div>

              {/* ── CHARACTER (Locked to the core container) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-[2%] z-10"
              >
                <Image
                  src={CHAR}
                  alt="Phelzink Creative Character"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-bottom"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 3 · STORY TEXT
              Mobile  : Bottom (max-w-[95%] to maintain column feel)
              Desktop : col 1–6 / row 2
          ══════════════════════════════════════════════════════════════ */}
          <div className="max-w-[95%] lg:max-w-none lg:col-start-1 lg:col-end-6 lg:row-start-2 lg:row-end-3 relative z-20 lg:self-start lg:pt-8">
            
            {/* Hierarchy Fix: Sentence case, 800 weight, 20px */}
            <h3 className="font-sans text-[20px] lg:text-[24px] font-extrabold text-[#111111] mb-5 tracking-tight">
              Our story
            </h3>

            {/* Body copy: 14px, 1.7 leading for the "editorial" feel */}
            <div className="flex flex-col gap-5 font-sans font-medium text-[14px] lg:text-[15px] leading-[1.7] text-[#3A3A3A]">
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
}
