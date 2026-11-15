// Uygulama fotoğrafları — public/assets/photos/<grup>/<n>.jpg
export type PhotoGroup = { slug: string; title: string; category: string; count: number };

export const photoGroups: PhotoGroup[] = [
  { slug: "mutfak-mermer", title: "Mutfak", category: "Mutfak Sistemleri", count: 6 },
  { slug: "mutfak-yesil", title: "Mutfak", category: "Mutfak Sistemleri", count: 4 },
  { slug: "mutfak-klasik", title: "Mutfak", category: "Mutfak Sistemleri", count: 4 },
  { slug: "mutfak-ahsap", title: "Mutfak", category: "Mutfak Sistemleri", count: 2 },
  { slug: "banyo", title: "Banyo", category: "Banyo Serileri", count: 4 },
  { slug: "tv-unitesi", title: "TV Ünitesi", category: "Mobilya & Özel Üretim", count: 6 },
  { slug: "salon", title: "TV Ünitesi", category: "Mobilya & Özel Üretim", count: 4 },
  { slug: "giyinme", title: "Gardırop", category: "Mobilya & Özel Üretim", count: 4 },
  { slug: "dolap", title: "Gömme Dolap", category: "Mobilya & Özel Üretim", count: 5 },
  { slug: "vitrin", title: "Vitrin", category: "Mobilya & Özel Üretim", count: 4 },
  { slug: "kitaplik", title: "Kitaplık", category: "Mobilya & Özel Üretim", count: 4 },
  { slug: "dresuar", title: "Vestiyer & Antre", category: "Mobilya & Özel Üretim", count: 6 },
  { slug: "ofis", title: "Çalışma Alanı", category: "Mobilya & Özel Üretim", count: 3 },
  { slug: "merdiven", title: "Merdiven", category: "Özel Üretim", count: 5 },
];

export type Photo = { src: string; title: string; category: string };

export const photo = (group: string, n: number): Photo => {
  const g = photoGroups.find((x) => x.slug === group);
  return { src: `/assets/photos/${group}/${n}.jpg`, title: g?.title ?? "", category: g?.category ?? "" };
};

export const allPhotos: Photo[] = photoGroups.flatMap((g) =>
  Array.from({ length: g.count }, (_, i) => photo(g.slug, i + 1)),
);

export const photoFilters = Array.from(new Set(photoGroups.map((g) => g.title)));
