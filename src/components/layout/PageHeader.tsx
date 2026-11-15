import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow?: string;
  /** Verilirse üst etiket bu sayfaya bağlantı olur (ör. kategori → ürünler) */
  eyebrowHref?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
  /** Görselin dikey odak noktası (object-position) */
  focus?: string;
};

/** İç sayfaların ortak üst alanı: fotoğraf üzerinde koyu midnight katman ve sola yaslı başlık. */
export default function PageHeader({ eyebrow, eyebrowHref, title, text, image, imageAlt, children, focus = "center" }: Props) {
  return (
    <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-midnight-950 pb-16 pt-40 md:min-h-[78svh] md:pb-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
        style={{ objectPosition: focus }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight-950/95 via-midnight-950/35 to-midnight-950/25" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-midnight-950/55 to-transparent md:w-2/3" />

      <div className="container-x">
        {eyebrow &&
          (eyebrowHref ? (
            <Link href={eyebrowHref} className="eyebrow eyebrow-light transition-colors before:hidden hover:text-white">
              <i className="bi bi-arrow-left -ml-1 text-xs" />
              {eyebrow}
            </Link>
          ) : (
            <span className="eyebrow eyebrow-light">{eyebrow}</span>
          ))}
        <h1 className="mt-6 max-w-4xl text-[42px] font-extralight leading-[1.02] tracking-[-0.03em] text-white md:text-[84px]">
          {title}
        </h1>
        {text && (
          <p className="mt-8 max-w-2xl text-[16px] font-light leading-[1.8] text-white/75 md:text-lg">{text}</p>
        )}
        {children && <div className="mt-10 flex flex-wrap items-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
