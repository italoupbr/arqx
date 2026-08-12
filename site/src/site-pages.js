/* Registro de paginas da ARQX. Fonte unica de verdade.
   Pagina nova entra AQUI, no HTML novo e num INSERT em arqx_page_status,
   no mesmo commit. Esquecer um dos tres e o bug mais comum. */
window.SITE_PAGES = [
  { slug: "home", title: "Home", href: "index.html", component: "Home" },
  { slug: "metodo", title: "Método", href: "metodo.html", component: "Metodo" },
  { slug: "projetos", title: "Projetos", href: "projetos.html", component: "Projetos" },
  { slug: "franquia", title: "Franquia", href: "franquia.html", component: "Franquia" },
  { slug: "blog", title: "Blog", href: "blog.html", component: "Blog" },
  { slug: "quem-somos", title: "Quem Somos", href: "quem-somos.html", component: "QuemSomos" },
  { slug: "lucas-galy", title: "Lucas Galy", href: "lucas-galy.html", component: "LucasGaly" },
  { slug: "manifesto", title: "Manifesto", href: "manifesto.html", component: "Manifesto" },
  { slug: "contato", title: "Contato", href: "contato.html", component: "Contato" }
];

/* Slug da pagina atual, derivado da URL. "index.html" e a home. */
window.currentPageSlug = function () {
  var path = location.pathname.replace(/^\/+|\/+$/g, "");
  if (!path || path === "index.html") return "home";
  return path.replace(/\.html$/, "");
};

/* Navegacao. Os componentes chamam onNavigate("metodo") e continuam
   iguais ao original: aqui isso vira uma troca de URL de verdade. */
window.ARQX_NAV = function (slug) {
  var page = window.SITE_PAGES.filter(function (p) { return p.slug === slug; })[0];
  if (!page) { console.warn("[arqx] slug desconhecido:", slug); return; }
  location.href = page.href;
};

/* Caminhos das imagens (antes vinham do manifest do bundle). */
window.__resources = {
  imgArquitetura: "assets/img/arquitetura.png",
  imgProjectsGrid: "assets/img/projects-grid.png",
  imgPortrait: "assets/img/portrait.png",
  imgInterior: "assets/img/interior.png",
};
