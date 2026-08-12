/* global React */
const { Eyebrow, Button, Card, StatBlock, ConfirmTag } = window.ARQXDesignSystem_3ac7f8;

function QuemSomos({ onNavigate }) {
  const team = [
    ["Lucas Galy", "Founder"],
    ["Gabriela Melo", "Content Strategy"],
    ["Laura Gomes", "Customer Success"],
    ["Matheus Ferreira", "Gestor de Tráfego"],
  ];
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <Eyebrow>Empresa</Eyebrow>
      <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,72px)", margin: "18px 0 14px" }}>quem somos.</h1>
      <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "58ch", lineHeight: 1.6 }}>
        A ARQX existe para resolver um problema específico: arquitetos com talento técnico comprovado e nenhuma estrutura comercial por trás dele.
      </p>

      <div style={{ marginTop: "var(--space-16)", maxWidth: "72ch" }}>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)" }}>
          A ARQX nasceu da trajetória de Lucas Galy, que atuou diretamente na geração de mais de R$10 milhões em projetos fechados online para arquitetos no Brasil e no exterior antes de estruturar o sistema de franquias. O padrão que se repetia em praticamente todo escritório: o problema nunca era o projeto, era a ausência de estrutura comercial.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)", marginTop: "16px" }}>
          Hoje a ARQX opera como sistema de franquias, entregando a arquitetos um enxoval completo de entrada, suporte contínuo de equipe especializada e a curadoria direta do fundador, para transformar talento técnico em negócio lucrativo.
        </p>
        <div style={{ marginTop: "22px" }}>
          <Button variant="secondary" onClick={() => onNavigate("lucas-galy")}>Conhecer a trajetória completa do fundador</Button>
        </div>
      </div>

      <section style={{ marginTop: "var(--space-24)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)" }}>
        <Eyebrow>Time</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginTop: "20px" }}>
          {team.map(([n, r]) => <Card key={n}><h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{n}</h3><p style={{ fontSize: "13px", color: "var(--text-muted)" }}>{r}</p></Card>)}
        </div>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "14px" }}>
          Uma frase de credencial por membro do time, além do cargo.<ConfirmTag>CONFIRMAR com Lucas</ConfirmTag>
        </p>
      </section>

      <section style={{ marginTop: "var(--space-24)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)" }}>
        <Eyebrow>Em números</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "28px", marginTop: "20px" }}>
          <StatBlock value="+120" label={<>arquitetos no sistema<ConfirmTag>CONFIRMAR</ConfirmTag></>} />
          <StatBlock prefix="R$" value="1.2M" label="faturamento médio anual dos franqueados" />
          <StatBlock value="3.4x" label="crescimento médio de faturamento em 12 meses" />
          <StatBlock value="14" label="estados com unidades ativas no Brasil" />
        </div>
      </section>

      <section style={{ marginTop: "var(--space-24)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)", textAlign: "center" }}>
        <h2 className="arqx-display" style={{ fontSize: "clamp(24px,2.8vw,34px)", marginBottom: "20px" }}>Conheça o manifesto por trás do sistema</h2>
        <Button size="lg" variant="secondary" onClick={() => onNavigate("manifesto")}>Ler o Manifesto</Button>
      </section>
    </div>
  );
}
Object.assign(window, { QuemSomos });
