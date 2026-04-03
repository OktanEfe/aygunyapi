"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[800px] bg-[#F5F5F7] flex items-center justify-center overflow-hidden py-12 md:py-24 px-4 md:px-12">
      
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-200/40 rounded-full blur-[150px]" />
      </div>

      <div 
        className="relative z-10 w-full max-w-[1300px] bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col items-center justify-center text-center p-10 md:p-32 overflow-hidden transition-transform duration-700 ease-out"
        style={{ transform: `perspective(2000px) rotateX(${mousePos.y * -0.05}deg) rotateY(${mousePos.x * 0.05}deg)` }}
      >
        
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

        <div className="relative mb-12">
          <span className="text-[9px] md:text-[11px] font-bold tracking-[0.6em] uppercase text-black/20 block mb-4">
            Bir Yalova Mirası
          </span>
          <div className="h-px w-12 bg-black/10 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-[34px] md:text-[72px] font-extralight tracking-[-0.04em] leading-[1.05] text-[#0A1A2B]">
            Toprağın Gücü, <br />
            <span className="font-serif italic font-normal text-black/30">Zanaatın Hafızası.</span>
          </h2>

          <div className="mt-12 md:mt-16 space-y-8">
            <p className="text-base md:text-[19px] font-light leading-relaxed text-black/60 max-w-2xl mx-auto tracking-tight">
              Yalova’nın kalbinde, sadece beton ve çelikle değil; her projeye bir ruh, her köşeye bir anlam katarak başladık. Bizim için her yapı, 
              <span className="text-black/100 font-medium italic"> bir ailenin geleceğine bırakılan sessiz bir sözdür.</span>
            </p>
            
            <p className="text-[13px] md:text-[15px] font-light leading-relaxed text-black/40 max-w-xl mx-auto">
              Onlarca yıllık birikimimizi modern mimariyle harmanlarken, dürüstlüğü en temel yapı malzememiz olarak kabul ettik. Aygün Yapı, estetiği bir amaç değil, doğru mühendisliğin doğal bir sonucu olarak görür.
            </p>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-12 border-t border-black/5 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center">
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-3xl font-light text-[#0A1A2B] tracking-tighter">1998</span>
            <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase">Kuruluş</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-black/5 pl-4 md:pl-0 md:border-l-0">
            <span className="text-2xl md:text-3xl font-light text-[#0A1A2B] tracking-tighter">Yalova</span>
            <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase">Merkez Ofis</span>
          </div>
          <div className="flex flex-col gap-1 border-t md:border-t-0 pt-4 md:pt-0">
            <span className="text-2xl md:text-3xl font-light text-[#0A1A2B] tracking-tighter">%100</span>
            <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase">Taahhüt Sadakati</span>
          </div>
          <div className="flex flex-col gap-1 border-t border-l md:border-t-0 md:border-l-0 pt-4 md:pt-0 pl-4 md:pl-0">
            <span className="text-2xl md:text-3xl font-light text-[#0A1A2B] tracking-tighter">∞</span>
            <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase">Vizyoner Tasarım</span>
          </div>
        </div>

        <div className="absolute top-12 right-12 opacity-10 hidden md:block">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
             <path d="M0 1H39V40" stroke="black" strokeWidth="2"/>
           </svg>
        </div>
        <div className="absolute bottom-12 left-12 opacity-10 hidden md:block">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="rotate-180">
             <path d="M0 1H39V40" stroke="black" strokeWidth="2"/>
           </svg>
        </div>

      </div>

    </section>
  );
}