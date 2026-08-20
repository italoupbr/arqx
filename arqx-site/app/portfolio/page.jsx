/* Projetos · portfólio no mundo v2 com as 18 fotos reais e filtro por
   categoria. Sem nomes inventados: crédito do escritório autor entra
   após confirmação (Código de Ética CAU). Nunca exibir honorários. */
import V2Shell from "@/components/v2/V2Shell";
import V2ProjGrid from "@/components/v2/V2ProjGrid";
import { JsonLd, ORG_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { SHOW_CONFIRM_TAGS } from "@/lib/flags";

export const metadata = {
  title: { absolute: "Projetos | Portfólio da rede ARQX" },
  description:
    "Projetos residenciais e de interiores de alto padrão dos escritórios da rede ARQX. Arquitetura que sustenta reputações.",
  alternates: { canonical: "/portfolio" },
};

const ITENS = [
  { n: 6, cat: "Residencial", alt: "Fachada de alto padrão com brises de madeira ao entardecer" },
  { n: 16, cat: "Residencial", alt: "Fachada residencial com paisagismo tropical" },
  { n: 2, cat: "Interiores", alt: "Cozinha gourmet com ilha de travertino e bancos dourados" },
  { n: 8, cat: "Residencial", alt: "Residência contemporânea vista da rua" },
  { n: 11, cat: "Interiores", alt: "Interior com parede de pedra e pendentes de cobre" },
  { n: 9, cat: "Residencial", alt: "Fachada com morador e cachorro, lifestyle de alto padrão" },
  { n: 10, cat: "Interiores", alt: "Cozinha integrada com vista para piscina e teto ripado" },
  { n: 4, cat: "Residencial", alt: "Fachada contemporânea com vegetação e carro na entrada" },
  { n: 15, cat: "Interiores", alt: "Suíte master com marcenaria ripada e vista para o jardim" },
  { n: 5, cat: "Residencial", alt: "Fachada moderna com carro na garagem" },
  { n: 7, cat: "Interiores", alt: "Living com vista para a piscina e teto de madeira" },
  { n: 12, cat: "Residencial", alt: "Residência térrea horizontal com paisagismo" },
  { n: 3, cat: "Interiores", alt: "Living claro com mesa de centro em travertino" },
  { n: 13, cat: "Residencial", alt: "Fachada de esquina com pergolado e vegetação" },
  { n: 14, cat: "Interiores", alt: "Closet de alto padrão com marcenaria em madeira e vitrine" },
  { n: 18, cat: "Interiores", alt: "Cozinha escura com ilha de pedra e banquetas douradas" },
  { n: 1, cat: "Interiores", alt: "Living amplo e claro com sofás em bouclé e mesa curva" },
  { n: 17, cat: "Interiores", alt: "Interior com marcenaria em nogueira e iluminação difusa" },
];

export default function Projetos() {
  return (
    <V2Shell active="/portfolio">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Projetos · Portfólio da rede ARQX", url: `${SITE_URL}/portfolio`, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORG_ID } }} />
      <main>
        <section className="page-hero" data-theme="dark">
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="wrap" style={{ position: "relative" }}>
            <span className="eyebrow reveal">Portfólio da rede</span>
            <h1 className="reveal" data-d="1">Arquitetura que sustenta <span className="serif">reputações.</span></h1>
            <p className="lead reveal" data-d="2">
              A estrutura por trás de escritórios que projetam o extraordinário. A autoria é sempre do arquiteto.
              {SHOW_CONFIRM_TAGS && <> <span className="confirm-pill">CONFIRMAR créditos dos escritórios autores</span></>}
            </p>
          </div>
        </section>

        <section className="blk" data-theme="dark" style={{ paddingTop: "clamp(40px,6vh,70px)" }}>
          <div className="wrap">
            <V2ProjGrid itens={ITENS} />
          </div>
        </section>

        <section className="cta" data-theme="dark">
          <div className="cta-media" data-cover><img src="/img/projetos/p7.webp" alt="Living de alto padrão com vista para a piscina" loading="lazy" decoding="async" /></div>
          <div className="wrap">
            <span className="eyebrow reveal">ARQX® Private Growth Network</span>
            <h2 className="cta-h reveal" data-d="1">
              Seu projeto merece uma <span className="serif">estrutura</span> à altura.
            </h2>
            <div className="cta-foot">
              <p className="reveal" data-d="1">Escritórios com portfólio e operação real podem solicitar análise para integrar a rede.</p>
              <div className="reveal" data-d="2">
                <a href="/associar" className="btn magnetic" data-modal-open>Solicitar associação <span className="ar">→</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </V2Shell>
  );
}
