/* Schema JSON-LD (spec §4.4). O @graph sitewide entra no layout;
   os page-level importam os @ids daqui. Desambiguação obrigatória:
   sempre "do Brasil" + "fundada por Lucas Galy" (colisão com o
   escritório português ARQX arquitectos / arqx.net). */
import { SITE_URL, CONTACTS } from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/lucas-galy#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const SITEWIDE_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "ARQX",
      alternateName: "arqx",
      description:
        "A primeira rede de escritórios de arquitetura do Brasil. Estruturação comercial e crescimento para escritórios de arquitetura por licenciamento de marca e do Método X™. Fundada por Lucas Galy.",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/og/logo.png`,
      foundingLocation: { "@type": "Country", name: "Brasil" },
      areaServed: ["BR", "US", "PT"],
      founder: { "@id": PERSON_ID },
      email: CONTACTS.email,
      telephone: "+55-44-99103-7921",
      sameAs: [CONTACTS.instagram],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Lucas Galy",
      jobTitle: "Fundador",
      worksFor: { "@id": ORG_ID },
      url: `${SITE_URL}/lucas-galy`,
      sameAs: [CONTACTS.instagram],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "ARQX",
      inLanguage: "pt-BR",
      publisher: { "@id": ORG_ID },
    },
  ],
};

/* Helper para <script type="application/ld+json"> */
export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
