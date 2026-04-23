"use client";
import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, ExternalLink, Maximize2 } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=24+Oguntolu+street+Shomolu+Lagos";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="w-full">
      <div className="relative py-24 bg-ink text-center">
        <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688527/blog_assets/lmkuplmk3rm4auens7bf.png')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-sans tracking-tighter">Get In Touch</h2>
          <p className="text-lg text-white/60 font-sans max-w-2xl mx-auto">Have a project in mind? Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col">
              <h3 className="text-3xl font-black text-ink mb-12 font-sans tracking-tight">Contact Information</h3>
              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-ink"><Send size={24} /></div>
                  <div><p className="font-black text-ink font-sans">Email</p><p className="text-ink/60 font-sans">Phelzink@gmail.com</p></div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-[#F3F4F6] rounded-2xl flex items-center justify-center text-ink"><Maximize2 size={24} /></div>
                  <div><p className="font-black text-ink font-sans">Location</p><p className="text-ink/60 font-sans">24, Oguntolu street, Shomolu, Lagos</p></div>
                </div>
              </div>

              {/* RESTORED MAP */}
              <div className="relative rounded-[32px] overflow-hidden border border-ink/5 h-[400px] shadow-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.053347474164!2d3.3743!3d6.5142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf0f0f0f0f0%3A0x0!2zNsKwMzAnNTEuMSJOIDPCsDIyJzI3LjUiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" className="absolute inset-0 w-full h-full grayscale contrast-[1.1]" style={{ border: 0 }} allowFullScreen loading="lazy" />
                <div className="absolute top-6 left-6">
                  <a href={googleMapsUrl} target="_blank" className="bg-white px-5 py-3 rounded-2xl text-[14px] font-black text-ink flex items-center gap-2 shadow-lg hover:bg-emerald hover:text-white transition-all">Open in Maps <ExternalLink size={16} /></a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-3xl font-black text-ink mb-12 font-sans tracking-tight">Send Us a Message</h3>
              <input required type="text" placeholder="Your Name" className="w-full px-6 py-5 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans bg-[#FDFDFD]" />
              <input required type="email" placeholder="Email Address" className="w-full px-6 py-5 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans bg-[#FDFDFD]" />
              <textarea required rows={6} placeholder="Message" className="w-full px-6 py-5 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans resize-none bg-[#FDFDFD]"></textarea>
              <button disabled={status !== "idle"} className="w-full bg-ink text-white py-6 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald transition-all shadow-2xl">
                {status === "idle" ? "Send Message" : status === "loading" ? "Sending..." : "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
