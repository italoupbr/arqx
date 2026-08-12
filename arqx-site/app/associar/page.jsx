/* Associar · página de conversão (spec §5.3). Copy em content/associar.json.
   FAQ com schema FAQPage gerado do MESMO conteúdo (nunca divergem). */
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import c from "@/content/associar.json";
import { Eyebrow, ConfirmTag, Divider } from "@/components/ds/primitives";
import CandidaturaForm from "@/components/forms/CandidaturaForm";

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: "/associar" },
};

const INNER = { maxWidth: "var(--page-max)", marginInline: "auto" };

export default function Associar() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq
      .filter((f) => !f.confirm) // pendentes de confirmação ficam FORA do schema
      .map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ padding: "var(--space-24) var(--page-gutter) var(--space-16)" }}>
        <div style={INNER}>
          <Breadcrumbs items={[{ href: "/associar", label: "Seja um associado" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", serviceType: "Associação à rede de escritórios de arquitetura ARQX", name: "Associação ARQX", provider: { "@id": ORG_ID }, areaServed: ["BR", "US", "PT"], url: `${SITE_URL}/associar` }} />
        <p className="arqx-display" style={{ color: "var(--text-accent)", fontSize: "var(--text-lg)", marginBottom: "14px" }}>
            {c.pretitulo}
          </p>
          <h1 className="arqx-display" style={{ fontSize: "clamp(44px,7vw,96px)", marginBottom: "18px" }}>{c.h1}</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-md)" }}>
            {c.sub}
            <ConfirmTag>{c.subConfirm}</ConfirmTag>
          </p>
        </div>
      </section>

      <section style={{ padding: "0 var(--page-gutter) var(--space-24)" }}>
        <div style={{ ...INNER, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "56px", alignItems: "start" }}>
          {/* Coluna A · o que recebe */}
          <div>
            <Eyebrow>{c.recebe.eyebrow}</Eyebrow>
            <div style={{ marginTop: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
              {c.recebe.grupos.map((g) => (
                <div key={g.titulo}>
                  <h2 style={{ fontSize: "var(--text-md)", marginBottom: "12px" }}>{g.titulo}</h2>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {g.itens.map((item) => (
                      <li key={item} style={{ padding: "10px 0", borderTop: "1px solid var(--line-soft)", fontSize: "14px", color: "var(--text-secondary)", display: "flex", gap: "12px" }}>
                        <span style={{ color: "var(--text-accent)" }}>&middot;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="arqx-display" style={{ fontSize: "var(--text-lg)", marginTop: "var(--space-10)", color: "var(--text-primary)", maxWidth: "36ch" }}>
              {c.recebe.autonomia.toLowerCase()}
            </p>
          </div>

          {/* Coluna B · formulário */}
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--line-soft)", borderRadius: "var(--radius-xl)", padding: "var(--space-8)" }}>
            <div style={{ marginBottom: "var(--space-6)" }}>
              <span className="arqx-label">Candidatura</span>
              <ConfirmTag>{c.form.confirmCampos}</ConfirmTag>
            </div>
            <CandidaturaForm
              opcoesTempo={c.form.tempoAtuacao}
              opcoesFaturamento={c.form.faturamento}
              labelBotao={c.form.botao}
              msgSucesso={c.form.sucesso}
              labelLgpd={c.form.lgpd}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)", background: "var(--bg-sunken)", borderTop: "1px solid var(--line-hairline)" }}>
        <div style={{ ...INNER, maxWidth: "820px" }}>
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <div style={{ marginTop: "var(--space-8)" }}>
            {c.faq.map((f) => (
              <details key={f.q} style={{ borderTop: "1px solid var(--line-soft)", padding: "18px 0" }}>
                <summary style={{ cursor: "pointer", fontSize: "var(--text-md)", fontWeight: 600, listStyle: "none" }}>
                  {f.q}
                  {f.confirm && <ConfirmTag>{f.confirm}</ConfirmTag>}
                </summary>
                <p style={{ color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)", marginTop: "12px", fontSize: "14px" }}>{f.a}</p>
              </details>
            ))}
            <Divider />
          </div>
        </div>
      </section>
    </>
  );
}
