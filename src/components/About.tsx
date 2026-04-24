'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

/* ─── Asset URLs ─────────────────────────────────────────────────────────── */
const HALO = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png';
const CHARACTER = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png';

/* ─── Framer Motion Config (TypeScript Safe) ─────────────────────────────── */
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease:[0.22, 1, 0.36, 1] as any },
  },
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 py-16 lg:py-28">
        
        {/* ══════════════════════════════════════════════════════════════
            THE PROPORTIONAL COMPOSITOR
        ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">

          {/* ── LEFT: THE EDITORIAL PILLAR ── */}
          <div className="relative z-20 w-full lg:w-[440px] flex flex-col">
            
            {/* HEADING: Proportional Lock (10vw) prevents wrapping & overflow */}
            <motion.h2
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="font-sans font-black select-none tracking-[-0.04em]"
              style={{ lineHeight: 0.78 }}
            >
              <motion.span variants={line} className="block whitespace-nowrap text-[clamp(32px,10vw,88px)] text-[#111111]">
                About
              </motion.span>
              {/* Visible Silver (#BDBDBD) */}
              <motion.span variants={line} className="block whitespace-nowrap text-[clamp(32px,10vw,88px)] text-[#BDBDBD]">
                Phelzink
              </motion.span>
              <motion.span variants={line} className="block whitespace-nowrap text-[clamp(32px,10vw,88px)] text-[#111111]">
                Production
              </motion.span>
            </motion.h2>

            {/* ── MOBILE VISUAL UNIT (The Aspect Shield) ── */}
            <div className="lg:hidden relative w-full aspect-[4/5] max-h-[450px] mt-8 mb-12 pointer-events-none">
              
              {/* HALO: Scaled 150% and shifted right to kill the porthole */}
              <div className="absolute top-[-10%] right-[-30%] w-[150%] aspect-square z-0">
                <Image src={HALO} alt="" fill sizes="100vw" className="object-contain opacity-90" priority />
              </div>
              
              {/* CHARACTER: Anchored to bottom, protected by aspect ratio */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease:[0.22, 1, 0.36, 1] as any }}
                className="absolute inset-x-0 bottom-0 h-[90%] z-10"
              >
                <Image src={CHARACTER} alt="Phelzink Character" fill sizes="100vw" className="object-contain object-bottom" priority />
              </motion.div>
            </div>

            {/* ── STORY COPY ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mt-0 lg:mt-16"
            >
              {/* Restored Figma-accurate Black Heading */}
              <h3 className="font-sans text-[20px] lg:text-[24px] font-extrabold text-[#111111] mb-5 tracking-tight">
                Our story
              </h3>
              <div className="font-sans font-medium text-[14px] lg:text-[15px] leading-[1.8] text-[#3A3A3A] space-y-5 max-w-[95%] lg:max-w-none">
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

          {/* ── RIGHT: DESKTOP VISUAL UNIT ── */}
          <div className="hidden lg:block relative flex-1 min-h-[700px] pointer-events-none">
            
            {/* HALO: Desktop Bleed */}
            <div className="absolute top-[-10%] right-[-20%] w-[120%] max-w-[1000px] aspect-square z-0">
              <Image src={HALO} alt="" fill sizes="50vw" className="object-contain opacity-90" priority />
            </div>
            
            {/* CHARACTER: Desktop Anchor */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, delay: 0.18, ease:[0.22, 1, 0.36, 1] as any }}
              className="absolute bottom-0 right-0 w-[90%] h-[90%] z-10"
            >
              <Image src={CHARACTER} alt="Phelzink Character" fill sizes="50vw" className="object-contain object-bottom" priority />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
