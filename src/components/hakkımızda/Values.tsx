export default function AboutValues() {
  const values = [
    { title: "Dürüstlük", desc: "Verdiğimiz her söz, attığımız her imzanın sarsılmaz temelidir." },
    { title: "Zanaat", desc: "En küçük detayda bile geleneksel el işçiliğinin titizliğini ve ruhunu koruyoruz." },
    { title: "İnovasyon", desc: "Geleneksel yapı tekniklerini geleceğin modern teknolojisiyle kusursuzca harmanlıyoruz." }
  ];

  return (
    <section className="relative pt-40 pb-32 bg-[#0A1A2B] overflow-hidden text-white">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.6em] text-white/40 block mb-6">
            Değerlerimiz
          </span>

          <h2 className="text-5xl md:text-6xl font-extralight tracking-tight leading-[1.1]">
            Bizi Biz Yapan <br /> 
            <span className="italic font-serif text-white/30">
              Temel İlkeler.
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="group relative rounded-[36px] border border-white/10 bg-white/[0.04] p-12 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.07] hover:-translate-y-3 hover:border-white/20"
            >
              
              {/* Büyük sayı */}
              <div className="absolute -top-8 right-10 text-[120px] font-bold text-white/[0.02] tracking-tighter transition-all duration-500 group-hover:text-white/[0.06]">
                0{i + 1}
              </div>

              <div className="relative z-10">
                
                {/* çizgi */}
                <div className="h-[2px] w-14 bg-white/40 mb-10 transition-all duration-500 group-hover:w-24 group-hover:bg-white" />
                
                {/* küçük label */}
                <span className="text-[11px] font-semibold tracking-[0.35em] text-white/30 mb-5 block uppercase">
                  İlke 0{i + 1}
                </span>
                
                {/* BAŞLIK */}
                <h3 className="text-3xl md:text-[32px] font-light mb-6 tracking-tight leading-snug transition-all group-hover:text-white">
                  {v.title}
                </h3>
                
                {/* AÇIKLAMA */}
                <p className="text-[16px] md:text-[17px] text-white/60 font-light leading-[1.8]">
                  {v.desc}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M5 12h14m-7-7l7 7-7 7"/>
                 </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}