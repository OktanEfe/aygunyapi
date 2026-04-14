import Image from "next/image";
import Link from "next/link";

export default function PdfIndir() {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#F8F8F8] px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.08)] md:rounded-[3rem] md:px-14 md:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 right-[-80px] h-56 w-56 rounded-full bg-[#0A1A2B]/[0.03] blur-3xl" />
            <div className="absolute bottom-[-60px] left-[-40px] h-44 w-44 rounded-full bg-black/[0.03] blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
            <div className="w-full md:w-[36%]">
              <div className="group relative mx-auto max-w-[360px]">
                <div className="absolute -inset-4 rounded-[2rem] bg-white/60 blur-2xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_35px_80px_rgba(0,0,0,0.1)]">
                  <Image
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900"
                    alt="Dijital katalog kapağı"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-80" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[64%]">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-[#0A1A2B]/15" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#0A1A2B]/35">
                  Dijital Sunum
                </span>
              </div>

              <h2 className="text-4xl font-extralight tracking-tighter text-[#0A1A2B] md:text-6xl">
                Güncel Koleksiyon <br />
                <span className="font-serif italic text-black/20">
                  Kataloğunu İnceleyin.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base font-light leading-8 text-black/50 md:text-lg">
                Seçili yüzey gruplarını, koleksiyon yönlerini ve uygulama yaklaşımını
                bir arada sunan dijital kataloğumuzu çevrimiçi inceleyin ya da PDF
                olarak indirin.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/katalog/dijital"
                  className="inline-flex items-center justify-center rounded-full bg-[#0A1A2B] px-9 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#13263a]"
                >
                  Kataloğu İncele
                </Link>

                <a
                  href="/pdf/katalog.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-9 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1A2B] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#0A1A2B]/20 hover:bg-black/[0.03]"
                >
                  PDF İndir
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}