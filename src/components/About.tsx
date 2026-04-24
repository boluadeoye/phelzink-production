'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

const HALO =
  'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png'
const CHARACTER =
  'https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png'

const easeStd = [0.16, 1, 0.3, 1] as any

const containerV: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeStd },
  },
}

const haloV: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  show: {
    opacity: 1,
    scale: 1.65,
    transition: { duration: 0.9, ease: easeStd, delay: 0.05 },
  },
}

const charV: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeStd, delay: 0.12 },
  },
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-4 py-12 sm:px-6 md:py-20"
      style={{
        fontFamily:
          'Montserrat, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      {/* 12-column grid activates strictly at md */}
      <div className="mx-auto max-w-[1200px] md:grid md:grid-cols-12 md:gap-x-[96px]">
        {/* Visual Anchor: Hero on mobile, contained on desktop */}
        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="relative order-1 mb-10 w-full md:order-2 md:col-span-5 md:col-start-8 md:mb-0 md:justify-self-end"
        >
          <div
            className="relative mx-auto h-[50vh] min-h-[340px] w-full overflow-hidden rounded-none md:h-[650px] md:w-[520px] md:max-w-[520px]"
            aria-hidden
          >
            {/* HALO — oversized and off-center so the inner hole is never visible */}
            <motion.img
              variants={haloV}
              src={HALO}
              alt=""
              className="
                pointer-events-none absolute -left-[46%] -top-[44%] z-0
                h-[220%] w-[220%] select-none object-contain opacity-90
                blur-[1px] md:opacity-95
              "
              style={{
                filter:
                  'saturate(112%) brightness(100%) contrast(102%) drop-shadow(0 0 40px rgba(255,255,255,0.35))',
              }}
            />
            {/* CHARACTER — sits above halo, anchored to bottom for presence */}
            <motion.img
              variants={charV}
              src={CHARACTER}
              alt="Phelzink Production character"
              className="
                absolute inset-x-0 bottom-0 z-10 mx-auto h-[78%] w-auto
                md:h-full md:max-h-[650px] object-contain
                drop-shadow-[0_22px_60px_rgba(0,0,0,0.35)]
              "
            />
          </div>
        </motion.div>

        {/* Editorial Pillar: locked 440px on desktop with wide gap to visual */}
        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="order-2 md:order-1 md:col-span-6 md:col-start-1"
        >
          <div className="md:w-[440px] md:max-w-[440px]">
            <h1
              className="
                font-black leading-[0.72] tracking-[-0.01em] text-neutral-900
                [text-wrap:balance]
              "
            >
              <span className="block text-[clamp(28px,6.3vw,54px)]">About</span>
              <span className="block text-[clamp(28px,6.3vw,54px)] text-[#949494]">
                Phelzink
              </span>
              {/* Mobile No-Wrap lock: 9.2vw ensures 'Production' stays on one line at ~390px */}
              <span className="block whitespace-nowrap text-[9.2vw] md:text-[54px]">
                Production
              </span>
            </h1>

            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold text-neutral-700">Our story</h2>
              <div className="space-y-5 text-[15.5px] leading-7 text-neutral-800 md:leading-7">
                <p>
                  Founded in 2021, Phelzink Production began with a simple mission: to help
                  businesses create compelling brand identities through exceptional design
                  and high‑quality printing.
                </p>
                <p>
                  Over the past 6 years, we've grown into a comprehensive branding and
                  print agency, serving hundreds of clients across diverse industries. Our
                  success is built on a foundation of creativity, quality, and unwavering
                  commitment to our clients' vision.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with cutting‑edge technology
                  to deliver print and design solutions that not only meet but exceed
                  expectations. Every project we undertake is an opportunity to showcase
                  our passion for excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
