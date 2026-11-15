import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Aygün Yapı | Tasarım, Uygulama ve Mobilya — Yalova",
    template: "%s | Aygün Yapı",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Aygün Yapı",
    "Yalova",
    "iç mimarlık",
    "mutfak dolabı",
    "banyo dolabı",
    "özel üretim mobilya",
    "gömme dolap",
    "TV ünitesi",
    "tezgâh",
    "lake kapı",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: site.name,
    title: "Aygün Yapı | Tasarım, Uygulama ve Mobilya",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aygün Yapı | Tasarım, Uygulama ve Mobilya",
    description: site.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0A1A2B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  url: site.url,
  logo: `${site.url}/assets/logo-mark.svg`,
  image: `${site.url}/opengraph-image.jpg`,
  description: site.description,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  foundingDate: "1993",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Süleyman Bey Mahallesi Mimar Sinan Caddesi No:26/A",
    addressLocality: "Merkez",
    addressRegion: "Yalova",
    addressCountry: "TR",
  },
  areaServed: "Yalova",
  sameAs: [site.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="font-sans bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
