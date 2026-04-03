import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Aygün Yapı",
  description: "Güven, Kalite, Estetik — Aygün Yapı",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="font-sans bg-white text-black">
        <Navbar />
        <div className="pt-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}