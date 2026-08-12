/* Home · spec §5.1, 9 dobras. Copy vem de content/home.json (§7.1). */
import Link from "next/link";
import c from "@/content/home.json";
import Button from "@/components/ds/Button";
import { Eyebrow, ConfirmTag, StatBlock, FeatureRow, PullQuote, Card, Divider } from "@/components/ds/primitives";
import HeroRotator from "@/components/home/HeroRotator";

export const metadata = {
  title: { absolute: "ARQX · A primeira rede de escritórios de arquitetura do Brasil" },
  description:
    "A ARQX estrutura escritórios de arquitetura para crescer com previsibilidade: posicionamento, captação, gestão e escala. Estrutura para crescer. Liberdade para criar.",
  alternates: { canonical: "/" },
};

const SECTION = { padding: "var(--space-24) var(--page-gutter)" };
const INNER = { maxWidth: "var(--page-max)", marginInline: "auto" };

export default function Home() {
  return (
    <>
      {/* ── Dobra 1: HERO ── */}
      <section
        style={{
          position: "relative", minHeight: "86vh", display: "flex", alignItems: "center",
          padding: "var(--space-20) var(--page-gutter)", overflow: "hidden",
        }}
      >
        <img
          src="/img/interior.webp"
          alt=""
          fetchPriority="high"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, var(--arqx-black) 30%, rgba(10,9,8,.55) 70%, rgba(10,9,8,.35))" }} />
        <div style={{ ...INNER, position: "relative", width: "100%" }}>
          <Eyebrow>{c.hero.eyebrow}</Eyebrow>
          <ConfirmTag>{c.hero.bgConfirm}</ConfirmTag>
          <h1 className="arqx-display" style={{ fontSize: "clamp(52px,9vw,124px)", margin: "26px 0 22px" }}>
            {c.hero.h1}
          </h1>
          <p style={{ fontSize: "var(--text-md)", color: "var(--text-secondary)", maxWidth: "54ch", lineHeight: "var(--leading-relaxed)" }}>
            {c.hero.sub}
            <ConfirmTag>{c.hero.subConfirm}</ConfirmTag>
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "38px" }}>
            <Button href={c.hero.ctaPrimary.href} size="lg" variant="primary">{c.hero.ctaPrimary.label}</Button>
            <Button href={c.hero.ctaSecondary.href} size="lg" variant="secondary">{c.hero.ctaSecondary.label}</Button>
          </div>
          <HeroRotator pairs={c.hero.rotator} />
        </div>
      </section>

      {/* ── Dobra 2: MÉTRICAS ── */}
      <section style={{ borderTop: "1px solid var(--line-hairline)", borderBottom: "1px solid var(--line-hairline)", padding: "var(--space-16) var(--page-gutter)" }}>
        <div style={{ ...INNER, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "40px" }}>
          {c.metricas.map((m) => (
            <div key={m.label} className="reveal">
              <StatBlock value={m.value} prefix={m.prefix} suffix={m.suffix} label={m.label} confirm={m.confirm} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Dobra 3: O PROBLEMA ── */}
      <section style={SECTION}>
        <div style={INNER}>
          <div className="reveal">
            <Eyebrow>{c.problema.eyebrow}</Eyebrow>
            <h2 className="arqx-display" style={{ fontSize: "clamp(32px,4.5vw,56px)", margin: "22px 0 18px", maxWidth: "22ch" }}>
              {c.problema.statement}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "62ch", lineHeight: "var(--leading-relaxed)" }}>{c.problema.paragrafo}</p>
          </div>
          <div style={{ marginTop: "var(--space-12)", borderBottom: "1px solid var(--line-soft)" }}>
            {c.problema.dores.map((d, i) => (
              <div key={d} className="reveal">
                <FeatureRow index={i + 1} title={d} />
              </div>
            ))}
          </div>
          <p className="arqx-display reveal" style={{ fontSize: "clamp(22px,3vw,32px)", marginTop: "var(--space-12)", color: "var(--text-primary)" }}>
            {c.problema.fecho}
          </p>
        </div>
      </section>

      {/* ── Dobra 4: A CATEGORIA ── */}
      <section style={{ ...SECTION, background: "var(--bg-sunken)", borderTop: "1px solid var(--line-hairline)", borderBottom: "1px solid var(--line-hairline)" }}>
        <div style={INNER}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {c.categoria.negacoes.map((n) => (
              <p key={n} className="arqx-display reveal" style={{ fontSize: "clamp(24px,3.6vw,44px)", color: "var(--text-muted)" }}>
                {n}
              </p>
            ))}
            <p className="arqx-display reveal" style={{ fontSize: "clamp(28px,4.2vw,52px)", color: "var(--text-primary)", marginTop: "8px" }}>
              {c.categoria.afirmacao}
            </p>
          </div>
          <p className="reveal" style={{ color: "var(--text-secondary)", maxWidth: "62ch", lineHeight: "var(--leading-relaxed)", marginTop: "var(--space-10)" }}>
            {c.categoria.paragrafo}
          </p>
        </div>
      </section>

      {/* ── Dobra 5: MÉTODO X (teaser) ── */}
      <section style={SECTION}>
        <div style={INNER}>
          <div className="reveal">
            <Eyebrow>{c.metodo.eyebrow}</Eyebrow>
            <h2 className="arqx-display" style={{ fontSize: "clamp(32px,4.5vw,56px)", margin: "22px 0 var(--space-12)" }}>
              {c.metodo.statement}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
            {c.metodo.pilares.map((p, i) => (
              <div key={p.nome} className="reveal">
                <Card>
                  <div style={{ fontFamily: "var(--font-structure)", color: "var(--text-accent)", fontSize: "14px", letterSpacing: ".08em", marginBottom: "14px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "10px" }}>{p.nome}</h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.linha}</p>
                </Card>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-10)" }}>
            <Button href={c.metodo.cta.href} variant="ghost">{c.metodo.cta.label}</Button>
          </div>
        </div>
      </section>

      {/* ── Dobra 6: PULL QUOTE ── */}
      <section style={{ ...SECTION, background: "var(--bg-sunken)", borderTop: "1px solid var(--line-hairline)", borderBottom: "1px solid var(--line-hairline)", textAlign: "center" }}>
        <div style={{ maxWidth: "880px", marginInline: "auto" }} className="reveal">
          <PullQuote size="lg" cite={c.quote.cite} role={c.quote.role} style={{ display: "inline-block", textAlign: "left" }}>
            &ldquo;{c.quote.texto}&rdquo;
          </PullQuote>
        </div>
      </section>

      {/* ── Dobra 7: PORTFÓLIO (teaser) ── */}
      <section style={SECTION}>
        <div style={INNER}>
          <div className="reveal">
            <Eyebrow>{c.portfolio.eyebrow}</Eyebrow>
            <h2 className="arqx-display" style={{ fontSize: "clamp(32px,4.5vw,56px)", margin: "22px 0 8px" }}>
              {c.portfolio.statement}
            </h2>
            <ConfirmTag style={{ marginLeft: 0 }}>{c.portfolio.confirm}</ConfirmTag>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px", marginTop: "var(--space-12)" }}>
            {["projects-grid", "interior", "portrait"].map((img) => (
              <div key={img} className="reveal">
                <Card image={`/img/${img}.webp`} imageAlt="Imagem provisória de projeto · aguardando fotos reais da rede" interactive>
                  <span className="arqx-label">Projeto da rede</span>
                  <ConfirmTag>aguardando projeto real</ConfirmTag>
                </Card>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-10)" }}>
            <Button href={c.portfolio.cta.href} variant="ghost">{c.portfolio.cta.label}</Button>
          </div>
        </div>
      </section>

      {/* ── Dobra 8: RESULTADOS ── */}
      <section style={{ ...SECTION, paddingTop: 0 }}>
        <div style={INNER}>
          <div className="reveal">
            <Eyebrow>{c.resultados.eyebrow}</Eyebrow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px", marginTop: "var(--space-8)" }}>
            {c.resultados.cases.map((r) => (
              <div key={r.valor} className="reveal">
                <Card>
                  <div style={{ fontFamily: "var(--font-structure)", fontSize: "clamp(30px,3.6vw,44px)", letterSpacing: "-.02em" }}>{r.valor}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "13px", marginTop: "8px" }}>{r.prazo}</div>
                </Card>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "var(--space-6)" }}>{c.resultados.disclaimer}</p>
        </div>
      </section>

      {/* ── Dobra 9: CTA FINAL ── */}
      <section style={{ ...SECTION, background: "var(--bg-sunken)", borderTop: "1px solid var(--line-hairline)", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", marginInline: "auto" }} className="reveal">
          <p className="arqx-display" style={{ fontSize: "clamp(30px,4.5vw,52px)", marginBottom: "var(--space-10)" }}>
            {c.ctaFinal.statement}
          </p>
          <Button href={c.ctaFinal.cta.href} size="lg" variant="primary">{c.ctaFinal.cta.label}</Button>
        </div>
      </section>
    </>
  );
}
