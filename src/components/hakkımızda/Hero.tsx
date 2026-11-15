import PageHeader from "@/components/layout/PageHeader";

export default function AboutHero() {
  return (
    <PageHeader
      eyebrow="Biz Kimiz?"
      title={
        <>
          Tasarımın <span className="font-serif font-normal italic text-bordo-200">İzinde.</span>
        </>
      }
      text="Aygün Yapı, mimari, iç mimari ve mobilyayı birbirinden ayrı değil, aynı tasarım sürecinin parçaları olarak ele alıyor. 1993’ten bu yana edindiğimiz deneyimle, tasarımdan üretime ve uygulamaya uzanan bütüncül bir çalışma anlayışıyla ilerliyoruz."
      image="/assets/photos/salon/3.jpg"
      imageAlt="Çıtalı panel duvar ve TV ünitesi uygulaması"
      focus="center 40%"
    />
  );
}
