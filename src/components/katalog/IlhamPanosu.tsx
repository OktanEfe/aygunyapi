const editorialBloklar = [
  {
    label: "Aydınlık Mekanlar",
    baslik: "Açık Tonlar",
    desc: "Işığı büyüten, ferah ve zamansız yaşam alanları için sade yüzey seçimleri.",
    note: "Minimal ve açık plan mekanlar için önerilir.",
    color: "bg-[#F5F5F7] text-[#0A1A2B]",
  },
  {
    label: "Derinlik & Karakter",
    baslik: "Güçlü Koyu Yüzeyler",
    desc: "Kontrasti yüksek, daha güçlü bir atmosfer ve belirgin mekan kimliği isteyenler için.",
    note: "Daha dramatik ve rafine iç mekanlar için uygundur.",
    color: "bg-[#0A1A2B] text-white",
  },
  {
    label: "Sıcak Yaşam Hissi",
    baslik: "Doğal Dokular",
    desc: "Ahşap, taş ve yumuşak tonlarla daha davetkar ve yaşayan alanlar oluşturur.",
    note: "Doğal ışıkla dengeli ve sıcak bir görünüm sunar.",
    color: "bg-[#EAE3DB] text-[#0A1A2B]",
  },
];

export default function IlhamPanosu() {
  return (
    <section className="border-t border-black/5 bg-white py-28 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-black/20">
            İlham Alın
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
            Mekanın ruhuna göre <br className="hidden md:block" />
            yüzey yönleri.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {editorialBloklar.map((blok, i) => (
            <div
              key={i}
              className={`${blok.color} flex aspect-[4/5] flex-col justify-between rounded-[2.5rem] p-10 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:p-12`}
            >
              <div>
                <span className="mb-8 block text-[10px] font-semibold uppercase tracking-[0.3em] opacity-45">
                  {blok.label}
                </span>

                <h3 className="mb-5 text-3xl font-light leading-tight tracking-tight md:text-[2rem]">
                  {blok.baslik}
                </h3>

                <p className="max-w-sm text-sm leading-7 opacity-70 md:text-[15px]">
                  {blok.desc}
                </p>
              </div>

              <div className="pt-10">
                <div className="mb-4 h-px w-12 bg-current opacity-15" />
                <p className="text-[12px] leading-6 opacity-55">{blok.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}