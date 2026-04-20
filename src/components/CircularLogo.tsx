"use client";
import React from "react";
import Image from "next/image";

interface CircularLogoProps {
  size?: "sm" | "lg";
  className?: string;
}

const CircularLogo = ({ size = "sm", className = "" }: CircularLogoProps) => {
  const dimensions = size === "sm" ? "w-14 h-14" : "w-32 h-32";
  const fontSize = size === "sm" ? "8.5px" : "9px";

  return (
    <div className={`relative ${dimensions} ${className} flex items-center justify-center group`}>
      {/* Rotating Text Layer */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite] group-hover:pause"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text 
          style={{ fontSize }} 
          className="font-bold uppercase tracking-[0.22em] fill-ink"
        >
          <textPath xlinkHref="#circlePath" startOffset="0%">
            Phelzink Productions • Phelzink Productions •
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
