'use client';

import { motion } from 'framer-motion';

const HALO =
  'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png';
const CHARACTER =
  'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png';

// ⚠️  REPLACE with the exact hex from your Figma "Our Story" label token:
const STORY_LABEL_HEX = '#C49A3C';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function About() {
  return (
    <section className="relative w-full bg-white" style={{ overflowX: 'hidden' }}>

      {/*
        ══════════════════════════════════════════════════════════════════
        LAYOUT ENGINE — CSS Grid with named areas.
        This is the ONLY way to achieve:
          mobile:  heading → visual → story  (DOM flow order)
          desktop: [heading] [visual spanning 2 rows]
                   [story  ] [visual            ...  ]
        without duplicating DOM nodes or fighting Flexbox.
        ══════════════════════════════════════════════════════════════════
      */}
      <style>{`
        .pa-grid {
          display: grid;
          grid-template-areas: "heading" "visual" "story";
          grid-template-columns: 1fr;
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 4.5rem;
        }
        @media (min-width: 1024px) {
          .pa-grid {
            grid-template-areas: "heading visual" "story visual";
            grid-template-columns: 440px 1fr;
            grid-template-rows: auto 1fr;
            min-height: 640px;
            padding: 6.5rem 5rem 6.5rem;
          }
        }

        /* Named area assignments */
        .pa-heading { grid-area: heading; position: relative; z-index: 20; }
        .pa-story   { grid-area: story;   position: relative; z-index: 20; }
        .pa-visual  { grid-area: visual;  position: relative; overflow: visible; }

        /* Visual panel: fixed height mobile, auto desktop (grid rows fill it) */
        .pa-visual { height: 300px; }
        @media (min-width: 1024px) { .pa-visual { height: auto; } }

        /* Story spacing:
           Mobile → 64px breath between character feet and label.
           Desktop → 48px natural gap below heading. */
        .pa-story { margin-top: 64px; }
        @media (min-width: 1024px) {
          .pa-story { margin-top: 48px; align-self: start; padding-bottom: 48px; }
        }

        /*
          HALO — atmospheric bleed math:
          Mobile 390px viewport, halo 500px wide, right: -240px
            → center_x = 390 + 240 − 250 = 380px ≈ right edge of viewport
            → ring hole is at 380px; only left-arc glow is visible. Porthole = gone.
          Desktop: 900px halo, right: -400px
            → center pushed well off-canvas right; outer gradient bleeds left into frame.
        */
        .pa-halo {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          width: 500px;
          height: 500px;
          top: -60px;
          right: -240px;
        }
        @media (min-width: 1024px) {
          .pa-halo {
            width: 900px;
            height: 900px;
            top: -150px;
            right: -400px;
          }
        }

        /* CHARACTER — sits above halo, anchored to bottom of visual area */
        .pa-character {
          position: absolute;
          z-index: 2;
          width: 285px;
          height: 285px;
          bottom: 0;
          right: -6px;
        }
        @media (min-width: 1024px) {
          .pa-character {
            width: 558px;
            height: 600px;
            bottom: -20px;
            right: -60px;
          }
        }
      `}</style>

      <div className="pa-grid">

        {/* ── HEADING ─────────────────────────────────────────────────────── */}
        <motion.div
          className="pa-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          <h2
            className="font-montserrat font-black select-none"
            style={{ lineHeight: 0.82 }}
            aria-label="About Phelzink Production"
          >
            {/*
              "About" — near-black
              56px mobile: safe across 342px content column.
              whitespace-nowrap is the hard backstop against wrap.
            */}
            <motion.span
              variants={fadeUp}
              className="block whitespace-nowrap text-[56px] lg:text-[88px] text-[#0D0D0D]"
            >
              About
            </motion.span>

            {/*
              "Phelzink" — silver #E5E7EB.
              At weight 900, stroke mass is sufficient to read on white.
              z-index inherited from pa-heading (z-20) keeps it above halo glow.
            */}
            <motion.span
              variants={fadeUp}
              className="block whitespace-nowrap text-[56px] lg:text-[88px]"
              style={{ color: '#E5E7EB' }}
            >
              Phelzink
            </motion.span>

            {/*
              "Production" — near-black.
              Montserrat 900 at 56px → approx 326px rendered width.
              342px available (390px − 2×24px padding). Fits with ~16px margin.
            */}
            <motion.span
              variants={fadeUp}
              className="block whitespace-nowrap text-[56px] lg:text-[88px] text-[#0D0D0D]"
            >
              Production
            </motion.span>
          </h2>
        </motion.div>

        {/* ── VISUAL PANEL ────────────────────────────────────────────────── */}
        <div className="pa-visual">
          {/* Halo — atmospheric bleed (see math in CSS above) */}
          <div className="pa-halo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HALO}
              alt=""
              aria-hidden="true"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Character — above halo, anchored bottom */}
          <motion.div
            className="pa-character"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CHARACTER}
              alt="Phelzink mascot reading"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom center',
              }}
            />
          </motion.div>
        </div>

        {/* ── STORY ───────────────────────────────────────────────────────── */}
        <motion.div
          className="pa-story"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          {/*
            ⚠️  COLOR: Replace STORY_LABEL_HEX at the top of the file with your
            actual Figma token. Also verify: Figma uses title-case "Our Story",
            NOT uppercase — tracking is moderate, no text-transform.
          */}
          <p
            className="font-montserrat font-semibold text-[11.5px] lg:text-[12px] tracking-[0.12em] mb-5"
            style={{ color: STORY_LABEL_HEX }}
          >
            Our Story
          </p>

          <div
            className="font-montserrat font-light text-[13.5px] lg:text-[14px] leading-[1.78] space-y-4 lg:max-w-[420px]"
            style={{ color: '#3C3C3C' }}
          >
            <p>
              Founded in 2021, Phelzink Production began with a simple mission: to help
              businesses create compelling brand identities through exceptional design and
              high-quality printing.
            </p>
            <p>
              Over the past 6&nbsp;years, we've grown into a comprehensive branding and
              print agency, serving hundreds of clients across diverse industries. Our
              success is built on a foundation of creativity, quality, and unwavering
              commitment to our clients&apos; vision.
            </p>
            <p>
              Today, we combine traditional craftsmanship with cutting-edge technology to
              deliver print and design solutions that not only meet but exceed expectations.
              Every project we undertake is an opportunity to showcase our passion for
              excellence and innovation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
