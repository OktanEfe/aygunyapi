import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-midnight py-24 text-white md:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/assets/photos/merdiven/4.jpg"
              alt="Işıklı çıtalı panel ile merdiven boşluğu"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="text-[34px] font-extralight leading-[1.08] tracking-[-0.03em] md:text-[56px]">
            Yılların <span className="font-serif font-normal italic text-bordo-200">Birikimi.</span>
          </h2>
          <div className="mt-10 space-y-6 text-[16px] font-light leading-[1.8] text-white/70 md:text-[17px]">
            <p>
              1998’den bu yana Yalova’da edindiğimiz deneyimi, bugün tasarım ve uygulama süreçlerimizin
              tamamına taşıyoruz.
            </p>
            <p>
              Değişen ihtiyaçları ve tasarım anlayışlarını takip ederken, yıllar içinde oluşan üretim ve
              uygulama birikimimizi koruyarak ilerliyoruz.
            </p>
          </div>

          <div className="mt-14 flex items-end gap-5 border-t border-white/10 pt-10">
            <span className="text-[64px] font-extralight leading-none tracking-tight md:text-[88px]">33+</span>
            <span className="pb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-bordo-200">
              Yıllık Güven
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
