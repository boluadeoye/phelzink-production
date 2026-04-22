"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, ExternalLink, Maximize2 } from "lucide-react";

const Contact = () => {
  const[status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=24+Oguntolu+street+Shomolu+Lagos";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const contactInfo =[
    {
      title: "Phone",
      details:["+234 707 258 0692", "+234 812 582 1771"],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    },
    {
      title: "Email",
      details: ["Phelzink@gmail.com"],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    },
    {
      title: "Location",
      details: ["24, Oguntolu street", "Shomolu, Lagos"],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    }
  ];

  return (
    <section id="contact" className="w-full">
      {/* DARK HEADER */}
      <div className="relative py-24 bg-ink overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-20 grayscale" style={{ backgroundImage: `url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688527/blog_assets/lmkuplmk3rm4auens7bf.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-sans tracking-tight">Get In Touch</h2>
          <p className="text-lg md:text-xl text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      {/* WHITE INFO & FORM SECTION */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Left: Contact Info & RESTORED MAP */}
            <div className="flex flex-col">
              <h3 className="text-3xl lg:text-4xl font-black text-ink mb-12 font-sans tracking-tight">Contact Information</h3>
              <div className="space-y-10 mb-12">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 bg-[#F3F4F6] rounded-xl flex items-center justify-center text-ink shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-ink mb-1 font-sans">{item.title}</h4>
                      {item.details.map((line, idx) => <p key={idx} className="text-ink/60 font-sans">{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>

              {/* RESTORED HIGH-FIDELITY MAP */}
              <div className="relative rounded-[32px] overflow-hidden border border-ink/5 h-[350px] group shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.053347474164!2d3.3743!3d6.5142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf0f0f0f0f0%3A0x0!2zNsKwMzAnNTEuMSJOIDPCsDIyJzI3LjUiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" className="absolute inset-0 w-full h-full grayscale contrast-[1.1] brightness-[1.05]" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                <div className="absolute top-6 left-6">
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="bg-white px-5 py-3 rounded-2xl text-[14px] font-bold text-ink flex items-center gap-2 shadow-lg hover:bg-emerald hover:text-white transition-all duration-300">
                    Open in Maps <ExternalLink size={16} />
                  </a>
                </div>
                <div className="absolute bottom-6 right-6">
                  <button onClick={() => window.open(googleMapsUrl, '_blank')} className="bg-white p-3 rounded-2xl text-ink shadow-lg hover:bg-emerald hover:text-white transition-all duration-300">
                    <Maximize2 size={22} />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-2xl overflow-hidden">
                     <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png')" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-ink mb-12 font-sans tracking-tight">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink/40 uppercase tracking-widest">Your Name *</label>
                    <input required type="text" placeholder="Enter your name" className="w-full px-6 py-4 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans bg-[#FDFDFD]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink/40 uppercase tracking-widest">Email Address *</label>
                    <input required type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans bg-[#FDFDFD]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink/40 uppercase tracking-widest">Service Interested In *</label>
                  <select required className="w-full px-6 py-4 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans bg-[#FDFDFD] appearance-none">
                    <option value="">Select a service</option>
                    <option>Branding & Design</option>
                    <option>Large Format Printing</option>
                    <option>Corporate Gifting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink/40 uppercase tracking-widest">Message *</label>
                  <textarea required rows={5} placeholder="Enter your message" className="w-full px-6 py-4 rounded-2xl border border-ink/10 focus:border-emerald outline-none font-sans resize-none bg-[#FDFDFD]"></textarea>
                </div>
                <button disabled={status === "loading" || status === "success"} className="w-full bg-ink text-white py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald transition-all shadow-2xl disabled:opacity-70">
                  {status === "idle" && <><Send size={20} /><span>Send Message</span></>}
                  {status === "loading" && <><Loader2 size={20} className="animate-spin" /><span>Sending...</span></>}
                  {status === "success" && <><CheckCircle2 size={20} className="text-emerald" /><span>Message Sent!</span></>}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
