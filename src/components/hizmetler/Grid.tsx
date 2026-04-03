const services = [
    { title: "Mutfak Tasarımı", desc: "Fonksiyonelliğin estetikle buluştuğu modern mutfak çözümleri.", icon: "bi-layout-sidebar" },
    { title: "Banyo Yenileme", desc: "Kişisel bakım alanlarını lüks birer spa deneyimine dönüştürüyoruz.", icon: "bi-droplet" },
    { title: "İç Mekan Çözümleri", desc: "Yaşam alanlarınızın ruhuna uygun dekorasyon ve mobilya seçimleri.", icon: "bi-house-heart" },
    { title: "Malzeme Danışmanlığı", desc: "Projeniz için en doğru yüzey, doku ve renk paleti seçimi.", icon: "bi-palette" },
    { title: "Anahtar Teslim", desc: "Tasarım aşamasından son dokunuşa kadar tüm sürecin yönetimi.", icon: "bi-key" },
    { title: "Özel Projeler", desc: "Standartların ötesinde, size özel mimari ve uygulama çözümleri.", icon: "bi-stars" },
  ];
  
  export default function ServicesGrid() {
    return (
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-white p-12 rounded-[2.5rem] border border-black/5 hover:bg-[#0A1A2B] transition-all duration-700 hover:-translate-y-2 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#0A1A2B]/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                  <i className={`bi ${s.icon} text-2xl text-[#0A1A2B] group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-light mb-4 text-[#0A1A2B] group-hover:text-white tracking-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed text-black/40 group-hover:text-white/60 font-light mb-8">{s.desc}</p>
                <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A1A2B] group-hover:text-white border-b border-[#0A1A2B]/10 group-hover:border-white/20 pb-1">
                  Detayları İncele
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }