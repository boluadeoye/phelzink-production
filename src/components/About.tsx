"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Header - Always Top on Mobile */}
          <div className="w-full lg:hidden">
            <h2 className="text-[40px] font-bold text-ink leading-[1.1] tracking-tight mb-2">
              About <br /> Phelzink Production
            </h2>
          </div>

          {/* Right: 3D Asset with Precision Halo (Order 1 on Mobile) */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
            {/* The Figma Radial Halo */}
            <div className="absolute w-[110%] aspect-square bg-[radial-gradient(circle,_#F5E6E8_0%,_transparent_70%)] rounded-full blur-2xl opacity-60" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square max-w-[450px]"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688520/blog_assets/kqc1tf2qvv63wacls3be.png"
                alt="Creative Professional"
                fill
                className="object-contain z-10"
              />
            </motion.div>
          </div>

          {/* Left: Content (Order 2 on Mobile) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="hidden lg:block text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-12">
              About <br /> Phelzink Production
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-ink mb-4">Our story</h3>
                <div className="space-y-6 text-[15px] text-ink/70 leading-relaxed max-w-xl">
                  <p>
                    Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.
                  </p>
                  <p>
                    Over the past 6 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.
                  </p>
                  <p>
                    Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations. Every project we undertake is an opportunity to showcase our passion for excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
