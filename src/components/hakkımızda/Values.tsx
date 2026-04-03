export default function AboutValues() {
    const values = [
      { title: "Dürüstlük", desc: "Verdiğimiz her söz, attığımız her imzanın temelidir." },
      { title: "Zanaat", desc: "En küçük detayda bile el işçiliğinin titizliğini koruyoruz." },
      { title: "İnovasyon", desc: "Geleneksel yapı tekniklerini modern teknolojiyle harmanlıyoruz." }
    ];
  
    return (
      <section className="py-24 bg-[#0A1A2B] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className="group border-l border-white/10 pl-8 transition-colors hover:border-white/40">
                <span className="text-[10px] font-bold tracking-widest text-white/20 mb-6 block uppercase">0{i+1} — İlke</span>
                <h3 className="text-2xl font-light mb-4 tracking-tight group-hover:italic transition-all">{v.title}</h3>
                <p className="text-sm text-white/40 font-light leading-relaxed max-w-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }