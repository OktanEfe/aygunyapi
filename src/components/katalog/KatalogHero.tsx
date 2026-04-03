import Link from "next/link";

export default function KatalogHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-black/30 whitespace-nowrap">
              Seçkin Koleksiyonlar
            </span>
            <div className="h-px w-full bg-black/5" />
          </div>

          <h1 className="mb-10 text-5xl font-extralight leading-[0.88] tracking-tighter text-[#0A1A2B] md:text-[110px]">
            Malzeme & <br />
            <span className="font-serif font-normal italic text-black/20">
              Tasarım Dünyası.
            </span>
          </h1>

          <p className="max-w-2xl text-lg font-light leading-8 text-black/45 md:text-2xl md:leading-relaxed">
            Seçiminize yön veren, dokularıyla mekanın karakterini belirleyen seçili
            yüzey ve koleksiyon dünyamızı keşfedin.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#koleksiyonlar"
              className="inline-flex items-center justify-center rounded-full bg-[#0A1A2B] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
            >
              Koleksiyonları İncele
            </a>

            <Link
              href="/yuzey-secimi"
              className="inline-flex items-center justify-center rounded-full border border-[#0A1A2B]/10 bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:border-[#0A1A2B]/20 hover:bg-[#F8F8F8]"
            >
              Yüzey Seçimine Git
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-black/35">
            <span>Mutfak Koleksiyonları</span>
            <span>Banyo Serileri</span>
            <span>Yüzey Dünyası</span>
            <span>Dijital Katalog</span>
          </div>
        </div>
      </div>
    </section>
  );
}