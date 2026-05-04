"use client";
import React from "react";
import { motion } from "framer-motion";
import { Palette, Printer, Box } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-4 font-sans tracking-tighter leading-[1.0]">Our Core Services</h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-base font-sans">
            Comprehensive design and print solutions tailored to elevate your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="relative rounded-[24px] overflow-hidden bg-black shadow-xl min-h-[450px]">
            <iframe 
              src="https://www.youtube.com/embed/pHp8H_00JKc?autoplay=1&mute=1&loop=1&playlist=pHp8H_00JKc&controls=0&modestbranding=1&rel=0"
              className="absolute inset-0 w-full h-full scale-[1.5]"
              style={{ border: 0 }}
              allow="autoplay; encrypted-media"
            />
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: <Palette size={20} />, title: "Designs", desc: "We create visually compelling and strategic designs that communicate your brand message clearly." },
              { icon: <Printer size={20} />, title: "Branding & Print Services", desc: "From brand identity development to high quality print production, we ensure consistency." },
              { icon: <Box size={20} />, title: "Fabrication", desc: "Stand out on the shelf with innovative packaging designs that capture attention." }
            ].map((service, index) => (
              <div key={index} className="flex-1 p-6 rounded-[20px] border border-ink/5 bg-white shadow-sm flex flex-col justify-center">
                <div className="w-10 h-10 bg-ink rounded-lg flex items-center justify-center text-white mb-3">{service.icon}</div>
                <h3 className="text-lg font-black text-ink mb-1 font-sans">{service.title}</h3>
                <p className="text-ink/60 text-[13px] leading-relaxed font-sans">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
