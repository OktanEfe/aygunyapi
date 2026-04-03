"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative py-24 md:py-40 bg-white overflow-hidden">
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F7] skew-x-[-12deg] translate-x-20 hidden md:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-20">
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0A1A2B]/40">Sıradaki Adım</span>
                <div className="h-px w-12 bg-[#0A1A2B]/10" />
              </div>
              
              <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter text-[#0A1A2B] leading-[0.9] mb-10">
                Hayalinizdeki Yapıyı <br />
                <span className="font-serif italic font-normal text-[#0A1A2B]/20">Birlikte Kuralım.</span>
              </h2>
              
              <p className="text-base md:text-lg font-light text-[#0A1A2B]/60 leading-relaxed mb-12 max-w-lg">
                Projeniz ne kadar büyük veya detaylı olursa olsun, Yalova&apos;nın zanaatkar ruhuyla her adımda yanınızdayız.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link 
                  href="/iletisim" 
                  className="group relative px-10 py-5 bg-[#0A1A2B] text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,26,43,0.2)] active:scale-95"
                >
                  <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.2em]">Hemen Teklif Alın</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                
                <Link 
                  href="tel:+905000000000" 
                  className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A1A2B]/40 hover:text-[#0A1A2B] transition-colors"
                >
                  Bizi Arayın
                  <div className="w-10 h-10 rounded-full border border-[#0A1A2B]/5 flex items-center justify-center group-hover:bg-[#0A1A2B]/5 transition-all">
                    <i className="bi bi-telephone text-sm"></i>
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[380px] flex flex-col gap-4">
              <div className="p-8 md:p-10 bg-white rounded-[2.5rem] border border-[#0A1A2B]/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-500">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#0A1A2B]/20 mb-6 block">Ofisimiz</span>
                <h3 className="text-xl font-light text-[#0A1A2B] mb-2">Merkez Atölye</h3>
                <p className="text-sm text-[#0A1A2B]/50 font-light leading-relaxed">
                  İzmit, Kocaeli / Türkiye <br />
                  Yalova Tasarım Ofisi
                </p>
              </div>

              <div className="p-8 md:p-10 bg-[#0A1A2B] rounded-[2.5rem] text-white shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 mb-6 block">E-Posta</span>
                <h3 className="text-xl font-light mb-2">info@aygunyapi.com</h3>
                <p className="text-sm text-white/40 font-light">
                  7/24 Proje Talebi Gönderebilirsiniz.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center opacity-10">
        <div className="w-px h-24 bg-gradient-to-t from-[#0A1A2B] to-transparent" />
      </div>

    </section>
  );
}