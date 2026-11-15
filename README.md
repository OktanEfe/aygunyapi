# Aygün Yapı — Web Sitesi

Next.js (App Router) + Tailwind ile hazırlanmış Aygün Tasarım & Dekorasyon web sitesi.

## Çalıştırma

```bash
npm install
npm run dev
```

Site http://localhost:3000 adresinde açılır.

## İçerik nerede?

| Ne | Dosya |
| --- | --- |
| Telefon, mail, WhatsApp, Instagram, adres | `src/data/site.ts` |
| Projeler (başlık, açıklama, görseller) | `src/data/projects.ts` → görseller `public/assets/projects/<slug>/` |
| Ürün kategorileri ve ürünler | `src/data/products.ts` |
| Ana sayfa videoları | `public/assets/videos/` (+ kapak kareleri `public/assets/posters/`) |
| Logo | `public/assets/logo.svg` |
| Katalog PDF | `public/pdf/katalog.pdf` ekleyip `src/components/katalog/PdfIndir.tsx` içindeki `PDF_URL`'i açın |
