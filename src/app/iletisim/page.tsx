import type { Metadata } from "next";
import ContactForm from "@/components/iletisim/ContactForm";
import { site, mapsEmbed, mapsLink, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim | Aygün Yapı",
  description: `${site.addressLines.join(", ")} · ${site.phoneDisplay} · ${site.email}`,
};

export default function IletisimPage() {
  return (
    <main>
      <section className="bg-midnight pb-16 pt-40 text-white md:pb-20 md:pt-48">
        <div className="container-x">
          <h1 className="text-[48px] font-extralight leading-none tracking-[-0.03em] md:text-[96px]">İletişim</h1>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:mt-20 md:grid-cols-3">
            <div className="bg-midnight p-7 md:p-8">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">Telefon</dt>
              <dd className="mt-4 flex items-center justify-between gap-4">
                <a href={site.phoneHref} className="text-[22px] font-light transition-colors hover:text-bordo-200">
                  {site.phoneDisplay}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp ile yazın"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-midnight"
                >
                  <i className="bi bi-whatsapp" />
                </a>
              </dd>
            </div>
            <div className="bg-midnight p-7 md:p-8">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">E-Posta</dt>
              <dd className="mt-4">
                <a href={`mailto:${site.email}`} className="break-all text-[22px] font-light transition-colors hover:text-bordo-200">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="bg-midnight p-7 md:p-8">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">Çalışma Alanı</dt>
              <dd className="mt-4 text-[22px] font-light">Merkez / Yalova</dd>
              <dd className="mt-1 text-[14px] font-light text-white/55">Yalova ve çevresi tasarım &amp; uygulama desteği</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="proje-formu" className="scroll-mt-24 bg-sand py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <span className="eyebrow">Proje Talep Formu</span>
            <h2 className="mt-6 text-[34px] font-extralight leading-[1.08] tracking-[-0.03em] text-midnight md:text-[48px]">
              Mekânınızı <span className="font-serif font-normal italic text-bordo">Birlikte Tasarlayalım.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white p-3 md:p-5">
        <div className="relative overflow-hidden rounded-[28px] bg-sand md:rounded-[40px]">
          <iframe
            title="Aygün Yapı konumu — Google Haritalar"
            src={mapsEmbed}
            className="block h-[460px] w-full border-0 md:h-[600px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-x-3 bottom-3 md:inset-x-auto md:bottom-auto md:left-8 md:top-8">
            <div className="pointer-events-auto max-w-sm rounded-2xl bg-midnight p-7 text-white shadow-[0_30px_60px_-20px_rgba(11,19,40,0.5)] md:p-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">Adres</span>
              <address className="mt-4 text-[17px] font-light not-italic leading-[1.6]">
                {site.addressLines[0]}
                <br />
                <span className="text-white/60">{site.addressLines[1]}</span>
              </address>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-light mt-7 w-full">
                Yol Tarifi Al
                <i className="bi bi-arrow-up-right text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
