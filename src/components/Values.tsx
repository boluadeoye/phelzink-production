"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Star, Zap } from "lucide-react";

const values = [
  {
    title: "Quality First",
    desc: "We never compromise on quality, ensuring every project exceeds expectations.",
    icon: Target
  },
  {
    title: "Client-Focused",
    desc: "Your success is our priority. We work closely with you to understand your vision.",
    icon: Users
  },
  {
    title: "Creative Excellence",
    desc: "Our creative team brings innovation and creativity to every project.",
    icon: Star
  },
  {
    title: "Continuous Innovation",
    desc: "We stay ahead of industry trends to provide cutting-edge solutions.",
    icon: Zap
  }
];

const Values = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Fixed Attachment for Parallax feel */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688527/blog_assets/lmkuplmk3rm4auens7bf.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-ink/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-white/60 serif-display text-xl">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald group-hover:scale-110 transition-all duration-500">
                <value.icon className="w-8 h-8 text-ink group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
