"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SLIDE_MS = 8000;

const slides = [
  { src: "/assets/videos/video1.mp4", poster: "/assets/posters/video1.jpg", title: "Modern Mimari", sub: "Estetik ve Fonksiyon" },
  { src: "/assets/videos/video2.mp4", poster: "/assets/posters/video2.jpg", title: "İç Mekân Tasarımı", sub: "Detaylarda Fark" },
  { src: "/assets/videos/video3.mp4", poster: "/assets/posters/video3.jpg", title: "Mobilya Tasarımı", sub: "İhtiyaca Özel Çözümler" },
];

export default function Hero() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, cycle]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  const goTo = (i: number) => {
    setIndex(i);
    setCycle((c) => c + 1);
  };

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-midnight-950">
      {slides.map((s, i) => (
        <video
          key={s.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          src={s.src}
          poster={s.poster}
          muted
          loop
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/25 to-midnight-950/50" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-midnight-950/60 to-transparent md:w-2/3" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-28 md:px-10 md:pb-36">
        <div className="relative h-[150px] md:h-[220px]">
          {slides.map((s, i) => (
            <div
              key={s.title}
              aria-hidden={i !== index}
              className={`absolute inset-x-0 bottom-0 transition-all duration-700 ease-out ${
                i === index ? "translate-y-0 opacity-100 delay-300" : "pointer-events-none translate-y-6 opacity-0"
              }`}
            >
              <p className="mb-4 font-serif text-lg italic text-bordo-200 md:mb-6 md:text-2xl">{s.sub}</p>
              {i === index ? (
                <h1 className="max-w-4xl text-[44px] font-extralight leading-[0.95] tracking-[-0.03em] text-white md:text-[96px]">
                  {s.title}
                </h1>
              ) : (
                <p className="max-w-4xl text-[44px] font-extralight leading-[0.95] tracking-[-0.03em] text-white md:text-[96px]">
                  {s.title}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-12">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-midnight transition-colors duration-300 hover:bg-bordo hover:text-white"
          >
            Koleksiyonu Keşfet
            <i className="bi bi-arrow-right text-sm" />
          </Link>
          <Link
            href="/iletisim"
            className="border-b border-white/30 pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-white"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1440px] px-5 pb-8 md:px-10 md:pb-10">
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => goTo(i)}
              className="group text-left"
              aria-label={`${s.title} videosunu göster`}
              aria-current={i === index}
            >
              <span className="relative block h-px w-full overflow-hidden bg-white/20">
                <span
                  key={i === index ? `${index}-${cycle}` : "idle"}
                  className={`absolute inset-y-0 left-0 bg-white ${i === index ? "animate-hero-progress" : i < index ? "w-full" : "w-0"}`}
                  style={i === index ? { animationDuration: `${SLIDE_MS}ms` } : undefined}
                />
              </span>
              <span
                className={`mt-3 hidden text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors md:block ${
                  i === index ? "text-white" : "text-white/40 group-hover:text-white/70"
                }`}
              >
                <span className="mr-3 text-white/40">0{i + 1}</span>
                {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
