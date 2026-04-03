import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const productCats = [
  {
    title: "Mutfak Sistemleri",
    slug: "mutfak",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    desc: "Kapak, tezgah ve yüzey uyumunu bir arada sunan seçili çözümler.",
  },
  {
    title: "Banyo Serileri",
    slug: "banyo",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    desc: "Nem, kullanım yoğunluğu ve estetik denge gözetilerek seçilen seriler.",
  },
  {
    title: "Panel & Kapak",
    slug: "kapak",
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88",
    desc: "Mat, lake ve doğal doku yüzeylerle rafine panel alternatifleri.",
  },
  {
    title: "Kuvars Tezgahlar",
    slug: "tezgah",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
    desc: "Dayanıklılığı güçlü görünümle birleştiren premium tezgah yüzeyleri.",
  },
];

export function CategoryShowcase() {
  return (
    <section id="urun-kategorileri" className="bg-white py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-black/30">
              Ürün Grupları
            </p>
            <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
              İhtiyacınıza göre <br className="hidden md:block" />
              doğru ürün alanını seçin.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-black/45 md:text-base">
            Her kategori; kullanım alanı, yüzey karakteri ve uygulama ihtiyacına göre
            kurgulandı. Önce alanı seçin, ardından detaylara inin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productCats.map((cat) => (
            <Link
              href={`/urunler/${cat.slug}`}
              key={cat.slug}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2.25rem] bg-[#0A1A2B]"
            >
              <Image
                src={`${cat.img}?q=80&w=900`}
                alt={cat.title}
                fill
                className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07121f]/80 via-[#07121f]/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-tight text-white">
                      {cat.title}
                    </h3>
                    <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/70">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition group-hover:border-white group-hover:bg-white group-hover:text-[#0A1A2B]">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/65">
                  Koleksiyonu İncele
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}