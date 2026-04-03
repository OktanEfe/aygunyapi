import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-6">
        <Link href="/projeler/villa-panorama" className="block group">
          <div className="relative w-full min-h-[70vh] rounded-[3rem] overflow-hidden bg-[#0A1A2B] flex items-end cursor-pointer">
            <Image 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600" 
              alt="Villa Panorama" 
              fill 
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="relative z-10 p-8 md:p-20 w-full bg-gradient-to-t from-[#0A1A2B]/90 to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/50 mb-4 block">Yılın Projesi — Müstakil Villa</span>
                  <h2 className="text-4xl md:text-7xl font-light text-white tracking-tight">Villa Panorama</h2>
                </div>
                <div className="px-10 py-5 bg-white text-[#0A1A2B] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] group-hover:bg-[#F5F5F7] transition-colors whitespace-nowrap">
                  Projeyi İncele
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}