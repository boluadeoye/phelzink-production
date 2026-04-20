"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, ShoppingBag, Flag, StickyNote, 
  Car, Layers, Tag, LucideIcon 
} from "lucide-react";

interface PrintItem {
  name: string;
  icon: LucideIcon;
}

const printItems: PrintItem[] = [
  { name: "Business Card", icon: CreditCard },
  { name: "Tote Bag", icon: ShoppingBag },
  { name: "Rollup Banner", icon: Layers },
  { name: "Paper Bag", icon: ShoppingBag },
  { name: "Notepad", icon: StickyNote },
  { name: "Car Branding", icon: Car },
  { name: "Sticker", icon: Tag },
  { name: "Flag Banner", icon: Flag },
];

const PrintGrid = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">What we can print for you</h2>
          <p className="text-ink/60 max-w-2xl mx-auto">
            From business cards and brochures to signage and promotional products, 
            we offer a wide range of printing services that can be customized to 
            meet the unique needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {printItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl flex flex-col items-center text-center gap-4 shadow-sm border border-ink/5"
              >
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-ink/40">
                  <Icon size={32} />
                </div>
                <span className="font-semibold text-ink text-sm">{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrintGrid;
