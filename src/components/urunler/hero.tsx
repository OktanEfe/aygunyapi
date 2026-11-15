import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { categories } from "@/data/products";

export default function ProductsHero() {
  return (
    <PageHeader title="Ürünler" image="/assets/photos/mutfak-mermer/2.jpg" imageAlt="Mermer desenli mutfak tezgâhı ve alın">
      <ul className="flex flex-wrap gap-3">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/urunler/${c.slug}`}
              className="inline-flex rounded-full border border-white/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 transition-colors hover:border-white hover:bg-white hover:text-midnight"
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageHeader>
  );
}
