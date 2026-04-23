"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      {/* STRICT BOXED CONTAINER - Matches Stats exactly */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="w-full order-2 md:order-1">
            {/* Extreme Precision Typography: 900 Weight, Negative Leading, Negative Tracking */}
            <h2 className="text-[52px] lg:text-[72px] font-black text-ink leading-[0.9] tracking-[-0.04em] font-sans">
              About <br /> Phelzink <br /> Production
            </h2>
            
            {/* Precise Proximity Gap */}
            <div className="mt-12">
              <h3 className="text-[22px] font-black text-ink mb-5 font-sans tracking-tight">Our story</h3>
              <div className="space-y-6 text-[15px] text-ink/70 leading-[1.8] max-w-[500px] font-sans font-medium">
                <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
                <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.</p>
                <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.</p>
              </div>
            </div>
          </div>

          {/* Right: Asset-Based Layering */}
          <div className="relative w-full aspect-square flex justify-center items-center order-1 md:order-2">
            
            {/* Layer 1: The Light Halo Asset (Scaled up to bleed behind) */}
            <div className="absolute inset-0 w-[150%] h-[150%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943907/blog_assets/fr1kwd93uikjsmjlbo8e.jpg" 
                alt="Atmospheric Halo" 
                fill 
                className="object-contain mix-blend-multiply opacity-90" 
              />
            </div>

            {/* Layer 2: The 3D Character Asset */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
              className="relative w-[90%] h-[90%] z-10"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776943913/blog_assets/ni5m5fhlyjmtbhd09q2n.jpg" 
                alt="Phelzink Creative" 
                fill 
                className="object-contain mix-blend-multiply" 
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
