import type { Metadata } from "next";
import ProductsHero from "@/components/urunler/hero";
import { CategoryShowcase } from "@/components/urunler/category";
import ContactCTA from "@/components/anasayfa/CTA";

export const metadata: Metadata = {
  title: "Ürünler | Aygün Yapı",
  description: "Mutfak sistemleri, banyo serileri, kapılar ve özel üretim mobilya çözümleri.",
};

const approach = [
  {
    label: "Doğru Malzeme",
    title: "Projeye Uygun Seçimler",
    desc: "Renk, doku, kullanım ve mekân koşullarını birlikte değerlendirerek projeye uygun malzeme alternatifleri sunuyoruz.",
  },
  {
    label: "Yerel Deneyim",
    title: "Yalova’da Yakın Hizmet",
    desc: "Bölgeye hâkimiyetimizle projelere daha hızlı ve doğrudan destek sağlıyoruz.",
  },
  {
    label: "Uygulama Odaklı",
    title: "Sadece Seçim Değil, Doğru Uygulama",
    desc: "Ürünleri yalnızca görsel açıdan değil, uygulama koşulları, kullanım ihtiyaçları ve uzun süreli performans açısından da değerlendiriyoruz.",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <CategoryShowcase heading={false} />

      <section className="bg-sand py-20 md:py-28">
        <div className="container-x grid gap-px overflow-hidden rounded-2xl border border-midnight/10 bg-midnight/10 md:grid-cols-3">
          {approach.map((a, i) => (
            <div key={a.label} className="bg-sand p-8 md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bordo">
                0{i + 1} · {a.label}
              </span>
              <h3 className="mt-6 text-[24px] font-light leading-snug tracking-tight text-midnight">{a.title}</h3>
              <p className="mt-4 text-[15px] font-light leading-[1.8] text-midnight/65">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
