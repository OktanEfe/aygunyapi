import AboutHero from "@/components/hakkımızda/Hero";
import AboutValues from "@/components/hakkımızda/Values";
import AboutStory from "@/components/hakkımızda/TheStory";
import AboutQuote from "@/components/hakkımızda/HumanTouch";
import ServicesCTA from "@/components/hizmetler/CTA"

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