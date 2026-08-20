/* Lucas Galy · página de entidade do fundador, mundo v2 (spec §5.7).
   Fora do menu principal: acessível via Quem Somos. */
import V2Shell from "@/components/v2/V2Shell";
import c from "@/content/lucas-galy.json";
import { JsonLd, PERSON_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { SHOW_CONFIRM_TAGS } from "@/lib/flags";

export const metadata = {
  title: { absolute: "Lucas Galy | Fundador da ARQX" },
  description: c.description,
  alternates: { canonical: "/lucas-galy" },
};

const Pill = ({ children }) => (SHOW_CONFIRM_TAGS ? <span className="confirm-pill">{children}</span> : null);

export default function LucasGaly() {
  return (
    <V2Shell active="/quem-somos">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", name: "Lucas Galy · fundador da ARQX", url: `${SITE_URL}/lucas-galy`, isPartOf: { "@id": WEBSITE_ID }, mainEntity: { "@id": PERSON_ID } }} />
      <main>
        <section className="page-hero" data-theme="dark">
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="wrap" style={{ position: "relative" }}>
            <span className="eyebrow reveal">Fundador</span>
            <h1 className="reveal" data-d="1">lucas <span className="serif">galy</span></h1>
            <p className="lead reveal" data-d="2">{c.cargo}. <Pill>{c.fotoConfirm}</Pill></p>
            <div className="founder-band img-clip reveal" data-d="2">
              <img src="/img/portrait.webp" alt="Retrato de Lucas Galy, fundador da ARQX" fetchPriority="high" />
              <div className="fb-cap">
                <div className="rl">ARQX / FOUNDER</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trajetória */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">01 · Trajetória</span>
            <div className="prose" style={{ marginTop: "clamp(26px,4vh,44px)" }}>
              {c.trajetoria.map((p, i) => (<p key={i} className="reveal">{p}</p>))}
            </div>
            <p className="reveal" style={{ marginTop: 16 }}><Pill>{c.bioConfirm}</Pill></p>
          </div>
        </section>

        {/* Quote */}
        <section className="blk" data-theme="dark">
          <div className="wrap">
            <p className="band-quote reveal" style={{ maxWidth: "26ch" }}>
              &ldquo;{c.quote.texto}&rdquo;
            </p>
            <p className="tick reveal" data-d="1" style={{ marginTop: 26 }}>Lucas Galy · Fundador da ARQX</p>
          </div>
        </section>

        {/* Números */}
        <section className="blk-sm light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal" style={{ marginBottom: "clamp(30px,5vh,50px)", display: "inline-flex" }}>02 · Em números</span>
            <div className="stats reveal" data-d="1" style={{ borderColor: "var(--line-light)" }}>
              <div className="stat" style={{ borderColor: "var(--line-light)" }}><div className="sv"><span className="u" style={{ marginRight: ".08em", marginLeft: 0 }}>+R$</span><span data-count="10">0</span><span className="u">MM</span></div><div className="sl" style={{ color: "var(--muted-light)" }}>Em projetos fechados para arquitetos</div></div>
              <div className="stat" style={{ borderColor: "var(--line-light)" }}><div className="sv"><span className="u" style={{ marginRight: ".08em", marginLeft: 0 }}>+</span><span data-count="179">0</span></div><div className="sl" style={{ color: "var(--muted-light)" }}>Escritórios acelerados <Pill>CONFIRMAR: 179 ou 169</Pill></div></div>
              <div className="stat" style={{ borderColor: "var(--line-light)" }}><div className="sv"><span className="u" style={{ marginRight: ".08em", marginLeft: 0 }}>+</span><span data-count="70">0</span><span className="u">%</span></div><div className="sl" style={{ color: "var(--muted-light)" }}>De aumento de margem de lucro em 12 meses</div></div>
            </div>
            <p className="reveal" style={{ marginTop: 20 }}><Pill>{c.credenciaisConfirm}</Pill></p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" data-theme="dark">
          <div className="cta-media" data-cover><img src="/img/projetos/p4.webp" alt="Fachada residencial contemporânea com paisagismo" loading="lazy" decoding="async" /></div>
          <div className="wrap">
            <span className="eyebrow reveal">ARQX® Private Growth Network</span>
            <h2 className="cta-h reveal" data-d="1">
              Conheça a estrutura criada por <span className="serif">Lucas.</span>
            </h2>
            <div className="cta-foot">
              <p className="reveal" data-d="1">Do time completo ao processo de associação da rede.</p>
              <div className="reveal" data-d="2" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="/quem-somos" className="btn ghost magnetic">Quem somos <span className="ar">→</span></a>
                <a href="/associar" className="btn magnetic" data-modal-open>Solicitar associação <span className="ar">→</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </V2Shell>
  );
}
