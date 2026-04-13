"use client";

import Image from "next/image";
import Link from "next/link";

export default function KatalogHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 min-h-[78vh] md:min-h-[88vh]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80"
          alt="Interior design catalog"
          fill
          priority
          className="object-cover"
        />

        {/* karartma */}
        <div className="absolute inset-0 bg-[#0A1A2B]/55" />

        {/* soldan yazı okunurluğu */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2B]/85 via-[#0A1A2B]/60 to-transparent" />

        {/* üst-alt derinlik */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl">
          
          <div className="mb-8 flex items-center gap-4">
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.55em] text-white/60">
              Seçkin Koleksiyonlar
            </span>
            <div className="h-px w-full bg-white/20" />
          </div>

          <h1 className="mb-10 text-5xl font-extralight leading-[0.88] tracking-tighter text-white md:text-[110px]">
            Malzeme & <br />
            <span className="font-serif font-normal italic text-white/40">
              Tasarım Dünyası.
            </span>
          </h1>

          <p className="max-w-2xl text-lg font-light leading-8 text-white/70 md:text-2xl md:leading-relaxed">
            Seçiminize yön veren, dokularıyla mekanın karakterini belirleyen seçili
            yüzey ve koleksiyon dünyamızı keşfedin.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#koleksiyonlar"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:opacity-90"
            >
              Koleksiyonları İncele
            </a>

            <Link
              href="/urunler"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur transition hover:bg-white hover:text-[#0A1A2B]"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </div>

      {/* AMBIENT SHAPES */}
      <div className="pointer-events-none absolute -top-20 right-[-120px] z-[1] h-[380px] w-[380px] rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] z-[1] h-[280px] w-[280px] rounded-full bg-black/20 blur-3xl" />
    </section>
  );
}