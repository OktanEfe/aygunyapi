import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[100svh] items-center bg-midnight pb-20 pt-36 text-white">
      <div className="container-x">
        <span className="eyebrow eyebrow-light">404</span>
        <h1 className="mt-6 max-w-3xl text-[42px] font-extralight leading-[1.05] tracking-[-0.03em] md:text-[80px]">
          Sayfa <span className="font-serif font-normal italic text-bordo-200">Bulunamadı.</span>
        </h1>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/" className="btn-light">
            Ana Sayfaya Dön
          </Link>
          <Link href="/iletisim" className="btn-ghost-light">
            İletişim
          </Link>
        </div>
      </div>
    </main>
  );
}
