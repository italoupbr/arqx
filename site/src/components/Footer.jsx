/* global React */
const { Divider, ConfirmTag } = window.ARQXDesignSystem_3ac7f8;

/* Footer mirrors the real site's two columns exactly:
   Sistema -> Método, Projetos, Franquia, Blog
   Empresa -> Quem Somos, Lucas Galy, Manifesto, Contato */
function Footer({ onNavigate }) {
  return (
    <footer style={{ borderTop: "1px solid var(--line-soft)", background: "var(--bg-sunken)", padding: "var(--space-16) var(--page-gutter) var(--space-10)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "40px", alignItems: "start" }}>
        <div>
          <div className="arqx-display" style={{ fontSize: "21px", marginBottom: "12px" }}>arqx<sup style={{ fontSize: ".55em" }}>&reg;</sup></div>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6, maxWidth: "280px" }}>
            O primeiro sistema de franquias para arquitetos do Brasil.<ConfirmTag>CONFIRMAR alegação</ConfirmTag>
          </p>
        </div>
        <FooterCol title="Sistema" items={[["O Método","metodo"],["Projetos","projetos"],["Franquia","franquia"],["Blog","blog"]]} onNavigate={onNavigate} />
        <FooterCol title="Empresa" items={[["Quem Somos","quem-somos"],["Lucas Galy","lucas-galy"],["Manifesto","manifesto"],["Contato","contato"]]} onNavigate={onNavigate} />
      </div>
      <Divider style={{ margin: "var(--space-12) 0 var(--space-6)" }} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", color: "var(--text-muted)", fontSize: "12px" }}>
        <span>© 2026 ARQX. Todos os direitos reservados.<ConfirmTag>CONFIRMAR nome legal / CNPJ</ConfirmTag></span>
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>a junção da arquitetura e do dinheiro</span>
      </div>
    </footer>
  );
}
function FooterCol({ title, items, onNavigate }) {
  return (
    <div>
      <div className="arqx-label" style={{ marginBottom: "14px" }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map(([l, k], i) => (
          <a key={i} onClick={() => onNavigate(k)} style={{ fontSize: "14px", color: "var(--text-secondary)", cursor: "pointer" }}>{l}</a>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { Footer });
