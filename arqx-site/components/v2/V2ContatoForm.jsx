"use client";
/* Formulário de contato · mundo v2 (campos underline). Grava em /api/contato. */
import { useState } from "react";

export default function V2ContatoForm() {
  const [state, setState] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    let ok = true;
    form.querySelectorAll("[required]").forEach((inp) => {
      const bad = !inp.value.trim() || (inp.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value));
      inp.closest(".field").classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) return;
    setState("sending");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: d.nome, email: d.email, mensagem: d.mensagem, website: d.website || "" }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || `Erro ${res.status}`);
      setState("ok");
    } catch (err) {
      setErrMsg(`Não foi possível enviar: ${err.message}.`);
      setState("error");
    }
  }

  if (state === "ok") {
    return (
      <div className="form-panel" role="status">
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.1, marginBottom: 14 }}>Mensagem recebida.</div>
        <p style={{ color: "var(--muted-light)", fontSize: 15, lineHeight: 1.6 }}>Retornamos em breve pelo e-mail informado.</p>
      </div>
    );
  }

  return (
    <form className="form-panel" onSubmit={onSubmit} noValidate>
      <div className="field"><label htmlFor="cnome">Nome</label><input type="text" id="cnome" name="nome" autoComplete="name" required /><span className="err">Obrigatório</span></div>
      <div className="field"><label htmlFor="cemail">E-mail</label><input type="email" id="cemail" name="email" autoComplete="email" required /><span className="err">E-mail inválido</span></div>
      <div className="field"><label htmlFor="cmsg">Mensagem</label><textarea id="cmsg" name="mensagem" rows={5} required></textarea><span className="err">Obrigatório</span></div>
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {state === "error" && <div className="m-error show">{errMsg}</div>}
      <button type="submit" className="btn magnetic" style={{ width: "100%", justifyContent: "space-between" }} disabled={state === "sending"}>
        {state === "sending" ? "Enviando…" : "Enviar mensagem"} <span className="ar">→</span>
      </button>
    </form>
  );
}
