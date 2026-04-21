"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Star, Zap } from "lucide-react";

const values = [
  { title: "Quality First", desc: "We never compromise on quality, ensuring every project exceeds expectations with premium materials and attention to detail.", icon: Target },
  { title: "Client-Focused", desc: "Your success is our priority. We work closely with you to understand your vision and deliver results that drive your business forward.", icon: Users },
  { title: "Creative Excellence", desc: "Our creative team brings innovation and creativity to every project, crafting unique solutions that stand out.", icon: Star },
  { title: "Continuous Innovation", desc: "We stay ahead of industry trends and technology to provide cutting-edge design and printing solutions.", icon: Zap }
];

const Values = () => {
  return (
    <section className="relative py-24 bg-ink overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 grayscale"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688527/blog_assets/lmkuplmk3rm4auens7bf.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Our Values</h2>
        <p className="text-white/60 text-sm mb-20">The principles that guide everything we do</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v, i) => (
            <motion.div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <v.icon size={20} className="text-ink" />
              </div>
              <h4 className="text-white font-bold mb-3 border-b border-white/20 pb-1">{v.title}</h4>
              <p className="text-white/40 text-[12px] leading-relaxed max-w-[240px]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
