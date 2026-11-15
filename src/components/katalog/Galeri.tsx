"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { allPhotos, photoFilters } from "@/data/photos";

const ALL = "Tümü";

export default function KatalogGaleri() {
  const [filter, setFilter] = useState(ALL);
  const [active, setActive] = useState<number | null>(null);

  const photos = useMemo(
    () => (filter === ALL ? allPhotos : allPhotos.filter((p) => p.title === filter)),
    [filter],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, photos.length]);

  return (
    <section id="galeri" className="border-t border-black/5 bg-[#F9F9F9] py-20 md:py-32">
      <div className="mx-auto max-w-[1800px] px-6 md:px-16">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-black/30">Galeri</span>
          <h2 className="text-4xl font-extralight leading-none tracking-tighter text-[#0A1A2B] md:text-7xl">
            Uygulamalarımız
          </h2>
        </div>

        <div className="-mx-6 mb-12 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:px-0">
          <div className="flex w-max gap-3 md:w-auto md:flex-wrap md:justify-center">
            {[ALL, ...photoFilters].map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setActive(null);
                }}
                aria-pressed={f === filter}
                className={`shrink-0 rounded-full border px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] transition ${
                  f === filter
                    ? "border-[#0A1A2B] bg-[#0A1A2B] text-white"
                    : "border-[#0A1A2B]/10 bg-white text-[#0A1A2B]/60 hover:border-[#0A1A2B]/30 hover:text-[#0A1A2B]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-2 gap-4 md:columns-3 md:gap-6 xl:columns-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setActive(i)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#0A1A2B] md:mb-6 md:rounded-[2.5rem]"
              aria-label={`${p.title} fotoğrafını büyüt`}
            >
              <Image
                src={p.src}
                alt={p.title}
                width={720}
                height={900}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left opacity-0 transition-all duration-500 group-hover:opacity-100 md:p-8">
                <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">
                  {p.category}
                </span>
                <span className="text-lg font-light tracking-tight text-white md:text-xl">{p.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && photos[active] && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0A1A2B]/95 p-4 backdrop-blur-2xl"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute right-6 top-6 text-5xl font-extralight text-white/50" aria-label="Kapat">
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((active - 1 + photos.length) % photos.length);
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-[#0A1A2B] md:left-10"
            aria-label="Önceki"
          >
            <i className="bi bi-arrow-left" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[active].src}
            alt={photos[active].title}
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive((active + 1) % photos.length);
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-[#0A1A2B] md:right-10"
            aria-label="Sonraki"
          >
            <i className="bi bi-arrow-right" />
          </button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            {photos[active].title} · {active + 1} / {photos.length}
          </span>
        </div>
      )}
    </section>
  );
}
