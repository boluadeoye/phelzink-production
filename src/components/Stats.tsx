"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "300+", label: "Happy Client" },
  { value: "7+", label: "Years experience" },
  { value: "250+", label: "Satisfaction rate" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-surface border-y border-ink/5">
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
              <p className="text-4xl md:text-5xl font-bold text-ink mb-2 tracking-tighter">{stat.value}</p>
              <p className="text-[12px] uppercase tracking-[0.2em] font-bold text-ink/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
