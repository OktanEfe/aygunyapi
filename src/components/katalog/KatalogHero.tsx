import Image from "next/image";
import Link from "next/link";

export default function KatalogHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.55em] text-black/30">
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
              href="/urunler"
              className="inline-flex items-center justify-center rounded-full border border-[#0A1A2B]/10 bg-white/80 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:border-[#0A1A2B]/20 hover:bg-white"
            >
              Ürünleri İncele
            </Link>
          </div>

          
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] md:block">
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-white via-white/75 to-transparent" />
        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400"
          alt="Premium interior surface mood"
          fill
          priority
          className="object-cover opacity-[0.16]"
        />
      </div>

      <div className="pointer-events-none absolute -top-20 right-[-120px] h-[380px] w-[380px] rounded-full bg-[#0A1A2B]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-black/[0.03] blur-3xl" />
    </section>
  );
}