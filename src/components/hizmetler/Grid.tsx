"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { 
    title: "Mutfak Tasarımı", 
    desc: "Fonksiyonelliğin estetikle buluştuğu modern mutfak çözümleri.", 
    detail: "En kaliteli mermer yüzeyler, akıllı depolama sistemleri ve ergonomik yerleşim planları ile mutfağınızı evin kalbi yapıyoruz.",
    icon: "bi-layout-sidebar" 
  },
  { 
    title: "Banyo Yenileme", 
    desc: "Kişisel bakım alanlarını lüks birer spa deneyimine dönüştürüyoruz.", 
    detail: "Suya dayanıklı özel ahşap detaylar, gizli aydınlatmalar ve premium vitrifiye seçimleri ile banyonuza değer katıyoruz.",
    icon: "bi-droplet" 
  },
  { 
    title: "İç Mekan Çözümleri", 
    desc: "Yaşam alanlarınızın ruhuna uygun dekorasyon ve mobilya seçimleri.", 
    detail: "Renk teorisi ve doku analizi yaparak, mobilya yerleşiminden aydınlatma tasarımına kadar bütüncül bir yaklaşım sunuyoruz.",
    icon: "bi-house-heart" 
  },
  { 
    title: "Malzeme Danışmanlığı", 
    desc: "Projeniz için en doğru yüzey, doku ve renk paleti seçimi.", 
    detail: "Dünya trendlerini takip eden geniş malzeme kütüphanemizle, projenizin karakterine en uygun bitişleri birlikte seçiyoruz.",
    icon: "bi-palette" 
  },
  { 
    title: "Anahtar Teslim", 
    desc: "Tasarım aşamasından son dokunuşa kadar tüm sürecin yönetimi.", 
    detail: "Şantiye takibi, usta yönetimi ve lojistik süreçlerin tamamını biz üstleniyoruz; size sadece taşınmak kalıyor.",
    icon: "bi-key" 
  },
  { 
    title: "Özel Projeler", 
    desc: "Standartların ötesinde, size özel mimari ve uygulama çözümleri.", 
    detail: "Villa, ofis veya ticari mekanlar için sınırları zorlayan, markanıza veya kişiliğinize özel mimari imzalar atıyoruz.",
    icon: "bi-stars" 
  },
];

function ServiceCard({ s }: { s: typeof services[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[360px] w-full cursor-pointer" 
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
          height: "100%"
        }}
        className="relative"
      >
        <div 
          className="absolute inset-0 bg-[#0A1A2B] p-9 rounded-[2rem] border border-white/5 flex flex-col justify-between group overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-[60px]" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 transition-transform group-hover:scale-110 duration-500">
              <i className={`bi ${s.icon} text-3xl text-white`}></i>
            </div>
            <h3 className="text-[26px] font-light text-white tracking-tight mb-4"> 
              {s.title}
            </h3>
            <p className="text-white/60 font-light text-base leading-relaxed max-w-[280px]"> 
              {s.desc}
            </p>
          </div>

          <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-all duration-300">
            <span>Detay İçin Tıklayınız</span>
            <div className="h-[1px] w-6 bg-white/20 group-hover:w-12 group-hover:bg-white transition-all" />
          </button>
        </div>

        {/* --- ARKA YÜZ --- */}
        <div 
          className="absolute inset-0 bg-[#12263A] p-9 rounded-[2rem] border border-white/10 flex flex-col justify-center text-center"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Detaylar</h4>
            <p className="text-white/90 font-light leading-relaxed text-[17px] mb-10 px-2"> {/* Detay metni büyütüldü */}
              {s.detail}
            </p>
            
            <Link 
              href="/iletisim"
              onClick={(e) => e.stopPropagation()}
              className="px-10 py-3.5 rounded-full bg-white text-[#0A1A2B] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#0A1A2B] hover:text-white hover:ring-1 hover:ring-white/50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] scale-100 hover:scale-105 active:scale-95"
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
    <section className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black/20 block mb-4">Neler Yapıyoruz?</span>
          <h2 className="text-4xl md:text-5xl font-extralight text-[#0A1A2B] tracking-tight leading-tight">
            Mekanı <span className="font-serif italic text-black/40">Sanata Dönüştüren</span> Tasarımlar.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}