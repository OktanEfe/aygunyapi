import Hero from "@/components/anasayfa/Hero";
import Banner from "@/components/anasayfa/Banner";
import Project from "@/components/anasayfa/Projects";
import "@/styles/button.css";
import Gallery from "@/components/anasayfa/Gallery";
import Video from "@/components/anasayfa/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Project />
      <Gallery />
      <Video />
    </main>
  );
}