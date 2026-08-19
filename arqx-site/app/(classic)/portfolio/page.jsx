/* Portfólio · spec §5.5. NENHUM projeto fictício: 6 placeholders marcados
   até o Lucas enviar projetos reais com consentimento (Código de Ética CAU).
   Nunca exibir honorários de projetos. */
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import c from "@/content/portfolio.json";
import { Eyebrow, ConfirmTag } from "@/components/ds/primitives";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <div style={{ padding: "var(--space-24) var(--page-gutter)" }}>
      <div style={{ maxWidth: "var(--page-max)", marginInline: "auto" }}>
        <Breadcrumbs items={[{ href: "/portfolio", label: "Portfólio" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Portfólio da rede ARQX", url: `${SITE_URL}/portfolio`, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORG_ID } }} />
        <Eyebrow>Portfólio da rede</Eyebrow>
        <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,80px)", margin: "18px 0 14px" }}>{c.h1}</h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "58ch", lineHeight: 1.6 }}>{c.sub}</p>
        <div style={{ marginTop: "12px" }}>
          <ConfirmTag style={{ marginLeft: 0 }}>{c.confirm}</ConfirmTag>
        </div>
        <PortfolioGrid filtros={c.filtros} placeholders={c.placeholders} />
      </div>
    </div>
  );
}
