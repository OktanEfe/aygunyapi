const editorialBloklar = [
  {
    label: "Aydınlık Mekanlar",
    baslik: "Açık Tonlar",
    desc: "Işığı büyüten, ferah ve zamansız yaşam alanları için sade yüzey seçimleri.",
    note: "Minimal ve açık plan mekanlar için önerilir.",
    color: "bg-[#F5F5F7] text-[#0A1A2B]",
    code: "#F5F5F7",
  },
  {
    label: "Derinlik & Karakter",
    baslik: "Güçlü Koyu Yüzeyler",
    desc: "Kontrasti yüksek, daha güçlü bir atmosfer ve belirgin mekan kimliği isteyenler için.",
    note: "Daha dramatik ve rafine iç mekanlar için uygundur.",
    color: "bg-[#0A1A2B] text-white",
    code: "#0A1A2B",
  },
  {
    label: "Sıcak Yaşam Hissi",
    baslik: "Doğal Dokular",
    desc: "Ahşap, taş ve yumuşak tonlarla daha davetkar ve yaşayan alanlar oluşturur.",
    note: "Doğal ışıkla dengeli ve sıcak bir görünüm sunar.",
    color: "bg-[#EAE3DB] text-[#0A1A2B]",
    code: "#EAE3DB",
  },
];

export default function IlhamPanosu() {
  return (
    <section className="border-t border-black/5 bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-black/20">
            İlham Alın
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
            Mekanın ruhuna göre <br className="hidden md:block" />
            yüzey yönleri.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 md:gap-5">
          {editorialBloklar.map((blok, i) => (
            <div
              key={i}
              className={`${blok.color} flex min-h-[280px] md:min-h-[340px] xl:min-h-[380px] flex-col justify-between rounded-[1.5rem] p-5 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:rounded-[2rem] md:p-7`}
            >
              <div>
                <div className="mb-5 flex items-start justify-between gap-3 md:mb-7">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] opacity-45 md:text-[10px] md:tracking-[0.3em]">
                    {blok.label}
                  </span>

                  <span className="shrink-0 rounded-full border border-current/10 px-2.5 py-1 text-[8px] font-medium uppercase tracking-[0.14em] opacity-60 md:px-3 md:text-[9px]">
                    {blok.code}
                  </span>
                </div>

                <h3 className="mb-3 text-[22px] font-light leading-tight tracking-tight md:mb-4 md:text-[28px]">
                  {blok.baslik}
                </h3>

                <p className="max-w-sm text-[12px] leading-5 opacity-70 md:text-[14px] md:leading-6">
                  {blok.desc}
                </p>
              </div>

              <div className="pt-6 md:pt-8">
                <div className="mb-3 h-px w-8 bg-current opacity-15 md:mb-4 md:w-10" />
                <p className="text-[10px] leading-5 opacity-55 md:text-[11px] md:leading-6">
                  {blok.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}