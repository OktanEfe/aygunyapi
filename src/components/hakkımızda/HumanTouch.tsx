export default function AboutQuote() {
    return (
      <section className="py-32 md:py-48 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <i className="bi bi-quote text-6xl text-[#0A1A2B]/10 mb-8 block"></i>
          <h2 className="text-3xl md:text-5xl font-extralight italic leading-tight text-[#0A1A2B]">
            &quot;Mimari, dünün tecrübesiyle yarının hayallerini bugün inşa etme sanatıdır. Biz bu sanatı en dürüst haliyle icra ediyoruz.&quot;
          </h2>
          <div className="mt-12">
            <div className="h-px w-20 bg-[#0A1A2B]/10 mx-auto mb-6" />
            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-black/40">Aygün Yapı Yönetim Kurulu</span>
          </div>
        </div>
      </section>
    );
  }