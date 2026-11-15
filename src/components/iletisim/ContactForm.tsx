"use client";

import { useState } from "react";

const ENDPOINT = "https://formspree.io/f/mzzbnbyv";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-midnight/15 bg-white px-4 py-3.5 text-[15px] text-midnight outline-none transition-colors placeholder:text-midnight/30 focus:border-midnight";
const label = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-midnight/60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start rounded-2xl border border-midnight/10 bg-white p-10" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bordo text-white">
          <i className="bi bi-check-lg text-xl" />
        </span>
        <p className="mt-6 text-[22px] font-light text-midnight">Mesajınız iletildi.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-bordo hover:text-midnight"
        >
          Yeni mesaj
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label htmlFor="f-name" className={label}>
          Ad Soyad
        </label>
        <input id="f-name" name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor="f-phone" className={label}>
          Telefon
        </label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="+90" />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="f-email" className={label}>
          E-Posta
        </label>
        <input id="f-email" name="email" type="email" autoComplete="email" required className={field} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="f-subject" className={label}>
          Konu
        </label>
        <select id="f-subject" name="subject" className={`${field} appearance-none`} defaultValue="">
          <option value="" disabled>
            Seçiniz
          </option>
          <option>Mutfak Tasarımı</option>
          <option>Banyo Yenileme</option>
          <option>İç Mekân Çözümleri</option>
          <option>Malzeme Danışmanlığı</option>
          <option>Proje Yönetimi</option>
          <option>Özel Projeler</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="f-message" className={label}>
          Mesajınız
        </label>
        <textarea id="f-message" name="message" rows={6} required className={`${field} resize-y`} />
      </div>

      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-[12px] leading-relaxed text-midnight/50">
          Formu göndererek{" "}
          <a href="/gizlilik" className="underline underline-offset-2 hover:text-midnight">
            Gizlilik Politikası
          </a>
          ’nı kabul etmiş olursunuz.
        </p>
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Gönderiliyor…" : "Mesajı Gönder"}
          <i className="bi bi-arrow-right text-sm" />
        </button>
      </div>

      {status === "error" && (
        <p className="text-[14px] text-bordo md:col-span-2" role="alert">
          Mesaj gönderilemedi. Lütfen tekrar deneyin ya da bizi arayın.
        </p>
      )}
    </form>
  );
}
