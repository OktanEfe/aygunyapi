export default function ServicesCTA() {
    return (
      <section className="py-24 md:py-32 bg-[#F9F9F9] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extralight text-[#0A1A2B] mb-12 tracking-tight">
            Projenize En Uygun Çözümü <br /> <span className="font-serif italic opacity-30">Birlikte Belirleyelim.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-12 py-6 bg-[#0A1A2B] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.3em] shadow-xl hover:-translate-y-1 transition-all">
              Teklif Formunu Doldur
            </button>
            <button className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors">
              WhatsApp Hattı
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white shadow-sm">
                <i className="bi bi-whatsapp"></i>
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  }