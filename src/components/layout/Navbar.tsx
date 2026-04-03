"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Ürünler", href: "/urunler" },
    { name: "Katalog", href: "/katalog" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Yüzey Seçimi", href: "/yuzeysecimi" },
    { name: "Projeler", href: "/projeler" },



  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-[999] transition-all duration-500 ${
      scrolled 
        ? "bg-white py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]" 
        : "bg-white lg:bg-transparent py-6"
    }`}>
      <div className="max-w-[1700px] mx-auto flex items-center justify-between px-6 lg:px-12">
        
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image 
              src="/assets/logo.png" 
              alt="Aygün Yapı" 
              width={160} 
              height={40} 
              className="h-8 lg:h-10 w-auto object-contain"
              priority 
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="group relative py-1"
            >
              <span className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-300 ${
                pathname === item.href ? "text-black" : "text-black/50 group-hover:text-black"
              }`}>
                {item.name}
              </span>
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-black transition-all duration-500 ease-in-out ${
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
  <Link 
    href="/iletisim" 
    style={{ 
      backgroundColor: '#0A1A2B', 
      color: '#FFFFFF',           
      border: '1px solid #0A1A2B' 
    }}
    className="px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-500 ease-in-out hover:!bg-white hover:!text-[#0A1A2B] active:scale-95 shadow-sm"
  >
    Bize Ulaşın
  </Link>
</div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 flex flex-col gap-1.5 items-end"
        >
          <div className={`h-[1px] bg-black transition-all duration-300 ${isOpen ? "w-7 rotate-45 translate-y-2" : "w-7"}`} />
          <div className={`h-[1px] bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`} />
          <div className={`h-[1px] bg-black transition-all duration-300 ${isOpen ? "w-7 -rotate-45 -translate-y-2" : "w-3"}`} />
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-[998] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-10">
          <div className="space-y-6">
            {menuItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="block text-4xl font-extralight tracking-tight text-black border-b border-black/5 pb-4"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Link 
            href="/iletisim"
            onClick={() => setIsOpen(false)}
            className="bg-midnight text-white text-center py-5 rounded-full uppercase tracking-[0.2em] text-xs font-bold transition-all active:scale-95"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </nav>
  );
}