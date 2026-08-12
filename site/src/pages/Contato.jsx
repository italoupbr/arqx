/* global React */
const { Eyebrow, Input, Textarea, Button, ConfirmTag } = window.ARQXDesignSystem_3ac7f8;

function Contato({ onNavigate }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <Eyebrow>Contato</Eyebrow>
      <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,72px)", margin: "18px 0 14px" }}>fale com a ARQX.</h1>
      <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "60ch", marginBottom: "var(--space-20)" }}>
        Já sabe que quer se candidatar à franquia? <a onClick={() => onNavigate("franquia")} style={{ textDecoration: "underline", cursor: "pointer" }}>Vá direto para a candidatura</a>. Se ainda tem dúvida antes disso, fale com a gente por aqui.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)" }}>
        <div>
          <Eyebrow>Canais</Eyebrow>
          <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginTop: "16px" }}>
            WhatsApp: +55 44 99103-7921<ConfirmTag>CONFIRMAR canal comercial</ConfirmTag>
          </p>
          <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginTop: "10px" }}>
            E-mail: lucasgaly@arqx.com.br<ConfirmTag>CONFIRMAR se é contato geral ou pessoal — considerar contato@arqx.com.br</ConfirmTag>
          </p>
        </div>
        {sent ? (
          <div>
            <h2 className="arqx-display" style={{ fontSize: "32px", marginBottom: "10px" }}>obrigado.</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>Recebemos sua mensagem — respondemos em breve.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Input label="Nome" placeholder="Seu nome" required />
            <Input label="E-mail" type="email" placeholder="seu@email.com" required />
            <Textarea label="Mensagem" rows={3} placeholder="Como podemos ajudar" required />
            <Button type="submit" variant="primary" size="lg" full>Enviar</Button>
          </form>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { Contato });
