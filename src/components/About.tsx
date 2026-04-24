"use client";

import Image from "next/image";

/* ─── Asset URLs ─────────────────────────────────────────────────────────── */
const HALO =
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png";
const CHAR =
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png";

/*
 * ─── COORDINATE MANIFEST ─────────────────────────────────────────────────
 *
 *  TYPOGRAPHY (Montserrat 900, all breakpoints)
 *    leading : 0.82  (line-height < 0.8em → "crushed" industrial stack)
 *    tracking: -0.04em
 *    mobile  : 56px  → "Production" renders ≈ 294px (342px safe zone, 48px margin)
 *    desktop : 76px  → proportional to Figma master at 1200px canvas
 *
 *  HEADER CLEARANCE
 *    h-20 fixed header = 80px → pt-[96px] (80 + 16px breathing)
 *    desktop           → pt-[104px] (80 + 24px)
 *
 *  VISUAL UNIT (Fused Halo + Character)
 *    container : aspect-square, w-full, position relative
 *    halo      : inset 8% → occupies 84% of unit → sits BEHIND torso
 *    character : top -6%, bottom -10%, horizontal 3% → 116% tall vs halo
 *                object-bottom anchors feet to floor, head bleeds above halo
 *
 *  NEGATIVE MOBILE MARGINS (tight industrial aesthetic)
 *    visual unit : -mt-[12px] -mb-[32px]
 *    story block : naturally pulled up by visual unit's negative mb
 *
 *  GRID ARCHITECTURE
 *    mobile  → flex-col + CSS `order` : [Heading] → [Visual] → [Story]
 *    desktop → 12-col CSS Grid, explicit row/col placement:
 *              Heading : col 1–6 / row 1
 *              Visual  : col 7–12 / row 1–2  (spans full text height)
 *              Story   : col 1–6 / row 2
 *
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  PREREQUISITE: Montserrat (weights 300–900) must be loaded in layout.tsx:
 *    import { Montserrat } from "next/font/google";
 *    const mont = Montserrat({ subsets: ["latin"], weight: ["300","400","600","900"] });
 *    <body className={mont.className}>
 */

export default function About() {
  return (
    <section
      className="relative w-full bg-white overflow-x-hidden"
      /* pt clears fixed h-20 (80px) header + breathing room */
      style={{ paddingTop: "96px", paddingBottom: "80px" }}
    >
      {/* ── Max-width shell ─────────────────────────────────────────────── */}
      <div
        className="mx-auto w-full max-w-[1200px]"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        {/*
         * ── LAYOUT ENGINE ────────────────────────────────────────────────
         * Default : flex-col (mobile) — CSS `order` controls visual sequence
         * md+     : 12-col CSS Grid — explicit row/col placement overrides order
         */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:items-center">

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 1 · HEADING
              Mobile  : order-1  → stacks on top
              Desktop : col 1–6 / row 1  (z-10 keeps it above halo bleed)
          ══════════════════════════════════════════════════════════════ */}
          <div
            className={[
              "order-1",
              "md:col-start-1 md:col-end-7",
              "md:row-start-1 md:row-end-2",
              "relative z-10",
              "md:pr-8",
            ].join(" ")}
          >
            <h2
              /* leading-[0.82] = "crushed" stacking, tracking-[-0.04em] */
              className="font-black tracking-[-0.04em] leading-[0.82]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
            >
              {/* 56px mobile (fits 342px safe-zone) → 76px desktop */}
              <span className="block text-[56px] md:text-[76px] text-[#111111]">
                About
              </span>
              <span className="block text-[56px] md:text-[76px] text-[#9A9A9A]">
                Phelzink
              </span>
              <span className="block text-[56px] md:text-[76px] text-[#111111]">
                Production
              </span>
            </h2>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 2 · FUSED VISUAL UNIT  (Halo + Character)
              Mobile  : order-2 + -mt-[12px] -mb-[32px] → tight stack
              Desktop : col 7–12 / row 1–2 → spans full left-col height
                        Halo's 84% diameter naturally bleeds toward col 6
          ══════════════════════════════════════════════════════════════ */}
          <div
            className={[
              "order-2",
              /* Mobile negative margins → industrial tightness */
              "-mt-[12px] -mb-[32px]",
              /* Reset on desktop — grid handles spacing */
              "md:mt-0 md:mb-0",
              "md:col-start-7 md:col-end-13",
              "md:row-start-1 md:row-end-3",
              "flex justify-center items-center",
              /* Allow character bleed past container bounds */
              "overflow-visible",
            ].join(" ")}
          >
            {/*
             * ASPECT-SQUARE ANCHOR
             * aspect-ratio: 1/1 → height auto-matches width at every breakpoint.
             * All children absolutely positioned within this space.
             */}
            <div
              className="relative w-full overflow-visible"
              style={{ aspectRatio: "1 / 1" }}
            >
              {/* ── HALO ────────────────────────────────────────────────
               *  inset: 8%  → rendered diameter = 84% of container
               *  z-index: 1 → sits BEHIND character
               *  Dead-space in PNG is neutralised by object-contain
               * ──────────────────────────────────────────────────────── */}
              <div
                className="absolute"
                style={{ inset: "8%", zIndex: 1 }}
              >
                <Image
                  src={HALO}
                  alt=""
                  fill
                  sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* ── CHARACTER ───────────────────────────────────────────
               *  top: -6%    → head bleeds 6% ABOVE halo crown
               *  bottom: -10% → feet rest 10% BELOW halo base
               *  left/right: 3% → slight horizontal inset for proportion
               *  Net result: character is ~16% taller than halo
               *  object-bottom → feet anchored to bottom of bounding div,
               *                  character reads as sitting on a surface
               *  z-index: 2 → character overlays halo
               * ──────────────────────────────────────────────────────── */}
              <div
                className="absolute"
                style={{
                  top: "-6%",
                  left: "3%",
                  right: "3%",
                  bottom: "-10%",
                  zIndex: 2,
                }}
              >
                <Image
                  src={CHAR}
                  alt="3D character sitting and reading a book"
                  fill
                  sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BLOCK 3 · STORY TEXT
              Mobile  : order-3 → pulled up by visual unit's -mb-[32px]
              Desktop : col 1–6 / row 2 + mt-[28px] for controlled gap
          ══════════════════════════════════════════════════════════════ */}
          <div
            className={[
              "order-3",
              "md:col-start-1 md:col-end-7",
              "md:row-start-2 md:row-end-3",
              "relative z-10",
              "md:pr-10 md:mt-[28px]",
            ].join(" ")}
          >
            {/* Sub-heading */}
            <p
              className="text-[#9A9A9A] text-[14px] tracking-[0.01em] mb-[16px]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              Our story
            </p>

            {/* Body copy: 13px / 1.68 leading — matches Figma measure */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.",
                "Over the past 6 years, we\u2019ve grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients\u2019 vision.",
                "Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "1.68",
                    color: "#3A3A3A",
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
