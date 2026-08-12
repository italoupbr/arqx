/* global React */
/* Mobile-only bottom tab bar, per the real site spec:
   5 fixed items — Início, Método, Projetos, Franquia (elevated CTA), Menu (opens bottom sheet
   with Blog, Quem Somos, Lucas Galy, Manifesto, Contato). <860px only, safe-area aware. */
const IconHome = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>;
const IconMetodo = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>;
const IconGrid = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
const IconStar = () => <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7-6.2-3.6L5.8 21.2 7 14.2 2 9.3l7.1-.7L12 2z"/></svg>;
const IconDots = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>;

function TabItem({ active, onClick, icon, label }) {
  return (
    <a onClick={onClick} style={{
      flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "4px", minHeight: "56px", cursor: "pointer",
      color: active ? "var(--text-primary)" : "var(--text-muted)", fontSize: "10.5px", fontWeight: 600,
    }}>
      {icon}<span>{label}</span>
    </a>
  );
}

function MobileNav({ current, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const secondary = [["blog","Blog"],["quem-somos","Quem Somos"],["lucas-galy","Lucas Galy"],["manifesto","Manifesto"],["contato","Contato"]];
  return (
    <>
      <nav className="arqx-mobile-nav" style={{
        position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 80, display: "flex",
        background: "rgba(10,9,8,.96)", backdropFilter: "var(--blur-chrome)",
        borderTop: "1px solid var(--line-soft)", paddingBottom: "env(safe-area-inset-bottom)",
      }}>
        <TabItem active={current === "home"} onClick={() => onNavigate("home")} icon={<IconHome/>} label="Início" />
        <TabItem active={current === "metodo"} onClick={() => onNavigate("metodo")} icon={<IconMetodo/>} label="Método" />
        <TabItem active={current === "projetos"} onClick={() => onNavigate("projetos")} icon={<IconGrid/>} label="Projetos" />
        <a onClick={() => onNavigate("franquia")} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", minHeight: "56px", cursor: "pointer", color: "var(--stone-900)", fontSize: "10.5px", fontWeight: 600 }}>
          <span style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--stone-050)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2px" }}><IconStar/></span>
          <span style={{ color: current === "franquia" ? "var(--text-primary)" : "var(--text-muted)" }}>Franquia</span>
        </a>
        <button type="button" onClick={() => setOpen(true)} style={{
          flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "4px", minHeight: "56px", background: "none", border: "none", color: "var(--text-muted)", fontSize: "10.5px", fontWeight: 600,
        }}><IconDots/><span>Menu</span></button>
      </nav>
      <style>{`@media(min-width:860px){.arqx-mobile-nav{display:none !important}}body{padding-bottom:76px}@media(min-width:860px){body{padding-bottom:0}}`}</style>
      {open && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }} style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(0,0,0,.6)" }}>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "var(--surface-card)", borderTop: "1px solid var(--line-soft)", borderRadius: "16px 16px 0 0", padding: "24px", paddingBottom: "calc(24px + env(safe-area-inset-bottom))" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
              <strong className="arqx-label">Menu</strong>
              <button type="button" onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--text-primary)", fontSize: "22px" }}>&times;</button>
            </div>
            {secondary.map(([k, l], i) => (
              <a key={k} onClick={() => { setOpen(false); onNavigate(k); }} style={{
                display: "block", padding: "14px 4px", fontSize: "16px", fontWeight: 700,
                borderBottom: i < secondary.length - 1 ? "1px solid var(--line-soft)" : "none", color: "var(--text-primary)", cursor: "pointer",
              }}>{l}</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
Object.assign(window, { MobileNav });
