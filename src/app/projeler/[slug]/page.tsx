import Image from "next/image";
import Link from "next/link";

const projectData = {
  title: "Modern Loft",
  category: "İç Mekan",
  year: "2024",
  location: "Yalova",
  area: "120m²",
  description: "Bu proje, brütalist mimari ile modern konforun harmanlandığı bir yaşam alanı sunar. Malzeme seçiminde ham beton dokusu ve meşe ağacının sıcaklığı tercih edilmiştir. Işığın mekan üzerindeki dansı, her saat diliminde farklı bir atmosfer yaratır.",
  mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600",
  gallery: [
    { src: "https://images.unsplash.com/photo-1600566752355-35792bed3a88?q=80&w=1200", layout: "full" },
    { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=800", layout: "half" },
    { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800", layout: "half" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200", layout: "full" }
  ],
  materials: ["Ham Beton", "Doğal Meşe", "Siyah Mat Çelik", "İtalyan Mermer"]
};

export default function ProjectDetail() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[90vh] w-full overflow-hidden bg-[#0A1A2B]">
        <Image 
          src={projectData.mainImage} 
          alt={projectData.title} 
          fill 
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-20 left-0 w-full">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-white/50">
                {projectData.category}
              </span>
              <div className="h-px w-8 bg-white/20" />
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-white/50">
                {projectData.location}
              </span>
            </div>
            <h1 className="text-7xl md:text-[160px] font-extralight text-white tracking-tighter leading-[0.8] mb-4">
              {projectData.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-y-10 border-t border-black/5 pt-12">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase block mb-3">Yıl</span>
                    <span className="text-xl font-light text-[#0A1A2B]">{projectData.year}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase block mb-3">Alan</span>
                    <span className="text-xl font-light text-[#0A1A2B]">{projectData.area}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase block mb-3">Lokasyon</span>
                    <span className="text-xl font-light text-[#0A1A2B]">{projectData.location}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase block mb-6">Materyal Paleti</span>
                  <div className="flex flex-wrap gap-2">
                    {projectData.materials.map((m) => (
                      <span key={m} className="px-5 py-2.5 bg-[#F5F5F7] text-[#0A1A2B] rounded-full text-[11px] font-medium tracking-tight">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="max-w-2xl">
                <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0A1A2B]/30 mb-10">Konsept ve Yaklaşım</h2>
                <p className="text-3xl md:text-5xl font-extralight text-[#0A1A2B] leading-[1.1] tracking-tighter italic">
                  &quot;{projectData.description}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Gallery */}
      <section className="pb-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap -m-4">
            {projectData.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`p-4 ${img.layout === 'full' ? 'w-full' : 'w-full md:w-1/2'}`}
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:h-[70vh] overflow-hidden rounded-[2.5rem] bg-[#F5F5F7] group shadow-sm transition-all duration-1000 hover:shadow-2xl">
                  <Image 
                    src={img.src} 
                    alt={`Detay ${idx}`} 
                    fill 
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-black/5 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/projeler" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-all">
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-white transition-all">
                <i className="bi bi-arrow-left"></i>
              </div>
              Tüm Projeler
            </Link>
            <div className="hidden md:block h-px w-24 bg-black/10" />
            <Link href="#" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A1A2B]">
              Sıradaki Proje
              <div className="w-10 h-10 rounded-full bg-[#0A1A2B] text-white flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                <i className="bi bi-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}