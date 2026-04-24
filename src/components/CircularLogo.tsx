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
          {/* The Original Perfect Circle Path */}
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        {/* FIXED: Reduced tracking to 0.14em to prevent the tail from overlapping the head */}
        <text className="text-[8.5px] font-bold uppercase tracking-[0.14em] fill-ink font-sans">
          <textPath xlinkHref="#circlePath" startOffset="0%">
            Phelzink Productions • Phelzink Productions •
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <div className="relative w-[45%] h-[45%]">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688534/blog_assets/fkckb41bhbezjlcpjhnl.png"
          alt="Phelzink Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CircularLogo;
