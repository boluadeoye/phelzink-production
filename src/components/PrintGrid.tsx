"use client";
import React from "react";
import Image from "next/image";

const printItems =[
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
    <section className="py-24 bg-[#F8F9FA]">
      {/* STRICT BOXED CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-ink mb-6 leading-[1.0] tracking-tighter font-sans">
            What we can print <br /> for you
          </h2>
          <p className="text-ink/60 max-w-2xl mx-auto text-[16px] leading-relaxed font-sans">
            From business cards and brochures to signage and promotional products, 
            we offer a wide range of printing services that can be customized to 
            meet the unique needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {printItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-[24px] border border-ink/5 shadow-sm flex flex-col items-center group cursor-pointer hover:shadow-xl hover:border-emerald/20 transition-all duration-500"
            >
              {/* Image Container with Grayscale Reveal */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F3F4F6] rounded-[16px] mb-5">
                <Image 
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <span className="text-[14px] font-bold text-ink/80 group-hover:text-emerald transition-colors font-sans pb-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintGrid;
