"use client";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-black/30">Biz Kimiz?</span>
            <div className="h-px w-12 bg-black/10" />
          </div>
          
          <h1 className="text-6xl md:text-[140px] font-extralight tracking-tighter leading-[0.85] text-[#0A1A2B] mb-12">
            Mimari Bir <br />
            <span className="font-serif italic font-normal text-black/20">Manifesto.</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-light text-black/50 leading-relaxed max-w-3xl tracking-tight">
            Aygün Yapı, Yalova’nın köklü geçmişini modern tasarımın cesur çizgileriyle birleştiren bir vizyonun eseridir. Biz sadece inşa etmiyoruz; <span className="text-black italic">yaşamın kendisine form veriyoruz.</span>
          </p>
        </div>
      </div>
      
      {/* Arka plan dekoratif sayı - Kuruluş Yılı */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30vw] font-black tracking-tighter">1998</span>
      </div>
    </section>
  );
}