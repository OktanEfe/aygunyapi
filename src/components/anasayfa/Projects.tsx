"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    { id: 1, title: "Modern Villa Tasarımı", category: "Mimari", img: "/assets/projects/p1.jpg" },
    { id: 2, title: "Lüks Ofis Dekorasyonu", category: "İç Mekan", img: "/assets/projects/p2.jpg" },
    { id: 3, title: "Dış Cephe Kompozit", category: "Uygulama", img: "/assets/projects/p3.jpg" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black/30">Seçkiler</span>
              <div className="h-px w-12 bg-black/10" />
            </div>
            <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter text-[#0A1A2B] leading-none">
              Öne Çıkan <br /> 
              <span className="font-serif italic font-normal text-black/20">Projelerimiz</span>
            </h2>
          </div>
          
          <Link 
            href="/projeler" 
            className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors duration-500"
          >
            Tüm Koleksiyonu İncele
            <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
              <i className="bi bi-arrow-right text-lg"></i>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/projeler/${p.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-black rounded-3xl md:rounded-[2.5rem]"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-3 block">
                  {p.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight mb-6">
                  {p.title}
                </h3>
                
                <div className="overflow-hidden">
                  <div className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-full group-hover:translate-y-0">
                    Detayları Görüntüle 
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-75 group-hover:scale-100 text-white">
                <i className="bi bi-plus-lg text-xl"></i>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-black/5 pt-12 gap-8">
          <div className="flex items-center gap-12">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-black tracking-[0.4em] text-black/20 uppercase">Standart</span>
              <span className="text-xs font-medium text-black/60 tracking-tight italic font-serif leading-none">Kusursuz İşçilik</span>
            </div>
            <div className="w-px h-8 bg-black/5" />
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-black tracking-[0.4em] text-black/20 uppercase">Lokasyon</span>
              <span className="text-xs font-medium text-black/60 tracking-tight italic font-serif leading-none">Yalova & Çevresi</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="w-24 h-px bg-black/10" />
            <div className="w-4 h-px bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}