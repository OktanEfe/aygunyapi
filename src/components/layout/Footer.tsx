"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1A2B] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <span className="text-[20vw] font-serif italic leading-none select-none">Aygün</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-light tracking-[0.2em] uppercase">
                Aygün <span className="font-serif italic opacity-50">Yapı</span>
              </h2>
              <div className="h-px w-12 bg-white/20" />
            </div>
            <p className="text-white/50 font-light leading-relaxed max-w-sm text-sm md:text-base">
              Yalova merkezli tasarım ofisimizde, mimariyi sadece bir inşa süreci değil, bir zanaat ve estetik yolculuğu olarak görüyoruz. 1998&apos;den beri güven inşa ediyoruz.
            </p>
            <div className="flex gap-4">
              {["instagram", "facebook", "linkedin"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A1A2B] transition-all duration-500"
                >
                  <i className={`bi bi-${social} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-8">
            <h6 className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">Navigasyon</h6>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Anasayfa", path: "/" },
                { name: "Projelerimiz", path: "/projeler" },
                { name: "Hakkımızda", path: "/hakkimizda" },
                { name: "İletişim", path: "/iletisim" }
              ].map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className="text-sm font-light text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-8">
            <h6 className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">İletişim Detayları</h6>
            <div className="flex flex-col gap-6">
              <div className="group">
                <span className="text-[9px] font-bold tracking-widest text-white/20 uppercase block mb-1">Telefon</span>
                <a href="tel:+905551112233" className="text-lg font-light hover:text-white/100 transition-colors tracking-tight">
                  +90 555 111 22 33
                </a>
              </div>
              <div className="group">
                <span className="text-[9px] font-bold tracking-widest text-white/20 uppercase block mb-1">E-Posta</span>
                <a href="mailto:info@aygunyapi.com" className="text-lg font-light hover:text-white/100 transition-colors tracking-tight">
                  info@aygunyapi.com
                </a>
              </div>
              <div className="group">
                <span className="text-[9px] font-bold tracking-widest text-white/20 uppercase block mb-1">Adres</span>
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  İzmit, Kocaeli / Türkiye <br />
                  Yalova Tasarım & Uygulama Ofisi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
            © {currentYear} Aygün Yapı — Design Studio
          </div>
          
          <div className="flex gap-8">
             <Link href="/gizlilik" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 hover:text-white transition-colors">
                Gizlilik Politikası
             </Link>
             <Link href="/cerezler" className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 hover:text-white transition-colors">
                Çerezler
             </Link>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 hover:text-white transition-all"
          >
            Başa Dön
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <i className="bi bi-arrow-up text-xs"></i>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}