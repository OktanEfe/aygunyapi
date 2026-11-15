"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "@/components/ui/Lightbox";
import { photo } from "@/data/photos";

const photos = [
  photo("tv-unitesi", 1),
  photo("mutfak-mermer", 2),
  photo("giyinme", 3),
  photo("kitaplik", 2),
  photo("banyo", 2),
  photo("vitrin", 3),
  photo("mutfak-yesil", 1),
  photo("mutfak-klasik", 1),
];

// Masaüstü: 4 sütun × 3 satırlık sabit yerleşim (boşluk kalmaz). Mobil: 2 sütun, eşit kareler.
const placement = [
  "md:col-start-1 md:row-start-1 md:row-span-2",
  "md:col-start-2 md:row-start-1",
  "md:col-start-3 md:row-start-1 md:row-span-2",
  "md:col-start-4 md:row-start-1",
  "md:col-start-2 md:row-start-2",
  "md:col-start-4 md:row-start-2 md:row-span-2",
  "md:col-start-1 md:row-start-3",
  "col-span-2 md:col-start-2 md:col-span-2 md:row-start-3",
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 md:py-36">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Tasarımın İzleri</span>
            <h2 className="mt-6 text-[34px] font-extralight leading-[1.05] tracking-[-0.03em] text-midnight md:text-[60px]">
              Yaşam Alanlarından <span className="font-serif font-normal italic text-bordo">Seçkiler</span>
            </h2>
          </div>
          <Link href="/katalog" className="btn-ghost self-start md:self-auto">
            Katalog
            <i className="bi bi-arrow-right text-sm" />
          </Link>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:auto-rows-[260px] md:grid-cols-4 md:gap-5">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl bg-sand ${placement[i]}`}
              aria-label={`${p.label} fotoğrafını büyüt`}
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-950/70 to-transparent p-4 pt-12 text-left text-[10px] font-semibold uppercase tracking-[0.22em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-5 md:pt-16">
                {p.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox photos={photos} index={active} onChange={setActive} />
    </section>
  );
}
