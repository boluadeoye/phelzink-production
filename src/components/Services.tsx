"use client";
import React from "react";
import { motion } from "framer-motion";
import { Palette, Printer, Box } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="pt-40 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-6 font-sans tracking-tighter leading-[0.9]">Our Core Services</h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg font-sans">
            Comprehensive design and print solutions tailored to elevate your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Video Frame (Height aligned to cards) */}
          <div className="relative rounded-[32px] overflow-hidden bg-black shadow-2xl min-h-[500px]">
            <iframe 
              src="https://www.youtube.com/embed/pHp8H_00JKc?autoplay=1&mute=1&loop=1&playlist=pHp8H_00JKc&controls=0&modestbranding=1&rel=0&showinfo=0"
              className="absolute inset-0 w-full h-full scale-[1.5]"
              style={{ border: 0 }}
              allow="autoplay; encrypted-media"
            />
            <div className="absolute inset-0 bg-transparent z-10" /> {/* Interaction Shield */}
          </div>

          {/* Right: 3-Card Stack */}
          <div className="flex flex-col gap-6">
            {[
              { icon: <Palette size={24} />, title: "Designs", desc: "We create visually compelling and strategic designs that communicate your brand message clearly across digital and print platforms." },
              { icon: <Printer size={24} />, title: "Branding & Print Services", desc: "From brand identity development to high quality print production, we ensure consistency and excellence in every detail of your brand materials." },
              { icon: <Box size={24} />, title: "Fabrication", desc: "Stand out on the shelf with innovative packaging designs that capture attention and communicate value." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="flex-1 p-8 rounded-[24px] border border-ink/5 hover:border-emerald/30 transition-all bg-white shadow-sm group flex flex-col justify-center"
              >
                <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-emerald transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-ink mb-2 font-sans">{service.title}</h3>
                <p className="text-ink/60 text-[14px] leading-relaxed font-sans">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
