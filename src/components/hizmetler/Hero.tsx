"use client";

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-black/30">Uzmanlık Alanlarımız</span>
            <div className="h-px w-12 bg-black/10" />
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-extralight tracking-tighter leading-[0.9] text-[#0A1A2B] mb-12">
            Mekana Değer <br />
            <span className="font-serif italic font-normal text-black/20">Katan Çözümler.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-black/50 leading-relaxed max-w-2xl tracking-tight">
            Sadece inşa etmiyoruz; malzeme, ışık ve fonksiyonu bir araya getirerek zamansız yaşam alanları kurguluyoruz.
          </p>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F7] -z-10 skew-x-6 translate-x-20 hidden md:block" />
    </section>
  );
}