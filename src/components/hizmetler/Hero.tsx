import PageHeader from "@/components/layout/PageHeader";

export default function ServicesHero() {
  return (
    <PageHeader
      eyebrow="Uzmanlık Alanlarımız"
      title={
        <>
          Mekâna Değer <span className="font-serif font-normal italic text-bordo-200">Katan Çözümler.</span>
        </>
      }
      text="Mimari tasarımdan uygulamaya, iç mekân çözümlerinden özel üretime kadar farklı ihtiyaçlara yönelik tasarım ve uygulama hizmetleri sunuyoruz."
      image="/assets/photos/mutfak-mermer/1.jpg"
      imageAlt="Mermer desenli alın ve ışıklı üst dolaplarla mutfak"
    />
  );
}
