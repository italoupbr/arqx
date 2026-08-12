/* robots.txt · crawlers de busca E de IA liberados (spec §4.3).
   GEO: o orgânico + citação por IA é o único canal do site. */
import { SITE_URL } from "@/lib/site";

export default function robots() {
  const bots = [
    "Googlebot",
    "Bingbot",
    "GPTBot",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-Web",
    "Google-Extended",
    "CCBot",
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...bots.map((b) => ({ userAgent: b, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
