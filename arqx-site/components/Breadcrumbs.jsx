/* Breadcrumbs visíveis + BreadcrumbList JSON-LD (spec §4.3).
   items: [{ href, label }] · Home é implícita como primeiro nível. */
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumbs({ items }) {
  const trail = [{ href: "/", label: "Início" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: `${SITE_URL}${t.href === "/" ? "/" : t.href}`,
    })),
  };
  return (
    <nav aria-label="Trilha de navegação" style={{ marginBottom: "var(--space-6)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px", padding: 0, margin: 0, fontFamily: "var(--font-structure)", textTransform: "uppercase", letterSpacing: ".14em", fontSize: "11px" }}>
        {trail.map((t, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={t.href} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {last ? (
                <span aria-current="page" style={{ color: "var(--text-secondary)" }}>{t.label}</span>
              ) : (
                <>
                  <Link href={t.href} style={{ color: "var(--text-muted)" }}>{t.label}</Link>
                  <span aria-hidden="true" style={{ color: "var(--text-muted)", opacity: 0.6 }}>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
