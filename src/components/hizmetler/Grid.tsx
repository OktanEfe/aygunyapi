"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Mutfak Tasarımı",
    desc: "Kullanım ihtiyaçlarını ve tasarım dilini bir araya getiren, mekâna özel mutfak çözümleri.",
    detail:
      "Ölçü, depolama ihtiyacı, malzeme ve kullanım alışkanlıklarını birlikte değerlendirerek; mekâna uygun yerleşim ve özel üretim mutfak çözümleri tasarlıyoruz.",
    icon: "bi-layout-sidebar",
    image:
      "/assets/photos/mutfak-yesil/1.jpg",
  },
  {
    title: "Banyo Yenileme",
    desc: "Kullanım ihtiyaçlarına ve mekânın ölçülerine uygun, işlevsel banyo çözümleri.",
    detail:
      "Mekânın ölçülerini ve kullanım ihtiyaçlarını dikkate alarak lavabo, duş, klozet, dolap ve tezgâh seçimlerini birlikte değerlendiriyor; mevcut banyoyu daha kullanışlı ve bütünlüklü hale getiriyoruz.",
    icon: "bi-droplet",
    image:
      "/assets/photos/banyo/2.jpg",
  },
  {
    title: "İç Mekân Çözümleri",
    desc: "Mekânın ihtiyaçlarını ve tasarım karakterini bir arada ele alan çözümler.",
    detail:
      "Alan kullanımından mobilya ve malzeme seçimlerine kadar iç mekânın farklı ihtiyaçlarını değerlendiriyor, tasarımın bütünlüğünü gözetiyoruz.",
    icon: "bi-house-heart",
    image:
      "/assets/photos/tv-unitesi/1.jpg",
  },
  {
    title: "Malzeme Danışmanlığı",
    desc: "Tasarım ve uygulama sürecine uygun malzeme seçimleri.",
    detail:
      "Tezgâh, kapak, yüzey ve tamamlayıcı malzemeleri; kullanım, ölçü, uygulama koşulları ve tasarım bütünlüğünü göz önünde bulundurarak birlikte değerlendiriyoruz.",
    icon: "bi-palette",
    image:
      "/assets/photos/mutfak-mermer/6.jpg",
  },
  {
    title: "Proje Yönetimi",
    desc: "Tasarım, üretim ve uygulama süreçlerinin planlı ve koordineli şekilde yürütülmesi.",
    detail:
      "Projenin tasarım ve planlama aşamasından üretim ve uygulamaya kadar olan sürecini takip ediyor, ilgili ekip ve işlerin koordinasyonunu sağlayarak sürecin plan doğrultusunda ilerlemesine destek oluyoruz.",
    icon: "bi-diagram-3",
    image:
      "/assets/photos/ofis/1.jpg",
  },
  {
    title: "Özel Projeler",
    desc: "Projenin ihtiyaçlarına göre tasarlanan, ölçülendirilen ve uygulanan çözümler.",
    detail:
      "Standart ürünlerin yeterli olmadığı durumlarda, mekâna ve kullanım ihtiyacına göre özel ölçü, malzeme ve detaylarla çözümler geliştiriyor; üretim ve uygulama sürecini birlikte yürütüyoruz.",
    icon: "bi-stars",
    image:
      "/assets/photos/vitrin/2.jpg",
  },
];

function ServiceCard({ s }: { s: (typeof services)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[430px] w-full cursor-pointer"
      style={{ perspective: "1500px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
        className="relative"
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] border border-black/8 bg-[#12263A] shadow-[0_18px_40px_rgba(0,0,0,0.04)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative h-[48%] w-full overflow-hidden">
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

            <div className="absolute left-6 bottom-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md">
              <i className={`bi ${s.icon} text-2xl text-white`} />
            </div>
          </div>

          <div className="flex h-[52%] flex-col justify-between p-6 md:p-7">
            <div>
              <h3 className="mb-4 text-[25px] font-light tracking-tight text-white">
                {s.title}
              </h3>

              <p className="max-w-[280px] text-[15px] font-light leading-relaxed text-white">
                {s.desc}
              </p>
            </div>

            <button className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/75 transition-all duration-300 hover:text-white/90">
              <span>Detay İçin Tıklayınız</span>
              <div className="h-[1px] w-6 bg-[#0A1A2B]/20 transition-all hover:w-12 hover:bg-[#0A1A2B]" />
            </button>
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#12263A]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="absolute inset-0">
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover opacity-[0.22]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#12263A]/35 via-[#12263A]/75 to-[#12263A]/95" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-center p-8 text-center md:p-9">
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">
              Detaylar
            </h4>

            <p className="mb-8 text-[15px] font-light leading-relaxed text-white/90">
              {s.detail}
            </p>

            <Link
              href="/iletisim"
              onClick={(e) => e.stopPropagation()}
              className="mx-auto inline-flex scale-100 rounded-full bg-white px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A1A2B] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105 hover:bg-[#0A1A2B] hover:text-white hover:ring-1 hover:ring-white/50 active:scale-95"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-[#F5F5F7] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">
            Neler Yapıyoruz?
          </span>
          <h2 className="text-4xl font-extralight leading-tight tracking-tight text-[#0A1A2B] md:text-5xl">
            Tasarımdan <br />
            <span className="font-serif italic text-black/40">Uygulamaya.</span>
          </h2>
          <p className="mt-6 text-base font-light leading-8 text-black/55 md:text-lg">
            Mimari, iç mimari, mobilya ve uygulama süreçlerini bir bütün olarak ele alıyor,
            projeye özel çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}