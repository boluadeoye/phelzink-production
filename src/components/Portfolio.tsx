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
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1777032032/blog_assets/aw5gf8fwieyhlyzx1ueg.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-black uppercase tracking-tighter font-sans border-b-2 border-white pb-1">
            Some of Our Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-[4/3] w-full overflow-hidden border-[0.5px] border-white/20 bg-[#0a0a0a]"
            >
              {/* THE FIX: Inner wrapper handles Zoom and Grayscale simultaneously */}
              <div className="relative w-full h-full p-6 transition-all duration-700 ease-in-out transform group-hover:scale-110 grayscale group-hover:grayscale-0">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md py-3 px-4 border-t-[0.5px] border-white/10 z-20">
                <p className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-widest underline decoration-1 underline-offset-4">
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
