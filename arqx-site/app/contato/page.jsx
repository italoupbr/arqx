/* Contato · mundo v2. Formulário + canais diretos + atalho para associação. */
import V2Shell from "@/components/v2/V2Shell";
import V2ContatoForm from "@/components/v2/V2ContatoForm";
import { JsonLd, ORG_ID, WEBSITE_ID } from "@/lib/schema";
import { SITE_URL, CONTACTS } from "@/lib/site";
import { SHOW_CONFIRM_TAGS } from "@/lib/flags";

export const metadata = {
  title: { absolute: "Contato | ARQX" },
  description: "Fale com a ARQX, Growth Partner para escritórios de arquitetura estabelecidos.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <V2Shell active="/contato">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contato · ARQX", url: `${SITE_URL}/contato`, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORG_ID } }} />
      <main>
        <section className="page-hero" data-theme="dark">
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="wrap" style={{ position: "relative" }}>
            <span className="eyebrow reveal">Contato</span>
            <h1 className="reveal" data-d="1">Fale com a <span className="serif">arqx.</span></h1>
            <p className="lead reveal" data-d="2">
              Já sabe que quer se associar? Vá direto para a <a href="/associar" style={{ textDecoration: "underline" }}>candidatura</a>.
            </p>
          </div>
        </section>

        <section className="blk light" data-theme="light">
          <div className="wrap">
            <div className="contact-grid">
              <div className="reveal">
                <span className="eyebrow">01 · Mensagem</span>
                <div style={{ marginTop: "clamp(24px,4vh,40px)" }}>
                  <V2ContatoForm />
                </div>
              </div>
              <div className="reveal" data-d="1">
                <span className="eyebrow">02 · Canais diretos</span>
                <div className="contact-list" style={{ marginTop: "clamp(24px,4vh,40px)" }}>
                  <a href={`mailto:${CONTACTS.email}`}><span>{CONTACTS.email}</span><span className="k">E-mail</span></a>
                  <a href={CONTACTS.phoneHref}><span>{CONTACTS.phone}</span><span className="k">WhatsApp</span></a>
                  <a href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer"><span>{CONTACTS.instagramHandle}</span><span className="k">Instagram</span></a>
                </div>
                {SHOW_CONFIRM_TAGS && <p style={{ marginTop: 16 }}><span className="confirm-pill">CONFIRMAR canal comercial e e-mail geral</span></p>}
                <p style={{ marginTop: 26, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted-light)" }}>
                  Brasil · EUA · Portugal
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" data-theme="dark">
          <div className="cta-media" data-cover><img src="/img/projetos/p18.webp" alt="Cozinha escura de alto padrão com ilha de pedra" loading="lazy" decoding="async" /></div>
          <div className="wrap">
            <span className="eyebrow reveal">ARQX® Private Growth Network</span>
            <h2 className="cta-h reveal" data-d="1">Prefere ir direto ao <span className="serif">ponto?</span></h2>
            <div className="cta-foot">
              <p className="reveal" data-d="1">Solicite a análise do seu escritório. Processo sujeito à análise de perfil.</p>
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
