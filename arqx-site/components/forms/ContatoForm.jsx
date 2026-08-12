"use client";
/* Formulário de contato (spec §5.9) · nome, e-mail, mensagem. */
import { useState } from "react";
import { Input, Textarea } from "@/components/ds/fields";
import Button from "@/components/ds/Button";

export default function ContatoForm({ labelBotao, msgSucesso }) {
  const [state, setState] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState("sending");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || `Erro ${res.status}`);
      setState("ok");
    } catch (err) {
      setState("error");
      setErrMsg(`Não foi possível enviar: ${err.message}.`);
    }
  }

  if (state === "ok") {
    return (
      <p role="status" style={{ background: "var(--surface-card)", border: "1px solid var(--line-soft)", borderRadius: "var(--radius-lg)", padding: "var(--space-8)", color: "var(--text-secondary)" }}>
        {msgSucesso}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <Input label="Nome *" name="nome" required minLength={2} maxLength={200} autoComplete="name" />
      <Input label="E-mail *" name="email" type="email" required maxLength={200} autoComplete="email" />
      <Textarea label="Mensagem *" name="mensagem" required minLength={2} maxLength={2000} rows={5} />
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {state === "error" && (
        <p role="alert" style={{ color: "var(--critical)", background: "rgba(168,87,76,.12)", border: "1px solid rgba(168,87,76,.4)", borderRadius: "var(--radius-sm)", padding: "12px 14px", fontSize: "13px" }}>
          {errMsg}
        </p>
      )}
      <Button type="submit" variant="primary" disabled={state === "sending"}>
        {state === "sending" ? "Enviando…" : labelBotao}
      </Button>
    </form>
  );
}
