/* Primitivas do design system ARQX · port fiel do bundle aprovado
   (ARQXDesignSystem_3ac7f8). Server components: sem estado, só estilo. */
import { SHOW_CONFIRM_TAGS } from "@/lib/flags";

/* Wordmark arqx® · Berling itálico lowercase, ® pequeno sobrescrito (spec §7.3) */
export function Wordmark({ size = 24, style }) {
  return (
    <span className="arqx-display" style={{ fontSize: size, color: "var(--text-primary)", ...style }}>
      arqx<sup style={{ fontSize: ".55em", color: "var(--accent)" }}>&reg;</sup>
    </span>
  );
}

/* ConfirmTag · pendência visível para o Lucas preencher (spec §7.4).
   Some do render quando SHOW_CONFIRM_TAGS=false; o dado pendente é
   removido junto no ponto de uso, nunca promovido a fato. */
export function ConfirmTag({ children = "CONFIRMAR", style }) {
  if (!SHOW_CONFIRM_TAGS) return null;
  return (
    <span
      data-confirm-tag
      style={{
        display: "inline-block", fontFamily: "var(--font-body)", fontSize: "10.5px",
        fontWeight: 600, color: "var(--confirm)", border: "1px dashed rgba(224,176,64,.45)",
        background: "var(--confirm-quiet)", padding: "1px 8px", borderRadius: "5px",
        marginLeft: "6px", letterSpacing: ".02em", verticalAlign: "middle",
        whiteSpace: "nowrap", ...style,
      }}
    >
      {children}
    </span>
  );
}

/* Eyebrow · label Delta caps com régua (fiel ao DS) */
export function Eyebrow({ children, rule = true, tone = "accent", style }) {
  const color =
    tone === "accent" ? "var(--text-accent)" : tone === "muted" ? "var(--text-muted)" : "var(--text-primary)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", ...style }}>
      {rule && <span style={{ width: 32, height: 1, background: "currentColor", opacity: 0.5, color }} />}
      <span style={{ fontFamily: "var(--font-structure)", textTransform: "uppercase", letterSpacing: ".22em", fontSize: "12px", fontWeight: 500, color }}>
        {children}
      </span>
    </span>
  );
}

/* Divider · hairline, opcionalmente rotulada */
export function Divider({ label, style }) {
  if (!label) return <hr style={{ border: "none", borderTop: "1px solid var(--line-soft)", margin: 0, ...style }} />;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", ...style }}>
      <span style={{ flex: 1, height: 1, background: "var(--line-soft)" }} />
      <span style={{ fontFamily: "var(--font-structure)", textTransform: "uppercase", letterSpacing: ".18em", fontSize: "11px", color: "var(--text-muted)" }}>{label}</span>
      <span style={{ flex: 1, height: 1, background: "var(--line-soft)" }} />
    </div>
  );
}

/* Badge · token de status em Delta */
const BADGE_TONES = {
  neutral: { background: "var(--surface-card)", color: "var(--text-secondary)", border: "1px solid var(--line-soft)" },
  accent: { background: "var(--accent-quiet)", color: "var(--text-accent)", border: "1px solid rgba(165,141,126,.4)" },
  inverse: { background: "var(--stone-050)", color: "var(--stone-900)", border: "1px solid var(--stone-050)" },
  positive: { background: "rgba(127,138,106,.16)", color: "#a6b088", border: "1px solid rgba(127,138,106,.4)" },
  critical: { background: "rgba(168,87,76,.16)", color: "#cf8579", border: "1px solid rgba(168,87,76,.4)" },
};
export function Badge({ children, tone = "neutral", dot, style }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-structure)", textTransform: "uppercase", letterSpacing: ".14em", fontSize: "10.5px", fontWeight: 500, lineHeight: 1, padding: "6px 11px", borderRadius: "var(--radius-pill)", ...BADGE_TONES[tone], ...style }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />}
      {children}
    </span>
  );
}

/* StatBlock · numeral Delta grande + label (dobras de métricas) */
export function StatBlock({ value, label, prefix, suffix, align = "left", confirm, style }) {
  return (
    <div style={{ textAlign: align, ...style }}>
      <div style={{ fontFamily: "var(--font-structure)", fontSize: "clamp(38px,5vw,64px)", lineHeight: 0.95, color: "var(--text-primary)", letterSpacing: "-.02em", display: "flex", alignItems: "baseline", gap: "4px", justifyContent: align === "center" ? "center" : "flex-start" }}>
        {prefix && <span style={{ fontSize: "0.5em", color: "var(--text-accent)" }}>{prefix}</span>}
        {value}
        {suffix && <span style={{ fontSize: "0.5em", color: "var(--text-accent)" }}>{suffix}</span>}
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", marginTop: "10px", letterSpacing: ".02em", lineHeight: 1.4, maxWidth: "26ch", marginInline: align === "center" ? "auto" : 0 }}>
        {label}
        {confirm && <ConfirmTag>{confirm}</ConfirmTag>}
      </div>
    </div>
  );
}

/* PullQuote · Berling itálico lowercase, com citação */
export function PullQuote({ children, cite, role, size = "md", style }) {
  const sizes = { sm: "26px", md: "36px", lg: "clamp(34px,4.5vw,58px)" };
  return (
    <figure style={{ margin: 0, ...style }}>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: sizes[size], lineHeight: 1.12, letterSpacing: "-.01em", color: "var(--text-primary)", textTransform: "lowercase" }}>
        {children}
      </blockquote>
      {(cite || role) && (
        <figcaption style={{ marginTop: "22px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
          <span style={{ fontFamily: "var(--font-structure)", textTransform: "uppercase", letterSpacing: ".16em", fontSize: "12px", color: "var(--text-secondary)" }}>
            {cite}
            {role && <span style={{ color: "var(--text-muted)" }}> &middot; {role}</span>}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

/* FeatureRow · linha numerada 01–08 (dores, pilares) */
export function FeatureRow({ index, title, children, style }) {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px solid var(--line-soft)", ...style }}>
      <div style={{ flex: "none", width: "44px" }}>
        <span style={{ fontFamily: "var(--font-structure)", fontSize: "16px", color: "var(--text-accent)", letterSpacing: ".05em" }}>
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>{title}</div>
        {children && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "56ch" }}>{children}</div>
        )}
      </div>
    </div>
  );
}

/* Card · superfície padrão (versão server, sem hover JS; hover via CSS) */
export function Card({ children, image, imageAlt, padding = "var(--space-6)", interactive, style }) {
  return (
    <div
      className={interactive ? "arqx-card arqx-card--interactive" : "arqx-card"}
      style={{ background: "var(--surface-card)", border: "1px solid var(--line-soft)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)", ...style }}
    >
      {image && (
        <div style={{ aspectRatio: "16 / 10", overflow: "hidden", borderBottom: "1px solid var(--line-hairline)" }}>
          <img src={image} alt={imageAlt || ""} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      )}
      <div style={{ padding }}>{children}</div>
    </div>
  );
}
