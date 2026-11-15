import type { Metadata } from "next";
import AboutHero from "@/components/hakkımızda/Hero";
import AboutValues from "@/components/hakkımızda/Values";
import AboutStory from "@/components/hakkımızda/TheStory";
import AboutQuote from "@/components/hakkımızda/HumanTouch";
import ServicesCTA from "@/components/hizmetler/CTA";

export const metadata: Metadata = {
  title: "Hakkımızda | Aygün Yapı",
  description:
    "Aygün Yapı, mimari, iç mimari ve mobilyayı aynı tasarım sürecinin parçaları olarak ele alıyor.",
};

export default function Hakkimizda() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutStory />
      <AboutQuote />
      <ServicesCTA />
    </main>
  );
}
