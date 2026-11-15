import Link from "next/link";
import { site, mapsLink, whatsappLink } from "@/data/site";

const nav = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Ürünler", href: "/urunler" },
  { name: "Katalog", href: "/katalog" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight-950 text-white">
      <div className="container-x grid gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-24">
        <div className="md:col-span-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-mark-light.svg" alt="Aygün Yapı" className="h-20 w-auto" />
          <p className="mt-8 max-w-md text-[15px] font-light leading-[1.8] text-white/55">
            Yalova merkezli tasarım ofisimizde, mimarlığı yalnızca bir inşa süreci değil; estetik,
            işlevsellik ve detayların bir araya geldiği bir çalışma alanı olarak görüyoruz. Tasarım,
            uygulama ve mobilya alanlarındaki deneyimimizle 1993’den beri güven inşa ediyoruz.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white hover:bg-white hover:text-midnight"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white hover:bg-white hover:text-midnight"
            >
              <i className="bi bi-whatsapp" />
            </a>
          </div>
        </div>

        <nav className="md:col-span-2 md:col-start-7" aria-label="Alt menü">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">Menü</h2>
          <ul className="mt-6 space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] font-light text-white/65 transition-colors hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">İletişim</h2>
          <dl className="mt-6 space-y-5 text-[15px] font-light">
            <div>
              <dt className="sr-only">Telefon</dt>
              <dd>
                <a href={site.phoneHref} className="text-white/85 transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">E-Posta</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-white/85 transition-colors hover:text-white">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Adres</dt>
              <dd className="leading-[1.7] text-white/55">
                {site.addressLines[0]}
                <br />
                {site.addressLines[1]}
              </dd>
              <dd className="mt-3">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo-200 transition-colors hover:text-white"
                >
                  Yol Tarifi <i className="bi bi-arrow-up-right" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-7 text-[11px] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {year} {site.name}</span>
          <div className="flex gap-6">
            <Link href="/gizlilik" className="transition-colors hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="/cerezler" className="transition-colors hover:text-white">
              Çerezler
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
