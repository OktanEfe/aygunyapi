"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["Tümü", "Mutfak", "Banyo", "İç Mekan", "Yenileme"];

const projects = [
  { id: 1, slug: "modern-loft", title: "Modern Loft", type: "İç Mekan", src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  { id: 2, slug: "mermer-mutfak", title: "Mermer Dokulu Mutfak", type: "Mutfak", src: "https://images.unsplash.com/photo-1600566752355-35792bed3a88" },
  { id: 3, slug: "spa-banyo", title: "Spa Konsept Banyo", type: "Banyo", src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b" },
  { id: 4, slug: "antik-restorasyon", title: "Antik Restorasyon", type: "Yenileme", src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde" },
];

export default function Editorial() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProjects = activeCategory === "Tümü" 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        
        {/* Kategori Filtreleme Butonları */}
        <div className="flex flex-wrap gap-4 mb-20">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full border transition-all text-[10px] font-bold uppercase tracking-[0.2em] ${
                activeCategory === cat 
                ? "bg-[#0A1A2B] text-white border-[#0A1A2B]" 
                : "bg-transparent border-black/5 text-black hover:border-black/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group">
              <Link href={`/projeler/${p.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 bg-[#0A1A2B]">
                  <Image 
                    src={`${p.src}?q=80&w=1000`} 
                    alt={p.title} 
                    fill 
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-60" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="px-8 py-3 bg-white text-[#0A1A2B] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                        Projeyi İncele
                     </span>
                  </div>
                </div>
              </Link>
              
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/20 mb-2 block">{p.type}</span>
              <Link href={`/projeler/${p.slug}`}>
                <h3 className="text-3xl font-light text-[#0A1A2B] tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}