import Image from "next/image";
import Link from "next/link";

export default function SignatureService() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#0A1A2B] min-h-[600px] flex items-center">
          <Image 
            src="/assets/photos/tv-unitesi/2.jpg" 
            alt="TV ünitesi uygulaması" 
            fill 
            className="object-cover opacity-40 grayscale-[0.5]"
          />
          <div className="relative z-10 p-8 md:p-24 max-w-3xl">
            <h2 className="text-4xl md:text-7xl font-extralight text-white leading-tight mb-8">
              Tasarımdan Uygulamaya <br /> <span className="font-serif italic text-white/60">Bütüncül Yaklaşım.</span>
            </h2>
            <p className="text-lg text-white font-light mb-12 leading-relaxed">
              Bizim için proje, anahtarı teslim ettiğimizde bitmez. Yaşamın başladığı o ilk andaki konforunuzu garanti altına almak için tüm süreci tek elden yönetiyoruz.
            </p>
            <Link
              href="/iletisim#proje-formu"
              className="inline-block px-10 py-5 bg-white text-[#0A1A2B] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
            >
              Süreci Başlatın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}