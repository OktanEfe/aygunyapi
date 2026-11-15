"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects as allProjects } from "@/data/projects";

const projects = allProjects.map((p) => ({
  id: p.slug,
  slug: p.slug,
  title: p.title,
  type: p.category as string,
  src: p.images[0],
}));

const categories = ["Tümü", ...Array.from(new Set(projects.map((p) => p.type)))];


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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group">
              <Link href={`/projeler/${p.slug}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-[#0A1A2B]">
                  <Image 
                    src={p.src} 
                    alt={p.title} 
                    fill 
                    sizes="(min-width: 768px) 33vw, 100vw"
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