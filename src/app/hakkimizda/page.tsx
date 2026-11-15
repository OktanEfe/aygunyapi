import type { Metadata } from "next";
import AboutHero from "@/components/hakkımızda/Hero";
import AboutValues from "@/components/hakkımızda/Values";
import AboutStory from "@/components/hakkımızda/TheStory";
import AboutQuote from "@/components/hakkımızda/HumanTouch";
import ServicesCTA from "@/components/hizmetler/CTA"

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Yalova merkezli tasarım ofisimizde mimarlığı estetik, işlevsellik ve detayların bir araya geldiği bir çalışma alanı olarak görüyoruz. 1993’den beri.",
  alternates: { canonical: "/hakkimizda" },
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