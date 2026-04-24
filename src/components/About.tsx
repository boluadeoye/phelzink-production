'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

/* ─── Asset URLs ─────────────────────────────────────────────────────────── */
const HALO = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png';
const CHARACTER = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png';

/* ─── Framer Motion Config (TypeScript Safe) ─────────────────────────────── */
const easeStd =[0.22, 1, 0.36, 1] as any;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeStd },
  },
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden pt-24 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* ══════════════════════════════════════════════════════════════
            THE SEQUENTIAL COMPOSITOR GRID (STABLE ARCHITECTURE)
        ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12">

          {/* ── LEFT: THE EDITORIAL PILLAR (Cols 1-6) ── */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col z-20">
            
            {/* HEADING: 31px Mobile Lock + 0.9 Leading (No Negative Margins) */}
            <motion.h2
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col font-sans font-black select-none"
            >
              <motion.span variants={line} className="text-[31px] md:text-[56px] lg:text-[82px] leading-[0.9] tracking-[-0.04em] text-[#111111] whitespace-nowrap relative z-30">
                About
              </motion.span>
              {/* Lighter, cooler silver (#A3A3A3) */}
              <motion.span variants={line} className="text-[31px] md:text-[56px] lg:text-[82px] leading-[0.9] tracking-[-0.04em] text-[#A3A3A3] whitespace-nowrap relative z-20">
                Phelzink
              </motion.span>
              <motion.span variants={line} className="text-[31px] md:text-[56px] lg:text-[82px] leading-[0.9] tracking-[-0.04em] text-[#111111] whitespace-nowrap relative z-10">
                Production
              </motion.span>
            </motion.h2>

            {/* ── MOBILE VISUAL UNIT (Nudged down via mt-20) ── */}
            <div className="md:hidden relative w-full h-[400px] mt-20 mb-16 pointer-events-none">
              {/* HALO: Scaled 160% and shifted right */}
              <div className="absolute top-1/2 right-[-40%] w-[160%] aspect-square -translate-y-1/2 z-0">
                <Image src={HALO} alt="" fill sizes="100vw" className="object-contain opacity-90" priority />
              </div>
              {/* CHARACTER: Anchored to the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeStd }}
                className="absolute inset-0 z-10"
              >
                <Image src={CHARACTER} alt="Phelzink Character" fill sizes="100vw" className="object-contain object-bottom drop-shadow-2xl" priority />
              </motion.div>
            </div>

            {/* ── STORY COPY (Editorial Air: leading-[2.0]) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-0 md:mt-16 max-w-[440px]"
            >
              <h3 className="font-sans text-[20px] lg:text-[22px] font-extrabold text-[#111111] mb-6 tracking-tight">
                Our story
              </h3>
              <div className="font-sans font-medium text-[14px] lg:text-[15px] leading-[2.0] text-[#3A3A3A] space-y-6">
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
            </motion.div>

          </div>

          {/* ── RIGHT: DESKTOP VISUAL ANCHOR (Cols 7-12) ── */}
          <div className="hidden md:block md:col-span-6 lg:col-span-7 relative min-h-[650px] pointer-events-none z-10">
            
            {/* HALO: Desktop Bleed (Nudged down to top-[55%] to clear header) */}
            <div className="absolute top-[55%] right-[-30%] w-[130%] max-w-[1000px] aspect-square -translate-y-1/2 z-0">
              <Image src={HALO} alt="" fill sizes="50vw" className="object-contain opacity-90" priority />
            </div>
            
            {/* CHARACTER: Desktop Anchor */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: easeStd }}
              className="absolute inset-x-0 bottom-0 w-full h-[95%] z-10"
            >
              <Image src={CHARACTER} alt="Phelzink Character" fill sizes="50vw" className="object-contain object-bottom drop-shadow-2xl" priority />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
