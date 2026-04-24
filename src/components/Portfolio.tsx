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
    <section id="portfolio" className="relative py-24 bg-ink text-white overflow-hidden">
      {/* FIGMA BACKGROUND ASSET */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1777032032/blog_assets/aw5gf8fwieyhlyzx1ueg.png"
          alt="Portfolio Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black inline-block border-b-2 border-emerald pb-2 uppercase tracking-widest font-sans">
            Some of Our Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              {/* RULE: Grayscale by default, Color on Hover, Object-Contain */}
              <Image 
                src={work.image}
                alt={work.title}
                fill
                className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <p className="text-sm font-bold leading-tight text-white group-hover:text-emerald transition-colors font-sans">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
