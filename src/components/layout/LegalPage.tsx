import Link from "next/link";

type Section = { title: string; body: React.ReactNode };

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: React.ReactNode;
  sections: Section[];
}) {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0A1A2B] pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-white/50">
              {eyebrow}
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <h1 className="text-4xl font-extralight tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40">
            Son güncelleme: {updated}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="text-base font-light leading-8 text-black/60 md:text-lg">{intro}</div>

          <div className="mt-14 space-y-12">
            {sections.map((s, i) => (
              <div key={s.title}>
                <h2 className="mb-4 text-xl font-light tracking-tight text-[#0A1A2B] md:text-2xl">
                  <span className="mr-3 text-sm text-black/25">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="space-y-4 text-[15px] font-light leading-7 text-black/55">{s.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-black/5 pt-10">
            <Link
              href="/iletisim"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/60 transition hover:text-[#0A1A2B]"
            >
              Sorularınız için bize ulaşın →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
