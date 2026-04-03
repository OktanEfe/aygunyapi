export default function ProjectsHero() {
    return (
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#0A1A2B]/40">Portfolyo</span>
              <div className="h-px w-12 bg-[#0A1A2B]/10" />
            </div>
            <h1 className="text-6xl md:text-[120px] font-extralight tracking-tighter leading-[0.85] text-[#0A1A2B] mb-10">
              Seçili <br />
              <span className="font-serif italic font-normal text-black/20">Projeler.</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-[#0A1A2B]/50 max-w-xl leading-relaxed">
              Yaşam alanlarına kazandırdığımız rafine dokunuşlar ve zamansız mimari yaklaşımlar.
            </p>
          </div>
        </div>
      </section>
    );
  }