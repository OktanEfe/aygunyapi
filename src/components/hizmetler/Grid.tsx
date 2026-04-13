"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Mutfak Tasarımı",
    desc: "Fonksiyonelliğin estetikle buluştuğu modern mutfak çözümleri.",
    detail:
      "En kaliteli mermer yüzeyler, akıllı depolama sistemleri ve ergonomik yerleşim planları ile mutfağınızı evin kalbi yapıyoruz.",
    icon: "bi-layout-sidebar",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
  },
  {
    title: "Banyo Yenileme",
    desc: "Kişisel bakım alanlarını lüks birer spa deneyimine dönüştürüyoruz.",
    detail:
      "Suya dayanıklı özel ahşap detaylar, gizli aydınlatmalar ve premium vitrifiye seçimleri ile banyonuza değer katıyoruz.",
    icon: "bi-droplet",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
  },
  {
    title: "İç Mekan Çözümleri",
    desc: "Yaşam alanlarınızın ruhuna uygun dekorasyon ve mobilya seçimleri.",
    detail:
      "Renk teorisi ve doku analizi yaparak, mobilya yerleşiminden aydınlatma tasarımına kadar bütüncül bir yaklaşım sunuyoruz.",
    icon: "bi-house-heart",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    title: "Malzeme Danışmanlığı",
    desc: "Projeniz için en doğru yüzey, doku ve renk paleti seçimi.",
    detail:
      "Dünya trendlerini takip eden geniş malzeme kütüphanemizle, projenizin karakterine en uygun bitişleri birlikte seçiyoruz.",
    icon: "bi-palette",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
  {
    title: "Proje Yönetimi",
    desc: "Tasarım, uygulama ve tüm süreçlerin tek bir merkezden yönetimi.",
    detail:
      "Projenizin ilk çiziminden son detayına kadar tüm süreci planlıyor, ekipleri koordine ediyor ve kaliteyi her aşamada kontrol altında tutuyoruz.",
    icon: "bi-diagram-3",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
  },
  {
    title: "Özel Projeler",
    desc: "Standartların ötesinde, size özel mimari ve uygulama çözümleri.",
    detail:
      "Villa, ofis veya ticari mekanlar için sınırları zorlayan, markanıza veya kişiliğinize özel mimari imzalar atıyoruz.",
    icon: "bi-stars",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
  },
];

function ServiceCard({ s }: { s: (typeof services)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[390px] w-full cursor-pointer"
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

            <p className="mb-10 text-[16px] font-light leading-relaxed text-white/90">
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
            Mekanı{" "}
            <span className="font-serif italic text-black/40">
              Sanata Dönüştüren
            </span>{" "}
            Tasarımlar.
          </h2>
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