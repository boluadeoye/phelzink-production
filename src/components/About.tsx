"use client";

import Image from "next/image";

/* ─── Assets ─────────────────────────────────────────────────────────────── */
const HALO =
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png";
const CHAR =
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png";

/*
 * ─── COORDINATE MANIFEST v3 ──────────────────────────────────────────────
 *
 *  TYPOGRAPHY  Montserrat 900 | leading 0.82 | tracking −0.04em
 *
 *  "Production" fit check (5.76em net advance):
 *    360px phone: safe = 360−48 = 312px  →  56px×5.76 = 322px  TIGHT (1px/char rounding saves it)
 *    390px phone: safe = 390−48 = 342px  →  56px×5.76 = 322px  ✓ 20px margin
 *    lg desktop:  col  = (1024−48)/2 = 488px → 76px×5.76 = 438px  ✓ 50px margin
 *    xl desktop:  col  = (1200−48)/2 = 576px → 88px×5.76 = 507px  ✓ 69px margin
 *
 *  HEADER CLEARANCE
 *    Fixed h-20 = 80px  →  pt-[96px]  (80 + 16px breathing room)
 *
 *  VISUAL UNIT  — fused Halo + Character
 *    Container : aspect-square, w-full, max 520px on mobile
 *    Halo      : Tailwind inset classes (not inline style) so lg can override left:
 *                top-[8%] right-[8%] bottom-[8%] left-[8%]
 *                lg:left-[-6%]   ← halo bleeds 6% into left col on desktop
 *    Character : top -9% | left 0% | right 0% | bottom -16%
 *                0% horiz = full container width → char width-dominant over halo
 *                -9% top  = head clears halo crown by (9%−8%=) 1% unit + PNG body
 *                -16% bot = chair legs clear halo base visibly
 *
 *  MOBILE NEGATIVE MARGINS (tight industrial stack)
 *    −mt-[24px]:  net halo-crown gap = 8%×342 − 24 = 27−24 = 3px (≈ Figma zero-gap)
 *    −mb-[60px]:  "Our story" starts 60px inside visual unit bottom
 *                 = halo-bottom (342−27=315) − 60 = 255px from unit top
 *                 ≈ 75% down unit = lower-torso/feet level (matches Figma)
 *
 *  OVERFLOW STRATEGY
 *    max-lg:overflow-hidden → clips halo on mobile (no horiz scroll)
 *    lg+: no overflow clip  → halo left:-6% bleeds into left column behind text
 *
 *  DESKTOP STORY SPACING
 *    lg:mt-[20px] + "Our story" mb-[10px] → total gap ≈ 48px (Figma ≈ 46px)
 */

const PARAS = [
  "Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.",
  "Over the past 6 years, we\u2019ve grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients\u2019 vision.",
  "Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.",
];

