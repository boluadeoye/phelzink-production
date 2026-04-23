"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      {/* STRICT BOXED CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* ASYMMETRIC GRID ARCHITECTURE */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-x-16 gap-y-10 lg:gap-y-16 items-start">
          
          {/* CELL 1: HEADER (Top Left on Desktop, Top on Mobile) */}
          <div className="w-full order-1 md:col-span-1">
            <h2 className="text-[48px] lg:text-[72px] font-black text-ink leading-[0.85] tracking-[-0.04em] font-sans">
              About <br /> Phelzink <br /> Production
            </h2>
          </div>

          {/* CELL 2: IMAGE & HALO (Right Side spanning 2 rows on Desktop, Middle on Mobile) */}
          <div className="relative w-full aspect-square flex justify-center items-center order-2 md:row-span-2 md:col-start-2 md:row-start-1">
            {/* The White Halo Asset */}
            <div className="absolute inset-0 w-[150%] h-[150%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776945729/blog_assets/t364epis7o6rntpm59ir.png" 
                alt="" 
                fill 
                className="object-contain opacity-90" 
              />
            </div>

            {/* The 3D Character Asset */}
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

          {/* CELL 3: STORY CONTENT (Bottom Left on Desktop, Bottom on Mobile) */}
          <div className="w-full order-3 md:col-span-1 md:col-start-1 md:row-start-2">
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
