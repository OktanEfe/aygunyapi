import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Calacatta Gold",
    slug: "calacatta-gold-1",
    category: "Kuvars Yüzey",
    series: "İtalyan Serisi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&v=1",
  },
  {
    id: 2,
    title: "Calacatta Gold",
    slug: "calacatta-gold-2",
    category: "Kuvars Yüzey",
    series: "İtalyan Serisi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&v=2",
  },
  {
    id: 3,
    title: "Calacatta Gold",
    slug: "calacatta-gold-3",
    category: "Kuvars Yüzey",
    series: "İtalyan Serisi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&v=3",
  },
  {
    id: 4,
    title: "Calacatta Gold",
    slug: "calacatta-gold-4",
    category: "Kuvars Yüzey",
    series: "İtalyan Serisi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&v=4",
  },
  {
    id: 5,
    title: "Calacatta Gold",
    slug: "calacatta-gold-5",
    category: "Kuvars Yüzey",
    series: "İtalyan Serisi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&v=5",
  },
  {
    id: 6,
    title: "Calacatta Gold",
    slug: "calacatta-gold-6",
    category: "Kuvars Yüzey",
    series: "İtalyan Serisi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&v=6",
  },
];

export default function FeaturedProductsGrid() {
  return (
    <section className="bg-[#F9F9F9] py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-black/30">
              Seçili Ürünler
            </p>
            <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
              Projelerde öne çıkan <br className="hidden md:block" />
              seçili yüzeyler.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-[#0A1A2B]/10 bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:border-[#0A1A2B]/20">
              Mat Yüzeyler
            </button>
            <button className="rounded-full border border-[#0A1A2B]/10 bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B] transition hover:border-[#0A1A2B]/20">
              Doğal Taşlar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`/urunler/${product.slug}`}
              key={product.id}
              className="group block"
            >
              <div className="relative mb-6 aspect-[1/1] overflow-hidden rounded-[2rem] bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute right-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 text-[#0A1A2B] opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="flex items-start justify-between gap-6 px-1">
                <div>
                  <h3 className="text-2xl font-light tracking-tight text-[#0A1A2B]">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/25">
                    {product.category} / {product.series}
                  </p>
                </div>

                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0A1A2B]/45 transition group-hover:text-[#0A1A2B]">
                  İncele
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}