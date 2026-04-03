import Image from "next/image";
import Link from "next/link";

const koleksiyonlar = [
  {
    id: 1,
    baslik: "Mutfak Koleksiyonu",
    desc: "Fonksiyonel estetiğin modern hatlarla buluştuğu seçili mutfak yüzeyleri ve tamamlayıcı çözümler.",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    href: "/urunler/mutfak",
    label: "Mutfak Dünyası",
  },
  {
    id: 2,
    baslik: "Banyo & Islak Hacim",
    desc: "Dinginlik, dayanıklılık ve rafine görünümü bir araya getiren özel yüzey serileri.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    href: "/urunler/banyo",
    label: "Banyo Serileri",
  },
];

export default function KoleksiyonBloklari() {
  return (
    <section id="koleksiyonlar" className="pb-24 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-black/30">
            Ana Koleksiyonlar
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
            Farklı yaşam alanları için <br className="hidden md:block" />
            seçili koleksiyon yönleri.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {koleksiyonlar.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative min-h-[620px] overflow-hidden rounded-[3rem] bg-[#0A1A2B]"
            >
              <Image
                src={`${item.img}?q=80&w=1400`}
                alt={item.baslik}
                fill
                className="object-cover opacity-65 transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07121f]/85 via-[#07121f]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-10 md:p-12">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.35em] text-white/55">
                  {item.label}
                </span>

                <h3 className="mb-5 max-w-[16ch] text-4xl font-light tracking-tight text-white md:text-6xl md:leading-[1.02]">
                  {item.baslik}
                </h3>

                <p className="mb-8 max-w-md text-sm leading-7 text-white/65 md:text-base">
                  {item.desc}
                </p>

                <div className="inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                  Koleksiyonu İncele
                  <div className="h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-12 group-hover:bg-white/60" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}