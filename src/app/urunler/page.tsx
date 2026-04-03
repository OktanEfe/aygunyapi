import { CategoryShowcase } from "@/components/urunler/category";
import { ProductAdvisory } from "@/components/urunler/CTA";
import ProductsHero from "@/components/urunler/hero";
import { ArrowUpRight, Compass, MapPin, Layers, Grid } from "lucide-react"; // İkonlar için


export default function ProductsPage() {
  const yaklasimKartlari = [
    {
      label: "Seçim Desteği",
      title: "Projeye uygun yüzey eşleşmesi",
      desc: "Mekanın ışığına, kullanım yoğunluğuna ve genel tasarım diline uygun malzeme seçiminde yönlendirme sağlıyoruz.",
      icon: <Compass size={18} strokeWidth={1.5} />,
      index: "01"
    },
    {
      label: "Lokal Güç",
      title: "Yalova odaklı hızlı süreç yönetimi",
      desc: "Yalova ve çevresindeki projelerde daha kontrollü keşif, daha hızlı yönlendirme ve daha yakın iletişim avantajı sunuyoruz.",
      icon: <MapPin size={18} strokeWidth={1.5} />,
      index: "02"
    },
    {
      label: "Uygulama Odaklı",
      title: "Sadece seçim değil, doğru uygulama",
      desc: "Ürün önerisini yalnızca görsellik üzerinden değil, uygulama kalitesi ve uzun ömürlü kullanım açısından da değerlendiriyoruz.",
      icon: <Layers size={18} strokeWidth={1.5} />,
      index: "03"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <ProductsHero />
      <CategoryShowcase />
      <Grid />

      <section className="bg-white py-32 md:py-40">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#0A1A2B]/20" />
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0A1A2B]/40">
                  Ürün Seçim Yaklaşımı
                </p>
              </div>
              <h2 className="text-4xl font-extralight tracking-tight text-[#0A1A2B] md:text-6xl">
                Sadece ürün değil, <br />
                <span className="font-serif italic text-black/20 text-5xl md:text-7xl">doğru seçim sunuyoruz.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {yaklasimKartlari.map((item, idx) => (
              <div 
              key={idx}
              className="group relative flex flex-col justify-between rounded-[2.5rem] border border-[#0A1A2B]/10 bg-[#FBFBFC] p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(10,26,43,0.06)] md:p-12"
            >
              <div>
                <div className="mb-12 flex items-center justify-between">
                  
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A1A2B]/5 text-[#0A1A2B]">
                    {item.icon}
                  </div>
            
                  <span className="font-serif text-3xl italic text-[#0A1A2B]/10">
                    {item.index}
                  </span>
                </div>
                
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A1A2B]/40">
                  {item.label}
                </span>
            
                <h3 className="mb-6 text-2xl font-light leading-snug tracking-tight text-[#0A1A2B] md:text-3xl">
                  {item.title}
                </h3>
              </div>
            
              <div>
                <p className="text-[15px] leading-relaxed text-black/50">
                  {item.desc}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <ProductAdvisory />
    </main>
  );
}