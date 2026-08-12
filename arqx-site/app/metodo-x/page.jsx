/* Método X™ · spec §5.2. Copy em content/metodo-x.json. */
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import c from "@/content/metodo-x.json";
import Button from "@/components/ds/Button";
import { Eyebrow, Card, Divider } from "@/components/ds/primitives";

export const metadata = {
  title: "Método X™ · os 4 pilares do escritório de arquitetura que dá lucro",
  description: c.description,
  alternates: { canonical: "/metodo-x" },
};

const SECTION = { padding: "var(--space-20) var(--page-gutter)" };
const INNER = { maxWidth: "var(--page-max)", marginInline: "auto" };

export default function MetodoX() {
  return (
    <>
      <section style={{ ...SECTION, paddingTop: "var(--space-24)" }}>
        <div style={INNER}>
          <Breadcrumbs items={[{ href: "/metodo-x", label: "Método X™" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", serviceType: "Licenciamento de marca e método para escritórios de arquitetura", name: "Método X™", provider: { "@id": ORG_ID }, areaServed: ["BR", "US", "PT"], url: `${SITE_URL}/metodo-x` }} />
        <Eyebrow>Método X&trade;</Eyebrow>
          <h1 className="arqx-display" style={{ fontSize: "clamp(44px,7vw,96px)", margin: "24px 0 20px" }}>
            quatro pilares, um escritório que dá lucro.
          </h1>
          <p className="arqx-display" style={{ fontSize: "clamp(20px,2.6vw,28px)", color: "var(--text-secondary)", maxWidth: "34ch" }}>
            {c.intro.statement.toLowerCase()}
          </p>
          <p style={{ color: "var(--text-secondary)", maxWidth: "62ch", lineHeight: "var(--leading-relaxed)", marginTop: "18px" }}>
            {c.intro.paragrafo}
          </p>
        </div>
      </section>

      {/* 4 pilares · seções full, numeradas */}
      {c.pilares.map((p, i) => (
        <section
          key={p.nome}
          style={{ ...SECTION, background: i % 2 ? "transparent" : "var(--bg-sunken)", borderTop: "1px solid var(--line-hairline)" }}
        >
          <div style={{ ...INNER, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", alignItems: "start" }}>
            <div className="reveal">
              <span style={{ fontFamily: "var(--font-structure)", fontSize: "clamp(44px,6vw,72px)", color: "var(--text-accent)", letterSpacing: "-.02em", lineHeight: 1 }}>
                {p.numero}
              </span>
              <h2 className="arqx-display" style={{ fontSize: "clamp(30px,4vw,48px)", marginTop: "14px" }}>
                {p.nome.toLowerCase()}
              </h2>
            </div>
            <div className="reveal">
              <p style={{ color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-md)" }}>{p.descricao}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "flex", flexDirection: "column" }}>
                {p.inclui.map((item) => (
                  <li key={item} style={{ padding: "12px 0", borderTop: "1px solid var(--line-soft)", color: "var(--text-primary)", fontSize: "14px", display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--text-accent)" }}>&middot;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* O que você recebe */}
      <section style={{ ...SECTION, borderTop: "1px solid var(--line-hairline)" }}>
        <div style={INNER}>
          <div className="reveal">
            <Eyebrow>{c.entregas.eyebrow}</Eyebrow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px", marginTop: "var(--space-8)" }}>
            {c.entregas.cards.map((card) => (
              <div key={card.titulo} className="reveal">
                <Card padding="var(--space-8)">
                  <h3 className="arqx-display" style={{ fontSize: "var(--text-2xl)" }}>{card.titulo.toLowerCase()}</h3>
                  <div className="arqx-label" style={{ margin: "6px 0 18px" }}>{card.subtitulo}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {card.itens.map((item) => (
                      <li key={item} style={{ padding: "10px 0", borderTop: "1px solid var(--line-soft)", fontSize: "14px", color: "var(--text-secondary)", display: "flex", gap: "12px" }}>
                        <span style={{ color: "var(--text-accent)" }}>&middot;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ color: "var(--text-secondary)", maxWidth: "62ch", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-8)" }}>
            {c.entregas.squad}
          </p>
        </div>
      </section>

      {/* Sucesso da metodologia · barras */}
      <section style={{ ...SECTION, background: "var(--bg-sunken)", borderTop: "1px solid var(--line-hairline)" }}>
        <div style={INNER}>
          <div className="reveal">
            <Eyebrow>{c.sucesso.eyebrow}</Eyebrow>
          </div>
          <div style={{ marginTop: "var(--space-8)", display: "flex", flexDirection: "column", gap: "22px", maxWidth: "720px" }}>
            {c.sucesso.barras.map((b) => (
              <div key={b.label} className="reveal">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>{b.label}</span>
                  <span style={{ fontFamily: "var(--font-structure)", color: "var(--text-primary)" }}>{b.valor}%</span>
                </div>
                <div style={{ height: "4px", background: "var(--surface-inset)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${b.valor}%`, background: "var(--accent)", borderRadius: "var(--radius-pill)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança financeira */}
      <section style={{ ...SECTION, borderTop: "1px solid var(--line-hairline)" }}>
        <div style={{ ...INNER, maxWidth: "760px" }} className="reveal">
          <Eyebrow>{c.seguranca.eyebrow}</Eyebrow>
          <h2 className="arqx-display" style={{ fontSize: "clamp(28px,4vw,44px)", margin: "20px 0 14px" }}>
            {c.seguranca.titulo.toLowerCase()}
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)" }}>{c.seguranca.paragrafo}</p>
        </div>
      </section>

      <section style={{ ...SECTION, background: "var(--bg-sunken)", borderTop: "1px solid var(--line-hairline)", textAlign: "center" }}>
        <Button href={c.cta.href} size="lg" variant="primary">{c.cta.label}</Button>
      </section>
    </>
  );
}
