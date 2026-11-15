import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/data/site";

export default function ContactCTA() {
  return (
    <section className="bg-white px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-bordo text-white md:rounded-[40px]">
        <Image
          src="/assets/photos/mutfak-klasik/3.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-[0.18] mix-blend-luminosity"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bordo via-bordo/95 to-midnight/90" />

        <div className="container-x grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-light">Sıradaki Adım</span>
            <h2 className="mt-6 text-[40px] font-extralight leading-[1] tracking-[-0.03em] md:text-[80px]">
              Mekânınızı <br />
              <span className="font-serif font-normal italic text-bordo-200">Birlikte Tasarlayalım.</span>
            </h2>
            <p className="mt-10 max-w-xl text-[16px] font-light leading-[1.8] text-white/75 md:text-[17px]">
              Yeni bir yaşam alanı, yenileme projesi ya da ihtiyaçlarınıza uygun mobilyalar için sürecin
              ilk adımını birlikte atalım. Tasarım, malzeme, mobilya ve uygulama aşamalarını bir bütün
              olarak ele alarak, ihtiyaçlarınıza uygun çözümler sunuyoruz.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/iletisim#proje-formu" className="btn-light">
                Hemen Teklif Alın
                <i className="bi bi-arrow-right text-sm" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light">
                <i className="bi bi-telephone text-sm" />
                Bizi Arayın
              </a>
            </div>
          </div>

          <dl className="grid content-end gap-px overflow-hidden rounded-2xl bg-white/10 lg:col-span-4 lg:col-start-9">
            <div className="bg-bordo/60 p-7 backdrop-blur-sm">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">
                Ofis &amp; Uygulama
              </dt>
              <dd className="mt-3 text-[20px] font-light">Merkez Ofis &amp; Atölye</dd>
              <dd className="mt-1 text-[14px] font-light text-white/60">
                Yalova ve çevresi proje &amp; uygulama desteği
              </dd>
            </div>
            <div className="bg-bordo/60 p-7 backdrop-blur-sm">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">E-Posta</dt>
              <dd className="mt-3 break-all text-[20px] font-light">
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-bordo-200">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="bg-bordo/60 p-7 backdrop-blur-sm">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-bordo-200">Telefon</dt>
              <dd className="mt-3 flex items-center justify-between gap-4 text-[20px] font-light">
                <a href={site.phoneHref} className="transition-colors hover:text-bordo-200">
                  {site.phoneDisplay}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp ile yazın"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-base transition-colors hover:bg-white hover:text-bordo"
                >
                  <i className="bi bi-whatsapp" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
