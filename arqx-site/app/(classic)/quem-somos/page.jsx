/* Quem Somos · spec §5.6. Números fictícios do protótipo descartados (§7.7);
   só os da §3.2. Card do fundador linka /lucas-galy (única porta de entrada). */
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import c from "@/content/quem-somos.json";
import Button from "@/components/ds/Button";
import { Eyebrow, ConfirmTag, StatBlock, Card } from "@/components/ds/primitives";

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: "/quem-somos" },
};

const SECTION = { marginTop: "var(--space-20)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)" };

export default function QuemSomos() {
  return (
    <div style={{ padding: "var(--space-24) var(--page-gutter)" }}>
      <div style={{ maxWidth: "var(--page-max)", marginInline: "auto" }}>
        <Breadcrumbs items={[{ href: "/quem-somos", label: "Quem somos" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "Quem somos · ARQX", url: `${SITE_URL}/quem-somos`, isPartOf: { "@id": WEBSITE_ID }, mainEntity: { "@id": ORG_ID } }} />
        <JsonLd data={c.time.membros.map((m) => (m.nome === "Lucas Galy" ? { "@context": "https://schema.org", "@id": PERSON_ID, "@type": "Person", name: m.nome, jobTitle: m.cargo, worksFor: { "@id": ORG_ID } } : { "@context": "https://schema.org", "@type": "Person", name: m.nome, jobTitle: m.cargo, worksFor: { "@id": ORG_ID } }))} />
        <Eyebrow>Empresa</Eyebrow>
        <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,72px)", margin: "18px 0 14px" }}>{c.h1}</h1>
        <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "58ch", lineHeight: 1.6 }}>{c.sub}</p>

        {/* Origem */}
        <div style={{ marginTop: "var(--space-12)", maxWidth: "72ch", display: "flex", flexDirection: "column", gap: "16px" }}>
          {c.origem.map((p, i) => (
            <p key={i} className="reveal" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)" }}>{p}</p>
          ))}
        </div>

        {/* Estrutura x Crescimento */}
        <section style={SECTION}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
            {c.blocos.itens.map((b) => (
              <div key={b.titulo} className="reveal">
                <Card padding="var(--space-8)">
                  <h2 className="arqx-display" style={{ fontSize: "var(--text-2xl)", marginBottom: "12px" }}>{b.titulo}</h2>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>{b.texto}</p>
                </Card>
              </div>
            ))}
          </div>
          <ConfirmTag style={{ marginLeft: 0, marginTop: "12px" }}>{c.blocos.confirm}</ConfirmTag>
        </section>

        {/* Missão */}
        <section style={SECTION} className="reveal">
          <Eyebrow>Missão</Eyebrow>
          <p className="arqx-display" style={{ fontSize: "clamp(24px,3.4vw,40px)", marginTop: "18px", maxWidth: "28ch" }}>
            {c.missao.toLowerCase()}
          </p>
        </section>

        {/* Time */}
        <section style={SECTION}>
          <Eyebrow>Time</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "16px", marginTop: "20px" }}>
            {c.time.membros.map((m) => (
              <div key={m.nome} className="reveal">
                <Card>
                  <div
                    aria-hidden="true"
                    style={{ aspectRatio: "1", borderRadius: "var(--radius-md)", background: "var(--surface-inset)", border: "1px dashed var(--line-soft)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}
                  >
                    <span className="arqx-display" style={{ fontSize: "28px", color: "var(--text-muted)" }}>
                      {m.nome.split(" ").map((w) => w[0]).join("").toLowerCase()}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{m.nome}</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>{m.cargo}</p>
                </Card>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "14px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <ConfirmTag style={{ marginLeft: 0 }}>{c.time.confirmFotos}</ConfirmTag>
            <ConfirmTag style={{ marginLeft: 0 }}>{c.time.confirmBios}</ConfirmTag>
          </div>
        </section>

        {/* Em números · só §3.2 */}
        <section style={SECTION}>
          <Eyebrow>Em números</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px", marginTop: "20px" }}>
            {c.numeros.map((n) => (
              <div key={n.label} className="reveal">
                <StatBlock value={n.value} prefix={n.prefix} suffix={n.suffix} label={n.label} confirm={n.confirm} />
              </div>
            ))}
          </div>
        </section>

        {/* Card do fundador → /lucas-galy */}
        <section style={SECTION}>
          <Link href={c.fundadorCard.href} style={{ display: "block" }}>
            <Card interactive image="/img/portrait.webp" imageAlt="Retrato provisório do fundador · aguardando foto oficial" padding="var(--space-8)">
              <Eyebrow>{c.fundadorCard.eyebrow}</Eyebrow>
              <h2 className="arqx-display" style={{ fontSize: "var(--text-3xl)", margin: "12px 0 8px", color: "var(--text-primary)" }}>
                {c.fundadorCard.titulo}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "14px" }}>{c.fundadorCard.texto}</p>
              <span className="arqx-label" style={{ color: "var(--text-accent)" }}>{c.fundadorCard.label}</span>
            </Card>
          </Link>
        </section>

        <section style={{ ...SECTION, textAlign: "center" }}>
          <h2 className="arqx-display" style={{ fontSize: "clamp(24px,2.8vw,34px)", marginBottom: "20px" }}>
            {c.fechoCta.titulo.toLowerCase()}
          </h2>
          <Button size="lg" variant="primary" href={c.fechoCta.href}>{c.fechoCta.label}</Button>
        </section>
      </div>
    </div>
  );
}
