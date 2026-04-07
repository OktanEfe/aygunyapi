"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1A2B] text-white pt-24 pb-12 overflow-hidden relative">
      
      {/* Güçlendirilmiş Amorf Parlama Efekti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 200, -100, 300, 0],
            y: [0, 250, 50, 400, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["40% 60% 70% 30%", "50% 50% 20% 80%", "30% 70% 70% 30%", "40% 60% 70% 30%"],
            opacity: [0.4, 0.7, 0.45, 0.7, 0.4] 
          }}
          transition={{
            duration: 18, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -left-20 w-[650px] h-[650px] bg-blue-100/30 rounded-full blur-[80px]"
        />

        <motion.div
          animate={{
            x: [0, -250, 150, -300, 0],
            y: [0, 350, 100, 450, 0],
            scale: [1, 1.3, 0.9, 1.2, 1],
            rotate: [360, 270, 180, 90, 0],
            borderRadius: ["50% 50% 20% 80%", "30% 70% 70% 30%", "60% 40% 30% 70%", "50% 50% 20% 80%"],
            opacity: [0.3, 0.6, 0.3, 0.6, 0.3] 
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-48 -right-40 w-[750px] h-[750px] bg-blue-200/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none whitespace-nowrap z-0">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 10, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex"
        >
          <span className="text-[18vw] font-serif italic leading-none select-none pr-32">
            Aygün Tasarım & Dekorasyon
          </span>
          <span className="text-[18vw] font-serif italic leading-none select-none pr-32">
            Aygün Tasarım & Dekorasyon
          </span>
        </motion.div>
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
            
            <div className="flex gap-5">
              {[
                { id: "instagram", link: "#" },
                { id: "facebook", link: "#" },
                { id: "linkedin", link: "#" }
              ].map((social) => (
                <a 
                  key={social.id} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A1A2B] hover:border-white transition-all duration-500 group"
                  aria-label={social.id}
                >
                  <i className={`bi bi-${social.id} text-xl group-hover:scale-110 transition-transform`}></i>
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
                <a href="tel:+905551112233" className="text-lg font-light hover:text-white transition-colors tracking-tight">
                  +90 555 111 22 33
                </a>
              </div>
              <div className="group">
                <span className="text-[9px] font-bold tracking-widest text-white/20 uppercase block mb-1">E-Posta</span>
                <a href="mailto:info@aygunyapi.com" className="text-lg font-light hover:text-white transition-colors tracking-tight">
                  info@aygunyapi.com
                </a>
              </div>
              <div className="group">
                <span className="text-[9px] font-bold tracking-widest text-white/20 uppercase block mb-1">Adres</span>
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  Yalova Tasarım & Uygulama Ofisi <br />
                  Merkez, Yalova / Türkiye
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