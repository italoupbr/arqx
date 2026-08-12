/* global React */
const { Eyebrow, Tag, Card, Button, ConfirmTag } = window.ARQXDesignSystem_3ac7f8;

const projects = () => [
  ["Residência Itaim", "Residencial", window.__resources.imgProjectsGrid],
  ["Cobertura Jardins", "Interiores", window.__resources.imgInterior],
  ["Casa Serra", "Arquitetura", window.__resources.imgArquitetura],
  ["Escritório Faria Lima", "Corporativo", window.__resources.imgPortrait],
  ["Apartamento Higienópolis", "Interiores", window.__resources.imgProjectsGrid],
  ["Retiro Litoral", "Residencial", window.__resources.imgInterior],
];

function Projetos({ onNavigate }) {
  const filters = ["Todos", "Residencial", "Interiores", "Arquitetura", "Corporativo"];
  const [active, setActive] = React.useState("Todos");
  const all = projects();
  const shown = active === "Todos" ? all : all.filter((p) => p[1] === active);
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <Eyebrow>Portfólio da rede</Eyebrow>
      <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,72px)", margin: "18px 0 10px" }}>projetos que também dão lucro.</h1>
      <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "60ch", marginBottom: "28px" }}>
        Trabalhos entregues pela rede de unidades ARQX em todo o Brasil.
        <ConfirmTag>Todos os 6 projetos atuais estão em São Paulo — diversificar por estado assim que houver projeto real de outra unidade, para sustentar a alegação de "14 estados".</ConfirmTag>
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-10)" }}>
        {filters.map((f) => <Tag key={f} active={active === f} onClick={() => setActive(f)}>{f}</Tag>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
        {shown.map((p, i) => (
          <Card key={i} image={p[2]} eyebrow={p[1]} interactive>
            <h3 style={{ fontSize: "19px" }}>{p[0]}</h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px" }}>Unidade ARQX · São Paulo</p>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: "var(--space-20)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)", textAlign: "center" }}>
        <h2 className="arqx-display" style={{ fontSize: "clamp(24px,2.8vw,34px)", marginBottom: "20px" }}>O próximo projeto lucrativo pode ser da sua unidade</h2>
        <Button size="lg" variant="primary" onClick={() => onNavigate("franquia")}>Quero uma Franquia</Button>
      </div>
    </div>
  );
}
Object.assign(window, { Projetos });
