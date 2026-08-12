"use client";
/* Header ARQX · port do protótipo aprovado, com rotas reais.
   Desktop: Método · Projetos · Blog · Quem Somos · Manifesto · Contato + CTA (spec §4.2). */
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_MAIN, CTA } from "@/lib/site";
import Button from "@/components/ds/Button";
import { Wordmark } from "@/components/ds/primitives";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 var(--page-gutter)", height: "76px",
        background: scrolled ? "var(--surface-overlay)" : "transparent",
        backdropFilter: scrolled ? "var(--blur-chrome)" : "none",
        WebkitBackdropFilter: scrolled ? "var(--blur-chrome)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line-hairline)" : "transparent"}`,
        transition: "background var(--dur-base), border-color var(--dur-base)",
      }}
    >
      <Link href="/" aria-label="ARQX · página inicial" style={{ lineHeight: 1 }}>
        <Wordmark />
      </Link>
      <nav className="arqx-desktop-nav" style={{ display: "none", gap: "30px", alignItems: "center" }} aria-label="Navegação principal">
        {NAV_MAIN.map((l) => (
          <Link key={l.href} href={l.href} className="arqx-navlink" data-active={isActive(l.href)}>
            {l.label}
          </Link>
        ))}
      </nav>
      <span className="arqx-desktop-cta" style={{ display: "none" }}>
        <Button href={CTA.href} size="sm" variant="primary">
          {CTA.label}
        </Button>
      </span>
      <style>{`@media(min-width:860px){.arqx-desktop-nav{display:flex !important}.arqx-desktop-cta{display:inline-flex !important}}`}</style>
    </header>
  );
}
