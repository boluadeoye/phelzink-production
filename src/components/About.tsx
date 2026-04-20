"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8 leading-tight">
              About <br />
              <span className="serif-display text-emerald">Phelzink Production</span>
            </h2>
            
            <div className="space-y-6 text-ink/70 leading-relaxed">
              <p className="font-bold text-ink">Our Story</p>
              <p>
                Founded in 2021, Phelzink Production began with a simple mission: to help businesses create compelling brand identities through exceptional design and high-quality printing.
              </p>
              <p>
                Over the past 3 years, we've grown into a comprehensive branding and print agency, serving hundreds of clients across diverse industries. Our success is built on a foundation of creativity, quality, and unwavering commitment to our clients' vision.
              </p>
              <p>
                Today, we combine traditional craftsmanship with cutting-edge technology to deliver print and design solutions that not only meet, but exceed expectations.
              </p>
            </div>
          </motion.div>

          {/* Right: 3D Asset with Radial Halo */}
          <div className="relative flex justify-center items-center">
            {/* The Figma "Halo" Effect */}
            <div className="absolute w-[120%] aspect-square bg-gradient-to-tr from-emerald/20 via-blush/40 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square max-w-[500px]"
            >
              <Image 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688520/blog_assets/kqc1tf2qvv63wacls3be.png"
                alt="Creative Professional 3D"
                fill
                className="object-contain z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
