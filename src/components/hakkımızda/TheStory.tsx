import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-24 md:py-40 bg-[#F5F5F7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          <div className="flex-1 relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" 
              alt="Atölye" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-[#0A1A2B]">
              Yalova’nın Kalbinde <br /> Başlayan Bir <span className="font-serif italic text-black/30 text-5xl">Serüven.</span>
            </h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">
              Her şey bir hayalle başladı: Yalova&apos;nın doğal dokusuna saygı duyan, insanların kendilerini ait hissedeceği yapılar inşa etmek. 
            </p>
            <p className="text-base text-black/40 font-light leading-relaxed">
              Merkez atölyemizde başlayan bu yolculuk, bugün onlarca tamamlanmış proje ve binlerce mutlu yaşam alanıyla devam ediyor. Aygün Yapı olarak, bir binanın sadece dört duvar değil, bir hafıza mekanı olduğuna inanıyoruz.
            </p>
            <div className="pt-8 flex gap-12">
               <div className="flex flex-col">
                  <span className="text-3xl font-light text-[#0A1A2B]">25+</span>
                  <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase">Yıllık Güven</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-3xl font-light text-[#0A1A2B]">150+</span>
                  <span className="text-[9px] font-bold tracking-widest text-black/20 uppercase">Uzman Kadro</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}