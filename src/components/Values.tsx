"use client";
import React from "react";
import { motion } from "framer-motion";

const Values = () => {
  const values =[
    {
      title: "Quality First",
      desc: "We never compromise on quality, ensuring every project exceeds expectations with premium materials and attention to detail.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="black" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" fill="black"/>
        </svg>
      )
    },
    {
      title: "Client-Focused",
      desc: "Your success is our priority. We work closely with you to understand your vision and deliver results that drive your business forward.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Creative Excellence",
      desc: "Our creative team brings innovation and creativity to every project, crafting unique solutions that stand out.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.21 13.89L7 21L12 18L17 21L15.79 13.88" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Continuous Innovation",
      desc: "We stay ahead of industry trends and technology to provide cutting-edge design and printing solutions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 6H23V12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-ink">
      <div 
        className="absolute inset-0 z-0 opacity-30 grayscale"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688527/blog_assets/lmkuplmk3rm4auens7bf.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* 100% Montserrat Bold - No Italics */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight font-sans">
          Our Values
        </h2>
        <p className="text-white/60 text-sm md:text-base mb-20 font-sans">
          The principles that guide everything we do
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                {v.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4 font-sans inline-block border-b border-white/20 pb-1 group-hover:border-white transition-colors">
                {v.title}
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed max-w-[260px] font-sans">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
