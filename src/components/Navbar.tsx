"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="relative w-32 h-10">
          <Image 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688534/blog_assets/fkckb41bhbezjlcpjhnl.png"
            alt="Phelzink Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Shop", "Services", "About"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-ink/70 hover:text-emerald transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="bg-emerald text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald/90 transition-all shadow-lg shadow-emerald/20">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
