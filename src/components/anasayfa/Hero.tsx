"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const videos = [
    { src: "/assets/videos/video1.mp4", label: "Modern Mimari", sub: "Estetik ve Fonksiyon" },
    { src: "/assets/videos/video2.mp4", label: "İç Mekan Tasarımı", sub: "Rafine Detaylar" },
    { src: "/assets/videos/video3.mp4", label: "Lüks Yaşam Alanları", sub: "Yalova'nın İmzası" },
  ];

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % videos.length);
    }, 8000);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

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

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {videos.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === index ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <video
              src={item.src}
              muted
              loop
              playsInline
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="h-full w-full object-cover brightness-[0.45]"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1700px] flex-col justify-center px-6 pt-20 md:px-16 md:pt-0">
        <div className="mb-4 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 md:text-[10px] md:tracking-[0.6em]">
              Aygün Yapı
            </span>
            <div className="h-px w-8 bg-white/20 md:w-12" />
          </div>
        </div>

        <div className="relative min-h-[280px] md:min-h-[350px]">
          {videos.map((item, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full transition-all duration-[1000ms] ease-out ${
                i === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 md:translate-y-20"
              }`}
            >
              <h1 className="text-white">
                <span className="block text-[42px] font-extralight leading-[1.1] tracking-tighter md:text-[120px] md:leading-[0.85]">
                  {item.label.split(" ")[0]}
                </span>
                <span className="mt-1 block text-[42px] font-medium leading-[1.1] tracking-tighter md:mt-4 md:text-[120px] md:leading-[0.85]">
                  {item.label.split(" ").slice(1).join(" ")}
                </span>
                <span className="mt-6 block font-serif text-xl italic lowercase tracking-wide text-white/40 md:mt-10 md:text-4xl">
                  {item.sub}
                </span>
              </h1>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-16 md:gap-10">
          <Link
            href="/projeler"
            style={{ backgroundColor: "#FFFFFF", color: "#0A1A2B" }}
            className="w-full rounded-full border border-white px-10 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:!bg-[#0A1A2B] hover:!text-white active:scale-95 sm:w-auto md:px-14 md:py-5 md:text-[11px] md:tracking-[0.25em]"
          >
            Koleksiyonu Keşfet
          </Link>

          <Link
            href="/iletisim"
            className="group flex items-center gap-4 pl-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:pl-0 md:gap-5 md:text-[11px] md:tracking-[0.25em]"
          >
            <span className="border-b border-white/20 pb-1 transition-all duration-500 group-hover:border-white">
              Bize Ulaşın
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-black md:h-10 md:w-10">
              <i className="bi bi-arrow-right text-base md:text-lg"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute top-1/2 right-6 z-20 flex -translate-y-1/2 flex-col gap-4 md:right-16 md:gap-6">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              startAuto();
            }}
            className="group flex items-center justify-end gap-3 md:gap-5"
          >
            <span
              className={`text-[9px] font-bold text-white transition-all duration-500 md:text-[10px] ${
                i === index
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-40"
              }`}
            >
              0{i + 1}
            </span>
            <div
              className={`h-[1.5px] transition-all duration-700 ease-in-out md:h-[1.5px] ${
                i === index
                  ? "w-10 bg-white md:w-16"
                  : "w-4 bg-white/20 md:w-8 md:group-hover:w-12 md:group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-8 md:bottom-12 md:left-16 md:gap-16">
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30 md:text-[9px] md:tracking-[0.4em]">
            Lokasyon
          </span>
          <span className="text-[10px] font-light uppercase tracking-widest text-white/90 md:text-xs">
            Yalova
          </span>
        </div>

        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30 md:text-[9px] md:tracking-[0.4em]">
            İlerleme
          </span>
          <div className="relative h-[1.5px] w-16 overflow-hidden bg-white/10 md:h-[2px] md:w-24">
            <div
              className="absolute inset-0 origin-left bg-white"
              style={{
                transform: `scaleX(${(index + 1) / videos.length})`,
                transition: "transform 1s cubic-bezier(0.85, 0, 0.15, 1)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}