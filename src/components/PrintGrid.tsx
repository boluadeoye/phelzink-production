"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const printItems = [
  { name: "Business card", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748711/blog_assets/puvwepzygs9xuuicpbt9.png" },
  { name: "Tote Bag", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748719/blog_assets/mafn1xjlsujj3ophcjrq.png" },
  { name: "Rollup Banner", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776953206/blog_assets/joaxpl9ormzz3xvzdduj.png" },
  { name: "Paper Bag", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748730/blog_assets/ivfzewrizpcuhudmxies.png" },
  { name: "Notepad", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748735/blog_assets/dkfhzh1ovfcnaatncss6.png" },
  { name: "Car branding", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748738/blog_assets/fszsrhdaqrjos0kwsvmx.png" },
  { name: "Sticker", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748698/blog_assets/thsmwsrgoumnvbbwhyu9.png" },
  { name: "Fly banner", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776748701/blog_assets/ewcjasl7tsn52k66rz7k.png" },
];

const PrintGrid = () => {
  return (
    <section className="py-24 bg-white">
      {/* STRICT BOXED CONTAINER: 1140px */}
      <div className="max-w-[1140px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-[42px] md:text-[56px] font-black text-ink mb-6 font-sans tracking-tighter leading-[0.9]">
            What we can print <br /> for you
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-lg font-sans font-medium">
            From business cards and brochures to signage and promotional products.
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
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* 
                PRECISION LOGIC: 
                1. No 'rounded' classes (Flat Edge).
                2. 'grayscale' by default.
                3. 'grayscale-0' on hover.
              */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F3F4F6] mb-6">
                <Image 
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
              </div>
              <span className="text-[15px] font-bold text-ink/80 group-hover:text-emerald transition-colors font-sans uppercase tracking-wider">
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
