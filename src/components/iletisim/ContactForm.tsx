"use client";

import { useState } from "react";

const inputCls =
  "rounded-2xl border border-black/5 bg-[#F7F7F8] px-5 py-4 text-sm outline-none transition-all placeholder:text-black/25 focus:border-[#0A1A2B]/15 focus:bg-white focus:ring-2 focus:ring-[#0A1A2B]/5";
const labelCls = "ml-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0A1A2B]/35";

type Status = { type: "idle" | "sending" | "ok" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Mesaj gönderilemedi.");
      form.reset();
      setStatus({ type: "ok", message: "Mesajınız iletildi. En kısa sürede size dönüş yapacağız." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Mesaj gönderilemedi." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-name" className={labelCls}>Ad Soyad</label>
        <input id="cf-name" type="text" name="name" required maxLength={120} className={inputCls} placeholder="Adınız Soyadınız" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-email" className={labelCls}>E-Posta</label>
        <input id="cf-email" type="email" name="email" required maxLength={200} className={inputCls} placeholder="hello@example.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-phone" className={labelCls}>Telefon</label>
        <input id="cf-phone" type="tel" name="phone" maxLength={40} className={inputCls} placeholder="+90 5xx xxx xx xx" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-subject" className={labelCls}>Konu</label>
        <input id="cf-subject" type="text" name="subject" maxLength={200} className={inputCls} placeholder="Mimari danışmanlık / yenileme / iç mekan" />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="cf-message" className={labelCls}>Mesajınız</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className={`${inputCls} resize-none rounded-[1.75rem] py-5 md:rounded-[2rem]`}
          placeholder="Projenizden, beklentilerinizden ve mekan türünden kısaca bahsedin..."
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 md:col-span-2 md:flex-row md:items-center">
        <button
          type="submit"
          disabled={status.type === "sending"}
          className="w-full rounded-full bg-[#0A1A2B] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_rgba(10,26,43,0.12)] transition-all duration-500 hover:-translate-y-0.5 hover:opacity-95 active:scale-95 disabled:cursor-wait disabled:opacity-60 md:w-auto"
        >
          {status.type === "sending" ? "Gönderiliyor…" : "Mesajı Gönder"}
        </button>
        {status.message && (
          <p
            role="status"
            className={`text-sm ${status.type === "ok" ? "text-emerald-700" : "text-red-600"}`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
