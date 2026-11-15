import { NextResponse } from "next/server";
import { site } from "@/data/site";

// İletişim formu → Resend ile e-posta.
// Gerekli ortam değişkenleri (.env.example'a bakın):
//   RESEND_API_KEY      Resend API anahtarı
//   CONTACT_TO_EMAIL    Formların gideceği adres (varsayılan: site e-postası)
//   CONTACT_FROM_EMAIL  Resend'de doğrulanmış gönderici, ör. "Aygün Yapı <form@aygundecor.com>"

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot — gerçek kullanıcılar boş bırakır
};

const MAX = { name: 120, email: 200, phone: 40, subject: 200, message: 5000 };

// Basit IP başına sınır (sunucu örneği başına, bellek içi)
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  // Bot ise sessizce başarılı dön
  if (body.website) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Çok fazla deneme. Lütfen biraz sonra tekrar deneyin." }, { status: 429 });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const subject = clean(body.subject, MAX.subject);
  const message = clean(body.message, MAX.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Ad, e-posta ve mesaj alanları zorunludur." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY tanımlı değil");
    return NextResponse.json({ error: "Form şu anda kullanılamıyor. Lütfen telefonla ulaşın." }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Aygün Yapı <onboarding@resend.dev>";

  const rows: [string, string][] = [
    ["Ad Soyad", name],
    ["E-Posta", email],
    ["Telefon", phone || "—"],
    ["Konu", subject || "—"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0A1A2B;max-width:600px">
      <h2 style="font-weight:300;margin:0 0 16px">Yeni proje talebi</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px 8px 0;color:#667;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 0">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="margin-top:16px;padding:16px;background:#F5F5F7;border-radius:12px;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
    </div>`;

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Web formu: ${subject || "Proje talebi"} — ${name}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Resend hatası", res.status, await res.text());
      return NextResponse.json({ error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend isteği başarısız", err);
    return NextResponse.json({ error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
