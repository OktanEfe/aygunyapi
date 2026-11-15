// Proje görselleri Aygün'ün kendi Reels videolarından alınmış karelerdir.
// TODO: Konum / yıl bilgileri ve yüksek çözünürlüklü fotoğraflar geldikçe güncelle.
export type Project = {
  slug: string;
  title: string;
  category: "Merdiven" | "Dolap" | "Mutfak" | "TV Ünitesi" | "Raf & Vitrin" | "Dresuar";
  summary: string;
  description: string;
  materials: string[];
  location?: string;
  year?: string;
  images: string[]; // ilk görsel kapak
};

const img = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/assets/projects/${slug}/${i + 1}.jpg`);

export const projects: Project[] = [
  {
    slug: "kitaplik",
    title: "Duvar Boyu Kitaplık",
    category: "Raf & Vitrin",
    summary: "Ahşap raflar ve kavisli uçlarla salonun tamamını saran kitaplık.",
    description:
      "Duvarı baştan sona saran kitaplıkta açık raflar, kavisli köşe dönüşleri ve ahşap raf yüzeyleri bir arada. Kitaplar, ödüller ve dekoratif objeler için her bölme ölçüye göre tasarlandı.",
    materials: ["Lake Gövde", "Ahşap Raf", "Kavisli Köşe Detayı"],
    images: img("kitaplik", 5),
  },
  {
    slug: "isikli-vitrin",
    title: "Işıklı Cam Vitrin",
    category: "Raf & Vitrin",
    summary: "Gizli LED hatlarla aydınlanan füme camlı vitrin dolabı.",
    description:
      "Füme cam kapaklar ve dikey LED hatlarla tasarlanan vitrin, gün ışığında sade bir dolap gibi durur; akşamları ise mekânın ışık kaynağına dönüşür.",
    materials: ["Füme Cam", "Alüminyum Profil", "Gizli LED"],
    images: img("isikli-vitrin", 4),
  },
  {
    slug: "ahsap-merdiven",
    title: "Ahşap Merdiven",
    category: "Merdiven",
    summary: "Ahşap basamaklar, duvar içi aydınlatma ve şeffaf küpeşte.",
    description:
      "Masif ahşap basamaklar, duvara gömülü aydınlatmalar ve şeffaf küpeşte detaylarıyla merdiven yalnızca iki katı bağlamıyor, evin karakterini taşıyor.",
    materials: ["Masif Ahşap", "Duvar İçi Aydınlatma", "Şeffaf Küpeşte"],
    images: img("ahsap-merdiven", 6),
  },
  {
    slug: "giyinme-dolabi",
    title: "Camlı Giyinme Dolabı",
    category: "Dolap",
    summary: "Siyah profil cam kapaklı, içten aydınlatmalı giyinme dolabı.",
    description:
      "Siyah alüminyum profilli cam kapaklar ve dikey LED aydınlatma ile giyinme dolabı hem düzenli hem de vitrin etkisi taşıyan bir alana dönüştü.",
    materials: ["Siyah Profil", "Füme Cam", "Dikey LED"],
    images: img("giyinme-dolabi", 4),
  },
  {
    slug: "tv-unitesi",
    title: "Çıtalı TV Ünitesi",
    category: "TV Ünitesi",
    summary: "Dikey çıtalı duvar paneli ve asma TV ünitesi.",
    description:
      "Dikey çıtalı duvar paneli, asma alt modül ve yan vitrin bölmesiyle TV duvarı sade ama dokulu bir odak noktasına dönüştü.",
    materials: ["Çıtalı Panel", "Lake Alt Modül", "Cam Vitrin"],
    images: img("tv-unitesi", 4),
  },
  {
    slug: "dolap-ve-tv-duvari",
    title: "Dolap & TV Duvarı",
    category: "Dolap",
    summary: "Tavana kadar gömme dolap, cam bölme ve TV duvarı bir arada.",
    description:
      "Tavana kadar uzanan kulpsuz dolaplar, füme cam bölme ve çıtalı TV duvarı aynı renk paletinde birleşerek bütünlüklü bir yaşam alanı oluşturdu.",
    materials: ["Kulpsuz Lake Kapak", "Füme Cam", "Çıtalı Panel"],
    images: img("dolap-ve-tv-duvari", 4),
  },
  {
    slug: "portmanto-dresuar",
    title: "Çıtalı Dresuar",
    category: "Dresuar",
    summary: "Beyaz çıtalı panel, kavisli dresuar ve petek kapağı.",
    description:
      "Girişte çıtalı duvar paneli, kavisli dresuar tablası ve petek kapağı tek bir tasarımda buluştu; hem işlevsel hem de karşılayıcı bir giriş alanı.",
    materials: ["Lake Çıtalı Panel", "Kavisli Tabla", "Petek Kapağı"],
    images: img("portmanto-dresuar", 4),
  },
  {
    slug: "mutfak",
    title: "Kuvars Tezgahlı Mutfak",
    category: "Mutfak",
    summary: "Mat yeşil kapaklar ve damarlı kuvars tezgah.",
    description:
      "Mat yeşil kulpsuz kapaklar, damarlı beyaz kuvars tezgah ve ahşap ayaklı bar masasıyla sıcak ve kullanışlı bir mutfak.",
    materials: ["Mat Lake Kapak", "Kuvars Tezgah", "Ahşap Bar Masası"],
    images: img("mutfak", 4),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
