import type { Metadata } from "next";
import ServicesHero from "@/components/hizmetler/Hero";
import ServicesGrid from "@/components/hizmetler/Grid";
import ServicesCTA from "@/components/hizmetler/CTA";

export const metadata: Metadata = {
  title: "Hizmetler | Aygün Yapı",
  description:
    "Mimari tasarımdan uygulamaya, iç mekân çözümlerinden özel üretime kadar farklı ihtiyaçlara yönelik tasarım ve uygulama hizmetleri.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </main>
  );
}
