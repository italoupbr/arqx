/* global React */
const { Eyebrow, FeatureRow, Card, Button } = window.ARQXDesignSystem_3ac7f8;

function Metodo({ onNavigate }) {
  const pillars = [
    ["Captação de clientes", "Materiais, posicionamento e funis prontos para atrair projetos de alto ticket, sem depender de indicação."],
    ["Gestão de marketing", "Uma equipe cuida da sua presença: conteúdo, tráfego e reputação, no padrão editorial da marca."],
    ["Processos internos", "Rotinas, contratos e ferramentas testadas para o escritório rodar sem você apagar incêndio."],
    ["Previsibilidade financeira", "Modelagem de preço, fluxo de caixa e metas, o que a faculdade nunca ensinou a fazer."],
  ];
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <div style={{ maxWidth: "760px" }}>
        <Eyebrow>O Método</Eyebrow>
        <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,72px)", margin: "18px 0 0" }}>
          quatro pilares, um escritório que dá lucro.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--text-secondary)", marginTop: "22px", maxWidth: "56ch" }}>
          Enquanto o arquiteto faz o que ama, a ARQX opera a máquina de negócios por trás. Cada pilar vem com enxoval de entrada e acompanhamento contínuo.
        </p>
      </div>

      <div style={{ marginTop: "var(--space-16)", maxWidth: "820px", borderBottom: "1px solid var(--line-soft)" }}>
        {pillars.map(([t, d], i) => <FeatureRow key={i} index={i + 1} title={t}>{d}</FeatureRow>)}
      </div>

      <section style={{ marginTop: "var(--space-20)", maxWidth: "760px" }}>
        <Eyebrow>Por que os quatro pilares vêm nessa ordem</Eyebrow>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)", marginTop: "18px" }}>
          Captação sem gestão de marketing gera lead que ninguém responde a tempo. Gestão de marketing sem processo interno gera crescimento que quebra a operação por dentro. Processo sem previsibilidade financeira mantém o escritório ocupado, mas sem saber se está de fato lucrando. A ordem dos quatro pilares não é decorativa, é a sequência real de onde cada escritório trava antes de crescer.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)", marginTop: "16px" }}>
          Segundo Lucas Galy, fundador da ARQX, a maioria dos arquitetos aprende a projetar na faculdade e nunca aprende a se posicionar comercialmente, o que faz com que escritórios tecnicamente excelentes percam projeto para concorrentes tecnicamente inferiores, mas comercialmente mais claros.
        </p>
      </section>

      <section style={{ marginTop: "var(--space-20)" }}>
        <Eyebrow>O que vem incluso</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "22px" }}>
          <Card eyebrow="Enxoval">
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Entrada completa</h3>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>Marca, identidade, sistemas e treinamento de abertura entregues chave na mão.</p>
          </Card>
          <Card eyebrow="Suporte">
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Equipe dedicada</h3>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>Especialistas de marketing, comercial e finanças ao lado do franqueado toda semana.</p>
          </Card>
          <Card eyebrow="Curadoria">
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Mentoria Lucas Galy</h3>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>Direção estratégica direta do fundador em ciclos de acompanhamento.</p>
          </Card>
        </div>
      </section>

      <section style={{ marginTop: "var(--space-24)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)", textAlign: "center" }}>
        <h2 className="arqx-display" style={{ fontSize: "clamp(24px,2.8vw,34px)", marginBottom: "20px" }}>Ver como funciona a candidatura</h2>
        <Button size="lg" variant="primary" onClick={() => onNavigate("franquia")}>Quero uma Franquia</Button>
      </section>
    </div>
  );
}
Object.assign(window, { Metodo });
