import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export function CategoryShowcase({ heading = true }: { heading?: boolean }) {
  return (
    <section id="urun-kategorileri" className="bg-white py-24 md:py-36">
      <div className="container-x">
        {heading && (
          <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[34px] font-extralight leading-[1.05] tracking-[-0.03em] text-midnight md:text-[60px]">
                Ürünler
              </h2>
            </div>
            <Link href="/urunler" className="btn-ghost self-start md:self-auto">
              Tüm Ürünler
              <i className="bi bi-arrow-right text-sm" />
            </Link>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link key={cat.slug} href={`/urunler/${cat.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-midnight backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 pt-6">
                <div>
                  <h3 className="text-[22px] font-light tracking-tight text-midnight transition-colors group-hover:text-bordo">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.7] text-midnight/60">{cat.description}</p>
                </div>
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-midnight/15 text-midnight transition-colors group-hover:border-bordo group-hover:bg-bordo group-hover:text-white">
                  <i className="bi bi-arrow-up-right text-sm" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
