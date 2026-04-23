"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      {/* STRICT BOXED CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="w-full order-2 md:order-1">
            {/* Responsive Typography to prevent mobile collision */}
            <h2 className="text-[42px] md:text-[56px] lg:text-[72px] font-black text-ink leading-[0.95] tracking-[-0.03em] font-sans mb-8 md:mb-0">
              About <br /> Phelzink <br /> Production
            </h2>
            
            <div className="mt-8 lg:mt-12">
              <h3 className="text-[22px] font-black text-ink mb-4 font-sans tracking-tight">Our story</h3>
              <div className="space-y-6 text-[15px] text-ink/70 leading-[1.8] max-w-[500px] font-sans font-medium">
                <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
                <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.</p>
                <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.</p>
              </div>
            </div>
          </div>

          {/* Right: Asset-Based Layering (Transparent PNGs) */}
          <div className="relative w-full aspect-square flex justify-center items-center order-1 md:order-2 mb-10 md:mb-0">
            
            {/* Layer 1: The White Halo Asset */}
            <div className="absolute inset-0 w-[140%] h-[140%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
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
              className="relative w-[85%] h-[85%] z-10"
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

        </div>
      </div>
    </section>
  );
};

export default About;
