"use client";

import React, { useState } from "react";
import Image from "next/image";

const locations = [
  {
    id: 1,
    title: "Yalova Tasarım Ofisi",
    address: "Yalova Merkez / Türkiye",
    phone: "+90 555 111 22 33",
    note: "Tasarım görüşmeleri ve proje planlama",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    left: "42%",
    top: "38%",
    cardSide: "right" as const,
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=40.6554,29.2746&travelmode=driving",
  },
  {
    id: 2,
    title: "İzmit Merkez Atölye",
    address: "İzmit, Kocaeli / Türkiye",
    phone: "+90 555 111 22 33",
    note: "Uygulama, üretim ve operasyon merkezi",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    left: "58%",
    top: "32%",
    cardSide: "left" as const,
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=40.7654,29.9408&travelmode=driving",
  },
];

function LocationPin({ loc }: { loc: (typeof locations)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute z-10"
      style={{ left: loc.left, top: loc.top, transform: "translate(-50%, -50%)" }}
    >
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="group relative flex items-center justify-center focus:outline-none"
        aria-label={loc.title}
      >
        <span className="absolute h-10 w-10 rounded-full bg-[#0A1A2B]/10 transition-transform duration-300 group-hover:scale-125" />
        <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#0A1A2B] ring-[3px] ring-white shadow-[0_4px_14px_rgba(10,26,43,0.3)]">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
      </button>

      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={[
          "pointer-events-none absolute z-20 w-[230px]",
          "rounded-[1.25rem] border border-black/5 bg-white",
          "shadow-[0_20px_50px_rgba(0,0,0,0.12)]",
          "transition-all duration-200",
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
          loc.cardSide === "right"
            ? "left-7 top-1/2 -translate-y-1/2"
            : "right-7 top-1/2 -translate-y-1/2",
        ].join(" ")}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="relative h-28 w-full overflow-hidden rounded-t-[1.25rem]">
          <Image src={loc.image} alt={loc.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="p-4">
          <h4 className="text-sm font-medium text-[#0A1A2B]">{loc.title}</h4>
          <p className="mt-1 text-xs leading-5 text-black/50">{loc.address}</p>
          <p className="mt-0.5 text-xs leading-5 text-black/40">{loc.phone}</p>
          <p className="mt-2 text-[11px] leading-5 text-[#0A1A2B]/60">{loc.note}</p>


          <a
            href={loc.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A1A2B] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-85"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Adrese Git
          </a>
        </div>
      </div>
    </div>
  );
}

function scrollToForm(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("proje-formu")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">

      <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-24 min-h-[72vh] md:min-h-[80vh]">
        <div className="absolute inset-0 z-0">
        <Image
  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
  alt="Interior consultation"
  fill
  priority
  className="object-cover"
/>
          <div className="absolute inset-0 bg-[#0A1A2B]/46" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2B]/84 via-[#0A1A2B]/56 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-white/60">
                İletişim
              </span>
              <div className="h-px w-12 bg-white/20" />
            </div>

            <h1 className="mb-10 text-5xl font-extralight leading-[0.88] tracking-tighter text-white md:text-[110px]">
              Yeni Bir Projeye <br />
              <span className="font-serif font-normal italic text-white/40">
                Birlikte Başlayalım.
              </span>
            </h1>

            <p className="max-w-3xl text-lg font-light leading-8 text-white md:text-2xl md:leading-relaxed">
              Fikirlerinizi gerçeğe dönüştürmek için buradayız. Formu doldurarak ya da
              bizimle doğrudan iletişime geçerek süreci net, hızlı ve profesyonel bir
              şekilde başlatabilirsiniz.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#proje-formu"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:opacity-90"
              >
                Formu Doldurun
              </a>
              <a
                href="tel:+905551112233"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur transition hover:bg-white hover:text-[#0A1A2B]"
              >
                Hızlıca Arayın
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-20 right-[-120px] z-[1] h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] z-[1] h-[280px] w-[280px] rounded-full bg-black/20 blur-3xl" />
      </section>

      <section id="proje-formu" className="relative py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

            <div className="lg:col-span-7 rounded-[2rem] border border-white/80 bg-white p-7 shadow-[0_35px_90px_-22px_rgba(0,0,0,0.08)] md:rounded-[2.5rem] md:p-12">
              <div className="mb-10 flex flex-col gap-3 border-b border-black/5 pb-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#0A1A2B]/35">
                  Proje Talep Formu
                </span>
                <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-4xl">
                  Projenizi bizimle paylaşın.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-black/45 md:text-base">
                  Alanın türünü, beklentinizi ve ihtiyaç duyduğunuz desteği birkaç satırla
                  iletin. Size en uygun yönlendirmeyi hızlıca oluşturalım.
                </p>
              </div>

              <form
                action="https://formspree.io/f/mzzbnbyv"
                method="POST"
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7"
              >
                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/35">Ad Soyad</label>
                  <input type="text" name="name" required
                    className="rounded-2xl border border-black/5 bg-[#F7F7F8] px-5 py-4 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#0A1A2B]/15 focus:bg-white focus:ring-2 focus:ring-[#0A1A2B]/5"
                    placeholder="Adınız Soyadınız" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/35">E-Posta</label>
                  <input type="email" name="email" required
                    className="rounded-2xl border border-black/5 bg-[#F7F7F8] px-5 py-4 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#0A1A2B]/15 focus:bg-white focus:ring-2 focus:ring-[#0A1A2B]/5"
                    placeholder="hello@example.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/35">Telefon</label>
                  <input type="text" name="phone"
                    className="rounded-2xl border border-black/5 bg-[#F7F7F8] px-5 py-4 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#0A1A2B]/15 focus:bg-white focus:ring-2 focus:ring-[#0A1A2B]/5"
                    placeholder="+90 5xx xxx xx xx" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/35">Konu</label>
                  <input type="text" name="subject"
                    className="rounded-2xl border border-black/5 bg-[#F7F7F8] px-5 py-4 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#0A1A2B]/15 focus:bg-white focus:ring-2 focus:ring-[#0A1A2B]/5"
                    placeholder="Mimari danışmanlık / yenileme / iç mekan" />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="ml-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/35">Mesajınız</label>
                  <textarea name="message" required rows={6}
                    className="resize-none rounded-[1.75rem] border border-black/5 bg-[#F7F7F8] px-5 py-5 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#0A1A2B]/15 focus:bg-white focus:ring-2 focus:ring-[#0A1A2B]/5 md:rounded-[2rem]"
                    placeholder="Projenizden, beklentilerinizden ve mekan türünden kısaca bahsedin..." />
                </div>

                <div className="pt-2 md:col-span-2">
                  <button type="submit"
                    className="w-full rounded-full bg-[#0A1A2B] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(10,26,43,0.12)] transition-all duration-500 hover:-translate-y-0.5 hover:opacity-95 active:scale-95 md:w-auto">
                    Mesajı Gönder
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">

              <div className="relative overflow-hidden rounded-[2rem] bg-[#0A1A2B] p-8 text-white shadow-[0_30px_70px_-16px_rgba(10,26,43,0.28)] md:rounded-[2.5rem] md:p-10">
                <div className="absolute top-0 right-0 p-8 opacity-[0.08]">
                  <i className="bi bi-chat-right-dots text-8xl" />
                </div>
                <div className="relative z-10">
                  <span className="mb-6 block text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">
                    Hızlı İletişim
                  </span>
                  <h2 className="mb-10 text-3xl font-extralight tracking-tight text-white">
                    Bize doğrudan ulaşın.
                  </h2>
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">Telefon</span>
                      <a href="tel:+905551112233" className="text-xl font-light tracking-tight text-white transition hover:text-white/70">
                        +90 555 111 22 33
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">E-Posta</span>
                      <a href="mailto:info@aygunyapi.com" className="break-words text-xl font-light tracking-tight text-white transition hover:text-white/70">
                        info@aygunyapi.com
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">Çalışma Alanı</span>
                      <p className="text-base font-light leading-7 text-white/60">
                        İzmit, Kocaeli / Türkiye <br />
                        Yalova ve çevresi tasarım & uygulama desteği
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white p-4 shadow-[0_25px_60px_-18px_rgba(0,0,0,0.06)] md:rounded-[2.5rem] md:p-5">
                <div className="mb-5 flex items-center justify-between px-2 pt-2">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.35em] text-[#0A1A2B]/30">
                      Lokasyonlar
                    </span>
                    <h3 className="mt-2 text-2xl font-extralight tracking-tight text-[#0A1A2B]">
                      Proje Bölgelerimiz
                    </h3>
                  </div>
                </div>

                <div className="relative h-[340px] overflow-visible rounded-[1.75rem] bg-[#EEF1F4]">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
                    alt="Harita arkaplan"
                    fill
                    className="object-cover rounded-[1.75rem] opacity-[0.18]"
                  />
                  <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/55 to-[#E9EEF2]/85" />

                  {locations.map((loc) => (
                    <LocationPin key={loc.id} loc={loc} />
                  ))}

                  <div className="absolute left-[47%] top-[37%] h-px w-[13%] rotate-[-12deg] bg-[#0A1A2B]/12 pointer-events-none" />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {locations.map((loc, i) => (
                    <div key={loc.id} className="rounded-[1.25rem] bg-[#F7F7F8] p-4">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.32em] text-[#0A1A2B]/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-2 text-sm font-medium text-[#0A1A2B]">{loc.title}</h4>
                      <p className="mt-1 text-xs leading-5 text-black/50">{loc.note}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}