/* sitemap.xml gerado no build (spec §4.3). Blog entra quando o Lote 4 rodar. */
import { SITE_URL } from "@/lib/site";

const LASTMOD = new Date("2026-08-20");

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/associar", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/quem-somos", priority: 0.7 },
    { path: "/lucas-galy", priority: 0.6 },
    { path: "/contato", priority: 0.5 },
    { path: "/politica-de-privacidade", priority: 0.2 },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "/" : r.path}`,
    lastModified: LASTMOD,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
