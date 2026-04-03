"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop", title: "Minimalist Salon", category: "İç Mimari", w: 800, h: 1200 },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bed3a88?q=80&w=800&auto=format&fit=crop", title: "İskandinav Mutfak", category: "Dekorasyon", w: 800, h: 600 },
  { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800&auto=format&fit=crop", title: "Mermer Banyo", category: "Restorasyon", w: 800, h: 1000 },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop", title: "Brütalist Cephe", category: "Mimari", w: 800, h: 800 },
  { src: "https://images.unsplash.com/photo-1600585154526-990dcea4fc0a?q=80&w=800&auto=format&fit=crop", title: "Yönetici Ofisi", category: "Kurumsal", w: 800, h: 1100 },
  { src: "https://images.unsplash.com/photo-1600571100010-388a10731f82?q=80&w=800&auto=format&fit=crop", title: "Cam Balkon", category: "Uygulama", w: 800, h: 600 },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop", title: "Teras Alanı", category: "Dış Mekan", w: 800, h: 1200 },
  { src: "https://images.unsplash.com/photo-1599427303058-f06cbcf4f320?q=80&w=800&auto=format&fit=crop", title: "Peyzaj", category: "Mimari", w: 800, h: 700 },
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [active]);

  return (
    <section className="bg-[#F9F9F9] py-20 md:py-32 overflow-hidden border-t border-black/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black/30 mb-4">Görsel Seçkiler</span>
          <h2 className="text-4xl md:text-8xl font-extralight tracking-tighter text-[#0A1A2B] leading-none mb-6">
            Zanaatın <span className="font-serif italic text-black/20">İmzası</span>
          </h2>
        </div>

        {/* MOBİL: Yatay Kaydırma (Snap Carousel) */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-10 px-2">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="min-w-[85vw] snap-center aspect-[3/4] relative rounded-[2rem] overflow-hidden bg-[#0A1A2B]"
              onClick={() => setActive(img.src)}
            >
              <Image src={img.src} alt={img.title} fill className="object-cover opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/60 mb-1 block">{img.category}</span>
                <h3 className="text-xl font-light text-white tracking-tight">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* MASAÜSTÜ: 8'li Masonry Grid */}
        <div className="hidden md:block columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative break-inside-avoid overflow-hidden rounded-[2.5rem] cursor-pointer bg-[#0A1A2B] transition-transform duration-500"
              onClick={() => setActive(img.src)}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={img.w}
                height={img.h}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/60 mb-2">{img.category}</span>
                <h3 className="text-2xl font-light text-white tracking-tight">{img.title}</h3>
                <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <i className="bi bi-plus-lg text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0A1A2B]/95 backdrop-blur-2xl p-4 transition-all duration-500" onClick={() => setActive(null)}>
          <button className="absolute top-6 right-6 text-white/50 text-5xl font-extralight">&times;</button>
          <img src={active} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl animate-in zoom-in-95 duration-300" alt="Büyük Görsel" />
        </div>
      )}
    </section>
  );
}