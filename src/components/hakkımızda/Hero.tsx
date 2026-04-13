"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 min-h-[78vh] md:min-h-[88vh]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Modern interior design"
          fill
          priority
          className="object-cover"
        />

        {/* MIDNIGHT DEPTH */}
        <div className="absolute inset-0 bg-[#0A1A2B]/30" />

        {/* SOL OKUNURLUK (çok önemli) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent" />

        {/* ALT ÜST DERİNLİK */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl">
          
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-black/40">
              Biz Kimiz?
            </span>
            <div className="h-px w-12 bg-black/10" />
          </div>

          <h1 className="mb-10 text-5xl font-extralight leading-[0.88] tracking-tighter text-[#0A1A2B] md:text-[110px]">
            Mimari Bir <br />
            <span className="font-serif font-normal italic text-black/25">
              Manifesto.
            </span>
          </h1>

          <p className="max-w-3xl text-lg font-light leading-8 text-black/60 md:text-2xl md:leading-relaxed">
            Aygün Yapı, Yalova’nın köklü geçmişini modern tasarımın cesur çizgileriyle
            birleştiren bir vizyonun eseridir. Biz sadece inşa etmiyoruz;{" "}
            <span className="italic text-black">
              yaşamın kendisine form veriyoruz.
            </span>
          </p>
        </div>
      </div>

      {/* 1998 */}
      <div className="pointer-events-none absolute top-1/2 right-[-4%] z-[1] hidden -translate-y-1/2 select-none md:block">
        <span className="text-[24vw] font-black tracking-tighter text-[#0A1A2B]/[0.05]">
          1998
        </span>
      </div>

      {/* AMBIENT */}
      <div className="pointer-events-none absolute -top-20 right-[-120px] z-[1] h-[380px] w-[380px] rounded-full bg-[#0A1A2B]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] z-[1] h-[280px] w-[280px] rounded-full bg-black/[0.04] blur-3xl" />
    </section>
  );
}