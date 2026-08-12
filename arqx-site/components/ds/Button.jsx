import Link from "next/link";

/* ARQX Button · Delta caps tracked, port fiel do DS aprovado.
   Server component: hover via CSS (globals abaixo), não via estado.
   Com href vira <Link>; sem href, <button>. */

const SIZES = {
  sm: { padding: "8px 16px", fontSize: "12px", letterSpacing: ".1em" },
  md: { padding: "12px 24px", fontSize: "13px", letterSpacing: ".12em" },
  lg: { padding: "16px 34px", fontSize: "14px", letterSpacing: ".14em" },
};
const VARIANTS = {
  primary: { background: "var(--stone-050)", color: "var(--stone-900)", border: "1px solid var(--stone-050)" },
  accent: { background: "var(--accent)", color: "var(--stone-900)", border: "1px solid var(--accent)" },
  secondary: { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--line-strong)" },
  ghost: { background: "transparent", color: "var(--text-secondary)", border: "1px solid transparent" },
};

export default function Button({ children, href, variant = "primary", size = "md", full, style, type = "button", ...rest }) {
  const s = {
    display: full ? "flex" : "inline-flex",
    alignItems: "center", justifyContent: "center", gap: "10px",
    width: full ? "100%" : "auto",
    fontFamily: "var(--font-structure)", textTransform: "uppercase", fontWeight: 500,
    borderRadius: "var(--radius-sm)", cursor: "pointer", whiteSpace: "nowrap",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    ...SIZES[size], ...VARIANTS[variant], ...style,
  };
  const cls = `arqx-btn arqx-btn--${variant}`;
  if (href) {
    return (
      <Link href={href} className={cls} style={s} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} style={s} {...rest}>
      {children}
    </button>
  );
}
