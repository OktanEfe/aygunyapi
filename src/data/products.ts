export type Category = {
    slug: string;
    title: string;
    shortTitle: string;
    description: string;
    image: string;
  };
  
  export type Product = {
    slug: string;
    categorySlug: string;
    name: string;
    subtitle: string;
    brand: string;
    description: string;
    image: string;
    images: string[];
    specs: { label: string; value: string }[];
    colors: { name: string; hex: string }[];
    highlights: string[];
    usageAreas: string[];
  };
  
  export const categories: Category[] = [
    {
      slug: "mutfak",
      title: "Mutfak Sistemleri",
      shortTitle: "Mutfak Koleksiyonu",
      description:
        "Kapak, tezgah ve yüzey uyumunu bir arada sunan seçili mutfak çözümlerini keşfedin.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
    },
    {
      slug: "banyo",
      title: "Banyo Serileri",
      shortTitle: "Banyo Koleksiyonu",
      description:
        "Islak hacimler için dengeli, rafine ve dayanıklı yüzey alternatiflerini inceleyin.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    },
    {
      slug: "kapak",
      title: "Panel & Kapak",
      shortTitle: "Kapak Koleksiyonu",
      description:
        "Mat, lake ve doğal doku yüzeylerle şekillenen rafine panel ve kapak alternatiflerini keşfedin.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
    },
    {
      slug: "tezgah",
      title: "Kuvars Tezgahlar",
      shortTitle: "Tezgah Koleksiyonu",
      description:
        "Dayanıklılığı güçlü görünümle birleştiren kuvars ve taş yüzey tezgah alternatiflerini inceleyin.",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200",
    },
  ];
  
  export const products: Product[] = [
    {
      slug: "calacatta-gold",
      categorySlug: "tezgah",
      name: "Calacatta Gold",
      subtitle: "Kuvars Yüzey / İtalyan Serisi",
      brand: "Premium Series",
      description:
        "İtalyan mermerinin asaletini kuvarsın dayanıklılığı ile birleştiren Calacatta Gold, beyaz zemin üzerindeki altın ve gri damarlarıyla mekanlara derinlik katar.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900",
      images: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=900",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=900",
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
    },
    {
      slug: "natural-oak",
      categorySlug: "kapak",
      name: "Natural Oak",
      subtitle: "Panel & Kapak / Doğal Doku",
      brand: "Naturel Series",
      description:
        "Doğal ahşap hissini modern yüzey kalitesiyle buluşturan Natural Oak, sıcak ve dengeli yaşam alanları için rafine bir seçim sunar.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=900",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900",
      ],
      specs: [
        { label: "Yüzey", value: "Doğal Doku" },
        { label: "Kalınlık", value: "18mm / 22mm" },
        { label: "Menşei", value: "Avrupa" },
        { label: "Dayanıklılık", value: "Yüksek Kullanım Direnci" },
      ],
      colors: [
        { name: "Oak Natural", hex: "#C8A97E" },
        { name: "Soft Beige", hex: "#D9C6A5" },
        { name: "Stone Brown", hex: "#8A6A4A" },
      ],
      highlights: [
        "Sıcak yaşam alanları için dengeli görünüm",
        "Doğal dokusuyla zamansız karakter",
        "Kapak ve panel uygulamalarında güçlü sonuç",
      ],
      usageAreas: ["Mutfak Kapak", "TV Ünitesi", "Vestiyer", "Dolap Sistemleri"],
    },
  ];