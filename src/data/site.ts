// Sitenin iletişim ve marka bilgileri — hepsi buradan okunur.
// TODO: Gerçek bilgiler gelince sadece bu dosyayı güncelle.
export const site = {
  name: "Aygün Yapı",
  phoneDisplay: "+90 555 111 22 33", // TODO: gerçek numara
  phoneHref: "tel:+905551112233", // TODO: gerçek numara
  whatsapp: "905551112233", // TODO: ülke kodu ile, boşluksuz
  email: "info@aygunyapi.com", // TODO: gerçek mail
  instagram: "https://www.instagram.com/aygundekor/",
  addressLines: ["Yalova Tasarım & Uygulama Ofisi", "Merkez, Yalova / Türkiye"], // TODO: açık adres
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
