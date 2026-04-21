"use client";
import React from "react";
import Image from "next/image";

const brandLogos = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750098/blog_assets/dxujejs6yya0ekeqvnam.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750146/blog_assets/qu0ucu1ui4ikqoytb4ec.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750131/blog_assets/pumej7z26mxpkaiabcwv.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750121/blog_assets/i7iqntcfqbisgxwtiwui.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750108/blog_assets/ijq2mxzzivitson9qxtr.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1776750105/blog_assets/wnnogrkgnhq5l8s1eeq4.png"
];

const Brands = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-lg font-bold text-ink/40 uppercase tracking-[0.2em] mb-16">
          Some of the brands we have worked with
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {brandLogos.map((logo, i) => (
            <div key={i} className="relative w-32 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Image src={logo} alt="Partner" fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
