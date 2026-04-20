"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette, Printer, Box } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Designs",
    description: "We create visually compelling and strategic designs that communicate your brand message clearly across digital and print platforms."
  },
  {
    icon: <Printer className="w-6 h-6 text-white" />,
    title: "Branding & Print Services",
    description: "From brand identity development to high quality print production, we ensure consistency and excellence in every detail of your brand materials."
  },
  {
    icon: <Box className="w-6 h-6 text-white" />,
    title: "Fabrication",
    description: "Stand out on the shelf with innovative packaging designs that capture attention and communicate value."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Our Core Services</h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            Comprehensive design and print solutions tailored to elevate your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
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
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-ink/5 hover:border-emerald/20 hover:shadow-xl hover:shadow-emerald/5 transition-all group bg-white"
              >
                <div className="bg-ink p-3 rounded-xl w-fit mb-4 group-hover:bg-emerald transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{service.title}</h3>
                <p className="text-ink/60 leading-relaxed text-sm">
                  {service.description}
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
