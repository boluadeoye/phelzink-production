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
      className="relative w-full bg-white overflow-x-hidden pt-[100px] pb-20 lg:pt-[140px] lg:pb-32"
    >
      {/* ── Max-width shell ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-12">
        
        {/*
         * ── LAYOUT ENGINE ────────────────────────────────────────────────
         * Mobile : flex-col — CSS `order` controls visual sequence
         * Desktop: 12-col CSS Grid — explicit row/col placement
         */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 1 · HEADING
              Mobile  : order-1
              Desktop : col 1–6 / row 1
          ══════════════════════════════════════════════════════════════ */}
          <div className="order-1 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-2 relative z-20 lg:self-end lg:pb-6">
            <h2 className="font-sans font-black tracking-[-0.04em] leading-[0.82]">
              {/* 38px mobile guarantees "Production" fits 342px safe-zone */}
              <span className="block text-[38px] md:text-[56px] lg:text-[76px] text-[#111111]">
                About
              </span>
              <span className="block text-[38px] md:text-[56px] lg:text-[76px] text-[#9A9A9A]">
                Phelzink
              </span>
              <span className="block text-[38px] md:text-[56px] lg:text-[76px] text-[#111111]">
                Production
              </span>
            </h2>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 2 · FUSED VISUAL UNIT (The Coordinate Masterpiece)
              Mobile  : order-2 + negative margins for tight stack
              Desktop : col 7–12 / row 1–2
          ══════════════════════════════════════════════════════════════ */}
          <div className="order-2 -mt-[12px] -mb-[32px] lg:mt-0 lg:mb-0 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-3 flex justify-center items-center overflow-visible pointer-events-none">
            
            {/* ASPECT-SQUARE ANCHOR: Height auto-matches width. */}
            <div className="relative w-full max-w-[450px] lg:max-w-none aspect-square overflow-visible">
              
              {/* ── HALO (Inset 8% to sit behind torso) ── */}
              <div className="absolute inset-[8%] z-0">
                <Image
                  src={HALO}
                  alt="Background Glow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain opacity-90"
                  priority
                />
              </div>

              {/* ── CHARACTER (Breaks out of Halo bounds) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-10"
                style={{
                  top: "-6%",
                  left: "3%",
                  right: "3%",
                  bottom: "-10%",
                }}
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
              Mobile  : order-3
              Desktop : col 1–6 / row 2
          ══════════════════════════════════════════════════════════════ */}
          <div className="order-3 lg:col-start-1 lg:col-end-6 lg:row-start-2 lg:row-end-3 relative z-20 lg:self-start lg:pt-6">
            
            {/* Restored Figma-accurate Heading */}
            <h3 className="font-sans text-[22px] lg:text-[24px] font-black text-[#111111] mb-5 tracking-tight">
              Our story
            </h3>

            {/* Body copy with tight industrial leading */}
            <div className="flex flex-col gap-5 font-sans font-medium text-[15px] lg:text-[16px] leading-[1.7] text-[#3A3A3A]">
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
