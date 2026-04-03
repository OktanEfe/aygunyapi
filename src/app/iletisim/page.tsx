"use client";

import React from "react";

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#0A1A2B]/40">İletişim</span>
            <div className="h-px w-12 bg-[#0A1A2B]/10" />
          </div>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter text-[#0A1A2B] leading-none mb-8">
            Yeni Bir Projeye <br />
            <span className="font-serif italic font-normal text-[#0A1A2B]/20">Birlikte Başlayalım.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-[#0A1A2B]/50 max-w-2xl leading-relaxed">
            Fikirlerinizi gerçeğe dönüştürmek için buradayız. Formu doldurarak veya doğrudan bizimle iletişime geçerek süreci başlatabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-white">
            <h2 className="text-2xl font-light text-[#0A1A2B] mb-10 tracking-tight">Proje Talep Formu</h2>
            
            <form action="https://formspree.io/f/mzzbnbyv" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#0A1A2B]/30 ml-1">Ad Soyad</label>
                <input 
                  type="text" name="name" required 
                  className="bg-[#F5F5F7] border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#0A1A2B]/10 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#0A1A2B]/30 ml-1">E-Posta</label>
                <input 
                  type="email" name="email" required 
                  className="bg-[#F5F5F7] border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#0A1A2B]/10 transition-all outline-none"
                  placeholder="hello@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#0A1A2B]/30 ml-1">Telefon</label>
                <input 
                  type="text" name="phone" 
                  className="bg-[#F5F5F7] border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#0A1A2B]/10 transition-all outline-none"
                  placeholder="+90 5xx xxx xx xx"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#0A1A2B]/30 ml-1">Konu</label>
                <input 
                  type="text" name="subject" 
                  className="bg-[#F5F5F7] border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#0A1A2B]/10 transition-all outline-none"
                  placeholder="Mimari Danışmanlık"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#0A1A2B]/30 ml-1">Mesajınız</label>
                <textarea 
                  name="message" required rows={5}
                  className="bg-[#F5F5F7] border-none rounded-[2rem] p-6 text-sm focus:ring-2 focus:ring-[#0A1A2B]/10 transition-all outline-none resize-none"
                  placeholder="Projenizden kısaca bahsedin..."
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-12 py-5 bg-[#0A1A2B] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 active:scale-95"
                >
                  Mesajı Gönder
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            
            <div className="bg-[#0A1A2B] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <i className="bi bi-chat-right-dots text-8xl"></i>
              </div>
              
              <h2 className="text-2xl font-light mb-12 tracking-tight">Hızlı İletişim</h2>
              
              <div className="space-y-10 relative z-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/30">Telefon</span>
                  <a href="tel:+905551112233" className="text-xl font-light hover:text-white/60 transition-colors tracking-tighter">
                    +90 555 111 22 33
                  </a>
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/30">E-Posta</span>
                  <a href="mailto:info@aygunyapi.com" className="text-xl font-light hover:text-white/60 transition-colors tracking-tighter">
                    info@aygunyapi.com
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/30">Adres</span>
                  <p className="text-base font-light text-white/60 leading-relaxed">
                    İzmit, Kocaeli / Türkiye <br />
                    Yalova Tasarım & Uygulama Ofisi
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[350px] rounded-[2.5rem] overflow-hidden bg-white border border-[#0A1A2B]/5 shadow-xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d29.117145!3d40.655011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad198d0092d6d%3A0x6739eb2b8969f643!2sYalova!5e0!3m2!1str!2str!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                allowFullScreen
                loading="lazy"
                className="group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}