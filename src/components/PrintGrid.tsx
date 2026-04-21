"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const printItems = [
  { name: "Business card", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748711/blog_assets/puvwepzygs9xuuicpbt9.png" },
  { name: "Tote Bag", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748719/blog_assets/mafn1xjlsujj3ophcjrq.png" },
  { name: "Rollup Banner", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748706/blog_assets/dqs8wgtvgpchmnvvzdi0.png" },
  { name: "Paper Bag", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748730/blog_assets/ivfzewrizpcuhudmxies.png" },
  { name: "Notepad", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748735/blog_assets/dkfhzh1ovfcnaatncss6.png" },
  { name: "Car branding", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748738/blog_assets/fszsrhdaqrjos0kwsvmx.png" },
  { name: "Sticker", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748698/blog_assets/thsmwsrgoumnvbbwhyu9.png" },
  { name: "Fly banner", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748701/blog_assets/ewcjasl7tsn52k66rz7k.png" },
];

const PrintGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8 leading-tight">
            What we can print <br /> for you
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg leading-relaxed">
            From business cards and brochures to signage and promotional products, 
            we offer a wide range of printing services that can be customized to 
            meet the unique needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {printItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-[#F3F4F6] mb-4">
                <Image 
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-sm font-medium text-ink/80 group-hover:text-emerald transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintGrid;
