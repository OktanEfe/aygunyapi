export default function ProcessStrip() {
    const steps = ["Keşif", "İhtiyaç Analizi", "Malzeme Seçimi", "Uygulama", "Son Dokunuş"];
    
    return (
      <section className="py-20 border-y border-black/5 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <span className="text-4xl font-serif italic text-black/10 group-hover:text-[#0A1A2B] transition-colors">0{i+1}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/60">{step}</span>
                {i !== steps.length - 1 && <div className="hidden xl:block w-12 h-px bg-black/5" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }