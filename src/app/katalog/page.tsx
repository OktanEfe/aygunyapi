"use client";

import KatalogHero from "@/components/katalog/KatalogHero";
import KoleksiyonBloklari from "@/components/katalog/KoleksiyonBloklari";
import IlhamPanosu from "@/components/katalog/IlhamPanosu";
import PdfIndir from "@/components/katalog/PdfIndir";
import ServicesCTA from "@/components/hizmetler/CTA";
import Link from "next/link";
import { motion } from "framer-motion";

export default function KatalogPage() {
  return (
    <main className="min-h-screen bg-white">
      <KatalogHero />
      <PdfIndir />
      <KoleksiyonBloklari />
      <IlhamPanosu />

      <section className="relative overflow-hidden bg-[#F5F5F7] px-4 py-16 md:px-6 md:py-24">
        <div className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0A1A2B] px-8 py-14 text-center shadow-[0_50px_100px_-30px_rgba(0,0,0,0.28)] md:rounded-[4rem] md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
  animate={{
    x: [0, -420, 220, -340],
    y: [0, 320, -180, 380],
    scale: [1, 1.5, 1.18, 1.62],
    borderRadius: [
      "42% 58% 63% 37%",
      "56% 44% 26% 74%",
      "34% 66% 64% 36%",
      "42% 58% 63% 37%",
    ],
    opacity: [0.3, 0.58, 0.36, 0.6],
  }}
  transition={{
    duration: 11,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -top-24 -right-20 h-[760px] w-[760px] rounded-full bg-white/35 blur-[150px]"
/>

<motion.div
  animate={{
    x: [-260, 360, -180, 280],
    y: [320, -120, 360, 180],
    scale: [1.2, 0.95, 1.4, 1.05],
    borderRadius: [
      "52% 48% 24% 76%",
      "30% 70% 68% 32%",
      "60% 40% 32% 68%",
      "52% 48% 24% 76%",
    ],
    opacity: [0.2, 0.4, 0.24, 0.42],
  }}
  transition={{
    duration: 13,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -bottom-40 -left-32 h-[860px] w-[860px] rounded-full bg-white/18 blur-[145px]"
/>

<motion.div
  animate={{
    x: [0, 180, -120, 100],
    y: [0, -70, 130, -35],
    scale: [0.95, 1.22, 1.05, 1.18],
    opacity: [0.14, 0.28, 0.18, 0.26],
  }}
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/14 blur-[110px]"
/>
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-[-10%] top-[18%] h-32 animate-wave-slow rounded-[100%] bg-white/[0.05] blur-2xl" />
            <div className="absolute inset-x-[-15%] top-[42%] h-40 animate-wave-slower rounded-[100%] bg-white/[0.04] blur-3xl" />
            <div className="absolute inset-x-[-8%] bottom-[12%] h-28 animate-wave-slow rounded-[100%] bg-white/[0.03] blur-2xl" />
          </div>

          <div className="pointer-events-none absolute inset-0">
            {[
              "left-[8%] top-[20%]",
              "left-[16%] top-[36%]",
              "left-[24%] top-[16%]",
              "left-[33%] top-[58%]",
              "left-[46%] top-[22%]",
              "left-[56%] top-[46%]",
              "left-[66%] top-[18%]",
              "left-[76%] top-[54%]",
              "left-[86%] top-[24%]",
              "left-[58%] top-[72%]",
              "left-[20%] top-[74%]",
            ].map((pos, i) => (
              <span
                key={i}
                className={`absolute ${pos} h-1.5 w-1.5 animate-float-particle rounded-full bg-white/45`}
                style={{
                  animationDelay: `${i * 0.22}s`,
                  animationDuration: `${2.8 + (i % 3) * 0.8}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mb-10">
              <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.6em] text-white/45 md:text-[11px]">
                Seçim Yaklaşımı
              </span>
              <div className="mx-auto h-px w-12 bg-white/20" />
            </div>

            <h2 className="text-[34px] font-extralight leading-[1.05] tracking-[-0.04em] text-white md:text-[72px]">
              Doğru malzeme, <br />
              <span className="font-serif font-normal italic text-white">
                doğru mekan diliyle anlam kazanır.
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed tracking-tight text-white/75 md:mt-12 md:text-[18px]">
              Yüzey, ton ve doku kararlarını; mekanın ışığına, kullanım alışkanlığına
              ve genel tasarım karakterine göre daha rafine bir şekilde ele alıyoruz.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row md:mt-16">
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:bg-white/90"
              >
                Ürünleri İncele
              </Link>

              <a
                href="#koleksiyonlar"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Koleksiyonlara Dön
              </a>
            </div>
          </div>

          <div className="absolute top-10 right-10 hidden opacity-20 md:block">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M0 1H39V40" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          <div className="absolute bottom-10 left-10 hidden opacity-20 md:block">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="rotate-180">
              <path d="M0 1H39V40" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      <ServicesCTA />
    </main>
  );
}