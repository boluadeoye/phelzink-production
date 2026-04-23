"use client";
import React from "react";
import Image from "next/image";

interface CircularLogoProps {
  className?: string;
  size?: number;
  textColor?: string;
}

const CircularLogo = ({ 
  className = "w-24 h-24", 
  textColor = "fill-ink" 
}: CircularLogoProps) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className={`text-[8.5px] font-black uppercase tracking-[0.22em] ${textColor}`}>
          <textPath xlinkHref="#circlePath" startOffset="0%">
            Phelzink Productions • Phelzink Productions •
          </textPath>
        </text>
      </svg>

      <div className="relative w-[55%] h-[55%]">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776962525/blog_assets/tzasw1vrukgoz1proi8j.png"
          alt="Phelzink Mark"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default CircularLogo;
