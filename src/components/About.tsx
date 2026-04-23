"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="w-full order-2 md:order-1">
            <h2 className="text-[42px] lg:text-[64px] font-black text-ink leading-[0.95] tracking-tighter font-sans">
              About <br /> Phelzink <br /> Production
            </h2>
            
            <div className="mt-6">
              <h3 className="text-xl font-black text-ink mb-3 font-sans">Our story</h3>
              <div className="space-y-5 text-[15px] text-ink/70 leading-relaxed max-w-lg font-sans">
                <p>Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.</p>
                <p>Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries.</p>
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-center items-center order-1 md:order-2">
            <div className="absolute inset-0 w-[160%] h-[160%] left-[-30%] top-[-30%] bg-[radial-gradient(circle_at_center,_#FCE4EC_0%,_#E8F0FE_40%,_transparent_70%)] rounded-full blur-[100px] opacity-90 z-0" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square max-w-[500px] z-10"
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
