import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Aygün Yapı`,
    description: project.summary,
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const [cover, ...gallery] = project.images;

  const facts = [
    { label: "Kategori", value: project.category },
    project.year && { label: "Yıl", value: project.year },
    project.location && { label: "Lokasyon", value: project.location },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[90vh] w-full overflow-hidden bg-[#0A1A2B]">
        <Image
          src={cover}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="absolute bottom-16 left-0 w-full md:bottom-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-white/60">
                {project.category}
              </span>
              <div className="h-px w-8 bg-white/30" />
            </div>
            <h1 className="text-5xl md:text-[120px] font-extralight text-white tracking-tighter leading-[0.9]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-y-10 border-t border-black/5 pt-12">
                  {facts.map((f) => (
                    <div key={f.label}>
                      <span className="text-[9px] font-bold tracking-widest text-black/30 uppercase block mb-3">
                        {f.label}
                      </span>
                      <span className="text-xl font-light text-[#0A1A2B]">{f.value}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <span className="text-[9px] font-bold tracking-widest text-black/30 uppercase block mb-6">
                    Materyal Paleti
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((m) => (
                      <span
                        key={m}
                        className="px-5 py-2.5 bg-[#F5F5F7] text-[#0A1A2B] rounded-full text-[11px] font-medium tracking-tight"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="max-w-2xl">
                <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0A1A2B]/30 mb-10">
                  Konsept ve Yaklaşım
                </h2>
                <p className="text-2xl md:text-4xl font-extralight text-[#0A1A2B] leading-[1.25] tracking-tight">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri — fotoğraflar dikey (telefon) çekim olduğu için dikey kartlar */}
      <section className="pb-32 md:pb-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="group relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#F5F5F7] md:rounded-[2rem]"
              >
                <Image
                  src={src}
                  alt={`${project.title} detay ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-black/5 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link
              href="/projeler"
              className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-black/40 hover:text-black transition-all"
            >
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-white transition-all">
                <i className="bi bi-arrow-left"></i>
              </div>
              Tüm Projeler
            </Link>
            <div className="hidden md:block h-px w-24 bg-black/10" />
            <Link
              href={`/projeler/${next.slug}`}
              className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A1A2B]"
            >
              Sıradaki: {next.title}
              <div className="w-10 h-10 rounded-full bg-[#0A1A2B] text-white flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                <i className="bi bi-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
