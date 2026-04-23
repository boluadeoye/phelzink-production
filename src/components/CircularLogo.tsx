"use client";
import React from "react";
import Image from "next/image";

const CircularLogo = ({ className = "w-32 h-32", textColor = "fill-white" }: { className?: string, textColor?: string }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      {/* Rotating Text Layer */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className={`text-[8.5px] font-medium uppercase tracking-[0.22em] ${textColor}`}>
          <textPath xlinkHref="#circlePath" startOffset="0%">
            Phelzink Productions • Phelzink Productions •
          </textPath>
        </text>
      </svg>

      {/* Center Icon - Transparent Asset */}
      <div className="relative w-[52%] h-[52%]">
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
