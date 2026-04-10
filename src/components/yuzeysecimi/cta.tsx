// import Image from "next/image";
// import Link from "next/link";

// export default function AltCta() {
//   return (
//     <section className="border-t border-black/5 bg-[#F9F9F9] py-24 md:py-28 text-center">
//       <div className="container mx-auto px-6">
//         <div className="mx-auto max-w-3xl">
//           <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-black/25">
//             Seçim Desteği
//           </p>

//           <h2 className="text-4xl font-extralight tracking-tighter text-[#0A1A2B] md:text-6xl">
//             Mükemmel kombinasyonu <br />
//             <span className="font-serif italic text-black/20">
//               birlikte belirleyelim.
//             </span>
//           </h2>

//           <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-black/45">
//             Seçtiğiniz yüzeylerin proje diline uygunluğunu, dayanıklılık beklentisini ve
//             kullanım senaryolarını uzman ekibimizle birlikte değerlendirin.
//           </p>

//           <div className="mt-10 flex items-center justify-center gap-5">
//             <div className="flex -space-x-3">
//               {[1, 2, 3].map((i) => (
//                 <div
//                   key={i}
//                   className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#F9F9F9] bg-gray-100"
//                 >
//                   <Image
//                     src={`https://i.pravatar.cc/100?u=${i}`}
//                     alt="Uzman ekip"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="text-left">
//               <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]">
//                 Uzman Desteği
//               </span>
//               <span className="text-[12px] text-black/35">
//                 Hafta içi 09:00 – 18:00
//               </span>
//             </div>
//           </div>

//           <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
//             <button className="rounded-full bg-[#0A1A2B] px-9 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-white shadow-[0_16px_34px_rgba(10,26,43,0.12)] transition hover:opacity-90">
//               WhatsApp ile Görüşün
//             </button>

//             <Link
//               href="/urunler"
//               className="inline-flex items-center justify-center rounded-full border border-black/10 px-9 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1A2B] transition hover:bg-white"
//             >
//               Tüm Ürünleri İnceleyin
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }