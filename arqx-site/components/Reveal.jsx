"use client";
/* Reveal on scroll · observa elementos .reveal e adiciona .is-visible.
   Camada puramente visual: o conteúdo já está no HTML do build (spec §4.1).
   Sob prefers-reduced-motion o CSS já força opacidade 1 sem transição. */
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
