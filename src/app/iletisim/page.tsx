"use client";

import React from "react";
import Image from "next/image";
import { site, mapsEmbed } from "@/data/site";

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
  src="/assets/photos/salon/3.jpg"
  alt="Aygün Yapı uygulaması"
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
                href={site.phoneHref}
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
                      <a href={site.phoneHref} className="text-xl font-light tracking-tight text-white transition hover:text-white/70">
                        {site.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">E-Posta</span>
                      <a href={`mailto:${site.email}`} className="break-words text-xl font-light tracking-tight text-white transition hover:text-white/70">
                        {site.email}
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">Çalışma Alanı</span>
                      <p className="text-base font-light leading-7 text-white/60">
                        Merkez / Yalova <br />
                        Yalova ve çevresi tasarım & uygulama desteği
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white p-4 shadow-[0_25px_60px_-18px_rgba(0,0,0,0.06)] md:rounded-[2.5rem] md:p-5">
                <div className="mb-5 px-2 pt-2">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.35em] text-[#0A1A2B]/30">
                    Lokasyonlar
                  </span>
                  <h3 className="mt-2 text-2xl font-extralight tracking-tight text-[#0A1A2B]">
                    Proje Bölgelerimiz
                  </h3>
                </div>

                <div className="relative h-[320px] overflow-hidden rounded-[1.75rem] bg-[#EEF1F4]">
                  <iframe
                    title="Aygün Yapı konumu"
                    src={mapsEmbed}
                    className="absolute inset-0 h-full w-full border-0 grayscale-[0.3]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}