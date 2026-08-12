/* Handler do formulário de contato (spec §5.9) → arqx_contatos. */
import { NextResponse } from "next/server";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "corpo inválido" }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const nome = String(body.nome || "").trim();
  const email = String(body.email || "").trim();
  const mensagem = String(body.mensagem || "").trim();
  if (nome.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || mensagem.length < 2) {
    return NextResponse.json({ error: "preencha os campos obrigatórios" }, { status: 422 });
  }

  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/arqx_contatos`, {
    method: "POST",
    headers: {
      apikey: process.env.SUPABASE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ nome: nome.slice(0, 200), email: email.slice(0, 200), mensagem: mensagem.slice(0, 2000) }),
  });

  if (!res.ok) {
    console.error("contato: supabase", res.status, await res.text());
    return NextResponse.json({ error: "falha ao registrar, tente novamente" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
