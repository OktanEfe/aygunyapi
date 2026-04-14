"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductsHero() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-20 md:pt-52 md:pb-28 min-h-[78vh] md:min-h-[88vh]">
      <div className="absolute inset-0 ">
        <Image
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80"
          alt="Premium kitchen interior"
          fill
          priority
          className="object-cover"
        />
        

        <div className="absolute inset-0 bg-[#0A1A2B]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2B]/85 via-[#0A1A2B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-white/60">
              Koleksiyonlar
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>

          <h1 className="max-w-4xl text-5xl font-extralight leading-[0.92] tracking-tighter text-white md:text-[96px]">
            Yüzeylerin <br />
            <span className="font-serif italic font-normal text-white/40">
              Sessiz Estetiği.
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Mutfak tezgahlarından özel üretim kapaklara, yaşam alanının karakterini
            belirleyen seçili yüzeyleri ve malzeme çözümlerini keşfedin.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#urun-kategorileri"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:opacity-90"
            >
              Koleksiyonları Keşfet
            </a>

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur transition hover:bg-white hover:text-[#0A1A2B]"
            >
              Uzmanla Görüş
            </Link>
          </div>

          
        </div>
      </div>

      <div className="pointer-events-none absolute -top-20 right-[-120px] z-[1] h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] z-[1] h-[280px] w-[280px] rounded-full bg-black/20 blur-3xl" />
    </section>
  );
}