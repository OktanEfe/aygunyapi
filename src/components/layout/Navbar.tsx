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
    { name: "Projeler", href: "/projeler" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-[999] w-full transition-all duration-500 ${
        scrolled
          ? "bg-white py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 lg:px-12">
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/assets/logo.png"
              alt="Aygün Yapı"
              width={160}
              height={40}
              className="h-8 w-auto object-contain lg:h-10"
              priority
            />
          </Link>
        </div>

        <div className="hidden items-center gap-10 lg:flex">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className="group relative py-1">
                <span
                  className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${
                    scrolled
                      ? isActive
                        ? "text-black"
                        : "text-black/50 group-hover:text-black"
                      : isActive
                      ? "text-white"
                      : "text-white/65 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-500 ease-in-out ${
                    scrolled
                      ? `bg-black ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                      : `bg-white ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center lg:flex">
          <Link
            href="/iletisim"
            className={`rounded-full px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm transition-all duration-500 ease-in-out active:scale-95 ${
              scrolled
                ? "border border-[#0A1A2B] bg-[#0A1A2B] text-white hover:bg-white hover:text-[#0A1A2B]"
                : "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[#0A1A2B]"
            }`}
          >
            Bize Ulaşın
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <div
            className={`flex items-center gap-3 rounded-full px-4 py-2 backdrop-blur-sm transition-all duration-300 ${
              scrolled
                ? "border border-black/10 bg-white/90 hover:border-black/20"
                : "border border-white/20 bg-white/10 hover:border-white/35"
            }`}
          >
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${
                scrolled ? "text-[#0A1A2B]" : "text-white"
              }`}
            >
              Menü
            </span>

            <div className="relative h-5 w-5">
              <span
                className={`absolute top-[6px] left-0 h-[1.5px] w-5 transition-all duration-300 ${
                  scrolled ? "bg-[#0A1A2B]" : "bg-white"
                } ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`absolute top-[14px] left-0 h-[1.5px] w-5 transition-all duration-300 ${
                  scrolled ? "bg-[#0A1A2B]" : "bg-white"
                } ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </div>
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[998] bg-white transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white"
            aria-label="Menüyü kapat"
          >
            <div className="relative h-5 w-5">
              <span className="absolute top-1/2 left-0 h-[1.5px] w-5 -translate-y-1/2 rotate-45 bg-black" />
              <span className="absolute top-1/2 left-0 h-[1.5px] w-5 -translate-y-1/2 -rotate-45 bg-black" />
            </div>
          </button>
        </div>

        <div className="flex h-full flex-col gap-10 px-10 pt-32">
          <div className="space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-black/5 pb-4 text-4xl font-extralight tracking-tight text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/iletisim"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-[#0A1A2B] py-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition-all active:scale-95"
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </nav>
  );
}