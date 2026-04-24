"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-20 lg:pt-32 bg-white overflow-hidden">
      {/* STRICT BOXED CONTAINER: 1280px */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* ASYMMETRIC OVERLAP GRID */}
        <div className="flex flex-col lg:flex-row items-stretch relative">
          
          {/* LEFT: TEXT COLUMN (5/12 Width) */}
          <div className="w-full lg:w-5/12 pb-12 lg:pb-32 z-20 relative">
            
            {/* Precision Typography: 900/700 Weight Split, 0.9 Leading */}
            <h2 className="text-[52px] lg:text-[82px] leading-[0.9] tracking-[-0.04em] font-sans mb-12 lg:mb-16">
              <span className="text-[#111111] font-black block">About</span>
              <span className="text-[#888888] font-bold block">Phelzink <br className="hidden lg:block" /> Production</span>
            </h2>
            
            <div>
              <h3 className="text-[24px] font-black text-ink mb-6 font-sans tracking-tight">Our story</h3>
              <div className="space-y-6 text-[16px] text-ink/70 leading-[1.8] max-w-[480px] font-sans font-medium">
                <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
                <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.</p>
                <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: MASSIVE IMAGE COLUMN (7/12 Width) */}
          <div className="w-full lg:w-7/12 relative min-h-[500px] lg:min-h-[800px] z-10 pointer-events-none mt-10 lg:mt-0">
            
            {/* Layer 1: The Halo (Scaled to 140%, shifted left to bleed behind text) */}
            <div className="absolute top-[5%] lg:top-[15%] left-1/2 lg:left-[-15%] -translate-x-1/2 lg:translate-x-0 w-[140%] lg:w-[140%] aspect-square z-0">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png" 
                alt="Atmosphere" 
                fill 
                className="object-contain opacity-90" 
              />
            </div>

            {/* Layer 2: The 3D Character (Anchored to bottom, scaled to 120%, shifted left) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-1/2 lg:left-[-5%] -translate-x-1/2 lg:translate-x-0 w-[100%] lg:w-[120%] h-[100%] lg:h-[105%] z-10"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943912/blog_assets/q5cvvhba4bavsjqyrxss.png" 
                alt="Phelzink Creative" 
                fill 
                className="object-contain object-bottom" 
                priority 
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
