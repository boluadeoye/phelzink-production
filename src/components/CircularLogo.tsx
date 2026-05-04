"use client";
import React from "react";
import Image from "next/image";

const CircularLogo = ({ className = "w-32 h-32" }: { className?: string }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      {/* Rotating Text Layer */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
      >
        <defs>
          {/* Radius increased to 40 to prevent text collision */}
          <path
            id="circlePath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
        </defs>
        {/* Font size reduced and tracking optimized for zero overlap */}
        <text className="text-[7px] font-bold uppercase tracking-[0.12em] fill-ink font-sans">
          <textPath xlinkHref="#circlePath" startOffset="0%">
            Phelzink Productions • Phelzink Productions •
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <div className="relative w-[45%] h-[45%]">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688534/blog_assets/fkckb41bhbezjlcpjhnl.png"
          alt="P"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CircularLogo;
