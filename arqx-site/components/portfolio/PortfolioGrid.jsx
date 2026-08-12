"use client";
/* Grid do portfólio com filtros (spec §5.5). Placeholders marcados até
   chegarem projetos reais com consentimento. Filtro é client-side;
   os cards já estão no HTML do build. */
import { useState } from "react";
import { ConfirmTag } from "@/components/ds/primitives";

export default function PortfolioGrid({ filtros, placeholders }) {
  const [ativo, setAtivo] = useState("Todos");
  const visiveis = placeholders.filter((p) => ativo === "Todos" || p.categoria === ativo);
  return (
    <>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "var(--space-10)" }} role="group" aria-label="Filtrar por categoria">
        {filtros.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setAtivo(f)}
            style={{
              fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, lineHeight: 1,
              padding: "8px 14px", borderRadius: "var(--radius-pill)", cursor: "pointer",
              color: ativo === f ? "var(--stone-900)" : "var(--text-secondary)",
              background: ativo === f ? "var(--accent)" : "var(--surface-card)",
              border: ativo === f ? "1px solid var(--accent)" : "1px solid var(--line-soft)",
              transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast)",
            }}
          >
            {f}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "18px", marginTop: "var(--space-8)" }}>
        {visiveis.map((p, i) => (
          <div key={i} style={{ background: "var(--surface-card)", border: "1px solid var(--line-soft)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
            <div style={{ aspectRatio: "16 / 11", overflow: "hidden", borderBottom: "1px solid var(--line-hairline)", position: "relative" }}>
              <img src={p.image} alt="Imagem provisória · aguardando projeto real da rede" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.85)" }} />
            </div>
            <div style={{ padding: "var(--space-6)" }}>
              <span className="arqx-label">{p.categoria}</span>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: "8px 0 10px" }}>
                Nome do projeto e crédito do escritório associado entram aqui.
              </p>
              <ConfirmTag style={{ marginLeft: 0 }}>aguardando projeto real</ConfirmTag>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
