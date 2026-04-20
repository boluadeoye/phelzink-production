"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="relative w-28 h-8">
          <Image 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688534/blog_assets/fkckb41bhbezjlcpjhnl.png"
            alt="Phelzink Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Shop", "Services", "About"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[12px] font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-emerald transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="bg-emerald text-white px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-emerald/20">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
