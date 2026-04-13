"use client";

import Image from "next/image";

export default function ProjectsHero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-12 md:pt-40 md:pb-16 min-h-[65vh] md:min-h-[70vh]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
          alt="Modern interior project"
          fill
          priority
          className="object-cover"
        />

        {/* MIDNIGHT */}
        <div className="absolute inset-0 bg-[#0A1A2B]/35" />

        {/* SOL OKUNURLUK */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-transparent" />

        {/* DERİNLİK */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-white/10" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-black/40">
              Portfolyo
            </span>
            <div className="h-px w-12 bg-black/10" />
          </div>

          <h1 className="text-5xl md:text-[110px] font-extralight tracking-tighter leading-[0.88] text-[#0A1A2B] mb-8">
            Seçili <br />
            <span className="font-serif italic font-normal text-black/25">
              Projeler.
            </span>
          </h1>

          <p className="text-base md:text-xl font-light text-black/60 max-w-xl leading-relaxed">
            Yaşam alanlarına kazandırdığımız rafine dokunuşlar ve zamansız mimari yaklaşımlar.
          </p>
        </div>
      </div>

      {/* ALT FADE (çok kritik geçiş) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}