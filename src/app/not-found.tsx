import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0A1A2B]">
      <section className="relative overflow-hidden">
        <div className="container mx-auto flex min-h-screen flex-col justify-center px-6 py-24">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#0A1A2B]/35">
                Sayfa Bulunamadı
              </span>
              <div className="h-px w-12 bg-[#0A1A2B]/15" />
            </div>

            <div className="mb-10">
              <span className="block font-serif text-7xl italic leading-none text-[#0A1A2B]/10 md:text-[140px]">
                404
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extralight leading-[1.02] tracking-tight md:text-7xl">
              Aradığınız sayfa şu anda <br />
              <span className="font-serif italic text-black/20">
                erişilebilir değil.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-black/45 md:text-xl">
              Bağlantı değişmiş, kaldırılmış ya da yanlış yazılmış olabilir.
              Ana sayfaya dönebilir, projeleri inceleyebilir veya bizimle doğrudan iletişime geçebilirsiniz.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#0A1A2B] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
              >
                Ana Sayfaya Dön
              </Link>

              <Link
                href="/projeler"
                className="inline-flex items-center justify-center rounded-full border border-[#0A1A2B]/10 bg-white/70 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:border-[#0A1A2B]/20 hover:bg-white"
              >
                Projeleri İncele
              </Link>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-full border border-transparent px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/75 transition hover:text-[#0A1A2B]"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-20 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#0A1A2B]/[0.04] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-black/[0.03] blur-3xl" />
      </section>
    </main>
  );
}