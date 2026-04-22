"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Printer, Box } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-6 font-sans tracking-tight">Our Core Services</h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg font-sans">
            Comprehensive design and print solutions tailored to elevate your brand.
          </p>
        </div>

        {/* Forced side-by-side on md: screens */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-[#F3F4F6]"
          >
            <Image 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png"
              alt="Luxury Packaging"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Cards */}
          <div className="space-y-6">
            {[
              { icon: <Palette size={24} />, title: "Designs", desc: "We create visually compelling and strategic designs that communicate your brand message clearly across digital and print platforms." },
              { icon: <Printer size={24} />, title: "Branding & Print Services", desc: "From brand identity development to high quality print production, we ensure consistency and excellence in every detail of your brand materials." },
              { icon: <Box size={24} />, title: "Fabrication", desc: "Stand out on the shelf with innovative packaging designs that capture attention and communicate value." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-ink/10 hover:border-emerald/30 hover:shadow-xl transition-all bg-white group"
              >
                <div className="w-14 h-14 bg-ink rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-emerald transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-3 font-sans">{service.title}</h3>
                <p className="text-ink/60 text-[15px] leading-relaxed font-sans">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
