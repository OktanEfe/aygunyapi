import Image from "next/image";
import Link from "next/link";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="relative z-10 max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-black/30">
              Koleksiyonlar
            </span>
            <div className="h-px w-12 bg-black/10" />
          </div>

          <h1 className="max-w-4xl text-5xl font-extralight leading-[0.92] tracking-tighter text-[#0A1A2B] md:text-[96px]">
            Yüzeylerin <br />
            <span className="font-serif text-black/20 italic font-normal">
              Sessiz Estetiği.
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-black/45 md:text-xl">
            Mutfak tezgahlarından özel üretim kapaklara, yaşam alanının karakterini
            belirleyen seçili yüzeyleri ve malzeme çözümlerini keşfedin.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#urun-kategorileri"
              className="inline-flex items-center justify-center rounded-full bg-[#0A1A2B] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
            >
              Koleksiyonları Keşfet
            </a>

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border border-[#0A1A2B]/10 bg-white/70 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:border-[#0A1A2B]/20 hover:bg-white"
            >
              Uzmanla Görüş
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-black/35">
            <span>Yalova ve çevresi</span>
            <span>Seçim desteği</span>
            <span>Uygulama odaklı yaklaşım</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] md:block">
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-[#F5F5F7] via-[#F5F5F7]/70 to-transparent" />
        <Image
          src="https://images.unsplash.com/photo-1615529182906-134d82344f48?q=80&w=1200"
          alt="Yüzey dokusu"
          fill
          className="object-cover grayscale opacity-[0.14]"
        />
      </div>
    </section>
  );
}