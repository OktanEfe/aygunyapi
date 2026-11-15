import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Aygün Yapı",
  description: "Aygün Yapı kişisel verilerin korunması ve gizlilik politikası.",
};

// TODO: Yayına almadan önce şirket unvanı ve adresiyle birlikte bir hukukçuya kontrol ettirin.
export default function GizlilikPage() {
  return (
    <LegalPage
      eyebrow="Yasal"
      title="Gizlilik Politikası"
      updated="15 Kasım 2026"
      intro={
        <p>
          {site.name} olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu metin, 6698
          sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, web sitemiz üzerinden
          hangi bilgileri topladığımızı ve bunları nasıl kullandığımızı açıklar.
        </p>
      }
      sections={[
        {
          title: "Topladığımız bilgiler",
          body: (
            <p>
              İletişim ve proje talep formunu doldurduğunuzda adınız, e-posta adresiniz, telefon
              numaranız ve mesajınızın içeriği bize iletilir. Bunun dışında sizden doğrudan kişisel
              veri toplamıyoruz.
            </p>
          ),
        },
        {
          title: "Bilgileri hangi amaçla kullanıyoruz",
          body: (
            <p>
              Bu bilgileri yalnızca talebinize dönüş yapmak, teklif hazırlamak ve proje sürecini
              yürütmek için kullanırız. Bilgileriniz pazarlama amacıyla üçüncü kişilere satılmaz
              veya kiralanmaz.
            </p>
          ),
        },
        {
          title: "Üçüncü taraf hizmetler",
          body: (
            <p>
              Form gönderimleri, form altyapı hizmeti sağlayıcımız (Formspree) aracılığıyla
              e-posta adresimize iletilir. WhatsApp veya telefon ile iletişime geçtiğinizde ilgili
              hizmetin kendi gizlilik koşulları geçerlidir.
            </p>
          ),
        },
        {
          title: "Saklama süresi",
          body: (
            <p>
              Talebinize ilişkin bilgiler, iletişim ve proje süreci boyunca ve yasal yükümlülüklerin
              gerektirdiği süre kadar saklanır; ardından silinir veya anonim hale getirilir.
            </p>
          ),
        },
        {
          title: "Haklarınız",
          body: (
            <p>
              KVKK&apos;nın 11. maddesi uyarınca verilerinize erişme, düzeltilmesini veya
              silinmesini isteme haklarına sahipsiniz. Talepleriniz için{" "}
              <a href={`mailto:${site.email}`} className="text-midnight underline underline-offset-4">
                {site.email}
              </a>{" "}
              adresine yazabilirsiniz.
            </p>
          ),
        },
      ]}
    />
  );
}
