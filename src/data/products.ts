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
  //Bu KISMA BİR DAHA BAK GEREKİRSE JSONDAN ÇEK!!!!
  export const categories: Category[] = [
    {
      slug: "mutfak-ve-tezgah",
      title: "Mutfak ve Tezgah",
      shortTitle: "Mutfak Koleksiyonu",
      description:
        "Mutfak dolapları, tezgah çözümleri ve yüzey uyumunu bir araya getiren modern, işlevsel ve estetik mutfak uygulamalarını keşfedin.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
    },
    {
      slug: "banyo",
      title: "Banyo",
      shortTitle: "Banyo Koleksiyonu",
      description:
        "Banyo dolapları, lavabo üniteleri ve neme dayanıklı yüzeylerle şekillenen rafine, dengeli ve uzun ömürlü banyo çözümlerini inceleyin.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    },
    {
      slug: "kapi",
      title: "Kapı",
      shortTitle: "Kapı Koleksiyonu",
      description:
        "İç mekanın karakterini belirleyen modern, sade ve güçlü çizgilere sahip kapı tasarımlarını; malzeme, renk ve doku uyumuyla keşfedin.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200",
    },
    {
      slug: "tv-unitesi",
      title: "TV Ünitesi",
      shortTitle: "Ünite Koleksiyonu",
      description:
        "Salon ve yaşam alanlarında estetik, depolama ve bütünlük sunan modern TV ünitesi çözümlerini farklı yüzey ve tasarım dilleriyle inceleyin.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    },
    {
      slug: "portmanto-dresuar",
      title: "Portmanto & Dresuar",
      shortTitle: "Giriş Alanı Koleksiyonu",
      description:
        "Antre ve giriş alanlarında düzen, işlev ve şıklığı bir araya getiren portmanto ve dresuar tasarımlarını keşfedin.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
    },
    {
      slug: "giyinme-dolabi-ve-odasi",
      title: "Giyinme Dolabı ve Odası",
      shortTitle: "Giyinme Koleksiyonu",
      description:
        "Kıyafet, aksesuar ve depolama ihtiyaçlarını daha düzenli ve rafine bir düzende sunan özel giyinme dolabı ve oda çözümlerini inceleyin.",
      image:
        "https://images.unsplash.com/photo-1616594039964-3b1c0d4ef10f?q=80&w=1200",
    },
    {
      slug: "bar-mutfak-kahve-tezgahi",
      title: "Bar Mutfak (Kahve Tezgahı)",
      shortTitle: "Kahve & Bar Koleksiyonu",
      description:
        "Ev ve yaşam alanlarında kahve köşesi, bar tezgahı ve servis alanı oluşturmak için tasarlanan özel yüzey ve mobilya çözümlerini keşfedin.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200",
    },
    {
      slug: "agac-islemeler",
      title: "Ağaç İşlemeler",
      shortTitle: "Ahşap İşçilik Koleksiyonu",
      description:
        "Doğal dokuyu öne çıkaran özel ahşap işçilik, dekoratif uygulama ve detay çözümleriyle yaşam alanlarına karakter kazandıran tasarımları inceleyin.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    },
  ];
  
  export const products: Product[] = [
    {
      slug: "calacatta-gold",
      categorySlug: "mutfak-ve-tezgah",
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
      categorySlug: "mutfak-ve-tezgah",
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