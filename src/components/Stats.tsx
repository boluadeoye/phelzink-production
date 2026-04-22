"use client";
import React from "react";
import { motion } from "framer-motion";

const stats =[
  { value: "250+", label: "Projects Completed" },
  { value: "300+", label: "Happy Clients" },
  { value: "7+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-[#F8F9FA] border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl lg:text-[44px] font-black text-ink mb-2 tracking-tight font-sans">{stat.value}</p>
              <p className="text-[13px] font-medium text-ink/60 font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
