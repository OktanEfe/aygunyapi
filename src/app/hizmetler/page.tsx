import { Metadata } from "next";
import ServicesHero from "@/components/hizmetler/Hero";
import ServicesGrid from "@/components/hizmetler/Grid";
import SignatureService from "@/components/hizmetler/Signature";
import ProcessStrip from "@/components/hizmetler/Process";
import ServicesCTA from "@/components/hizmetler/CTA";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Aygün Yapı",
  description: "Mutfak tasarımından anahtar teslim uygulamalara kadar, Aygün Yapı'nın premium mimari çözümlerini keşfedin.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
      <SignatureService />
      <ProcessStrip />

     

      <ServicesCTA />
    </main>
  );
}