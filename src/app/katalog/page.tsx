import KatalogHero from "@/components/katalog/KatalogHero";
import KoleksiyonBloklari from "@/components/katalog/KoleksiyonBloklari";
import IlhamPanosu from "@/components/katalog/IlhamPanosu";
import PdfIndir from "@/components/katalog/PdfIndir";
import Link from "next/link";

export default function KatalogPage() {
  return (
    <main className="min-h-screen bg-white">
      <KatalogHero />
      <KoleksiyonBloklari />
      <IlhamPanosu />

      <section className="relative overflow-hidden bg-[#0A1A2B] py-24 text-center md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
          <div className="absolute bottom-[-100px] left-[8%] h-52 w-52 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute top-[28%] right-[10%] h-44 w-44 rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-[-10%] top-[18%] h-32 animate-wave-slow rounded-[100%] bg-white/[0.04] blur-2xl" />
          <div className="absolute inset-x-[-15%] top-[42%] h-40 animate-wave-slower rounded-[100%] bg-white/[0.03] blur-3xl" />
          <div className="absolute inset-x-[-8%] bottom-[12%] h-28 animate-wave-slow rounded-[100%] bg-white/[0.025] blur-2xl" />
        </div>

        <div className="pointer-events-none absolute inset-0">
          {[
            "left-[8%] top-[20%]",
            "left-[16%] top-[36%]",
            "left-[24%] top-[16%]",
            "left-[33%] top-[58%]",
            "left-[46%] top-[22%]",
            "left-[56%] top-[46%]",
            "left-[66%] top-[18%]",
            "left-[76%] top-[54%]",
            "left-[86%] top-[24%]",
            "left-[58%] top-[72%]",
            "left-[20%] top-[74%]",
          ].map((pos, i) => (
            <span
              key={i}
              className={`absolute ${pos} h-1.5 w-1.5 animate-float-particle rounded-full bg-white/30`}
              style={{
                animationDelay: `${i * 0.45}s`,
                animationDuration: `${4.5 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-8 inline-flex rounded-full border border-white/10 px-4 py-1.5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Seçim Yaklaşımı
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-extralight tracking-tighter text-white md:text-5xl">
            Doğru malzeme,{" "}
            <span className="text-white/35">doğru mekan diliyle</span> anlam kazanır.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Koleksiyonlarımız yalnızca görsel seçim sunmaz; mekanın ışığına,
            kullanım yoğunluğuna ve genel tasarım karakterine uyum sağlayan daha
            rafine bir yön belirler.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:bg-white/90"
            >
              Ürünleri İncele
            </Link>

            <a
              href="#koleksiyonlar"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Koleksiyonlara Dön
            </a>
          </div>
        </div>
      </section>

      <PdfIndir />

      <section className="border-t border-black/5 py-24 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-extralight tracking-tight text-[#0A1A2B] md:text-6xl">
            Size uygun yüzeyleri <br />
            <span className="font-serif italic text-black/20">
              birlikte belirleyelim.
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/45">
            Projenizin tarzına, kullanım yoğunluğuna ve mekan karakterine uygun
            yüzey dilini birlikte netleştirelim.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#0A1A2B] px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(10,26,43,0.12)] transition hover:opacity-90">
              Ücretsiz Danışmanlık Alın
            </button>

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:bg-[#F7F7F8]"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}