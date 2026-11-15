export default function AboutQuote() {
  return (
    <section className="bg-sand py-24 md:py-36">
      <figure className="container-x max-w-5xl text-center">
        <span aria-hidden className="block font-serif text-[80px] leading-none text-bordo/30 md:text-[120px]">
          &ldquo;
        </span>
        <blockquote className="-mt-6 font-serif text-[26px] italic leading-[1.35] text-midnight md:-mt-10 md:text-[44px]">
          Geçmişten aldığımız deneyimi, bugünün tasarım anlayışıyla geleceğe taşıyoruz.
        </blockquote>
        <figcaption className="mt-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-bordo">
          Aygün Yapı
        </figcaption>
      </figure>
    </section>
  );
}
