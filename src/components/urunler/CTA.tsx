export function ProductAdvisory() {
    return (
      <section className="py-32 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="bg-[#0A1A2B] rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-extralight text-white leading-tight mb-8">
                Mekanınıza En Uygun <br /> <span className="font-serif italic text-white/40">Dokuyu Bulalım.</span>
              </h2>
              <p className="text-lg text-white/50 font-light mb-12 leading-relaxed">
                Hangi malzemenin kullanım alanınıza daha uygun olduğunu teknik ekibimizle birlikte belirleyin. Yalova showroomumuzda tüm örnekleri yakından inceleyebilirsiniz.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 bg-white text-[#0A1A2B] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all">
                  Ürün Kataloğunu İndir
                </button>
                <button className="px-10 py-5 border border-white/20 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                  WhatsApp Destek
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
          </div>
        </div>
      </section>
    );
  }