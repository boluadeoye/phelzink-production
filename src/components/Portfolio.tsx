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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-emerald pb-2 uppercase tracking-widest">
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
              <Image 
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <p className="text-sm font-bold leading-tight text-white group-hover:text-emerald transition-colors">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
