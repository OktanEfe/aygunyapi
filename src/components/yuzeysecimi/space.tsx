"use client";

import { useState } from "react";

const alanlar = ["Mutfak", "Banyo", "Yaşam Alanı", "Özel Uygulamalar"];
const gruplar = ["Kapak", "Tezgah", "Duvar", "Seramik", "Ahşap", "Lake"];

export default function SecimPaneli() {
  const [seciliAlan, setSeciliAlan] = useState("Mutfak");
  const [seciliGrup, setSeciliGrup] = useState("Tezgah");

  return (
    <section
      id="secim-paneli"
      className="border-y border-black/5 bg-[#FAFAFA] py-14 md:py-16"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/25">
              Seçim Adımı
            </p>
            <h2 className="text-2xl font-extralight tracking-tight text-[#0A1A2B] md:text-4xl">
              Önce alanı, sonra yüzey grubunu belirleyin.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/40 md:text-base">
              Bu seçim, size gösterilecek yüzeyleri ve ilgili ürün yönlendirmelerini
              daha doğru hale getirir.
            </p>
          </div>

          <div className="space-y-12 rounded-[2.5rem] border border-black/[0.04] bg-white px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col items-center">
              <span className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-black/25">
                Uygulama Alanı
              </span>

              <div className="flex flex-wrap justify-center gap-3">
                {alanlar.map((alan) => {
                  const active = seciliAlan === alan;

                  return (
                    <button
                      key={alan}
                      onClick={() => setSeciliAlan(alan)}
                      className={`rounded-full px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all ${
                        active
                          ? "bg-[#0A1A2B] text-white shadow-[0_10px_24px_rgba(10,26,43,0.16)]"
                          : "border border-black/8 bg-[#FBFBFC] text-black/45 hover:border-[#0A1A2B]/10 hover:bg-white hover:text-[#0A1A2B]"
                      }`}
                    >
                      {alan}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-black/[0.05] pt-10">
              <div className="flex flex-col items-center">
                <span className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-black/25">
                  Materyal Grubu
                </span>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-10">
                  {gruplar.map((grup) => {
                    const active = seciliGrup === grup;

                    return (
                      <button
                        key={grup}
                        onClick={() => setSeciliGrup(grup)}
                        className={`relative pb-2 text-[11px] font-semibold uppercase tracking-[0.3em] transition-colors ${
                          active
                            ? "text-[#0A1A2B]"
                            : "text-black/25 hover:text-black/45"
                        }`}
                      >
                        {grup}
                        <span
                          className={`absolute left-0 bottom-0 h-px transition-all ${
                            active
                              ? "w-full bg-[#0A1A2B]"
                              : "w-0 bg-transparent"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-black/[0.05] pt-8">
              <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/25">
                  Seçiminiz
                </span>

                <div className="inline-flex items-center gap-3 rounded-full bg-[#F7F7F8] px-5 py-3 text-[11px] font-medium text-[#0A1A2B]">
                  <span>{seciliAlan}</span>
                  <span className="text-black/20">/</span>
                  <span>{seciliGrup}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}