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
      <section className="bg-midnight pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="container-x">
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          <h1 className="mt-6 text-[40px] font-extralight tracking-[-0.03em] text-white md:text-[72px]">
            {title}
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/45">
            Son güncelleme: {updated}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <div className="text-base font-light leading-8 text-midnight/70 md:text-lg">{intro}</div>

          <div className="mt-14 space-y-12">
            {sections.map((s, i) => (
              <div key={s.title}>
                <h2 className="mb-4 text-xl font-light tracking-tight text-midnight md:text-2xl">
                  <span className="mr-3 text-sm text-bordo">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="space-y-4 text-[15px] font-light leading-7 text-midnight/65">{s.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-midnight/10 pt-10">
            <Link
              href="/iletisim"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bordo transition hover:text-midnight"
            >
              Sorularınız için bize ulaşın →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
