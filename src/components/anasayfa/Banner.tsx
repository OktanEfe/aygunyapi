import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-sand py-24 md:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-10">
          <span className="eyebrow">Aygün Yapı</span>

          <h2 className="mt-8 text-[34px] font-extralight leading-[1.08] tracking-[-0.03em] text-midnight md:text-[56px]">
            Yalova’da yaşam alanları için{" "}
            <span className="font-serif font-normal italic text-bordo">
              tasarlıyor, üretiyor ve uyguluyoruz.
            </span>
          </h2>

          <div className="mt-10 max-w-xl space-y-6 text-[16px] font-light leading-[1.8] text-midnight/70 md:text-[17px]">
            <p>
              Aygün Yapı olarak mimarlık, iç mimarlık ve mobilya alanındaki deneyimimizi bir araya
              getirerek; estetik, işlevsel ve ihtiyaçlara uygun yaşam alanları tasarlıyoruz.
            </p>
            <p>
              Projelerin tasarım sürecinden mobilya seçimlerine ve uygulama detaylarına kadar farklı
              aşamalarda hizmet sunuyor, her mekânı kullanıcı ihtiyaçları doğrultusunda ele alıyoruz.
            </p>
          </div>

          <p className="mt-10 border-l-2 border-bordo pl-6 font-serif text-xl italic leading-snug text-midnight md:text-2xl">
            Tasarımın, doğru malzeme ve iyi işçilikle tamamlandığına inanıyoruz.
          </p>

          <Link href="/hakkimizda" className="btn-ghost mt-12">
            Hakkımızda
            <i className="bi bi-arrow-right text-sm" />
          </Link>
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="relative col-span-7 aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/assets/photos/mutfak-mermer/3.jpg"
                alt="Mermer desenli tezgâh ve alın ile mutfak uygulaması"
                fill
                sizes="(min-width: 1024px) 28vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-5 flex flex-col gap-4 pt-16 md:gap-6 md:pt-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/photos/tv-unitesi/2.jpg"
                  alt="Çıtalı panel duvar ve TV ünitesi"
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/assets/photos/giyinme/1.jpg"
                  alt="Işıklı cam kapaklı giyinme dolabı"
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
