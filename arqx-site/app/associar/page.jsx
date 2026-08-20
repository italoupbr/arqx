/* Associação · página de conversão no mundo v2. Conteúdo aprovado (spec §5.3
   + artefato do cliente): o que o associado recebe, processo de seleção e FAQ
   com schema. O CTA abre o modal compartilhado do shell. */
import V2Shell from "@/components/v2/V2Shell";
import c from "@/content/associar.json";
import { JsonLd, ORG_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: { absolute: "Torne-se um associado ARQX | Growth Partner para escritórios de arquitetura" },
  description: c.description,
  alternates: { canonical: "/associar" },
};

export default function Associar() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.filter((f) => !f.confirm).map((f) => ({
      "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <V2Shell active="/associar">
      <JsonLd data={faqSchema} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", serviceType: "Growth Partner para escritórios de arquitetura", name: "Associação ARQX", provider: { "@id": ORG_ID }, areaServed: "BR", url: `${SITE_URL}/associar` }} />
      <main>
        <section className="page-hero" data-theme="dark">
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="wrap" style={{ position: "relative" }}>
            <span className="eyebrow reveal">Associação</span>
            <h1 className="reveal" data-d="1">Seja um <span className="serif">associado.</span></h1>
            <p className="lead reveal" data-d="2">
              A ARQX não é aberta para todos os escritórios. Para preservar a qualidade da operação e da rede,
              novos associados passam por um processo de avaliação. Não há checkout, tabela de preços ou planos.
              Existe candidatura.
            </p>
            <div className="reveal" data-d="3" style={{ marginTop: 38 }}>
              <a href="#processo" className="btn magnetic" data-modal-open>Solicitar análise do meu escritório <span className="ar">→</span></a>
            </div>
          </div>
        </section>

        {/* O que o associado recebe */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">01 · O que o associado recebe</span>
            <h2 className="contra-h reveal" data-d="1" style={{ marginTop: 22 }}>
              Uma infraestrutura completa <span className="serif">envolvendo</span> o seu escritório.
            </h2>
            <div className="infra">
              {c.recebe.grupos.map((g, gi) => (
                <div className="layer reveal" key={g.titulo}>
                  <span className="lnum">{String(gi + 1).padStart(2, "0")}</span>
                  <span className="lname"><span className="tag">{g.titulo.split(" · ")[0]}</span></span>
                  <span className="ldesc">{g.itens.join(" · ")}</span>
                  <span className="lx">ARQX / ASSOCIADO / {String(gi + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
            <p className="reveal" data-d="1" style={{ marginTop: "clamp(30px,5vh,50px)", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(20px,2.6vw,34px)", lineHeight: 1.25, maxWidth: "30ch" }}>
              {c.recebe.autonomia}
            </p>
          </div>
        </section>

        {/* Processo */}
        <section className="blk" id="processo" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal">02 · Processo de seleção</span>
            <div className="sel" style={{ marginTop: "clamp(30px,5vh,60px)" }}>
              <div className="sel-l reveal">
                <h2>Quatro etapas. <span className="serif">Nenhum checkout.</span></h2>
                <p>A entrada acontece por avaliação de perfil. Você solicita a análise, e havendo fit, o escritório é convidado a integrar a rede.</p>
                <a href="#processo" className="btn magnetic" data-modal-open>Solicitar associação <span className="ar">→</span></a>
              </div>
              <div className="sel-steps reveal" data-d="1">
                {[
                  ["01", "Solicitação", "Você envia a solicitação de análise do escritório."],
                  ["02", "Análise do escritório", "Avaliamos operação, perfil e compatibilidade com a rede."],
                  ["03", "Reunião estratégica", "Conversa para entender contexto, gargalos e potencial."],
                  ["04", "Convite para associação", "Se houver fit, o escritório é convidado a integrar a ARQX."],
                ].map(([n, t, d]) => (
                  <div className="sel-step" key={n}><span className="sn">{n}</span><div><div className="snm">{t}</div><div className="sd">{d}</div></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <div className="faq-head">
              <span className="eyebrow reveal">03 · Perguntas frequentes</span>
              <h2 className="reveal" data-d="1" style={{ marginTop: 22 }}>Antes de se <span className="serif">candidatar.</span></h2>
            </div>
            <div className="faq-list">
              {c.faq.map((f) => (
                <div className="faq-item" key={f.q}>
                  <button className="faq-q" aria-expanded="false">
                    <span>{f.q}{f.confirm && <> <span className="confirm-pill">{f.confirm}</span></>}</span>
                    <span className="faq-ic" aria-hidden="true"></span>
                  </button>
                  <div className="faq-a"><div className="faq-a-in">{f.a}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="cta" data-theme="dark">
          <div className="cta-media" data-cover><img src="/img/projetos/p13.webp" alt="Residência contemporânea de alto padrão ao entardecer" loading="lazy" decoding="async" /></div>
          <div className="wrap">
            <span className="eyebrow reveal">ARQX® Private Growth Network</span>
            <h2 className="cta-h reveal" data-d="1">
              Posso te considerar um <span className="serif">associado?</span>
              <span className="q">Solicite a análise do seu escritório e descubra se há fit com a rede.</span>
            </h2>
            <div className="cta-foot">
              <p className="reveal" data-d="1">Vagas limitadas por praça. Processo sujeito à análise de perfil.</p>
              <div className="reveal" data-d="2">
                <a href="#processo" className="btn magnetic" data-modal-open>Solicitar associação <span className="ar">→</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </V2Shell>
  );
}
