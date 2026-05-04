"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplay(Math.floor(latest).toString());
  });

  return <span ref={ref}>{display}{suffix}</span>;
};

const Stats = () => {
  const stats =[
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 300, suffix: "+", label: "Happy Clients" },
    { value: 7, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] border-b border-ink/5">
      {/* STRICT BOXED CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left flex flex-col">
              <p className="text-[40px] md:text-[48px] font-black text-ink tracking-tighter font-sans leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[12px] md:text-[13px] font-medium text-ink/50 font-sans mt-2">
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
