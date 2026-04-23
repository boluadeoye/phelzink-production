"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  { title: "Coca-cola Light Signage", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693451/blog_assets/cbpl6ila0f91jr0ityc4.png" },
  { title: "Joy Gondola product display stands", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693462/blog_assets/cpbpvdzrojkj5xqx16hk.png" },
  { title: "Moniepoint keyholder", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693472/blog_assets/qxgaimzbfugztvqmydby.png" },
  { title: "Area konnect handfan", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693478/blog_assets/wmcc4o0ckjdxqzutpked.png" },
  { title: "NBC booklet", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693495/blog_assets/sfd5bteyubbhuixxjod7.png" },
  { title: "Schweppes cocktail boot setup", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693506/blog_assets/hkintwqt4dq0ywrsyk1a.png" },
  { title: "Darling Hair Bunting", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693513/blog_assets/wjuluu2fzj4fzbcu0uci.png" },
  { title: "Monster Energy disposable cup", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776693538/blog_assets/x0wsrg3pgmzdjonyhl9k.png" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-ink text-white">
      {/* STRICT BOXED CONTAINER: 1140px */}
      <div className="max-w-[1140px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black inline-block border-b-2 border-emerald pb-2 uppercase tracking-[0.2em] font-sans">
            Some of Our Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden bg-white/5 border border-white/5"
            >
              {/* 
                PRECISION LOGIC: 
                1. No 'rounded' classes (Flat Edge).
                2. 'grayscale' by default.
                3. 'grayscale-0' on hover.
              */}
              <Image 
                src={work.image}
                alt={work.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
              
              {/* Gradient Overlay for Text Legibility - Only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[11px] font-black text-emerald uppercase tracking-[0.2em] mb-2">
                  Project 0{index + 1}
                </p>
                <p className="text-sm font-black leading-tight text-white font-sans uppercase tracking-wider">
                  {work.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
