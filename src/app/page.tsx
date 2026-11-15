import Hero from "@/components/anasayfa/Hero";
import Banner from "@/components/anasayfa/Banner";
import { CategoryShowcase } from "@/components/urunler/category";
import Gallery from "@/components/anasayfa/Gallery";
import ContactCTA from "@/components/anasayfa/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <CategoryShowcase />
      <Gallery />
      <ContactCTA />
    </main>
  );
}
