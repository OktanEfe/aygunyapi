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

      <section className="py-24 bg-white border-b border-black/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="text-2xl md:text-4xl font-extralight text-[#0A1A2B] leading-tight mb-8">
            &quot;Sıradan bir uygulayıcıdan öte, mekanın ruhuna dokunan bir <span className="font-serif italic text-black/30">zanaat anlayışıyla </span> çalışıyoruz.&quot;
          </h3>
          <div className="h-px w-12 bg-[#0A1A2B]/10 mx-auto" />
        </div>
      </section>

      <ServicesCTA />
    </main>
  );
}