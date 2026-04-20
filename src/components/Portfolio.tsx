"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  { title: "Coca-cola Light Signage", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
  { title: "Joy Gondola product display stands", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
  { title: "Moniepoint keyholder", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
  { title: "Area konnect handfan", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
  { title: "NBC booklet", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
  { title: "Schweppes cocktail boot setup", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
  { title: "Darling Hair Bunting", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
  { title: "Monster Energy disposable cup", image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688512/blog_assets/d9psrib6ylfbct3lhfen.png" },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-emerald pb-2">
            Some of Our Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              <Image 
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <p className="text-[11px] uppercase tracking-widest font-bold text-emerald mb-1">Project {index + 1}</p>
                <p className="text-sm font-semibold leading-tight text-white/90">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
