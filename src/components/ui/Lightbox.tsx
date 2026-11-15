"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import type { Photo } from "@/data/photos";

type Props = {
  photos: Photo[];
  index: number | null;
  onChange: (index: number | null) => void;
};

export default function Lightbox({ photos, index, onChange }: Props) {
  const open = index !== null;
  const close = useCallback(() => onChange(null), [onChange]);
  const step = useCallback(
    (d: number) => {
      if (index === null) return;
      onChange((index + d + photos.length) % photos.length);
    },
    [index, onChange, photos.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  if (!open) return null;
  const current = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.label}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-midnight-950/95 p-4 md:p-10"
      onClick={close}
    >
      <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image src={current.src} alt={current.label} fill sizes="100vw" className="object-contain" />
      </div>

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-white md:p-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
          {current.label}
          <span className="ml-4 text-white/35">
            {index + 1} / {photos.length}
          </span>
        </span>
        <button
          onClick={close}
          aria-label="Kapat"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-midnight"
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>

      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Önceki"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-midnight md:left-8"
          >
            <i className="bi bi-arrow-left" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Sonraki"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-midnight md:right-8"
          >
            <i className="bi bi-arrow-right" />
          </button>
        </>
      )}
    </div>
  );
}
