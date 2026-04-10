import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, products } from "@/data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);
  const categoryProducts = products.filter((item) => item.categorySlug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/30">
            <Link href="/urunler" className="transition hover:text-[#0A1A2B]">
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-[#0A1A2B]">{category.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
             
            </div>

            <h1 className="text-4xl font-extralight tracking-tight text-[#0A1A2B] md:text-6xl">
              {category.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base font-light leading-8 text-black/45 md:text-lg">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/30">
                Tüm Ürünler
              </p>
              <h2 className="text-2xl font-extralight tracking-tight text-[#0A1A2B] md:text-4xl">
                Kategoriye ait tüm ürünler
              </h2>
            </div>

            <Link
              href="/urunler"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/60 transition hover:text-[#0A1A2B]"
            >
              Tüm kategorilere dön
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {categoryProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/urunler/${slug}/${product.slug}`}
                className="group block"
              >
                <div className="relative mb-4 aspect-[4/4.5] overflow-hidden rounded-[1.5rem] bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="px-1">
                  <h3 className="text-lg font-light tracking-tight text-[#0A1A2B] md:text-xl">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/25">
                    {product.subtitle}
                  </p>

                  <span className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0A1A2B]/50 transition group-hover:text-[#0A1A2B]">
                    İncele
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
            Doğru yüzeyi <br />
            <span className="font-serif italic text-black/20">
              birlikte belirleyelim.
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/45">
            Projenize uygun ürün seçimi için yüzey, ton ve kullanım senaryosunu birlikte değerlendirelim.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#0A1A2B] px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:opacity-90">
              Ücretsiz Danışmanlık Alın
            </button>

            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:bg-[#F7F7F8]"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}