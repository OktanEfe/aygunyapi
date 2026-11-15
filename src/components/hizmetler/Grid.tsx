"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Mutfak Tasarımı",
    desc: "Kullanım ihtiyaçlarını ve tasarım dilini bir araya getiren, mekâna özel mutfak çözümleri.",
    detail:
      "Ölçü, depolama ihtiyacı, malzeme ve kullanım alışkanlıklarını birlikte değerlendirerek; mekâna uygun yerleşim ve özel üretim mutfak çözümleri tasarlıyoruz.",
    image: "/assets/photos/mutfak-yesil/1.jpg",
  },
  {
    title: "Banyo Yenileme",
    desc: "Kullanım ihtiyaçlarına ve mekânın ölçülerine uygun, işlevsel banyo çözümleri.",
    detail:
      "Mekânın ölçülerini ve kullanım ihtiyaçlarını dikkate alarak lavabo, duş, klozet, dolap ve tezgâh seçimlerini birlikte değerlendiriyor; mevcut banyoyu daha kullanışlı ve bütünlüklü hale getiriyoruz.",
    image: "/assets/photos/banyo/2.jpg",
  },
  {
    title: "İç Mekân Çözümleri",
    desc: "Mekânın ihtiyaçlarını ve tasarım karakterini bir arada ele alan çözümler.",
    detail:
      "Alan kullanımından mobilya ve malzeme seçimlerine kadar iç mekânın farklı ihtiyaçlarını değerlendiriyor, tasarımın bütünlüğünü gözetiyoruz.",
    image: "/assets/photos/tv-unitesi/1.jpg",
  },
  {
    title: "Malzeme Danışmanlığı",
    desc: "Tasarım ve uygulama sürecine uygun malzeme seçimleri.",
    detail:
      "Tezgâh, kapak, yüzey ve tamamlayıcı malzemeleri; kullanım, ölçü, uygulama koşulları ve tasarım bütünlüğünü göz önünde bulundurarak birlikte değerlendiriyoruz.",
    image: "/assets/photos/mutfak-mermer/6.jpg",
  },
  {
    title: "Proje Yönetimi",
    desc: "Tasarım, üretim ve uygulama süreçlerinin planlı ve koordineli şekilde yürütülmesi.",
    detail:
      "Projenin tasarım ve planlama aşamasından üretim ve uygulamaya kadar olan sürecini takip ediyor, ilgili ekip ve işlerin koordinasyonunu sağlayarak sürecin plan doğrultusunda ilerlemesine destek oluyoruz.",
    image: "/assets/photos/ofis/1.jpg",
  },
  {
    title: "Özel Projeler",
    desc: "Projenin ihtiyaçlarına göre tasarlanan, ölçülendirilen ve uygulanan çözümler.",
    detail:
      "Standart ürünlerin yeterli olmadığı durumlarda, mekâna ve kullanım ihtiyacına göre özel ölçü, malzeme ve detaylarla çözümler geliştiriyor; üretim ve uygulama sürecini birlikte yürütüyoruz.",
    image: "/assets/photos/vitrin/2.jpg",
  },
];

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  const id = `hizmet-${i}`;

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={s.image}
          alt={s.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div
          id={id}
          className={`absolute inset-0 flex items-end bg-midnight/90 p-7 transition-opacity duration-500 md:p-8 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <p className="text-[15px] font-light leading-[1.8] text-white/85">{s.detail}</p>
        </div>
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-midnight backdrop-blur">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-7">
        <h3 className="text-[24px] font-light tracking-tight text-midnight">{s.title}</h3>
        <p className="mt-3 flex-1 text-[15px] font-light leading-[1.75] text-midnight/60">{s.desc}</p>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-6 inline-flex items-center gap-3 self-start text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo transition-colors hover:text-midnight"
        >
          Detaylar
          <i className={`bi bi-plus-lg text-xs transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
        </button>
      </div>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="container-x">
        <div className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="eyebrow">Neler Yapıyoruz?</span>
            <h2 className="mt-6 text-[34px] font-extralight leading-[1.05] tracking-[-0.03em] text-midnight md:text-[60px]">
              Tasarımdan <span className="font-serif font-normal italic text-bordo">Uygulamaya.</span>
            </h2>
          </div>
          <p className="max-w-lg self-end text-[16px] font-light leading-[1.8] text-midnight/65 lg:col-span-5 lg:col-start-8">
            Mimari, iç mimari, mobilya ve uygulama süreçlerini bir bütün olarak ele alıyor, projeye özel
            çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
