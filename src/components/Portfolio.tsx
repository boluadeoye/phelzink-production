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
    <section id="portfolio" className="relative py-24 bg-black text-white overflow-hidden">
      {/* FIGMA BACKGROUND ASSET */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1777032032/blog_assets/aw5gf8fwieyhlyzx1ueg.png"
          alt="Portfolio Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-sans border-b-2 border-white pb-1">
            Some of Our Works
          </h2>
        </div>

        {/* GRID SYSTEM: 4 Columns, Sharp Edges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-none border border-white/40 bg-[#111]"
            >
              {/* Image Layer: Preserving Grayscale & Zoom */}
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              {/* Caption Overlay: Bottom-aligned, Underlined Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm py-2 px-3 border-t border-white/10">
                <p className="text-[11px] md:text-[12px] font-medium text-white/90 font-sans underline underline-offset-4 decoration-white/50">
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
