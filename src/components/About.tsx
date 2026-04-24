'use client';

import { motion, Variants } from 'framer-motion';

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
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-20 py-16 lg:py-28">

        {/* ════════════════════════════════
            OUTER FLEX: text pillar | visual panel
        ════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">

          {/* ── TEXT PILLAR ─────────────────────────── */}
          <div className="relative z-20 w-full lg:w-[440px] lg:flex-none">

            {/* HEADING — Compositor Logic:
                lineHeight 0.72 forces the absolute visual crush.
                clamp() ensures proportional scaling on mobile without wrapping. */}
            <motion.h2
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="font-montserrat font-black select-none tracking-[-0.04em]"
              style={{ lineHeight: 0.72 }}
              aria-label="About Phelzink Production"
            >
              <motion.span
                variants={line}
                className="block whitespace-nowrap text-[clamp(42px,11vw,88px)] text-neutral-950"
              >
                About
              </motion.span>

              {/* "Phelzink" — Visible Silver Lock (#BDBDBD) */}
              <motion.span
                variants={line}
                className="block whitespace-nowrap text-[clamp(42px,11vw,88px)]"
                style={{ color: '#BDBDBD' }}
              >
                Phelzink
              </motion.span>

              <motion.span
                variants={line}
                className="block whitespace-nowrap text-[clamp(42px,11vw,88px)] text-neutral-950"
              >
                Production
              </motion.span>
            </motion.h2>

            {/* ── MOBILE-ONLY: Visual Panel (Hero Scale) ──
                h-[50vh] makes the image massive on mobile. */}
            <div
              className="lg:hidden relative w-full mt-10 mb-12"
              style={{ height: '50vh', minHeight: '400px' }}
            >
              {/* HALO — Atmospheric Bleed:
                  Scaled to 160% and shifted right to kill the porthole. */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: '160%',
                  height: '160%',
                  top: '-20%',
                  right: '-40%',
                  zIndex: 1,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={HALO} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>

              {/* CHARACTER — Anchored to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease:[0.22, 1, 0.36, 1] as any }}
                className="absolute inset-x-0 bottom-0 h-[95%]"
                style={{ zIndex: 2 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CHARACTER} alt="Phelzink mascot" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }} />
              </motion.div>
            </div>
            {/* END MOBILE VISUAL PANEL */}

            {/* ── STORY COPY ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mt-0 lg:mt-16"
            >
              <p
                className="font-montserrat font-semibold text-[11.5px] lg:text-[12.5px] tracking-[0.22em] uppercase mb-5"
                style={{ color: '#B8860B' }}
              >
                Our Story
              </p>

              <div
                className="font-montserrat font-medium text-[14px] lg:text-[15px] leading-[1.78] space-y-5 max-w-[420px]"
                style={{ color: '#3C3C3C' }}
              >
                <p>
                  Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.
                </p>
                <p>
                  Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.
                </p>
              </div>
            </motion.div>

          </div>
          {/* END TEXT PILLAR */}

          {/* ── DESKTOP-ONLY: Right Visual Panel (Capped Anchor) ───────────────
              w-[520px] hard-caps the width. It no longer stretches to fill the screen. */}
          <div
            className="hidden lg:block relative lg:flex-none w-[520px]"
            style={{ height: '650px' }}
          >
            {/* HALO atmospheric bleed — desktop */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '850px',
                height: '850px',
                top: '-100px',
                right: '-200px',
                zIndex: 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={HALO} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* CHARACTER — desktop */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, delay: 0.18, ease:[0.22, 1, 0.36, 1] as any }}
              className="absolute inset-0"
              style={{ zIndex: 2 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CHARACTER} alt="Phelzink mascot" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }} />
            </motion.div>
          </div>
          {/* END DESKTOP VISUAL PANEL */}

        </div>
      </div>
    </section>
  );
}
