import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, products } from "@/data/products";

type PageProps = {
  params: Promise<{
    slug: string;
    productslug: string;
  }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug, productslug } = await params;

  const category = categories.find((item) => item.slug === slug);
  const product = products.find(
    (item) => item.categorySlug === slug && item.slug === productslug
  );

  if (!category || !product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.categorySlug === slug && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/30">
            <Link href="/urunler" className="transition hover:text-[#0A1A2B]">
              Ürünler
            </Link>
            <span>/</span>
            <Link
              href={`/urunler/${category.slug}`}
              className="transition hover:text-[#0A1A2B]"
            >
              {category.title}
            </Link>
            <span>/</span>
            <span className="text-[#0A1A2B]">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-[#F5F5F7]">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {product.images.slice(1, 3).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#F5F5F7]"
                  >
                    <Image
                      src={img}
                      alt={`${product.name}-${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/30">
                  {category.title}
                </span>
                <div className="h-px w-8 bg-black/10" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/30">
                  {product.brand}
                </span>
              </div>

              <h1 className="mb-8 text-5xl font-extralight tracking-tighter text-[#0A1A2B] md:text-7xl">
                {product.name}
              </h1>

              <p className="mb-10 max-w-xl text-lg font-light leading-8 text-black/50 md:text-xl">
                {product.description}
              </p>

              <div className="mb-10">
                <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.32em] text-black/30">
                  Yüzey Tonları
                </span>

                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 transition hover:border-[#0A1A2B]/20"
                      type="button"
                    >
                      <span
                        className="block h-5 w-5 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-[11px] font-medium tracking-wide text-[#0A1A2B]">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-black/5 py-10">
                {product.specs.map((spec, i) => (
                  <div key={i}>
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.28em] text-black/20">
                      {spec.label}
                    </span>
                    <span className="text-base font-light text-[#0A1A2B] md:text-lg">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-[2rem] bg-[#F7F7F8] p-7">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.32em] text-black/30">
                  Neden Bu Ürün?
                </span>

                <div className="space-y-4">
                  {product.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A1A2B]/5 text-[#0A1A2B]">
                        <i className="bi bi-check2 text-sm"></i>
                      </div>
                      <p className="text-sm leading-7 text-black/55">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex-1 rounded-full bg-[#0A1A2B] px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#0A1A2B]/90">
                  Teklif Al & Numune İste
                </button>

                <button className="rounded-full border border-black/10 px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A1A2B] transition hover:bg-[#F5F5F7]">
                  WhatsApp Danışman
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F7] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#0A1A2B]/20" />
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0A1A2B]/40">
                  Uygulama Alanları
                </p>
              </div>

              <h2 className="text-4xl font-extralight tracking-tight text-[#0A1A2B] md:text-6xl">
                Farklı yaşam alanlarında <br />
                <span className="font-serif italic text-black/20 text-5xl md:text-7xl">
                  güçlü kullanım senaryoları.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {product.usageAreas.map((area, index) => (
              <div
                key={area}
                className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-[#0A1A2B] p-10 transition-all duration-700 hover:bg-[#0E2136] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] md:p-12"
              >
                <div>
                  <div className="mb-12 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white/70 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                      <i className="bi bi-check2 text-xl"></i>
                    </div>

                    <span className="font-serif text-3xl italic text-white/5 transition-colors duration-500 group-hover:text-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mb-6 text-2xl font-light leading-snug tracking-tight text-white md:text-3xl">
                    {area}
                  </h3>
                </div>

                <div>
                  <p className="text-[15px] leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
                    Bu yüzey, estetik görünümünü korurken uygulama kalitesi ve kullanım dengesini destekler.
                  </p>

                  <div className="mt-8 flex h-10 w-10 scale-90 items-center justify-center rounded-full border border-white/10 text-white/40 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-hover:text-white">
                    <i className="bi bi-arrow-up-right text-xs"></i>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/30">
                  Benzer Seçimler
                </p>
                <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
                  Aynı dilde öne çıkan <br className="hidden md:block" />
                  diğer yüzeyler.
                </h2>
              </div>

              <Link
                href={`/urunler/${slug}`}
                className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/60 transition hover:text-[#0A1A2B]"
              >
                Tüm ürünlere dön
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/urunler/${slug}/${item.slug}`}
                  className="group"
                >
                  <div className="relative mb-5 aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-[#F5F5F7]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 px-1">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-[#0A1A2B]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/25">
                        {item.subtitle}
                      </p>
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0A1A2B]/50 transition group-hover:text-[#0A1A2B]">
                      İncele
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}