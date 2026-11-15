"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";
import { allPhotos, photoFilters } from "@/data/photos";

const ALL = "Tümü";

export default function KatalogGaleri() {
  const [filter, setFilter] = useState(ALL);
  const [active, setActive] = useState<number | null>(null);

  const photos = useMemo(
    () => (filter === ALL ? allPhotos : allPhotos.filter((p) => p.label === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    allPhotos.forEach((p) => m.set(p.label, (m.get(p.label) ?? 0) + 1));
    return m;
  }, []);

  return (
    <section id="galeri" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="-mx-5 mb-10 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:mb-14 md:px-0">
          <div className="flex w-max gap-2 md:w-auto md:flex-wrap" role="tablist" aria-label="Fotoğraf grupları">
            {[ALL, ...photoFilters].map((f) => {
              const selected = f === filter;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(f)}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    selected
                      ? "border-midnight bg-midnight text-white"
                      : "border-midnight/15 text-midnight/70 hover:border-midnight/40 hover:text-midnight"
                  }`}
                >
                  {f}
                  <span className={`ml-2 ${selected ? "text-white/50" : "text-midnight/35"}`}>
                    {f === ALL ? allPhotos.length : counts.get(f)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="columns-2 gap-3 md:columns-3 md:gap-5 xl:columns-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setActive(i)}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl bg-sand md:mb-5"
              aria-label={`${p.label} fotoğrafını büyüt`}
            >
              <Image
                src={p.src}
                alt={p.label}
                width={720}
                height={900}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-950/70 to-transparent p-4 pt-10 text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
