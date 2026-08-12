"use client";
/* Animação do hero (spec §5.1, opção a): pares dor→solução trocando com fade.
   Camada visual APENAS · aria-hidden, o conteúdo indexável do hero (H1, sub,
   CTAs) é HTML estático do build. Sob prefers-reduced-motion fica parado
   no primeiro par. */
import { useEffect, useState } from "react";

export default function HeroRotator({ pairs }) {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setI((v) => (v + 1) % pairs.length);
        setFade(true);
      }, 380);
    }, 3400);
    return () => clearInterval(t);
  }, [pairs.length]);
  const [dor, solucao] = pairs[i];
  return (
    <div
      aria-hidden="true"
      style={{
        display: "inline-flex", alignItems: "center", gap: "12px",
        fontFamily: "var(--font-structure)", textTransform: "uppercase",
        letterSpacing: ".16em", fontSize: "12px", marginTop: "26px",
        opacity: fade ? 1 : 0, transform: fade ? "none" : "translateY(6px)",
        transition: "opacity 380ms var(--ease-out), transform 380ms var(--ease-out)",
      }}
    >
      <span style={{ color: "var(--text-muted)", textDecoration: "line-through", textDecorationColor: "var(--critical)" }}>{dor}</span>
      <span style={{ color: "var(--text-accent)" }}>&rarr;</span>
      <span style={{ color: "var(--text-primary)" }}>{solucao}</span>
    </div>
  );
}
