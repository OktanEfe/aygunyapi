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

      <section className="bg-[#0A1A2B] py-24 text-center md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-8 inline-flex rounded-full border border-white/10 px-4 py-1.5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Yakında: Tasarım Deneyimi
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-extralight tracking-tighter text-white md:text-5xl">
            Seçtiğiniz yüzeyleri <span className="text-white/35">mekan üzerinde</span>{" "}
            ön izleyin.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Yakında kullanıma sunulacak deneyim alanımız ile seçtiğiniz yüzeyleri mutfak
            ve banyo senaryoları üzerinde daha yakından inceleyebileceksiniz.
          </p>

          <div className="mt-10">
            <Link
              href="/yuzey-secimi"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Yüzey Seçiciyi Keşfet
            </Link>
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
            Projenizin tarzına, kullanım yoğunluğuna ve mekan karakterine uygun yüzey
            dilini birlikte netleştirelim.
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