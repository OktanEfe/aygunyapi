// Uygulama fotoğrafları — public/assets/photos/<grup>/<n>.jpg
export type PhotoGroup = { slug: string; title: string; count: number };

export const photoGroups: PhotoGroup[] = [
  { slug: "mutfak-mermer", title: "Mutfak", count: 6 },
  { slug: "mutfak-yesil", title: "Mutfak", count: 4 },
  { slug: "mutfak-klasik", title: "Mutfak", count: 4 },
  { slug: "mutfak-ahsap", title: "Mutfak", count: 2 },
  { slug: "banyo", title: "Banyo", count: 4 },
  { slug: "tv-unitesi", title: "TV Ünitesi", count: 6 },
  { slug: "salon", title: "TV Ünitesi", count: 4 },
  { slug: "giyinme", title: "Gardırop", count: 4 },
  { slug: "dolap", title: "Gömme Dolap", count: 5 },
  { slug: "vitrin", title: "Vitrin", count: 4 },
  { slug: "kitaplik", title: "Kitaplık", count: 4 },
  { slug: "dresuar", title: "Vestiyer & Antre", count: 6 },
  { slug: "ofis", title: "Çalışma Alanı", count: 3 },
  { slug: "merdiven", title: "Merdiven", count: 5 },
];

export type Photo = { src: string; label: string; group: string };

export const photo = (group: string, n: number): Photo => ({
  src: `/assets/photos/${group}/${n}.jpg`,
  group,
  label: photoGroups.find((g) => g.slug === group)?.title ?? "",
});

export const allPhotos: Photo[] = photoGroups.flatMap((g) =>
  Array.from({ length: g.count }, (_, i) => photo(g.slug, i + 1)),
);

/** Filtre başlıkları (aynı başlıklı gruplar birleşir) */
export const photoFilters = Array.from(new Set(photoGroups.map((g) => g.title)));
