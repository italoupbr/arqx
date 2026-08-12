/* Handler serverless da candidatura (spec §5.3).
   Grava em arqx_candidaturas no Supabase (insert-only via RLS).
   Honeypot: campo "website" preenchido → finge sucesso e descarta. */
import { NextResponse } from "next/server";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "corpo inválido" }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // bot

  const nome = String(body.nome || "").trim();
  const email = String(body.email || "").trim();
  const whatsapp = String(body.whatsapp || "").trim();
  const cidade_uf = String(body.cidade_uf || "").trim();
  if (nome.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || whatsapp.length < 8 || cidade_uf.length < 2) {
    return NextResponse.json({ error: "preencha os campos obrigatórios" }, { status: 422 });
  }
  if (!body.lgpd) {
    return NextResponse.json({ error: "aceite da política é obrigatório" }, { status: 422 });
  }

  const row = {
    nome: nome.slice(0, 200),
    email: email.slice(0, 200),
    whatsapp: whatsapp.slice(0, 40),
    cidade_uf: cidade_uf.slice(0, 120),
    instagram: String(body.instagram || "").trim().slice(0, 120) || null,
    tempo_atuacao: String(body.tempo_atuacao || "").slice(0, 40) || null,
    faturamento_faixa: String(body.faturamento_faixa || "").slice(0, 40) || null,
    desafio: String(body.desafio || "").trim().slice(0, 2000) || null,
    lgpd_aceite: true,
    origem: "site",
  };

  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/arqx_candidaturas`, {
    method: "POST",
    headers: {
      apikey: process.env.SUPABASE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    console.error("candidatura: supabase", res.status, await res.text());
    return NextResponse.json({ error: "falha ao registrar, tente novamente" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
