/* global React */
const { Button } = window.ARQXDesignSystem_3ac7f8;

function NavLink({ children, active, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <a onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        fontFamily: "var(--font-structure)", textTransform: "uppercase", letterSpacing: ".14em",
        fontSize: "12px", cursor: "pointer", padding: "4px 0", position: "relative",
        color: active || h ? "var(--text-primary)" : "var(--text-muted)",
        transition: "color var(--dur-fast) var(--ease-standard)",
      }}>
      {children}
      <span style={{ position: "absolute", left: 0, bottom: -3, height: 1, width: active ? "100%" : h ? "100%" : "0%", background: "var(--accent)", transition: "width var(--dur-base) var(--ease-out)" }} />
    </a>
  );
}

/* Desktop nav mirrors the real site: Método, Projetos, Blog, Quem Somos + CTA.
   Manifesto / Lucas Galy / Contato live in the footer + mobile "Menu" sheet only. */
function Header({ current, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector("[data-scroll]") || window;
    const t = el === window ? window : el;
    const on = () => setScrolled((el === window ? window.scrollY : el.scrollTop) > 12);
    t.addEventListener("scroll", on); return () => t.removeEventListener("scroll", on);
  }, []);
  const links = [["metodo", "Método"], ["projetos", "Projetos"], ["blog", "Blog"], ["quem-somos", "Quem Somos"]];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 var(--page-gutter)", height: "76px",
      background: scrolled ? "var(--surface-overlay)" : "transparent",
      backdropFilter: scrolled ? "var(--blur-chrome)" : "none", WebkitBackdropFilter: scrolled ? "var(--blur-chrome)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--line-hairline)" : "transparent"}`,
      transition: "background var(--dur-base), border-color var(--dur-base)",
    }}>
      <a onClick={() => onNavigate("home")} className="arqx-display" style={{ fontSize: "24px", color: "var(--text-primary)", cursor: "pointer" }}>
        arqx<sup style={{ fontSize: ".55em" }}>&reg;</sup>
      </a>
      <nav style={{ display: "none", gap: "34px", alignItems: "center" }} className="arqx-desktop-nav">
        {links.map(([k, l]) => <NavLink key={k} active={current === k} onClick={() => onNavigate(k)}>{l}</NavLink>)}
      </nav>
      <span style={{ display: "none" }} className="arqx-desktop-cta">
        <Button size="sm" variant="primary" onClick={() => onNavigate("franquia")}>Quero uma Franquia</Button>
      </span>
      <style>{`@media(min-width:860px){.arqx-desktop-nav{display:flex !important}.arqx-desktop-cta{display:inline-flex !important}}`}</style>
    </header>
  );
}
Object.assign(window, { Header });
