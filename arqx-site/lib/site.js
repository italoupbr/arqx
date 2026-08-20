/* Constantes do site · fonte única para navegação, contatos e identidade.
   Copy de página NÃO vive aqui (vive em /content · spec §7.1). */

export const SITE_URL = "https://arqx-br.com.br";
export const SITE_NAME = "ARQX";
export const SITE_DESCRIPTION =
  "ARQX é uma Growth Partner para escritórios de arquitetura estabelecidos. Rede de escritórios do Brasil fundada por Lucas Galy.";

export const CONTACTS = {
  email: "lucasgaly@arqx.com.br", // [CONFIRMAR se haverá contato@arqx.com.br]
  phone: "+55 44 99103-7921",
  phoneHref: "tel:+5544991037921",
  instagram: "https://www.instagram.com/arquiteturacomlucas/", // [CONFIRMAR perfil a linkar]
  instagramHandle: "@arquiteturacomlucas",
};

/* Header desktop (spec §4.2): Método · Projetos · Blog · Quem Somos · Manifesto · Contato + CTA */
export const NAV_MAIN = [
  { href: "/metodo-x", label: "Método" },
  { href: "/portfolio", label: "Projetos" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/contato", label: "Contato" },
];

export const CTA = { href: "/associar", label: "Seja um associado" };

/* Footer (spec §5.1): Lucas Galy NÃO aparece · acessível só via /quem-somos (§5.7) */
export const FOOTER_COLS = [
  {
    title: "Sistema",
    items: [
      { href: "/metodo-x", label: "O Método" },
      { href: "/portfolio", label: "Projetos" },
      { href: "/associar", label: "Associar" },
        ],
  },
  {
    title: "Empresa",
    items: [
      { href: "/quem-somos", label: "Quem Somos" },
      { href: "/manifesto", label: "Manifesto" },
      { href: "/contato", label: "Contato" },
    ],
  },
];

/* Tab bar mobile (spec §4.2): Início · Método · Projetos · Associar (CTA) · Menu */
export const NAV_MOBILE_SHEET = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/contato", label: "Contato" },
];
