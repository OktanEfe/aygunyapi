import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { categories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "", priority: 1 },
    { path: "/urunler", priority: 0.9 },
    { path: "/hizmetler", priority: 0.8 },
    { path: "/katalog", priority: 0.8 },
    { path: "/hakkimizda", priority: 0.7 },
    { path: "/iletisim", priority: 0.7 },
    { path: "/gizlilik", priority: 0.2 },
    { path: "/cerezler", priority: 0.2 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...categories.map((c) => ({
      url: `${site.url}/urunler/${c.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
