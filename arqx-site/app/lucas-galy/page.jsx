/* Lucas Galy · página de entidade do fundador (spec §5.7).
   Fora do menu principal e do footer: acessível só via /quem-somos. */
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import c from "@/content/lucas-galy.json";
import Button from "@/components/ds/Button";
import { Eyebrow, ConfirmTag, StatBlock, PullQuote } from "@/components/ds/primitives";

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: "/lucas-galy" },
};

const SECTION = { marginTop: "var(--space-20)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)" };

export default function LucasGaly() {
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <div style={{ maxWidth: "var(--page-max)", marginInline: "auto" }}>
        <Breadcrumbs items={[{ href: "/quem-somos", label: "Quem somos" }, { href: "/lucas-galy", label: "Lucas Galy" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", name: "Lucas Galy · fundador da ARQX", url: `${SITE_URL}/lucas-galy`, isPartOf: { "@id": WEBSITE_ID }, mainEntity: { "@id": PERSON_ID } }} />
        {/* Retrato hero */}
        <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "var(--space-16)", border: "1px solid var(--line-soft)" }}>
          <img src="/img/portrait.webp" alt="Retrato de Lucas Galy, fundador da ARQX" style={{ width: "100%", height: "420px", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,9,8,0) 40%, rgba(10,9,8,.92) 100%)" }} />
          <div style={{ position: "absolute", left: "var(--space-8)", bottom: "var(--space-8)" }}>
            <Eyebrow>Fundador</Eyebrow>
            <h1 className="arqx-display" style={{ fontSize: "clamp(38px,5vw,64px)", marginTop: "10px" }}>{c.h1}</h1>
            <p style={{ color: "var(--text-secondary)", marginTop: "8px" }}>
              {c.cargo}
              <ConfirmTag>{c.fotoConfirm}</ConfirmTag>
            </p>
          </div>
        </div>

        {/* Trajetória */}
        <section style={{ maxWidth: "72ch" }}>
          <Eyebrow>Trajetória</Eyebrow>
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {c.trajetoria.map((p, i) => (
              <p key={i} className="reveal" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)" }}>{p}</p>
            ))}
          </div>
          <ConfirmTag style={{ marginLeft: 0, marginTop: "14px" }}>{c.bioConfirm}</ConfirmTag>
        </section>

        {/* Pull quote */}
        <section style={SECTION} className="reveal">
          <PullQuote size="md" cite={c.quote.cite}>{c.quote.texto}</PullQuote>
        </section>

        {/* Números · somente §3.2 */}
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

        {/* Credenciais · pendente */}
        <section style={{ ...SECTION, maxWidth: "72ch" }}>
          <Eyebrow>Credenciais</Eyebrow>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "14px" }}>
            Formação, registro e menções de mídia entram aqui após validação.
            <ConfirmTag>{c.credenciaisConfirm}</ConfirmTag>
          </p>
        </section>

        {/* CTAs */}
        <section style={{ ...SECTION, textAlign: "center", display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          {c.ctas.map((cta) => (
            <Button key={cta.href} size="lg" variant={cta.variant} href={cta.href}>{cta.label}</Button>
          ))}
        </section>
      </div>
    </div>
  );
}
