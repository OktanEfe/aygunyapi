"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-36">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -top-20 right-[-120px] h-[360px] w-[360px] rounded-full bg-[#0A1A2B]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-black/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32%] bg-[#F7F7F8] md:block" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
                <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-[#0A1A2B]/35">
                  Sıradaki Adım
                </span>
                <div className="h-px w-12 bg-[#0A1A2B]/10" />
              </div>

              <h2 className="text-5xl font-extralight leading-[0.9] tracking-tighter text-[#0A1A2B] md:text-[96px]">
                Hayalinizdeki Yapıyı <br />
                <span className="font-serif font-normal italic text-[#0A1A2B]/20">
                  Birlikte Kuralım.
                </span>
              </h2>

              <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-8 text-[#0A1A2B]/55 md:mx-0 md:text-lg">
                Projeniz ister kapsamlı bir yenileme, ister ince detaylar gerektiren
                özel bir yaşam alanı olsun; malzeme seçiminden uygulama sürecine kadar
                her aşamada rafine, kontrollü ve güven veren bir yol haritası sunuyoruz.
              </p>

              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap lg:items-start">
                <Link
                  href="/iletisim"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0A1A2B] px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,26,43,0.18)] active:scale-95"
                >
                  <span className="relative z-10">Hemen Teklif Alın</span>
                  <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
                </Link>

                <Link
                  href="tel:+905000000000"
                  className="group inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A1A2B]/55 transition-colors hover:text-[#0A1A2B]"
                >
                  <span>Bizi Arayın</span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A1A2B]/10 bg-white transition-all duration-300 group-hover:border-[#0A1A2B]/20 group-hover:bg-[#0A1A2B]/5">
                    <i className="bi bi-telephone text-sm" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right info panel */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[2rem] border border-[#0A1A2B]/6 bg-white p-8 shadow-[0_30px_60px_-18px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:-translate-y-1 md:p-10">
                <span className="mb-6 block text-[9px] font-semibold uppercase tracking-[0.32em] text-[#0A1A2B]/25">
                  Ofis & Uygulama
                </span>

                <h3 className="mb-3 text-2xl font-light tracking-tight text-[#0A1A2B]">
                  Merkez Atölye
                </h3>

                <p className="text-sm font-light leading-7 text-[#0A1A2B]/50">
                  İzmit, Kocaeli / Türkiye <br />
                  Yalova ve çevresi proje & uygulama desteği
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#0A1A2B] p-8 text-white shadow-[0_30px_60px_-18px_rgba(10,26,43,0.28)] transition-transform duration-500 hover:-translate-y-1 md:p-10">
                <span className="mb-6 block text-[9px] font-semibold uppercase tracking-[0.32em] text-white/30">
                  E-Posta
                </span>

                <h3 className="mb-3 break-words text-2xl font-light tracking-tight text-white">
                  info@aygunyapi.com
                </h3>

                <p className="text-sm font-light leading-7 text-white/45">
                  Proje talebinizi dilediğiniz zaman iletebilir, detaylı dönüş için
                  bizimle doğrudan iletişime geçebilirsiniz.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full justify-center opacity-10">
        <div className="h-24 w-px bg-gradient-to-t from-[#0A1A2B] to-transparent" />
      </div>
    </section>
  );
}