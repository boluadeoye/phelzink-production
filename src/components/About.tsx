"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Mobile Header: Bold Sans-serif, Black (Figma Match) */}
          <div className="w-full lg:hidden mb-4">
            <h2 className="text-[36px] font-bold text-ink leading-[1.1] tracking-tight font-sans">
              About <br /> Phelzink Production
            </h2>
          </div>

          {/* Image Section: Correct Left-Facing Asset with Integrated Halo */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square max-w-[500px]"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750688/blog_assets/eilcssvq0vzz9szlxnuj.jpg"
                alt="About Phelzink Production"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Desktop Header: Bold Sans-serif, Black */}
            <h2 className="hidden lg:block text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-12 font-sans">
              About <br /> Phelzink Production
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-ink mb-4 font-sans">Our story</h3>
                <div className="space-y-6 text-[16px] text-ink/70 leading-relaxed max-w-xl font-sans">
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
