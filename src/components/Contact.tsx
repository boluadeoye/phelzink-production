"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-ink/5 flex flex-col lg:flex-row">
          {/* Left: Info */}
          <div className="bg-ink p-12 lg:w-1/3 text-white">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-white/60 mb-12">Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Call Us</p>
                  <p className="font-semibold">+234 812 345 6789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Email Us</p>
                  <p className="font-semibold">hello@phelzink.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Visit Us</p>
                  <p className="font-semibold">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-12 lg:w-2/3">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-ink/40">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-emerald outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-ink/40">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-emerald outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase text-ink/40">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-emerald outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="md:col-span-2 bg-emerald text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-emerald/20">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
