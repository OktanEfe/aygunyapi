import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/products";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: `${category.title} | Aygün Yapı`, description: category.description };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const showNav = category.groups.length > 1;

  return (
    <main className="min-h-screen bg-white">
      {/* Başlık */}
      <section className="relative overflow-hidden bg-[#0A1A2B] pt-36 pb-16 md:pt-44 md:pb-24">
        <Image
          src={category.image}
          alt={category.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2B] via-[#0A1A2B]/80 to-[#0A1A2B]/30" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
            <Link href="/urunler" className="transition hover:text-white">
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-white/80">{category.title}</span>
          </div>

          <h1 className="text-4xl font-extralight tracking-tight text-white md:text-7xl">
            {category.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light leading-8 text-white/70 md:text-lg">
            {category.description}
          </p>

          {showNav && (
            <div className="mt-10 flex flex-wrap gap-3">
              {category.groups.map((g) => (
                <a
                  key={g.slug}
                  href={`#${g.slug}`}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur transition hover:border-white hover:bg-white hover:text-[#0A1A2B]"
                >
                  {g.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gruplar */}
      <div className="bg-[#F9F9F9]">
        {category.groups.map((group, gi) => (
          <section
            key={group.slug}
            id={group.slug}
            className={`scroll-mt-24 py-16 md:py-24 ${gi % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="container mx-auto px-6">
              <div className="mb-10 grid grid-cols-1 gap-6 md:mb-14 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-5">
                  {showNav && (
                    <span className="mb-4 block font-serif text-2xl italic text-[#0A1A2B]/15">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                  )}
                  {group.title && (
                    <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
                      {group.title}
                    </h2>
                  )}
                </div>
                <div className="lg:col-span-7">
                  {group.intro && (
                    <p className="max-w-2xl text-base font-light leading-8 text-black/55">
                      {group.intro}
                    </p>
                  )}
                  {group.tags && (
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A1A2B]/40">
                      {group.tags.join(" · ")}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex flex-col rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(10,26,43,0.15)] md:p-8"
                  >
                    <h3 className="text-xl font-light tracking-tight text-[#0A1A2B] md:text-2xl">
                      {item.name}
                    </h3>
                    {item.desc && (
                      <p className="mt-4 text-[15px] font-light leading-7 text-black/55">{item.desc}</p>
                    )}
                    {item.bullets && (
                      <ul className="mt-5 space-y-2 border-t border-black/5 pt-5">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm text-[#0A1A2B]/70">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0A1A2B]/40" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-black/5 bg-[#F9F9F9] py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
            Doğru yüzeyi <br />
            <span className="font-serif italic text-black/25">birlikte belirleyelim.</span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/45">
            Projenize uygun ürün seçimi için yüzey, ton ve kullanım senaryosunu birlikte değerlendirelim.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/iletisim#proje-formu"
              className="rounded-full bg-[#0A1A2B] px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:opacity-90"
            >
              Ücretsiz Danışmanlık Alın
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:bg-white"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
