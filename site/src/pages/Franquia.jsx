/* global React */
const { Eyebrow, Input, Select, Checkbox, Button, Divider, Card, ConfirmTag } = window.ARQXDesignSystem_3ac7f8;
const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;

const faqs = [
  ["Preciso ter um escritório físico para ser franqueado?", "A confirmar com o Lucas.", true],
  ["Qual o investimento inicial?", "O valor de investimento faz parte da Circular de Oferta de Franquia (COF), documento exigido pela Lei 13.966/2019, entregue durante o processo comercial, com no mínimo 10 dias de antecedência de qualquer assinatura ou pagamento.", "CONFIRMAR se a COF já existe"],
  ["Quanto tempo até a unidade abrir?", "A confirmar com o Lucas.", true],
  ["A ARQX atende meu estado?", "Hoje com unidades ativas em 14 estados. Preencha o formulário para confirmar disponibilidade na sua praça.", false],
];

function Franquia() {
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  return (
    <div style={{ padding: "var(--space-16) var(--page-gutter) 0" }}>
      <p className="arqx-display" style={{ fontSize: "24px", marginBottom: "10px" }}>a junção da arquitetura e do dinheiro.</p>
      <h1 className="arqx-display" style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: "14px" }}>seja um franqueado.</h1>
      <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "56ch", marginBottom: "var(--space-16)" }}>
        Vagas limitadas por praça. Preencha e nosso time comercial retorna em até 48h.<ConfirmTag>CONFIRMAR prazo real</ConfirmTag>
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "start", paddingBottom: "var(--space-20)" }}>
        <div>
          <Eyebrow>Candidatura</Eyebrow>
          {sent ? (
            <div style={{ marginTop: "18px" }}>
              <h2 className="arqx-display" style={{ fontSize: "36px", marginBottom: "10px" }}>obrigado.</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.6 }}>Sua candidatura chegou até nós. Em breve um consultor ARQX entra em contato.</p>
              <div style={{ marginTop: "20px" }}><Button variant="secondary" onClick={() => setSent(false)}>Enviar outra</Button></div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (ok) setSent(true); }} style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "440px" }}>
              <Input label="Nome completo" placeholder="Seu nome" required />
              <Input label="E-mail" type="email" placeholder="seu@email.com" required />
              <Input label="WhatsApp" placeholder="(00) 00000-0000" required />
              <Select label="Estado" placeholder="UF" options={["SP","RJ","MG","PR","SC","RS","BA","Outro"]} />
              <Select label="Faturamento hoje" placeholder="Faixa" options={["Até R$ 20k/mês","R$ 20–50k/mês","R$ 50–100k/mês","+R$ 100k/mês"]} />
              <Checkbox label="Sou arquiteto(a) com registro ativo no CAU" onChange={setOk} />
              <Button type="submit" variant="primary" size="lg" full iconRight={<Arrow/>}>Enviar Candidatura</Button>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>Ao enviar você concorda com nossa política de privacidade.</p>
            </form>
          )}
        </div>
        <div>
          <Eyebrow>O que está incluso</Eyebrow>
          <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <Card><h3 style={{ fontSize: "16px", marginBottom: "6px" }}>Enxoval de entrada</h3><p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Marca, identidade, sistemas e treinamento de abertura entregues chave na mão.</p></Card>
            <Card><h3 style={{ fontSize: "16px", marginBottom: "6px" }}>Equipe dedicada</h3><p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Especialistas de marketing, comercial e finanças ao lado do franqueado toda semana.</p></Card>
            <Card><h3 style={{ fontSize: "16px", marginBottom: "6px" }}>Curadoria do fundador</h3><p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Direção estratégica direta de Lucas Galy em ciclos de acompanhamento.</p></Card>
          </div>
        </div>
      </div>

      <section style={{ borderTop: "1px solid var(--line-soft)", padding: "var(--space-16) 0" }}>
        <Eyebrow>Critérios de seleção</Eyebrow>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginTop: "16px", maxWidth: "62ch" }}>
          Vagas limitadas por praça, uma unidade ARQX por região. Critérios avaliados na candidatura:
          <ConfirmTag>CONFIRMAR lista completa com Lucas — esta é a leitura a partir dos campos do próprio formulário</ConfirmTag>
        </p>
        <ul style={{ marginTop: "16px", color: "var(--text-secondary)", fontSize: "14px", lineHeight: 2, maxWidth: "600px", listStyle: "none", padding: 0 }}>
          <li>· Registro ativo no CAU</li>
          <li>· Faixa de faturamento atual do escritório (usada para dimensionar o plano de aceleração)</li>
          <li>· Praça de atuação, para evitar sobreposição entre unidades</li>
        </ul>
      </section>

      <section style={{ borderTop: "1px solid var(--line-soft)", padding: "var(--space-16) 0 var(--space-20)" }}>
        <Eyebrow>Perguntas frequentes</Eyebrow>
        <div style={{ marginTop: "16px", borderTop: "1px solid var(--line-soft)" }}>
          {faqs.map(([q, a, flag], i) => (
            <div key={i} style={{ padding: "18px 0", borderBottom: "1px solid var(--line-soft)" }}>
              <strong style={{ fontSize: "15px", color: "var(--text-primary)" }}>{q}</strong>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginTop: "6px" }}>
                {a}{flag === true ? <ConfirmTag>CONFIRMAR</ConfirmTag> : flag ? <ConfirmTag>{flag}</ConfirmTag> : null}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { Franquia });
