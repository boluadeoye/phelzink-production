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
      {/* STRICT BOXED CONTAINER: 1280px */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: CONTACT INFO & MAP */}
          <div className="flex flex-col w-full">
            {/* 900 Weight, Tight Leading */}
            <h2 className="text-[42px] lg:text-[52px] font-black text-ink mb-10 font-sans tracking-tighter leading-none">
              Contact Information
            </h2>
            
            <div className="space-y-8 mb-12">
              {/* Email */}
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center text-ink shrink-0">
                  <Mail size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-black text-ink font-sans text-[16px] mb-0.5">Email</p>
                  <p className="text-ink/60 font-sans text-[15px] font-medium">Phelzink@gmail.com</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center text-ink shrink-0">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-black text-ink font-sans text-[16px] mb-0.5">Phone</p>
                  <p className="text-ink/60 font-sans text-[15px] font-medium">+234 707 258 0692</p>
                  <p className="text-ink/60 font-sans text-[15px] font-medium">+234 812 582 1771</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center text-ink shrink-0">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-black text-ink font-sans text-[16px] mb-0.5">Location</p>
                  <p className="text-ink/60 font-sans text-[15px] font-medium">24, Oguntolu street, Shomolu, Lagos</p>
                </div>
              </div>
            </div>

            {/* THE MAP: SOLID BACKGROUND TO KILL GHOSTING */}
            <div className="relative rounded-[32px] overflow-hidden border border-ink/5 h-[380px] shadow-lg bg-white">
              {/* Live Map Layer */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.053347474164!2d3.3743!3d6.5142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf0f0f0f0f0%3A0x0!2zNsKwMzAnNTEuMSJOIDPCsDIyJzI3LjUiRQ!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" 
                className="absolute inset-0 w-full h-full grayscale contrast-[1.1] brightness-[1.05] z-10 bg-white" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
              />
              
              {/* UI Overlay: Open in Maps */}
              <div className="absolute top-5 left-5 z-20">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white px-5 py-3 rounded-[16px] text-[14px] font-black text-ink flex items-center gap-2 shadow-md hover:bg-ink hover:text-white transition-all duration-300 font-sans"
                >
                  Open in Maps <ExternalLink size={16} strokeWidth={2.5} />
                </a>
              </div>
              
              {/* UI Overlay: Expand Button */}
              <div className="absolute bottom-5 right-5 z-20">
                <button 
                  onClick={() => window.open(googleMapsUrl, '_blank')} 
                  className="bg-[#25D366] w-14 h-14 rounded-[16px] flex items-center justify-center text-white shadow-md hover:scale-105 transition-all duration-300"
                >
                  <Maximize2 size={22} strokeWidth={2.5} />
                </button>
              </div>

              {/* UI Overlay: Thumbnail */}
              <div className="absolute bottom-5 left-5 z-20">
                <div className="w-20 h-20 rounded-[16px] border-[3px] border-white shadow-md overflow-hidden bg-white">
                   <img 
                    src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776688504/blog_assets/gjf6nnbcko5jjauryamd.png"
                    alt="Location Preview"
                    className="w-full h-full object-cover"
                   />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="flex flex-col w-full">
            <h2 className="text-[42px] lg:text-[52px] font-black text-ink mb-10 font-sans tracking-tighter leading-none">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="block text-[11px] font-black text-ink/40 uppercase tracking-[0.2em] font-sans">Your Name *</label>
                <input required type="text" placeholder="Enter your name" className="w-full h-[64px] px-6 rounded-[20px] bg-[#F8F9FA] border border-transparent focus:border-emerald focus:bg-white outline-none font-sans text-[15px] font-medium transition-all placeholder:text-ink/30" />
              </div>
              
              <div className="space-y-3">
                <label className="block text-[11px] font-black text-ink/40 uppercase tracking-[0.2em] font-sans">Email Address *</label>
                <input required type="email" placeholder="Enter your email" className="w-full h-[64px] px-6 rounded-[20px] bg-[#F8F9FA] border border-transparent focus:border-emerald focus:bg-white outline-none font-sans text-[15px] font-medium transition-all placeholder:text-ink/30" />
              </div>
              
              <div className="space-y-3">
                <label className="block text-[11px] font-black text-ink/40 uppercase tracking-[0.2em] font-sans">Message *</label>
                <textarea required placeholder="Enter your message" className="w-full min-h-[180px] p-6 rounded-[20px] bg-[#F8F9FA] border border-transparent focus:border-emerald focus:bg-white outline-none font-sans text-[15px] font-medium transition-all resize-none placeholder:text-ink/30"></textarea>
              </div>
              
              <button 
                disabled={status !== "idle"} 
                className="w-full h-[64px] bg-ink text-white rounded-[20px] font-black text-[16px] flex items-center justify-center gap-3 hover:bg-emerald transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 font-sans mt-2"
              >
                {status === "idle" ? (
                  <>
                    <Send size={20} strokeWidth={2.5} />
                    <span>Send Message</span>
                  </>
                ) : status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={20} className="text-emerald" />
                    <span>Message Sent!</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
