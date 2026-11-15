import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Yeni bir projeye birlikte başlayalım. Proje talep formunu doldurun ya da bizimle doğrudan iletişime geçin.",
  alternates: { canonical: "/iletisim" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
