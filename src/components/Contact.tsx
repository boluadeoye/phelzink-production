"use client";
import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, ExternalLink, Maximize2, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=24+Oguntolu+street+Shomolu+Lagos";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="w-full bg-white">
      {/* DARK HEADER */}
      <div className="relative py-24 bg-ink text-center">
        <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688527/blog_assets/lmkuplmk3rm4auens7bf.png')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-sans tracking-tighter">Get In Touch</h2>
          <p className="text-lg text-white/60 font-sans max-w-2xl mx-auto">Have a project in mind? Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      {/* BOXED INFO & FORM SECTION */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Contact Info & Map */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-black text-ink mb-12 font-sans tracking-tight">Contact Information</h3>
              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-ink"><Mail size={24} strokeWidth={1.5} /></div>
                  <div><p className="font-black text-ink font-sans">Email</p><p className="text-ink/60 font-sans">Phelzink@gmail.com</p></div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-ink shrink-0"><Phone size={24} strokeWidth={1.5} /></div>
                  <div>
                    <p className="font-black text-ink font-sans">Phone</p>
                    <p className="text-ink/60 font-sans">+234 707 258 0692</p>
                    <p className="text-ink/60 font-sans">+234 812 582 1771</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-ink shrink-0"><MapPin size={24} strokeWidth={1.5} /></div>
                  <div><p className="font-black text-ink font-sans">Location</p><p className="text-ink/60 font-sans">24, Oguntolu street, Shomolu, Lagos</p></div>
                </div>
              </div>

              {/* CLEAN MAP UI (No Duplicates) */}
              <div className="relative rounded-[32px] overflow-hidden border border-ink/5 h-[400px] shadow-xl group">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.053347474164!2d3.3743!3d6.5142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf0f0f0f0f0%3A0x0!2zNsKwMzAnNTEuMSJOIDPCsDIyJzI3LjUiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" className="absolute inset-0 w-full h-full grayscale contrast-[1.1] brightness-[1.05]" style={{ border: 0 }} allowFullScreen loading="lazy" />
                
                {/* Functional Overlay Only */}
                <div className="absolute top-6 left-6 z-10">
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-white px-5 py-3 rounded-2xl text-[14px] font-black text-ink flex items-center gap-2 shadow-lg hover:bg-emerald hover:text-white transition-all">
                    Open in Maps <ExternalLink size={16} />
                  </a>
                </div>
                
                <div className="absolute bottom-6 right-6 z-10">
                  <button onClick={() => window.open(googleMapsUrl, '_blank')} className="bg-white p-3 rounded-2xl text-ink shadow-lg hover:bg-emerald hover:text-white transition-all">
                    <Maximize2 size={22} />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 z-10">
                  <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-2xl overflow-hidden">
                     <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-3xl font-black text-ink mb-12 font-sans tracking-tight">Send Us a Message</h3>
              <div className="space-y-2">
                <label className="text-xs font-bold text-ink/40 uppercase tracking-widest">Your Name *</label>
                <input required type="text" placeholder="Enter your name" className="w-full px-6 py-5 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans bg-[#FDFDFD]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-ink/40 uppercase tracking-widest">Email Address *</label>
                <input required type="email" placeholder="Enter your email" className="w-full px-6 py-5 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans bg-[#FDFDFD]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-ink/40 uppercase tracking-widest">Message *</label>
                <textarea required rows={6} placeholder="Enter your message" className="w-full px-6 py-5 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans resize-none bg-[#FDFDFD]"></textarea>
              </div>
              <button disabled={status !== "idle"} className="w-full bg-ink text-white py-6 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald transition-all shadow-2xl active:scale-[0.98]">
                {status === "idle" ? <><Send size={20} /><span>Send Message</span></> : status === "loading" ? "Sending..." : "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
