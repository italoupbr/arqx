/* Footer ARQX · spec §5.1. Server component.
   Sem link para /lucas-galy (decisão §5.7: só via Quem Somos). */
import Link from "next/link";
import { FOOTER_COLS, CONTACTS } from "@/lib/site";
import { Wordmark, Divider, ConfirmTag } from "@/components/ds/primitives";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line-soft)", background: "var(--bg-sunken)", padding: "var(--space-16) var(--page-gutter) var(--space-10)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", alignItems: "start", maxWidth: "var(--page-max)", marginInline: "auto" }}>
        <div>
          <div style={{ marginBottom: "12px" }}>
            <Wordmark size={21} />
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6, maxWidth: "280px" }}>
            A primeira rede de escritórios de arquitetura do Brasil.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6, marginTop: "10px" }}>
            Elevar o padrão empresarial da arquitetura.
          </p>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <div className="arqx-label" style={{ marginBottom: "14px" }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.items.map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div className="arqx-label" style={{ marginBottom: "14px" }}>Contato</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
            <a href={`mailto:${CONTACTS.email}`} style={{ color: "var(--text-secondary)" }}>
              {CONTACTS.email}
            </a>
            <a href={CONTACTS.phoneHref} style={{ color: "var(--text-secondary)" }}>
              {CONTACTS.phone}
            </a>
            <a href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)" }}>
              {CONTACTS.instagramHandle}
            </a>
            <ConfirmTag>CONFIRMAR canal comercial oficial</ConfirmTag>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "var(--page-max)", marginInline: "auto" }}>
        <Divider style={{ margin: "var(--space-12) 0 var(--space-6)" }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", color: "var(--text-muted)", fontSize: "12px" }}>
          <span>
            © {new Date().getFullYear()} ARQX. Todos os direitos reservados.
            <ConfirmTag>CONFIRMAR razão social / CNPJ</ConfirmTag>
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>a junção da arquitetura e do dinheiro</span>
          <span>
            arqx&reg; · Brasil &middot; EUA &middot; Portugal &nbsp;&nbsp;
            <Link href="/politica-de-privacidade" style={{ color: "var(--text-muted)", textDecoration: "underline" }}>
              Política de Privacidade
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