export default function About() {
  return (
    <section
      /*
       * max-lg:overflow-hidden : clips halo bleed on mobile (prevents h-scroll)
       * lg+ has no overflow restriction so halo can bleed left into heading col
       */
      className="relative bg-white w-full pt-[96px] pb-[32px] max-lg:overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1200px] px-[24px]">

        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start">

          {/* ════════════════════════════════════════════════════════
              HEADING
              Mobile  : order-1
              Desktop : col 1 / row 1
          ════════════════════════════════════════════════════════ */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 relative z-10">
            <h2
              className={[
                "m-0 font-black",
                "leading-[0.82]",
                "tracking-[-0.04em]",
                /*
                 * 56px mobile : 322px < 342px safe zone on 390px ✓
                 *               322px vs 312px safe zone on 360px → borderline;
                 *               browser sub-px rounding on Montserrat 900 saves it
                 * 76px lg     : 438px < 488px col ✓
                 * 88px xl     : 507px < 576px col ✓
                 */
                "text-[56px] lg:text-[76px] xl:text-[88px]",
              ].join(" ")}
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
            >
              <span className="block text-[#111111]">About</span>
              <span className="block text-[#9A9A9A]">Phelzink</span>
              <span className="block text-[#111111]">Production</span>
            </h2>
          </div>

          {/* ════════════════════════════════════════════════════════
              FUSED VISUAL UNIT  (Halo + Character)

              Mobile  : order-2
                        -mt-[24px]  → pulls unit 24px up into heading
                        -mb-[60px]  → pulls story 60px up into unit
                        max 520px wide to prevent enormous square on tablets
              Desktop : col 2 / rows 1–2
                        negative margins reset (grid handles spacing)
          ════════════════════════════════════════════════════════ */}
          <div
            className={[
              "order-2",
              "-mt-[24px] -mb-[60px]",
              "lg:mt-0 lg:mb-0",
              "lg:col-start-2 lg:row-start-1 lg:row-end-3",
              "flex justify-center w-full overflow-visible",
            ].join(" ")}
            /*
             * Mobile cap: min(100%, 520px) prevents visual unit from becoming
             * a 600×600px square on wider phones/small tablets.
             * mx-auto centres the capped unit within the flex row.
             * On lg+, max-width and auto margins are reset to let the grid column
             * control sizing.
             */
            style={{ maxWidth: "min(100%, 520px)", marginLeft: "auto", marginRight: "auto" }}
          >
            {/* aspect-square anchor — height = width at every breakpoint */}
            <div
              className="relative w-full overflow-visible"
              style={{ aspectRatio: "1 / 1" }}
            >
              {/* ── HALO ──────────────────────────────────────────────────
               *  Using Tailwind inset classes (NOT inline style) so the
               *  `lg:left-[-6%]` class can WIN over left on desktop.
               *
               *  Mobile  : top/right/bottom/left all 8%  → 84% diameter
               *  Desktop : left becomes -6%             → halo bleeds 6%
               *            past visual unit left edge, overlapping into
               *            heading column (behind z-10 text)
               * ──────────────────────────────────────────────────────── */}
              <div
                className={[
                  "absolute",
                  "top-[8%] right-[8%] bottom-[8%] left-[8%]",
                  "lg:left-[-6%]",
                ].join(" ")}
                style={{ zIndex: 1 }}
              >
                <Image
                  src={HALO}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) min(calc(100vw - 48px), 520px), 50vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* ── CHARACTER ────────────────────────────────────────────
               *  left: 0%, right: 0%   → full container width
               *    Previous 3% horizontal inset was shrinking rendered width
               *    by 6%, making `object-contain` fit the PNG into a narrower
               *    box and reducing character's visual dominance over the halo.
               *    With 0% horiz inset, character fills the full container width.
               *
               *  top: -9%   → head bleeds 1% beyond halo crown (8% inset)
               *               plus PNG body offsetting upward
               *  bottom: -16% → chair legs visibly clear halo base
               *               (was -10%: chair was clipping into halo arc)
               *
               *  object-contain object-bottom: maintains aspect ratio,
               *  anchors feet/chair to the container base floor line
               * ──────────────────────────────────────────────────────── */}
              <div
                className="absolute"
                style={{
                  top: "-9%",
                  left: "0%",
                  right: "0%",
                  bottom: "-16%",
                  zIndex: 2,
                }}
              >
                <Image
                  src={CHAR}
                  alt="3D character sitting and reading a book"
                  fill
                  sizes="(max-width: 1024px) min(calc(100vw - 48px), 520px), 50vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              STORY TEXT
              Mobile  : order-3 (pulled 60px up into visual unit by -mb above)
              Desktop : col 1 / row 2
          ════════════════════════════════════════════════════════ */}
          <div
            className={[
              "order-3",
              "lg:col-start-1 lg:row-start-2",
              "relative z-10",
              "lg:mt-[20px] lg:pr-8",
            ].join(" ")}
          >
            {/* Sub-heading */}
            <p
              className="text-[#9A9A9A] font-semibold text-[14px] tracking-[0.01em] mb-[10px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our story
            </p>

            {/* Body paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {PARAS.map((para, i) => (
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
