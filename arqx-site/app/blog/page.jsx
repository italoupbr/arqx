/* Blog · ESTRUTURA/PLACEHOLDER. O conteúdo será montado à mão pelo operador.
   noindex até haver artigos reais (página fina não deve indexar); ao publicar
   o blog de verdade: remover robots.noindex e adicionar /blog ao sitemap.js. */
import V2Shell from "@/components/v2/V2Shell";

export const metadata = {
  title: { absolute: "Blog | ARQX" },
  description: "Negócio, gestão e crescimento para escritórios de arquitetura.",
  alternates: { canonical: "/blog" },
  robots: { index: false, follow: true },
};

export default function Blog() {
  return (
    <V2Shell active="/blog">
      <main>
        <section className="page-hero" data-theme="dark">
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="wrap" style={{ position: "relative" }}>
            <span className="eyebrow reveal">Blog</span>
            <h1 className="reveal" data-d="1">O negócio por trás da <span className="serif">arquitetura.</span></h1>
            <p className="lead reveal" data-d="2">
              Estratégia, aquisição, comercial e crescimento para escritórios estabelecidos.
              Os primeiros artigos chegam em breve.
            </p>
          </div>
        </section>

        <section className="blk light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">Enquanto isso</span>
            <h2 className="contra-h reveal" data-d="1" style={{ marginTop: 22 }}>
              Conheça a estrutura que dá origem ao <span className="serif">conteúdo.</span>
            </h2>
            <div className="reveal" data-d="2" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/#estrutura" className="btn ghost magnetic" style={{ borderColor: "var(--line-light)", color: "var(--black)" }}>A infraestrutura ARQX <span className="ar">→</span></a>
              <a href="/associar" className="btn magnetic" style={{ background: "var(--black)", color: "var(--ivory)" }} data-modal-open>Solicitar associação <span className="ar">→</span></a>
            </div>
          </div>
        </section>
      </main>
    </V2Shell>
  );
}
