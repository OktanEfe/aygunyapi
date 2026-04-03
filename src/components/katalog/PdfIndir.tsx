import Image from "next/image";

export default function PdfIndir() {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#F8F8F8] p-10 md:p-20">
          <div className="flex flex-col items-center gap-14 md:flex-row md:gap-16">
            <div className="relative w-full md:w-[36%]">
              <div className="relative mx-auto aspect-[4/5] max-w-[360px] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900"
                  alt="Dijital katalog kapağı"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-[64%]">
              <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.4em] text-[#0A1A2B]/30">
                Dijital Sunum
              </span>

              <h2 className="text-4xl font-extralight tracking-tighter text-[#0A1A2B] md:text-6xl">
                Güncel Koleksiyon <br />
                <span className="font-serif italic text-black/20">
                  Kataloğunu İnceleyin.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg font-light leading-8 text-black/45">
                Seçili yüzey gruplarını, koleksiyon yönlerini ve uygulama dilini bir arada
                sunan dijital kataloğumuzu çevrimiçi görüntüleyin veya PDF olarak indirin.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#0A1A2B] px-9 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition hover:opacity-90">
                  Kataloğu İncele
                </button>

                <button className="rounded-full border border-black/10 px-9 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1A2B] transition hover:bg-black/[0.03]">
                  PDF İndir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}