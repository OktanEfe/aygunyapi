"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const dokular = [
  {
    id: 1,
    ad: "Anthracite Silk",
    ton: "Koyu Gri",
    etiket: "Mat Yüzey",
    alan: "Modern mutfaklar",
    slug: "anthracite-silk",
    img: "https://images.unsplash.com/photo-1503174971373-b1f69850bbd6",
    oneriler:
      "Keskin ve rafine bir yüzey karakteri sunar. Açık ton dolaplarla güçlü kontrast oluşturur.",
  },
  {
    id: 2,
    ad: "Natural Oak",
    ton: "Sıcak Meşe",
    etiket: "Doğal Dokulu",
    alan: "Sıcak yaşam alanları",
    slug: "natural-oak",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    oneriler:
      "Daha sıcak ve dengeli iç mekanlar için uygundur. Doğal ışıkla birlikte daha davetkar görünür.",
  },
  {
    id: 3,
    ad: "Statuary White",
    ton: "Damarlı Beyaz",
    etiket: "Parlak",
    alan: "Ferah banyo ve tezgahlar",
    slug: "statuary-white",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    oneriler:
      "Ferah ve zamansız mekan dili kurmak için idealdir. Daha aydınlık ve temiz bir görünüm sağlar.",
  },
];

export default function DokuIzleme() {
  const [aktifDoku, setAktifDoku] = useState(dokular[0]);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/25">
            Yüzey Seçenekleri
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
            Seçiminize en yakın <br className="hidden md:block" />
            yüzey dilini keşfedin.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sol taraf */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {dokular.map((doku) => {
                const aktif = aktifDoku.id === doku.id;

                return (
                  <button
                    key={doku.id}
                    onClick={() => setAktifDoku(doku)}
                    className={`group overflow-hidden rounded-[2rem] border text-left transition-all duration-500 ${
                      aktif
                        ? "border-[#0A1A2B] shadow-[0_18px_40px_rgba(10,26,43,0.08)]"
                        : "border-black/5 hover:border-[#0A1A2B]/15 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                    }`}
                    type="button"
                  >
                    <div className="relative aspect-[4/4.2] bg-[#F5F5F7]">
                      <Image
                        src={`${doku.img}?q=80&w=600`}
                        alt={doku.ad}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="bg-[#FAFAFA] p-5">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0A1A2B]/70">
                          {doku.etiket}
                        </span>

                        {aktif && (
                          <span className="rounded-full bg-[#0A1A2B]/6 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0A1A2B]">
                            Seçili
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-light tracking-tight text-[#0A1A2B]">
                        {doku.ad}
                      </h3>

                      <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/30">
                        {doku.ton}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sağ taraf */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#FCFCFC] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="relative aspect-[4/4.8] bg-[#F3F3F3]">
                  <Image
                    src={`${aktifDoku.img}?q=80&w=1200`}
                    alt={aktifDoku.ad}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07121f]/75 via-[#07121f]/15 to-transparent p-7">
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.35em] text-white/65">
                      Seçili Yüzey
                    </span>
                    <h3 className="text-3xl font-light tracking-tight text-white">
                      {aktifDoku.ad}
                    </h3>
                  </div>
                </div>

                <div className="space-y-8 p-7 md:p-8">
                  <div className="grid grid-cols-2 gap-5 border-b border-black/5 pb-7">
                    <div>
                      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.28em] text-black/20">
                        Ton
                      </span>
                      <p className="text-base font-light text-[#0A1A2B]">
                        {aktifDoku.ton}
                      </p>
                    </div>

                    <div>
                      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.28em] text-black/20">
                        Yüzey Tipi
                      </span>
                      <p className="text-base font-light text-[#0A1A2B]">
                        {aktifDoku.etiket}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.28em] text-black/20">
                        Önerilen Kullanım
                      </span>
                      <p className="text-base font-light text-[#0A1A2B]">
                        {aktifDoku.alan}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] bg-[#F6F6F7] p-6">
                    <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0A1A2B]/70">
                      Uzman Notu
                    </span>
                    <p className="text-sm leading-7 text-black/50">
                      {aktifDoku.oneriler}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link
                      href={`/urunler/${aktifDoku.slug}`}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#0A1A2B] px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition hover:opacity-90"
                    >
                      Üründe İncele
                    </Link>

                    <button className="w-full rounded-full border border-black/10 px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1A2B] transition hover:bg-black/[0.03]">
                      WhatsApp ile Sor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}