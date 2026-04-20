"use client";
import React from "react";

const Brands = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-ink/40 font-bold uppercase tracking-[0.3em] mb-12 text-sm">
          Some of the brands we have worked with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Using high-fidelity text-based logos to ensure zero broken images */}
          {["BETWINNER", "NBC", "YAMAHA", "SCHWEPPES", "MONIEPOINT"].map((brand) => (
            <span key={brand} className="text-2xl font-black text-ink tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
