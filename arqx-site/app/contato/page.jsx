/* Contato · spec §5.9. */
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import c from "@/content/contato.json";
import { CONTACTS } from "@/lib/site";
import { Eyebrow, ConfirmTag } from "@/components/ds/primitives";
import ContatoForm from "@/components/forms/ContatoForm";

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-gutter)" }}>
      <div style={{ maxWidth: "var(--page-max)", marginInline: "auto" }}>
        <Breadcrumbs items={[{ href: "/contato", label: "Contato" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contato · ARQX", url: `${SITE_URL}/contato`, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORG_ID } }} />
        <h1 className="arqx-display" style={{ fontSize: "clamp(44px,7vw,96px)", marginBottom: "18px" }}>{c.h1}</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-md)" }}>
          {c.atalho}{" "}
          <Link href={c.atalhoLink.href} style={{ textDecoration: "underline" }}>
            {c.atalhoLink.label}
          </Link>
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px", marginTop: "var(--space-12)", alignItems: "start" }}>
          <div style={{ maxWidth: "480px" }}>
            <ContatoForm labelBotao={c.form.botao} msgSucesso={c.form.sucesso} />
          </div>
          <div>
            <Eyebrow>Canais diretos</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "var(--space-6)", fontSize: "var(--text-md)" }}>
              <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
              <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
              <a href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer">{CONTACTS.instagramHandle}</a>
            </div>
            <div style={{ marginTop: "14px" }}>
              <ConfirmTag>{c.confirmCanais}</ConfirmTag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
