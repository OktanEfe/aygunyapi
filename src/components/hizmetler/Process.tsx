"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    id: "01",
    name: "Keşif ve Vizyon",
    desc: "Mekanın potansiyelini anlamak için yerinde incelemeler yapıyoruz.",
    longDesc: "Işık açılarından rüzgar yönüne, topografik yapıdan çevresel dokuya kadar her detayı not ediyoruz. Sizin hayallerinizi, teknik gerekliliklerle bu aşamada harmanlıyoruz."
  },
  {
    id: "02",
    name: "Stratejik Analiz",
    desc: "İhtiyaç programını ve bütçe planlamasını netleştiriyoruz.",
    longDesc: "Mekanın kullanım senaryolarını oluşturuyor, fonksiyonel gereksinimleri belirliyoruz. Boşa harcanan tek bir metrekare kalmaması için matematiksel bir hassasiyetle çalışıyoruz."
  },
  {
    id: "03",
    name: "Kürasyon ve Seçim",
    desc: "Zamana meydan okuyan malzeme ve dokuları bir araya getiriyoruz.",
    longDesc: "Doğal taşlar, sürdürülebilir ahşaplar ve özel dokulu kumaşlar... Sadece görsel değil, dokunsal bir deneyim için en kaliteli hammaddeleri dünyanın dört bir yanından seçiyoruz."
  },
  {
    id: "04",
    name: "Zanaat ve Uygulama",
    desc: "Atölye titizliğini şantiye sahasına yansıtıyoruz.",
    longDesc: "Usta ellerin zanaatını modern mühendislik yöntemleriyle birleştiriyoruz. Her birleşim noktası, her milimetrik detay bizim için bir imza niteliğindedir."
  },
  {
    id: "05",
    name: "Kusursuz Teslim",
    desc: "Yaşam alanınızı tüm detaylarıyla hazır hale getiriyoruz.",
    longDesc: "Son kontroller, temizlik ve yerleşim sonrası anahtarınızı teslim ediyoruz. Bizim için süreç bitse de, Aygün Yapı güvencesi mekanla birlikte yaşamaya devam eder."
  },
  {
    id: "06",
    name: "Sürdürülebilirlik",
    desc: "Yapının ömrü boyunca estetik ve teknik destek sunuyoruz.",
    longDesc: "Teslimat sonrası bakım rehberleri ve periyodik kontrollerle mekanın ilk günkü formunu korumasını sağlıyoruz. Nesiller boyu sürecek bir dostluğun temelini atıyoruz."
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="py-24 md:py-32 bg-[#0A1A2B] relative overflow-hidden">
        

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-24">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 block mb-4">İş Akışımız</span>
            <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-tight">
              Fikirden Gerçeğe, <br />
              <span className="font-serif italic text-white/20">6 Adımda Mükemmellik.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute -top-12 -left-4 text-[120px] font-serif italic text-white/[0.03] group-hover:text-white/[0.07] transition-colors duration-700 pointer-events-none select-none">
                  {step.id}
                </div>

                <div className="relative z-10 pt-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">
                      Aşama {step.id}
                    </h4>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-4 tracking-tight">
                    {step.name}
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-white/80 leading-relaxed">
                      {step.desc}
                    </p>
                    <p className="text-[13px] font-light text-white/40 leading-relaxed border-l border-white/10 pl-4 group-hover:border-white/30 transition-colors">
                      {step.longDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-32 md:py-48 bg-white overflow-hidden relative">
        

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto space-y-12"
          >
            <div className="flex justify-center mb-16">
               <div className="h-px w-12 bg-black/10 self-center" />
               <i className="bi bi-stars text-2xl text-[#0A1A2B]/20 mx-6" />
               <div className="h-px w-12 bg-black/10 self-center" />
            </div>
            
            <h3 className="text-[34px] md:text-[64px] font-extralight text-[#0A1A2B] leading-[1.1] tracking-tight">
              Sıradan bir uygulayıcıdan öte, mekanın ruhuna dokunan bir 
              <span className="font-serif italic text-black/20 block md:inline ml-0 md:ml-4">
                 zanaat anlayışıyla
              </span> çalışıyoruz.
            </h3>

            <div className="grid md:grid-cols-2 gap-12 text-left mt-24 pt-24 border-t border-black/5">
              <div className="space-y-4">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0A1A2B]/40 block">Estetik Disiplin</span>
                  <p className="text-black/60 font-light leading-relaxed text-sm md:text-base">
                      Aygün Yapı olarak her projeyi sadece teknik bir süreç değil, mimari bir hikaye olarak ele alıyoruz. Kullanılan her malzemenin dokusu ve ışıkla olan uyumu, tasarımımızın temelini oluşturur.
                  </p>
              </div>
              <div className="space-y-4">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0A1A2B]/40 block">Teknik Kusursuzluk</span>
                  <p className="text-black/60 font-light leading-relaxed text-sm md:text-base">
                      Yalova&apos;daki atölyelerimizde modern mühendisliği geleneksel işçilikle harmanlıyoruz. Detaylardaki titizliğimiz, yapılarınızın nesiller boyu sürecek kalitesinin en büyük teminatıdır.
                  </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 pt-12">
              <div className="h-px w-24 bg-black/10" />
              <span className="text-[11px] font-bold tracking-[0.6em] uppercase text-black/20">
                  Aygün Yapı — Bir Yalova Mirası
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}