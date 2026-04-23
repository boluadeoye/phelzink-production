"use client";
import React from "react";

const Stats = () => {
  const stats =[
    { value: "250+", label: "Projects Completed" },
    { value: "300+", label: "Happy Clients" },
    { value: "7+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F8F9FA] border-b border-ink/5">
      {/* POINT 1: STRICT BOXED CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="text-[40px] md:text-[48px] font-black text-ink tracking-tighter font-sans leading-none">
                {stat.value}
              </p>
              <p className="text-[12px] md:text-[13px] font-medium text-ink/50 font-sans mt-2 uppercase md:normal-case tracking-wider md:tracking-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
