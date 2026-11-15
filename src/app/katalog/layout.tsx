import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog",
  description: "Aygün Yapı uygulamaları, koleksiyonları ve ilham panosu.",
  alternates: { canonical: "/katalog" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
