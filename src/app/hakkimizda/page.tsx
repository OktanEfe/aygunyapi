import AboutHero from "@/components/hakkımızda/Hero";
import AboutValues from "@/components/hakkımızda/Values";
import AboutStory from "@/components/hakkımızda/TheStory";
import AboutQuote from "@/components/hakkımızda/HumanTouch";
import ContactCTA from "@/components/anasayfa/CTA"; 

export default function Hakkimizda() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutStory />
      <AboutQuote />
      <ContactCTA />
    </main>
  );
}