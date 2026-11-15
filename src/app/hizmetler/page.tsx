import { Metadata } from "next";
import ServicesHero from "@/components/hizmetler/Hero";
import ServicesGrid from "@/components/hizmetler/Grid";
import SignatureService from "@/components/hizmetler/Signature";
import ServicesCTA from "@/components/hizmetler/CTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  alternates: { canonical: "/hizmetler" },
  description: "Mutfak tasarımından anahtar teslim uygulamalara kadar, Aygün Yapı'nın premium mimari çözümlerini keşfedin.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
      <SignatureService />
      {/* Süreç bölümü gizli. Açmak için: import ProcessStrip from "@/components/hizmetler/Process"; ve <ProcessStrip /> */}

     

      <ServicesCTA />
    </main>
  );
}