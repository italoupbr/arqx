"use client";
/* Formulário de candidatura (spec §5.3): validação, honeypot, LGPD,
   estado de sucesso e ERRO VISÍVEL na tela (nunca só no console). */
import { useState } from "react";
import Link from "next/link";
import { Input, Select, Textarea, Checkbox } from "@/components/ds/fields";
import Button from "@/components/ds/Button";

export default function CandidaturaForm({ opcoesTempo, opcoesFaturamento, labelBotao, msgSucesso, labelLgpd }) {
  const [state, setState] = useState("idle"); // idle | sending | ok | error
  const [errMsg, setErrMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!data.lgpd) {
      setState("error");
      setErrMsg("É preciso aceitar a Política de Privacidade para enviar.");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/candidatura", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || `Erro ${res.status}`);
      setState("ok");
    } catch (err) {
      setState("error");
      setErrMsg(`Não foi possível enviar: ${err.message}. Tente novamente ou fale conosco pelo WhatsApp.`);
    }
  }

  if (state === "ok") {
    return (
      <div role="status" style={{ background: "var(--surface-card)", border: "1px solid var(--line-soft)", borderRadius: "var(--radius-lg)", padding: "var(--space-10)", textAlign: "center" }}>
        <p className="arqx-display" style={{ fontSize: "var(--text-xl)", marginBottom: "10px" }}>candidatura recebida.</p>
        <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>{msgSucesso}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }} noValidate={false}>
      <Input label="Nome completo *" name="nome" required minLength={2} maxLength={200} autoComplete="name" />
      <Input label="E-mail *" name="email" type="email" required maxLength={200} autoComplete="email" />
      <Input label="WhatsApp *" name="whatsapp" type="tel" required minLength={8} maxLength={40} autoComplete="tel" placeholder="(00) 00000-0000" />
      <Input label="Cidade / UF *" name="cidade_uf" required minLength={2} maxLength={120} placeholder="Ex.: Maringá / PR" />
      <Input label="Instagram do escritório" name="instagram" maxLength={120} placeholder="@seuescritorio" />
      <Select label="Tempo de atuação" name="tempo_atuacao" options={opcoesTempo} placeholder="Selecione" />
      <Select label="Faturamento mensal médio" name="faturamento_faixa" options={opcoesFaturamento} placeholder="Selecione" />
      <Textarea label="Qual seu maior desafio hoje?" name="desafio" maxLength={2000} rows={4} />
      {/* honeypot · invisível para humanos, bots preenchem */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <Checkbox name="lgpd" id="lgpd" required>
        {labelLgpd}{" "}
        <Link href="/politica-de-privacidade" style={{ textDecoration: "underline" }}>
          Ler a política
        </Link>
        {" "}*
      </Checkbox>
      {state === "error" && (
        <p role="alert" style={{ color: "var(--critical)", background: "rgba(168,87,76,.12)", border: "1px solid rgba(168,87,76,.4)", borderRadius: "var(--radius-sm)", padding: "12px 14px", fontSize: "13px" }}>
          {errMsg}
        </p>
      )}
      <Button type="submit" size="lg" variant="primary" full disabled={state === "sending"}>
        {state === "sending" ? "Enviando…" : labelBotao}
      </Button>
    </form>
  );
}
