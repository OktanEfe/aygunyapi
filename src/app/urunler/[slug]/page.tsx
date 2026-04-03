import Image from "next/image";
import Link from "next/link";

const product = {
  name: "Calacatta Gold",
  category: "Kuvars Tezgah",
  brand: "Premium Series",
  description:
    "İtalyan mermerinin asaletini kuvarsın dayanıklılığı ile birleştiren Calacatta Gold, beyaz zemin üzerindeki altın ve gri damarlarıyla mekanlara derinlik katar.",
  images: [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    "https://images.unsplash.com/photo-1615529182906-134d82344f48?q=80&w=800",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800",
  ],
  specs: [
    { label: "Yüzey", value: "Parlak / Silk" },
    { label: "Kalınlık", value: "20mm / 30mm" },
    { label: "Menşei", value: "İtalya" },
    { label: "Dayanıklılık", value: "Yüksek Isı & Çizilme" },
  ],
  colors: [
    { name: "Snow White", hex: "#FFFFFF" },
    { name: "Soft Gold", hex: "#D4AF37" },
    { name: "Stone Grey", hex: "#E5E5E5" },
  ],
  highlights: [
    "Leke tutmayan dayanıklı yüzey yapısı",
    "Mutfak ve banyo projelerinde güçlü premium görünüm",
    "Doğal taş estetiğini daha kontrollü kullanım avantajıyla sunar",
  ],
  usageAreas: [
    "Mutfak Tezgahı",
    "Banyo Bankosu",
    "Duvar Kaplama",
    "Zemin Çözümleri",
  ],
  related: [
    {
      title: "Statuario Light",
      slug: "statuario-light",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    },
    {
      title: "Bianco Elegante",
      slug: "bianco-elegante",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800",
    },
    {
      title: "Marquina Stone",
      slug: "marquina-stone",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
    },
  ],
};

export default function ProductDetail() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/30">
            <Link href="/urunler" className="transition hover:text-[#0A1A2B]">
              Ürünler
            </Link>
            <span>/</span>
            <Link
              href="/urunler/tezgah"
              className="transition hover:text-[#0A1A2B]"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-[#0A1A2B]">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-[#F5F5F7]">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {product.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#F5F5F7]"
                  >
                    <Image
                      src={img}
                      alt={`${product.name}-${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/30">
                  {product.category}
                </span>
                <div className="h-px w-8 bg-black/10" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/30">
                  {product.brand}
                </span>
              </div>

              <h1 className="mb-8 text-5xl font-extralight tracking-tighter text-[#0A1A2B] md:text-7xl">
                {product.name}
              </h1>

              <p className="mb-10 max-w-xl text-lg font-light leading-8 text-black/50 md:text-xl">
                {product.description}
              </p>

              <div className="mb-10">
                <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.32em] text-black/30">
                  Yüzey Tonları
                </span>

                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      className="group flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 transition hover:border-[#0A1A2B]/20"
                      type="button"
                    >
                      <span
                        className="block h-5 w-5 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-[11px] font-medium tracking-wide text-[#0A1A2B]">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-black/5 py-10">
                {product.specs.map((spec, i) => (
                  <div key={i}>
                    <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.28em] text-black/20">
                      {spec.label}
                    </span>
                    <span className="text-base font-light text-[#0A1A2B] md:text-lg">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-[2rem] bg-[#F7F7F8] p-7">
                <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.32em] text-black/30">
                  Neden Bu Ürün?
                </span>

                <div className="space-y-4">
                  {product.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0A1A2B]/5 text-[#0A1A2B]">
                        <i className="bi bi-check2 text-sm"></i>
                      </div>
                      <p className="text-sm leading-7 text-black/55">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex-1 rounded-full bg-[#0A1A2B] px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#0A1A2B]/90">
                  Teklif Al & Numune İste
                </button>

                <button className="rounded-full border border-black/10 px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A1A2B] transition hover:bg-[#F5F5F7]">
                  WhatsApp Danışman
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/30">
              Uygulama Alanları
            </p>
            <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
              Farklı yaşam alanlarında <br className="hidden md:block" />
              güçlü kullanım senaryoları.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {product.usageAreas.map((area) => (
              <div
                key={area}
                className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A1A2B]/5 text-[#0A1A2B]">
                  <i className="bi bi-check2 text-base"></i>
                </div>

                <h3 className="text-lg font-light tracking-tight text-[#0A1A2B]">
                  {area}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/45">
                  Bu yüzey, estetik görünümünü korurken uygulama kalitesi ve kullanım
                  dengesini destekler.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/30">
                Benzer Seçimler
              </p>
              <h2 className="text-3xl font-extralight tracking-tight text-[#0A1A2B] md:text-5xl">
                Aynı dilde öne çıkan <br className="hidden md:block" />
                diğer yüzeyler.
              </h2>
            </div>

            <Link
              href="/urunler"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/60 transition hover:text-[#0A1A2B]"
            >
              Tüm ürünlere dön
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {product.related.map((item) => (
              <Link key={item.slug} href={`/urunler/${item.slug}`} className="group">
                <div className="relative mb-5 aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-[#F5F5F7]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 px-1">
                  <div>
                    <h3 className="text-2xl font-light tracking-tight text-[#0A1A2B]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/25">
                      Premium Yüzey
                    </p>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0A1A2B]/50 transition group-hover:text-[#0A1A2B]">
                    İncele
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}