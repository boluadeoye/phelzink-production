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
          {/* Top Arc Path */}
          <path id="topArc" d="M 15,50 A 35,35 0 1,1 85,50" />
          {/* Bottom Arc Path */}
          <path id="bottomArc" d="M 15,50 A 35,35 0 1,0 85,50" />
        </defs>
        
        <text className="text-[8.5px] font-medium uppercase tracking-[0.25em] fill-ink font-sans">
          <textPath xlinkHref="#topArc" startOffset="50%" textAnchor="middle">
            Phelzink Productions
          </textPath>
        </text>
        
        <text className="text-[8.5px] font-medium uppercase tracking-[0.25em] fill-ink font-sans">
          <textPath xlinkHref="#bottomArc" startOffset="50%" textAnchor="middle">
            Phelzink Productions
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <div className="relative w-[50%] h-[50%]">
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
