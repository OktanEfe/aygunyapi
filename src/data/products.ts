// Ürün kategorileri — metinler "aygün yapı.docx" revizesinden.
// Her kategori alt gruplardan (ör. Kapaklar, Tezgâhlar) ve her grup seçeneklerden oluşur.

export type ProductItem = {
  name: string;
  desc?: string;
  bullets?: string[];
};

export type ProductGroup = {
  slug: string;
  title?: string;
  intro?: string;
  tags?: string[];
  items: ProductItem[];
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
  groups: ProductGroup[];
};

export const categories: Category[] = [
  {
    slug: "mutfak-sistemleri",
    title: "Mutfak Sistemleri",
    description: "Mutfağın her detayını tamamlayan ürün ve çözümleri keşfedin.",
    image: "/assets/photos/mutfak-mermer/2.jpg",
    groups: [
      {
        slug: "kapaklar",
        title: "Kapaklar",
        intro: "Mutfak tasarımına ve kullanım ihtiyacına göre farklı yüzey ve kapak seçenekleri.",
        tags: ["Lake", "Membran", "Akrilik", "Melamin"],
        items: [
          {
            name: "Lake",
            desc: "MDF üzerine lake boya uygulanarak elde edilir. Pürüzsüz ve homojen yüzeyi sayesinde farklı kapak formlarının uygulanmasına olanak sağlar. Düz kapakların yanı sıra çerçeveli, çıtalı, frezeli ve klasik detaylı kapak modellerinde de kullanılabilir. Mat, yarı mat ve parlak yüzey seçenekleriyle farklı tasarım anlayışlarına uyum sağlar.",
          },
          {
            name: "Membran",
            desc: "MDF yüzey üzerine PVC folyonun vakum pres yöntemiyle kaplanmasıyla uygulanır. Kapak yüzeyi ve kenarlarında bütünlük sağlayarak farklı renk, doku ve desen seçenekleri sunar. Özellikle frezeli ve klasik formlu kapaklarda tercih edilebilir.",
          },
          {
            name: "Akrilik",
            desc: "MDF üzerine akrilik yüzeyin uygulanmasıyla elde edilir. Parlak, pürüzsüz ve derin görünümlü yüzeyiyle modern mutfaklarda tercih edilir. Düz ve sade kapak tasarımlarında güçlü bir görsel etki oluşturur.",
          },
          {
            name: "Melamin",
            desc: "MDF veya yonga levha üzerine melamin reçine emdirilmiş dekoratif yüzeyin preslenmesiyle uygulanır. Farklı renk, ahşap ve taş görünümlerinde seçenekler sunar. Pratik ve ekonomik bir kapak çözümü olarak sade, modern tasarımlarda tercih edilir.",
          },
        ],
      },
      {
        slug: "tezgahlar",
        title: "Tezgâhlar",
        intro: "Farklı kullanım ihtiyaçlarına ve tasarım anlayışlarına uygun tezgâh seçenekleri.",
        tags: ["Porselen", "Çift Kat Porselen", "Kuvars", "Granit", "Mermer"],
        items: [
          {
            name: "Çift Kat Porselen",
            desc: "İki porselen tabakanın bir araya getirilmesiyle oluşturulan, daha güçlü ve kalın bir tezgâh görünümü sunan uygulamadır. Özellikle kalın tezgâh kenarı ve daha dolgun bir görünüm istenen tasarımlarda tercih edilebilir.",
          },
          {
            name: "Porselen",
            desc: "Yüksek ısıya ve lekeye karşı dayanıklı porselen yüzeyler, ince ve sağlam yapısıyla modern mutfaklara uyum sağlar. Mermer ve doğal taş görünümlerinin yanı sıra farklı renk ve dokularda sunulur. Tezgâh, alın ve yan yüzeylerde devamlı olarak uygulanabilir.",
          },
          {
            name: "Kuvars",
            desc: "Dayanıklı ve homojen yapısıyla uzun süreli kullanım sunan kuvars, leke tutmaya karşı dirençli ve kolay temizlenebilir bir yüzeydir. Isıya karşı dayanıklı yapısıyla günlük mutfak kullanımına uygundur. Farklı renk, desen ve kenar detaylarıyla çeşitli mutfak tasarımlarına uyum sağlar.",
          },
          {
            name: "Granit",
            desc: "Doğal yapısı ve yüksek ısı dayanımı ile öne çıkan granit, yoğun kullanıma uygun bir tezgâh malzemesidir. Uygun yüzey işlemiyle leke oluşumuna karşı korunabilir. Kendine özgü damar ve renkleriyle farklı kalınlık ve kenar detaylarında uygulanabilir.",
          },
          {
            name: "Mermer",
            desc: "Doğal damar yapısı ve kendine özgü renkleriyle her yüzeye farklı bir görünüm kazandıran mermer, zamansız ve doğal bir seçenek sunar. Isıya karşı dayanıklıdır ancak leke ve asitli maddelere karşı daha hassastır. Farklı yüzey ve kenar işlemleriyle mutfak tasarımına uyarlanabilir.",
          },
        ],
      },
      {
        slug: "alinlar",
        title: "Alınlar",
        intro: "Tezgâh ve dolaplarla uyum sağlayan farklı malzeme ve yüzey seçenekleri.",
        tags: ["Seramik", "Porselen", "Kuvars", "Granit"],
        items: [
          {
            name: "Seramik",
            desc: "Farklı renk, desen ve doku seçenekleri sunan seramik yüzeyler, ısıya ve neme karşı dayanıklı yapısıyla mutfak alınlarında kullanıma uygundur. Kolay temizlenir ve farklı tasarımlara uyum sağlar.",
          },
          {
            name: "Porselen",
            desc: "Isıya, neme ve lekeye karşı dayanıklı porselen yüzeyler, ince yapısıyla alın uygulamalarında tercih edilir. Mermer ve doğal taş görünümlerinin yanı sıra farklı renk ve dokular sunar.",
          },
          {
            name: "Kuvars",
            desc: "Homojen ve dayanıklı yapısıyla öne çıkan kuvars, leke tutmaya karşı dirençli ve kolay temizlenebilir bir yüzeydir. Tezgâh ile aynı malzeme kullanılarak bütünlük sağlanabilir.",
          },
          {
            name: "Granit",
            desc: "Doğal taş yapısı ve yüksek ısı dayanımı ile öne çıkan granit, tezgâh ve alınlarda bütünlük oluşturmak için kullanılabilir. Kendine özgü damar ve renkleriyle doğal bir görünüm sunar.",
          },
        ],
      },
      {
        slug: "eviyeler",
        title: "Eviyeler",
        intro: "Farklı kullanım ihtiyaçlarına ve mutfak tasarımlarına uygun eviye seçenekleri.",
        tags: ["Tezgâh Altı", "Tezgâh Üstü", "Entegre", "Paslanmaz Çelik", "Porselen"],
        items: [
          {
            name: "Tezgâh Altı",
            desc: "Tezgâhın altına monte edilen tezgâh altı eviyeler, sade ve bütüncül bir görünüm sunar. Tezgâh yüzeyindeki kırıntı ve suyun doğrudan eviyeye aktarılmasını kolaylaştırır.",
          },
          {
            name: "Tezgâh Üstü",
            desc: "Tezgâh yüzeyinin üzerine oturtularak uygulanan tezgâh üstü eviyeler, kolay uygulanabilir yapılarıyla farklı mutfak tasarımlarına uyum sağlar. Farklı ölçü ve hazne seçenekleriyle sunulabilir.",
          },
          {
            name: "Entegre",
            desc: "Tezgâh ile aynı malzemeden oluşturulan entegre eviyeler, tezgâh ve eviye arasında kesintisiz bir yüzey oluşturur. Özellikle porselen, kuvars ve benzeri yüzeylerle bütüncül bir görünüm sağlar.",
          },
          {
            name: "Paslanmaz Çelik",
            desc: "Dayanıklı ve hijyenik yapısıyla öne çıkan paslanmaz çelik eviyeler, ısıya ve günlük kullanıma karşı dirençlidir. Farklı hazne ölçüleri ve yüzey seçenekleriyle uygulanabilir.",
          },
          {
            name: "Porselen",
            desc: "Isıya, lekeye ve neme karşı dayanıklı porselen eviyeler, pürüzsüz ve hijyenik yüzeyiyle kolay temizlenir. Farklı renk ve yüzey seçenekleriyle tezgâhla uyumlu, bütüncül bir görünüm sağlar.",
          },
        ],
      },
      {
        slug: "armaturler",
        title: "Armatürler",
        intro: "Farklı kullanım alışkanlıklarına ve mutfak düzenlerine uygun armatür seçenekleri.",
        tags: ["Tekli", "Spiralli", "Filtreli", "Sensörlü", "Çekilebilir Spiralli"],
        items: [
          {
            name: "Tekli",
            desc: "Sade ve işlevsel tasarımıyla öne çıkan tekli armatürler, farklı yükseklik ve form seçenekleriyle çeşitli mutfak tasarımlarına uyum sağlar.",
          },
          {
            name: "Spiralli",
            desc: "Esnek spiral gövdesi sayesinde geniş hareket alanı sunan spiralli armatürler, özellikle büyük ve derin eviyelerde pratik kullanım sağlar.",
          },
          {
            name: "Filtreli",
            desc: "Arıtma sistemini armatürle bir arada sunan filtreli modeller, içme ve kullanım suyu için pratik bir çözüm sağlar. Tezgâh üzerindeki ek ekipman ihtiyacını azaltır.",
          },
          {
            name: "Çekilebilir Spiralli",
            desc: "Çekilebilir başlığı sayesinde su akışının yönlendirilmesini kolaylaştıran bu modeller, eviye içerisinde farklı noktalara ulaşmayı sağlar. Günlük mutfak kullanımında pratiklik sunar.",
          },
        ],
      },
    ],
  },
  {
    slug: "banyo-serileri",
    title: "Banyo Serileri",
    description: "Islak hacimler için estetik, işlevsel ve dayanıklı ürün çözümlerini keşfedin.",
    image: "/assets/photos/banyo/2.jpg",
    groups: [
      {
        slug: "banyo-dolaplari",
        title: "Banyo Dolapları",
        tags: ["Lake", "Membran", "Akrilik", "Melamin"],
        items: [
          {
            name: "Lake",
            desc: "Pürüzsüz ve homojen yüzeyiyle sade ve modern bir görünüm sunar. Mat, yarı mat veya parlak olarak uygulanabilir; farklı renk seçenekleriyle banyo tasarımına uyum sağlar.",
          },
          {
            name: "Membran",
            desc: "PVC folyonun MDF yüzeye vakum pres yöntemiyle uygulanmasıyla elde edilir. Ek yeri olmayan yüzeyi sayesinde kolay temizlenir; farklı renk, doku ve kapak modeli seçenekleriyle klasik ve modern banyo tasarımlarına uyum sağlar.",
          },
          {
            name: "Akrilik",
            desc: "Düz ve parlak yüzeyiyle modern bir görünüm oluşturur. Kolay temizlenebilen yapısı ve geniş renk seçenekleri sayesinde özellikle çağdaş banyo tasarımlarında tercih edilir.",
          },
          {
            name: "Melamin",
            desc: "Dekoratif yüzey seçenekleri ve pratik kullanımıyla öne çıkar. Ahşap, taş ve düz renk gibi farklı görünümler sunarak çeşitli banyo tasarımlarına uyum sağlar.",
          },
        ],
      },
      {
        slug: "banyo-tezgahlari",
        title: "Banyo Tezgâhları",
        tags: ["Porselen", "Çift Kat Porselen", "Kuvars", "Granit", "Mermer"],
        items: [
          {
            name: "Porselen",
            desc: "Isı, leke ve neme karşı dayanıklı yapısıyla banyo tezgâhlarında tercih edilen yüzeylerden biridir. Mermer ve doğal taş görünümlerinden düz yüzeylere kadar farklı seçenekler sunar.",
          },
          {
            name: "Çift Kat Porselen",
            desc: "İki porselen tabakanın bir araya getirilmesiyle daha kalın ve dolgun bir tezgâh görünümü oluşturur. Özellikle lavabo çevresinde güçlü bir kenar detayı ve daha belirgin bir tezgâh formu isteyen tasarımlarda tercih edilebilir.",
          },
          {
            name: "Kuvars",
            desc: "Dayanıklı ve düşük gözenekli yapısıyla banyo kullanımına uygun bir yüzey sunar. Geniş renk ve desen seçenekleriyle farklı lavabo ve dolap tasarımlarına uyum sağlar.",
          },
          {
            name: "Granit",
            desc: "Doğal taşın karakteristik dokusunu banyoya taşıyan güçlü ve dayanıklı bir alternatiftir. Her plakanın kendine özgü damar ve renk yapısı sayesinde doğal bir görünüm oluşturur.",
          },
          {
            name: "Mermer",
            desc: "Doğal damar yapısı ve kendine özgü görünümüyle banyolara doğal ve zamansız bir karakter kazandırır. Farklı renk ve damar seçenekleriyle lavabo ve dolap tasarımlarına uyum sağlar.",
          },
        ],
      },
      {
        slug: "lavabolar",
        title: "Lavabolar",
        tags: ["Tezgâh Üstü Lavabo", "Tezgâh Altı Lavabo", "Yarım Tezgâh Lavabo", "Etajerli Lavabo", "Çanak Lavabo"],
        items: [
          {
            name: "Tezgâh Üstü Lavabo",
            desc: "Tezgâh üzerinde konumlanan lavabo modelidir. Farklı form, ölçü ve tasarım seçenekleriyle modern banyolarda dekoratif bir görünüm sunar.",
          },
          {
            name: "Tezgâh Altı Lavabo",
            desc: "Tezgâhın altına yerleştirilen lavabo, yüzeyle daha bütünleşik ve sade bir görünüm oluşturur. Tezgâhın temiz ve kesintisiz kullanımına olanak sağlar.",
          },
          {
            name: "Yarım Tezgâh Lavabo",
            desc: "Lavabonun tezgâh içine kısmen oturduğu, ön kısmının ise tezgâhtan dışarı taşarak daha belirgin bir form oluşturduğu uygulamadır. Özellikle dar alanlarda işlevsel bir çözüm sunar.",
          },
          {
            name: "Etajerli Lavabo",
            desc: "Lavabonun yanında veya çevresinde kullanım alanı sağlayan etajerli modeller, günlük ihtiyaçlar için ek yüzey sunar. Farklı ölçü ve formlarla banyo tasarımına uyarlanabilir.",
          },
          {
            name: "Çanak Lavabo",
            desc: "Tezgâh üzerinde konumlanan, belirgin formuyla banyoda dekoratif bir odak oluşturan lavabo modelidir. Farklı geometrik ve organik formlarda uygulanabilir.",
          },
        ],
      },
      {
        slug: "klozetler",
        title: "Klozetler",
        tags: ["Asma Klozet", "Ayaklı (Klasik) Klozet", "Duvara Sıfır (Tam Dayalı) Klozet", "Monoblok Klozet"],
        items: [
          {
            name: "Asma Klozet",
            desc: "Gömme rezervuar ile kullanılan ve zemine temas etmeyen klozet modelidir. Altının boş olması temizlik kolaylığı sağlarken, sade ve modern görünümüyle çağdaş banyo tasarımlarına uyum sağlar.",
          },
          {
            name: "Ayaklı (Klasik) Klozet",
            desc: "Klozetin doğrudan zemine monte edildiği ve rezervuarın arka kısmında konumlandığı geleneksel modeldir. Farklı ölçü ve tasarım seçenekleriyle pratik ve ekonomik bir çözüm sunar.",
          },
          {
            name: "Duvara Sıfır (Tam Dayalı) Klozet",
            desc: "Arka yüzeyi duvara tamamen yaslanan, zemine monte edilen klozet modelidir. Gider ve bağlantıların daha düzenli şekilde konumlandırılmasına olanak sağlayarak sade ve bütüncül bir görünüm oluşturur.",
          },
          {
            name: "Monoblok Klozet",
            desc: "Klozet ve rezervuarın tek parça olarak tasarlandığı modeldir. Bütünleşik yapısı sayesinde sade bir görünüm sunar ve farklı banyo tasarımlarına uyum sağlar.",
          },
        ],
      },
      {
        slug: "banyo-armaturleri",
        title: "Armatürler",
        items: [
          {
            name: "Lavabo Bataryaları",
            desc: "Farklı form, yükseklik ve yüzey seçenekleriyle lavabo kullanımına uyum sağlayan batarya alternatifleridir. Farklı lavabo ve montaj tiplerine göre çeşitli çözümler sunar.",
            bullets: [
              "Tek Armatür Delikli Lavabo Bataryaları",
              "Çanak Lavabo Bataryaları",
              "Ankastre Lavabo Bataryaları",
              "Temassız Lavabo Bataryaları",
              "İki Delikli Lavabo Bataryaları",
              "Üç Delikli Lavabo Bataryaları",
            ],
          },
          {
            name: "Duş Bataryaları",
            desc: "Duş alanının kullanım ihtiyacına göre farklı montaj ve kontrol seçenekleri sunan batarya çözümleridir.",
            bullets: ["Ankastre Duş Bataryaları", "Termostatik Duş Bataryaları", "Duvardan Duş Bataryaları"],
          },
          {
            name: "Duş Sistemleri",
            desc: "Tepe duşu, el duşu ve yönlendirici gibi farklı bileşenleri bir arada sunan, duş alanının kullanımını tamamlayan sistemlerdir. Farklı montaj ve kullanım seçenekleriyle banyo tasarımına uyum sağlar.",
            bullets: [
              "Duş Başlıkları",
              "Duş Setleri",
              "Bataryalı Duş Sistemleri",
              "Ankastre Duş Yönlendiricileri",
              "Sürgülü El Duşu Takımları",
              "El Duşu Takımları",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "kapilar",
    title: "Kapılar",
    description:
      "Mekânın karakterini tamamlayan, farklı yüzey ve tasarım seçenekleriyle şekillenen kapı çözümlerini keşfedin.",
    image: "/assets/photos/dolap/3.jpg",
    groups: [
      {
        slug: "lake-kapilar",
        title: "Lake Kapılar",
        intro:
          "MDF yüzey üzerine uygulanan lake boya ile pürüzsüz ve homojen bir görünüm sunar. Mat, yarı mat veya parlak yüzey seçenekleriyle farklı renk ve tasarımlara uyarlanabilir. Düz, çerçeveli ve farklı kapak/kanat detaylarıyla mekânın genel tasarımına uygun olarak özel ölçüde üretilebilir.",
        items: [
          { name: "Düz Lake Kapı" },
          { name: "Çerçeveli Lake Kapı" },
          { name: "Camlı Lake Kapı" },
          { name: "Özel Tasarım Lake Kapı" },
        ],
      },
    ],
  },
  {
    slug: "mobilya-ozel-uretim",
    title: "Mobilya & Özel Üretim",
    description: "Mekâna, ölçüye ve kullanım ihtiyacına göre tasarlanan özel mobilya çözümlerini keşfedin.",
    image: "/assets/photos/tv-unitesi/2.jpg",
    groups: [
      {
        slug: "mobilya",
        items: [
          {
            name: "TV Üniteleri",
            desc: "Televizyon, depolama ve dekoratif kullanım ihtiyaçlarını bir arada ele alan, mekâna göre ölçülendirilen tasarımlardır.",
          },
          {
            name: "Vestiyer & Antre Mobilyaları",
            desc: "Giriş alanlarının kullanımını düzenleyen, askılık, depolama ve ayakkabı saklama ihtiyaçlarına göre tasarlanan özel mobilyalardır.",
          },
          {
            name: "Gömme Dolaplar & Gardıroplar",
            desc: "Mekâna özel ölçülendirilen, depolama ihtiyacını düzenleyen ve duvarlarla bütünleşen dolap çözümleridir. Farklı iç düzen, kapak ve kullanım seçenekleriyle ihtiyaca göre tasarlanabilir.",
          },
          {
            name: "Kitaplık & Raf Sistemleri",
            desc: "Kitap, obje ve günlük kullanım eşyaları için farklı ölçü ve düzenlerde tasarlanan açık veya kapalı depolama çözümleridir.",
          },
          {
            name: "Masa & Çalışma Alanları",
            desc: "Mekânın ölçülerine ve kullanım amacına göre tasarlanan çalışma masası, konsol ve benzeri özel üretim mobilyalardır.",
          },
          {
            name: "Özel Üretim",
            desc: "Mekânın ihtiyaçlarına ve tasarımına özel olarak ölçülendirilen, farklı malzeme ve detaylarla üretilen mobilya çözümleridir.",
          },
        ],
      },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
