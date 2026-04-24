'use client';

import { motion } from 'framer-motion';

const HALO =
  'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png';
const CHARACTER =
  'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const line = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-20 py-16 lg:py-28">

        {/* ════════════════════════════════
            OUTER FLEX: text pillar | visual panel
        ════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start">

          {/* ── TEXT PILLAR ─────────────────────────── */}
          {/* z-20 locks text ABOVE any halo bleed */}
          <div className="relative z-20 w-full lg:w-[440px] lg:flex-none">

            {/* HEADING — Compositor Logic:
                lineHeight 0.78 forces visual crush.
                Each word is a block to control wrapping individually.
                whitespace-nowrap + fixed px size = no wrap on 342px. */}
            <motion.h2
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="font-montserrat font-black select-none"
              style={{ lineHeight: 0.78 }}
              aria-label="About Phelzink Production"
            >
              {/* "About" — near-black */}
              <motion.span
                variants={line}
                className="block whitespace-nowrap text-[56px] lg:text-[88px] text-neutral-950"
              >
                About
              </motion.span>

              {/* "Phelzink" — Silver Lock:
                  #E5E7EB at weight 900 = enough stroke mass to read on white.
                  z-20 via parent ensures it sits above any halo bleed. */}
              <motion.span
                variants={line}
                className="block whitespace-nowrap text-[56px] lg:text-[88px]"
                style={{ color: '#E5E7EB' }}
              >
                Phelzink
              </motion.span>

              {/* "Production" — hard-pinned.
                  56px × ~5.85em = ~327px ← fits 342px safely.
                  whitespace-nowrap is the nuclear fallback. */}
              <motion.span
                variants={line}
                className="block whitespace-nowrap text-[56px] lg:text-[88px] text-neutral-950"
              >
                Production
              </motion.span>
            </motion.h2>

            {/* ── MOBILE-ONLY: Visual Panel (halo + character) ──
                Inserted INSIDE the text pillar so text can flow
                beneath it with a controlled mt gap. */}
            <div
              className="lg:hidden relative w-full mt-6"
              style={{ height: '320px' }}
            >
              {/* HALO — Atmospheric Bleed:
                  540px container on 390px viewport = 138%.
                  right: -160px + top: -100px shifts the ring's
                  CENTER off-screen right. Only the outer gradient
                  wash bleeds back into frame. Porthole = gone. */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: '540px',
                  height: '540px',
                  top: '-100px',
                  right: '-160px',
                  zIndex: 1,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HALO}
                  alt=""
                  aria-hidden="true"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* CHARACTER — z:2, above halo */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{
                  width: '310px',
                  height: '320px',
                  bottom: 0,
                  right: '-16px',
                  zIndex: 2,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CHARACTER}
                  alt="Phelzink mascot seated reading"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                />
              </motion.div>
            </div>
            {/* END MOBILE VISUAL PANEL */}

            {/* ── STORY COPY ──
                mt-[72px] = strict 72px breath between character
                feet (bottom of the 320px panel) and this heading.
                Foot-Smash = dead. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="mt-[72px] lg:mt-16"
            >
              <p
                className="font-montserrat font-semibold text-[10.5px] lg:text-[11.5px]
                           tracking-[0.22em] uppercase mb-5"
                style={{ color: '#B8860B' }}
              >
                Our Story
              </p>

              <div
                className="font-montserrat font-light text-[13.5px] lg:text-[14px]
                           leading-[1.78] space-y-4 max-w-[420px]"
                style={{ color: '#3C3C3C' }}
              >
                <p>
                  Founded in 2021, Phelzink Production began with a simple mission: to help
                  businesses create compelling brand identities through exceptional design
                  and high-quality printing.
                </p>
                <p>
                  Over the past 6&nbsp;years, we've grown into a comprehensive branding and
                  print agency, serving hundreds of clients across diverse industries. Our
                  success is built on a foundation of creativity, quality, and unwavering
                  commitment to our clients' vision.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with cutting-edge technology
                  to deliver print and design solutions that not only meet but exceed
                  expectations. Every project we undertake is an opportunity to showcase
                  our passion for excellence and innovation.
                </p>
              </div>
            </motion.div>

          </div>
          {/* END TEXT PILLAR */}

          {/* ── DESKTOP-ONLY: Right Visual Panel ───────────────
              flex-1 fills remaining width.
              Halo is 920px (≈160% of ~580px available) pushed
              right: -300px, top: -180px — ring center is off-screen.
              Character anchors to bottom-right. */}
          <div
            className="hidden lg:block relative flex-1"
            style={{ minHeight: '620px' }}
          >
            {/* HALO atmospheric bleed — desktop */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '920px',
                height: '920px',
                top: '-180px',
                right: '-300px',
                zIndex: 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HALO}
                alt=""
                aria-hidden="true"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* CHARACTER — desktop */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{
                width: '560px',
                height: '600px',
                bottom: '-28px',
                right: '-60px',
                zIndex: 2,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CHARACTER}
                alt="Phelzink mascot seated reading"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                }}
              />
            </motion.div>
          </div>
          {/* END DESKTOP VISUAL PANEL */}

        </div>
      </div>
    </section>
  );
}
