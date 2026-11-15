import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-24 md:py-40 bg-[#F5F5F7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          <div className="flex-1 relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="/assets/photos/merdiven/4.jpg" 
              alt="Atölye" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-[#0A1A2B]">
              Yılların <span className="font-serif italic text-black/30">Birikimi.</span>
            </h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">
              1998’den bu yana Yalova’da edindiğimiz deneyimi, bugün tasarım ve uygulama süreçlerimizin tamamına taşıyoruz.
            </p>
            <p className="text-base text-black/40 font-light leading-relaxed">
              Değişen ihtiyaçları ve tasarım anlayışlarını takip ederken, yıllar içinde oluşan üretim ve uygulama birikimimizi koruyarak ilerliyoruz.
            </p>
            <div className="pt-8 flex gap-12">
               <div className="flex flex-col">
                  <span className="text-3xl font-light text-[#0A1A2B]">33+</span>
                  <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase">Yıllık Güven</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}