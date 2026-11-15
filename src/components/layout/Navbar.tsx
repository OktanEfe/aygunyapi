"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Ürünler", href: "/urunler" },
  { name: "Katalog", href: "/katalog" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Hakkımızda", href: "/hakkimizda" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const solid = scrolled || isOpen;
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[999] transition-[background-color,box-shadow,padding] duration-500 ${
          solid
            ? "bg-white/95 py-3 shadow-[0_1px_0_rgba(25,41,79,0.08)] backdrop-blur-md"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            aria-label="Aygün Yapı — Ana sayfa"
            className="relative block shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-mark.svg"
              alt="Aygün Yapı"
              className={`w-auto transition-all duration-500 ${solid ? "h-12 opacity-100 md:h-14" : "h-16 opacity-0 md:h-[84px]"}`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-mark-light.svg"
              alt=""
              aria-hidden
              className={`absolute inset-0 w-auto transition-all duration-500 ${solid ? "h-12 opacity-0 md:h-14" : "h-16 opacity-100 md:h-[84px]"}`}
            />
          </Link>

          <nav
            className="hidden items-center gap-11 lg:flex"
            aria-label="Ana menü"
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-current after:transition-all after:duration-500 ${
                    active ? "after:w-full" : "after:w-0 hover:after:w-full"
                  } ${
                    solid
                      ? active
                        ? "text-midnight"
                        : "text-midnight/55 hover:text-midnight"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className={`hidden rounded-full px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 lg:inline-flex ${
                solid
                  ? "bg-midnight text-white hover:bg-bordo"
                  : "border border-white/35 text-white hover:border-white hover:bg-white hover:text-midnight"
              }`}
            >
              İletişim
            </Link>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                solid
                  ? "border-midnight/15 text-midnight"
                  : "border-white/30 text-white"
              }`}
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isOpen}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-[998] bg-white transition-[opacity,visibility] duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col px-5 pb-10 pt-6"
          aria-label="Mobil menü"
        >
          {[
            { name: "Ana Sayfa", href: "/" },
            ...menuItems,
            { name: "İletişim", href: "/iletisim" },
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-baseline justify-between border-b border-midnight/[0.07] py-5 text-[28px] font-extralight tracking-tight ${
                pathname === item.href ? "text-bordo" : "text-midnight"
              }`}
            >
              {item.name}
              <span className="text-[10px] font-semibold tracking-[0.2em] text-midnight/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
