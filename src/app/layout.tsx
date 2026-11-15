import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Aygün Yapı",
  description: "Yalova’da yaşam alanları için tasarlıyor, üretiyor ve uyguluyoruz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-white font-sans text-midnight">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}