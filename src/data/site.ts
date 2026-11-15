// Sitenin iletişim ve marka bilgileri — hepsi buradan okunur.
export const site = {
  name: "Aygün Yapı",
  // Yayın adresi — Vercel'de NEXT_PUBLIC_SITE_URL ortam değişkeniyle ayarlanır.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://aygundecor.com").replace(/\/$/, ""),
  description:
    "Yalova merkezli tasarım ofisi. Tasarım, uygulama ve mobilya alanlarındaki deneyimimizle 1993’den beri güven inşa ediyoruz.",
  phoneDisplay: "+90 532 325 36 69",
  phoneHref: "tel:+905323253669",
  whatsapp: "905323253669", // TODO: WhatsApp farklı numaradaysa güncelle
  email: "aygunyapi@hotmail.com",
  instagram: "https://www.instagram.com/aygundekor/",
  addressLines: ["Süleyman Bey Mahallesi Mimar Sinan Caddesi No:26/A", "Merkez, Yalova / Türkiye"],
  mapsQuery: "Süleyman Bey Mahallesi Mimar Sinan Caddesi No:26/A Merkez Yalova",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;
