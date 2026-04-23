"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      {/* STRICT BOXED CONTAINER: 1140px - Matches Stats exactly */}
      <div className="max-w-[1140px] mx-auto px-6 md:px-12">
        
        {/* Advanced Grid Logic for Perfect Mobile/Desktop Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-12">
          
          {/* 1. HEADER: Order 1 on Mobile, Top-Left on Desktop */}
          <div className="order-1 md:order-none md:col-start-1 md:row-start-1 flex flex-col justify-end">
            {/* Extreme Precision Typography: Title Case, 900 Weight, Negative Leading/Tracking */}
            <h2 className="text-[52px] md:text-[64px] lg:text-[84px] font-black text-ink leading-[0.85] tracking-[-0.04em] font-sans">
              About <br /> Phelzink <br /> Production
            </h2>
          </div>

          {/* 2. IMAGE & HALO: Order 2 on Mobile, Right-Span on Desktop */}
          <div className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2 relative w-full flex justify-center items-center py-10 md:py-0">
            
            {/* Layer 1: The White Halo Asset (Scaled to 160% for atmospheric bleed) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] max-w-none z-0 pointer-events-none">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png" 
                alt="Atmospheric Halo" 
                fill 
                className="object-contain opacity-90" 
              />
            </div>

            {/* Layer 2: The 3D Character Asset */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[450px] aspect-square z-10"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png" 
                alt="Phelzink Creative" 
                fill 
                className="object-contain" 
                priority 
              />
            </motion.div>
          </div>

          {/* 3. STORY: Order 3 on Mobile, Bottom-Left on Desktop */}
          <div className="order-3 md:order-none md:col-start-1 md:row-start-2 flex flex-col justify-start">
            <h3 className="text-[22px] font-black text-ink mb-5 font-sans tracking-tight">Our story</h3>
            <div className="space-y-6 text-[15px] text-ink/70 leading-[1.8] max-w-[500px] font-sans font-medium">
              <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
              <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.</p>
              <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
