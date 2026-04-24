'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

/* ─── Asset URLs ─────────────────────────────────────────────────────────── */
// The Halo PNG has been eradicated in favor of a high-performance CSS Gradient.
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
    <section id="about" className="relative w-full bg-white overflow-hidden pt-16 pb-20 lg:pt-28 lg:pb-32">
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* ══════════════════════════════════════════════════════════════
            THE COMPOSITOR GRID
        ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-x-12">

          {/* ── LEFT: THE EDITORIAL PILLAR (Z-20) ── */}
          <div className="relative z-20 w-full lg:w-[440px] lg:flex-none flex flex-col">
            
            {/* HEADING: 8.5vw guarantees no-wrap on any mobile device */}
            <motion.h2
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="font-sans font-black select-none tracking-[-0.04em]"
              style={{ lineHeight: 0.72 }}
            >
              <motion.span variants={line} className="block whitespace-nowrap text-[clamp(28px,8.5vw,82px)] text-[#111111]">
                About
              </motion.span>
              {/* Visible Silver (#A3A3A3) */}
              <motion.span variants={line} className="block whitespace-nowrap text-[clamp(28px,8.5vw,82px)] text-[#A3A3A3]">
                Phelzink
              </motion.span>
              <motion.span variants={line} className="block whitespace-nowrap text-[clamp(28px,8.5vw,82px)] text-[#111111]">
                Production
              </motion.span>
            </motion.h2>

            {/* ── MOBILE VISUAL UNIT (Hero Scale, Z-10) ── */}
            <div className="lg:hidden relative w-full h-[45vh] min-h-[380px] mt-10 mb-10 pointer-events-none">
              
              {/* CSS HALO: Infinite atmospheric bleed, zero porthole */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square bg-[radial-gradient(circle,rgba(253,232,255,0.85)_0%,rgba(224,231,255,0.5)_40%,rgba(255,255,255,0)_70%)] blur-[60px] z-0 will-change-transform" />
              
              {/* CHARACTER: Height-locked, anchored to bottom, drop-shadow for depth */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease:[0.22, 1, 0.36, 1] as any }}
                className="absolute inset-x-0 bottom-0 h-[95%] z-10"
              >
                <Image 
                  src={CHARACTER} 
                  alt="Phelzink Character" 
                  fill 
                  sizes="100vw" 
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]" 
                  priority 
                />
              </motion.div>
            </div>

            {/* ── STORY COPY (Protected Zone) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mt-0 lg:mt-16 relative z-20"
            >
              <h3 className="font-sans text-[20px] lg:text-[22px] font-extrabold text-[#111111] mb-5 tracking-tight">
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

          {/* ── RIGHT: DESKTOP VISUAL UNIT (Anchor Scale, Z-10) ── */}
          <div className="hidden lg:block relative flex-1 w-full max-w-[600px] h-[650px] pointer-events-none">
            
            {/* CSS HALO: Desktop Bleed */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(253,232,255,0.85)_0%,rgba(224,231,255,0.5)_40%,rgba(255,255,255,0)_70%)] blur-[80px] z-0 will-change-transform" />
            
            {/* CHARACTER: Desktop Anchor */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, delay: 0.18, ease:[0.22, 1, 0.36, 1] as any }}
              className="absolute inset-x-0 bottom-0 h-[95%] z-10"
            >
              <Image 
                src={CHARACTER} 
                alt="Phelzink Character" 
                fill 
                sizes="50vw" 
                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]" 
                priority 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
