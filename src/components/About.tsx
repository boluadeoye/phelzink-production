"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="w-full order-2 md:order-1">
            <h2 className="text-[48px] lg:text-[72px] font-black text-ink leading-[0.9] tracking-tighter font-sans">
              About <br /> Phelzink <br /> Production
            </h2>
            
            <div className="mt-10">
              <h3 className="text-2xl font-black text-ink mb-4 font-sans">Our story</h3>
              <div className="space-y-6 text-[16px] text-ink/70 leading-relaxed max-w-lg font-sans font-medium">
                <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
                <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries.</p>
                <p>Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations.</p>
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-center items-center order-1 md:order-2">
            <div className="absolute inset-0 w-[180%] h-[180%] left-[-40%] top-[-40%] bg-[radial-gradient(circle_at_center,_#FCE4EC_0%,_#E8F0FE_40%,_transparent_70%)] rounded-full blur-[120px] opacity-90 z-0 pointer-events-none" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square max-w-[550px] z-10"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750688/blog_assets/eilcssvq0vzz9szlxnuj.jpg" 
                alt="About Phelzink" 
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
