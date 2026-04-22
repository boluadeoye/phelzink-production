"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="w-full order-2 md:order-1">
            {/* 900 Weight, Negative Leading, Tighter Tracking */}
            <h2 className="text-[48px] lg:text-[64px] font-black text-ink leading-[0.95] tracking-tighter font-sans">
              About <br /> Phelzink <br /> Production
            </h2>
            
            {/* Tight Proximity to Header */}
            <div className="mt-4">
              <h3 className="text-2xl font-black text-ink mb-4 font-sans">Our story</h3>
              <div className="space-y-6 text-[15px] text-ink/70 leading-relaxed max-w-lg font-sans font-medium">
                <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
                <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.</p>
                <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.</p>
              </div>
            </div>
          </div>

          {/* Right: 3D Asset with Engineered Atmospheric Halo */}
          <div className="relative w-full flex justify-center items-center order-1 md:order-2">
            {/* Massive, Soft Radial Gradient */}
            <div className="absolute inset-0 w-[200%] h-[200%] left-[-50%] top-[-50%] bg-[radial-gradient(circle_at_center,_#FCE4EC_0%,_#E8F0FE_40%,_transparent_70%)] rounded-full blur-[100px] opacity-80 z-0 pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square max-w-[600px] z-10"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750688/blog_assets/eilcssvq0vzz9szlxnuj.jpg" 
                alt="About Phelzink Production" 
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
