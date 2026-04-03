import Link from "next/link";
import Image from "next/image";

export default function TransformationSection() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black/30">Dönüşümün Gücü</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter text-[#0A1A2B]">
              Eskiden Yeniye, <br /> <span className="font-serif italic text-black/20">Büyük Değişim.</span>
            </h2>
            <p className="text-lg text-black/50 font-light leading-relaxed max-w-md">
              Atıl durumdaki alanların, doğru malzeme ve ışık mühendisliği ile nasıl prestijli yaşam alanlarına dönüştüğünü görün.
            </p>
            
            <div className="pt-4">
              <Link href="/projeler" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A1A2B]">
                Tüm Dönüşümleri Gör
                <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#0A1A2B] group-hover:text-white transition-all">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 relative aspect-[3/4] rounded-3xl overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=600" alt="Before" fill className="object-cover grayscale transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-[10px] font-bold rounded-full">ÖNCE</div>
            </div>
            <div className="flex-1 relative aspect-[3/4] rounded-3xl overflow-hidden group">
               <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600" alt="After" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A1A2B] text-white text-[10px] font-bold rounded-full">SONRA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}