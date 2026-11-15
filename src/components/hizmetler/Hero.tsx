"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 min-h-[78vh] md:min-h-[88vh]">
      <div className="absolute inset-0">
        <Image
          src="/assets/photos/mutfak-mermer/1.jpg"
          alt="Mutfak uygulaması"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1A2B]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2B]/72 via-[#0A1A2B]/48 to-[#0A1A2B]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
      </div>

      <div className="pointer-events-none absolute -top-20 right-[-120px] h-[380px] w-[380px] rounded-full bg-white/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-black/[0.18] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.55em] text-white/65">
              Uzmanlık Alanlarımız
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>

          <h1 className="mb-10 text-5xl font-extralight leading-[0.88] tracking-tighter text-white md:text-[110px]">
            Mekâna Değer <br />
            <span className="font-serif font-normal italic text-white/45">
              Katan Çözümler.
            </span>
          </h1>

          <p className="max-w-2xl text-lg font-light leading-8 text-white md:text-2xl md:leading-relaxed">
            Mimari tasarımdan uygulamaya, iç mekân çözümlerinden özel üretime kadar
            farklı ihtiyaçlara yönelik tasarım ve uygulama hizmetleri sunuyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}