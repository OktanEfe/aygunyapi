const values = [
  {
    title: "Güven",
    desc: "Projelerin her aşamasında açık iletişim, doğru bilgi ve güvenilir bir çalışma anlayışını esas alıyoruz.",
  },
  {
    title: "Kalite",
    desc: "Malzeme seçiminden üretim ve uygulamaya kadar her aşamada detaylara ve işçilik kalitesine önem veriyoruz.",
  },
  {
    title: "Tasarım",
    desc: "Güncel tasarım anlayışını işlev, malzeme ve uygulama koşullarıyla birlikte değerlendirerek projeye uygun çözümler geliştiriyoruz.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <span className="eyebrow">Değerlerimiz</span>
          <h2 className="mt-6 text-[34px] font-extralight leading-[1.08] tracking-[-0.03em] text-midnight md:text-[52px]">
            Bizi Biz Yapan <span className="font-serif font-normal italic text-bordo">Temel İlkeler.</span>
          </h2>
        </div>

        <ol className="divide-y divide-midnight/10 border-y border-midnight/10 lg:col-span-7 lg:col-start-6">
          {values.map((v, i) => (
            <li key={v.title} className="grid gap-4 py-10 md:grid-cols-[140px_1fr] md:gap-10 md:py-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bordo">
                İlke 0{i + 1}
              </span>
              <div>
                <h3 className="text-[28px] font-light tracking-tight text-midnight md:text-[34px]">{v.title}</h3>
                <p className="mt-4 max-w-xl text-[16px] font-light leading-[1.8] text-midnight/65">{v.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
