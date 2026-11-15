import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ContactCTA from "@/components/anasayfa/CTA";
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
    <main>
      <PageHeader
        eyebrow="Ürünler"
        eyebrowHref="/urunler"
        title={category.title}
        text={category.description}
        image={category.image}
        imageAlt={category.title}
      />

      {showNav && (
        <div className="sticky top-[72px] z-20 border-b border-midnight/10 bg-white/95 backdrop-blur md:top-[80px]">
          <nav className="container-x flex gap-2 overflow-x-auto py-4 [scrollbar-width:none]" aria-label="Ürün grupları">
            {category.groups.map((g) => (
              <a
                key={g.slug}
                href={`#${g.slug}`}
                className="shrink-0 rounded-full border border-midnight/15 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-midnight/70 transition-colors hover:border-bordo hover:bg-bordo hover:text-white"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      )}

      {category.groups.map((group, gi) => (
        <section
          key={group.slug}
          id={group.slug}
          className={`scroll-mt-40 py-20 md:py-28 ${gi % 2 === 0 ? "bg-white" : "bg-sand"}`}
        >
          <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
            {(group.title || group.intro || group.tags) && (
              <header className="lg:col-span-4">
                <div className="lg:sticky lg:top-44">
                  {showNav && (
                    <span className="text-[11px] font-semibold tracking-[0.24em] text-bordo">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                  )}
                  {group.title && (
                    <h2 className="mt-3 text-[32px] font-extralight leading-[1.1] tracking-[-0.02em] text-midnight md:text-[44px]">
                      {group.title}
                    </h2>
                  )}
                  {group.intro && (
                    <p className="mt-5 text-[16px] font-light leading-[1.8] text-midnight/65">{group.intro}</p>
                  )}
                  {group.tags && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {group.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-bordo-50 px-3 py-1 text-[11px] font-medium text-bordo"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </header>
            )}

            <div
              className={`grid gap-px self-start overflow-hidden rounded-2xl border border-midnight/10 bg-midnight/10 sm:grid-cols-2 ${
                group.title || group.intro || group.tags ? "lg:col-span-8" : "lg:col-span-12 lg:grid-cols-3"
              }`}
            >
              {group.items.map((item) => (
                <article key={item.name} className={`flex flex-col p-7 md:p-9 sm:[&:last-child:nth-child(odd)]:col-span-2 ${gi % 2 === 0 ? "bg-white" : "bg-sand"}`}>
                  <h3 className="text-[20px] font-normal tracking-tight text-midnight md:text-[22px]">{item.name}</h3>
                  {item.desc && (
                    <p className="mt-4 text-[15px] font-light leading-[1.8] text-midnight/65">{item.desc}</p>
                  )}
                  {item.bullets && (
                    <ul className="mt-5 space-y-2.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[14px] font-light text-midnight/75">
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-bordo" />
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

      {category.gallery.length > 0 && (
        <section className="bg-midnight py-20 md:py-28">
          <div className="container-x">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] md:gap-6">
              {category.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/5] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[42%] lg:w-[calc((100%-4.5rem)/4)]"
                >
                  <Image src={src} alt={category.title} fill sizes="(min-width: 1024px) 25vw, 70vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </main>
  );
}
