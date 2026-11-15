import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import KatalogGaleri from "@/components/katalog/Galeri";
import ContactCTA from "@/components/anasayfa/CTA";

export const metadata: Metadata = {
  title: "Katalog | Aygün Yapı",
  description:
    "Yüzey, renk ve doku seçimlerini; ışık, kullanım ve tasarım bütünlüğünü gözeterek ele alıyoruz.",
};

export default function KatalogPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Malzeme Seçimi"
        title={
          <>
            Malzeme, <span className="font-serif font-normal italic text-bordo-200">mekânın karakterini tamamlar.</span>
          </>
        }
        text="Yüzey, renk ve doku seçimlerini; ışık, kullanım ve tasarım bütünlüğünü gözeterek ele alıyor, projeye uygun alternatifler oluşturuyoruz."
        image="/assets/photos/mutfak-mermer/6.jpg"
        imageAlt="Mermer desenli yüzey ve ankastre fırın detayı"
      >
        <a href="#galeri" className="btn-light">
          Katalog
          <i className="bi bi-arrow-down text-sm" />
        </a>
        <Link href="/urunler" className="btn-ghost-light">
          Ürünleri İncele
        </Link>
      </PageHeader>
      <KatalogGaleri />
      <ContactCTA />
    </main>
  );
}
