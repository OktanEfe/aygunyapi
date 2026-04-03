import ProjectsHero from "@/components/projeler/Hero";
import FeaturedProject from "@/components/projeler/Featured";
import Editorial from "@/components/projeler/Editorial";
import TransformationSection from "@/components/projeler/beforeafter";
import ServicesCTA from "@/components/hizmetler/CTA"; 

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <ProjectsHero />
      <FeaturedProject />
      <Editorial />
      <TransformationSection />
      
      <section className="py-24 bg-[#0A1A2B] text-center">
         <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-white/40 text-sm font-light uppercase tracking-[0.4em] mb-8">Tasarım Felsefesi</p>
            <h2 className="text-3xl md:text-5xl text-white font-extralight italic leading-tight">
              &quot;Her proje, malzemenin dürüstlüğü ve kullanıcının ruhu arasında kurulan sessiz bir köprüdür.&quot;
            </h2>
         </div>
      </section>

      <ServicesCTA />
    </main>
  );
}