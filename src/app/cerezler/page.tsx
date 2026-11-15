import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Aygün Yapı web sitesinde kullanılan çerezler hakkında bilgi.",
};

// TODO: Google Analytics vb. eklenirse bu sayfayı ve bir çerez onay bandını güncelleyin.
export default function CerezlerPage() {
  return (
    <LegalPage
      eyebrow="Yasal"
      title="Çerez Politikası"
      updated="15 Kasım 2026"
      intro={
        <p>
          Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin
          dosyalarıdır. Bu sayfa, {site.name} web sitesinde çerezlerin nasıl kullanıldığını açıklar.
        </p>
      }
      sections={[
        {
          title: "Kullandığımız çerezler",
          body: (
            <p>
              Sitemiz şu anda reklam veya kullanıcı takibi amaçlı çerez kullanmamaktadır. Yalnızca
              sitenin düzgün çalışması için tarayıcınızın zorunlu olarak kullandığı teknik veriler
              söz konusu olabilir.
            </p>
          ),
        },
        {
          title: "Üçüncü taraf içerikler",
          body: (
            <p>
              Harita, WhatsApp veya Instagram gibi dış bağlantılara tıkladığınızda ilgili
              sitelerin kendi çerez politikaları geçerli olur.
            </p>
          ),
        },
        {
          title: "Çerezleri nasıl yönetebilirsiniz",
          body: (
            <p>
              Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman silebilir veya
              engelleyebilirsiniz. Bu durumda sitenin bazı bölümleri beklendiği gibi
              çalışmayabilir.
            </p>
          ),
        },
      ]}
    />
  );
}
