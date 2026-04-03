"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/navigation";

export default function Hero() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
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
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {videos.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <video
              src={item.src}
              muted
              loop
              playsInline
              ref={(el) => { videoRefs.current[i] = el; }}
              className="w-full h-full object-cover brightness-[0.45]"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="relative z-10 h-full max-w-[1700px] mx-auto px-6 md:px-16 flex flex-col justify-center pt-20 md:pt-0">
        <div className="mb-4 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4">
             <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-white/50">Aygün Yapı</span>
             <div className="h-px w-8 md:w-12 bg-white/20" />
          </div>
        </div>

        <div className="relative min-h-[280px] md:min-h-[350px]">
          {videos.map((item, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full transition-all duration-[1000ms] ease-out ${
                i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 md:translate-y-20"
              }`}
            >
              <h1 className="text-white">
                <span className="block text-[42px] leading-[1.1] md:text-[120px] font-extralight tracking-tighter md:leading-[0.85]">
                  {item.label.split(" ")[0]}
                </span>
                <span className="block text-[42px] leading-[1.1] md:text-[120px] font-medium tracking-tighter md:leading-[0.85] mt-1 md:mt-4">
                  {item.label.split(" ").slice(1).join(" ")}
                </span>
                <span className="block mt-6 md:mt-10 font-serif italic text-xl md:text-4xl text-white/40 lowercase tracking-wide">
                  {item.sub}
                </span>
              </h1>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-10 items-start sm:items-center">
          <a
            href="/projeler"
            style={{ backgroundColor: '#FFFFFF', color: '#0A1A2B' }}
            className="w-full sm:w-auto text-center px-10 md:px-14 py-4 md:py-5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] rounded-full transition-all duration-500 hover:!bg-[#0A1A2B] hover:!text-white active:scale-95 border border-white"
          >
            Koleksiyonu Keşfet
          </a>
          
          <a
            href="/iletisim"
            className="group flex items-center gap-4 md:gap-5 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] pl-4 sm:pl-0"
          >
            <span className="border-b border-white/20 pb-1 group-hover:border-white transition-all duration-500">Bize Ulaşın</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <i className="bi bi-arrow-right text-base md:text-lg"></i>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 md:gap-6">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); startAuto(); }}
            className="group flex items-center justify-end gap-3 md:gap-5"
          >
            <span className={`text-[9px] md:text-[10px] font-bold text-white transition-all duration-500 ${i === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 md:group-hover:opacity-40 md:group-hover:translate-x-0"}`}>
              0{i + 1}
            </span>
            <div className={`h-[1.5px] transition-all duration-700 ease-in-out ${i === index ? "w-10 md:w-16 bg-white" : "w-4 md:w-8 bg-white/20 md:group-hover:w-12 md:group-hover:bg-white/50"}`} />
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-16 z-20 flex items-center gap-8 md:gap-16">
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-white/30">Lokasyon</span>
          <span className="text-[10px] md:text-xs text-white/90 font-light tracking-widest uppercase">Yalova</span>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-white/30">İlerleme</span>
          <div className="h-[1.5px] md:h-[2px] w-16 md:w-24 bg-white/10 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-white origin-left"
              style={{ 
                transform: `scaleX(${(index + 1) / videos.length})`,
                transition: 'transform 1s cubic-bezier(0.85, 0, 0.15, 1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}