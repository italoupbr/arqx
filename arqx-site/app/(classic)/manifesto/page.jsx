/* Manifesto · spec §5.8. Página tipográfica, Berling dominante.
   Texto migrado do protótipo com a limpeza terminológica §1.1. */
import Breadcrumbs from "@/components/Breadcrumbs";
import c from "@/content/manifesto.json";
import Button from "@/components/ds/Button";
import { Eyebrow, PullQuote } from "@/components/ds/primitives";
import { Wordmark } from "@/components/ds/primitives";

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: "/manifesto" },
};

export default function Manifesto() {
  return (
    <div style={{ padding: "var(--space-24) var(--page-gutter)" }}>
      <div style={{ maxWidth: "var(--page-max)", marginInline: "auto" }}>
        <Breadcrumbs items={[{ href: "/manifesto", label: "Manifesto" }]} />
        <Eyebrow>Manifesto</Eyebrow>
        <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,80px)", margin: "18px 0 var(--space-16)", maxWidth: "20ch" }}>
          {c.h1}
        </h1>

        <div className="reveal">
          <PullQuote size="md" cite={c.quote.cite}>{c.quote.texto}</PullQuote>
        </div>

        <div style={{ marginTop: "var(--space-16)", maxWidth: "68ch", display: "flex", flexDirection: "column", gap: "18px" }}>
          {c.paragrafos.map((p, i) => (
            <p key={i} className="reveal" style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-secondary)" }}>
              {p}
            </p>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-16)" }} className="reveal">
          <Wordmark size={28} />
        </div>

        <section style={{ marginTop: "var(--space-20)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)", textAlign: "center" }}>
          <h2 className="arqx-display" style={{ fontSize: "clamp(24px,2.8vw,34px)", marginBottom: "20px" }}>
            {c.fechoCta.titulo.toLowerCase()}
          </h2>
          <Button size="lg" variant="ghost" href={c.fechoCta.href}>{c.fechoCta.label}</Button>
        </section>
      </div>
    </div>
  );
}
