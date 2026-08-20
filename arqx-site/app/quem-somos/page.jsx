/* Quem Somos · mundo v2. Conteúdo aprovado (spec §5.6) restilizado:
   origem, blocos, missão, time, números do deck (pendências marcadas)
   e o card do fundador · única porta de entrada para /lucas-galy. */
import V2Shell from "@/components/v2/V2Shell";
import c from "@/content/quem-somos.json";
import { JsonLd, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { SHOW_CONFIRM_TAGS } from "@/lib/flags";

export const metadata = {
  title: { absolute: c.title.replace(" · ", " | ") },
  description: c.description,
  alternates: { canonical: "/quem-somos" },
};

const Pill = ({ children }) => (SHOW_CONFIRM_TAGS ? <span className="confirm-pill">{children}</span> : null);

export default function QuemSomos() {
  return (
    <V2Shell active="/quem-somos">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "Quem somos · ARQX", url: `${SITE_URL}/quem-somos`, isPartOf: { "@id": WEBSITE_ID }, mainEntity: { "@id": ORG_ID } }} />
      <JsonLd data={c.time.membros.map((m) => ({ "@context": "https://schema.org", ...(m.nome === "Lucas Galy" ? { "@id": PERSON_ID } : {}), "@type": "Person", name: m.nome, jobTitle: m.cargo, worksFor: { "@id": ORG_ID } }))} />
      <main>
        <section className="page-hero" data-theme="dark">
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="wrap" style={{ position: "relative" }}>
            <span className="eyebrow reveal">Empresa</span>
            <h1 className="reveal" data-d="1">Quem <span className="serif">somos.</span></h1>
            <p className="lead reveal" data-d="2">{c.sub}</p>
          </div>
        </section>

        {/* Origem */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">01 · Origem</span>
            <div className="prose" style={{ marginTop: "clamp(26px,4vh,44px)" }}>
              {c.origem.map((p, i) => (<p key={i} className="reveal">{p}</p>))}
            </div>
            <div className="cmp-foot reveal" style={{ justifyContent: "flex-start", textAlign: "left" }}>
              <span className="fx dim">Estrutura para crescer.</span>
              <span className="fa">→</span>
              <span className="fx hot">Liberdade para criar.</span>
            </div>
          </div>
        </section>

        {/* Missão */}
        <section className="blk" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal">02 · Missão</span>
            <p className="change-h reveal" data-d="1" style={{ marginTop: 22, maxWidth: "24ch", marginBottom: 0 }}>
              Elevar o padrão <span className="serif">empresarial</span> da arquitetura.
            </p>
            <p className="reveal" data-d="2" style={{ marginTop: 26, color: "var(--muted-dark)", maxWidth: "52ch", lineHeight: 1.65 }}>
              Através da construção de escritórios mais fortes, lucrativos e valorizados.
            </p>
          </div>
        </section>

        {/* Time */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">03 · Time</span>
            <h2 className="fit-h reveal" data-d="1" style={{ marginTop: 22 }}>
              As pessoas por trás da <span className="serif">estrutura.</span>
            </h2>
            <div className="team-grid reveal" data-d="1">
              {c.time.membros.map((m) => (
                <div className="team-cell" key={m.nome}>
                  <span className="tc-ini">{m.nome.split(" ").map((w) => w[0]).join("").toLowerCase()}</span>
                  <div>
                    <div className="tc-nome">{m.nome}</div>
                    <div className="tc-cargo">{m.cargo}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Pill>{c.time.confirmFotos}</Pill>
              <Pill>{c.time.confirmBios}</Pill>
            </p>
          </div>
        </section>

        {/* Números do deck */}
        <section className="blk-sm" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal" style={{ marginBottom: "clamp(30px,5vh,50px)", display: "inline-flex" }}>04 · Em números</span>
            <div className="stats reveal" data-d="1">
              <div className="stat"><div className="sv"><span className="u" style={{ marginRight: ".08em", marginLeft: 0 }}>+R$</span><span data-count="10">0</span><span className="u">MM</span></div><div className="sl">Em projetos fechados para arquitetos</div></div>
              <div className="stat"><div className="sv"><span className="u" style={{ marginRight: ".08em", marginLeft: 0 }}>+</span><span data-count="179">0</span></div><div className="sl">Escritórios acelerados <Pill>CONFIRMAR: 179 ou 169</Pill></div></div>
              <div className="stat"><div className="sv"><span className="u" style={{ marginRight: ".08em", marginLeft: 0 }}>+</span><span data-count="70">0</span><span className="u">%</span></div><div className="sl">De aumento de margem de lucro em 12 meses</div></div>
            </div>
          </div>
        </section>

        {/* Fundador */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">05 · Fundador</span>
            <h2 className="contra-h reveal" data-d="1" style={{ marginTop: 22, marginBottom: 0 }}>
              A trajetória que deu origem à <span className="serif">rede.</span>
            </h2>
            <a href="/lucas-galy" className="reveal" data-d="1" style={{ display: "block" }}>
              <div className="founder-band img-clip reveal">
                <img src="/img/portrait.webp" alt="Retrato de Lucas Galy, fundador da ARQX" loading="lazy" decoding="async" />
                <div className="fb-cap">
                  <div className="nm">lucas galy</div>
                  <div className="rl">Founder · Conhecer a trajetória →</div>
                </div>
              </div>
            </a>
            <p className="reveal" style={{ marginTop: 14 }}><Pill>CONFIRMAR foto oficial do retrato</Pill></p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" data-theme="dark">
          <div className="cta-media" data-cover><img src="/img/projetos/p12.webp" alt="Residência de alto padrão com fachada horizontal" loading="lazy" decoding="async" /></div>
          <div className="wrap">
            <span className="eyebrow reveal">ARQX® Private Growth Network</span>
            <h2 className="cta-h reveal" data-d="1">
              Pronto para estruturar o seu <span className="serif">escritório?</span>
            </h2>
            <div className="cta-foot">
              <p className="reveal" data-d="1">Solicite uma análise para descobrir se o seu escritório possui o perfil para integrar a rede ARQX.</p>
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
