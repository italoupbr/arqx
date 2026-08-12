/* global React */
const { Eyebrow, Tag, Card } = window.ARQXDesignSystem_3ac7f8;

const hubs = [
  ["Hub 1 · Captação (mês 1)", "Captação", [
    ["Marketing para arquitetos: por que agência e curso não resolvem sozinhos", "marketing para arquitetos · 140/mês"],
    ["Como captar clientes de arquitetura sem depender de indicação", "captar clientes arquitetura · 20/mês"],
    ["Branding pessoal para arquitetos: o que realmente constrói autoridade", "branding para arquitetos · 20/mês"],
    ["Instagram para arquitetos: o que postar além de obra pronta", "instagram para arquitetos · 20/mês"],
  ]],
  ["Hub 2 · Gestão (mês 2)", "Gestão", [
    ["Gestão de escritório: o que muda quando você para de ser só técnico", "gestão de escritório de arquitetura · 50/mês"],
    ["Como montar um escritório de arquitetura do zero", "como montar escritório de arquitetura · 20/mês"],
    ["Como abrir um escritório: passo a passo e quanto custa", "como abrir um escritório de arquitetura · 30/mês"],
    ["Franquia de arquitetura: como escolher entre os modelos disponíveis no Brasil", "franquia de arquitetura · 20/mês · comparação direta"],
  ]],
  ["Hub 3 · Comercial (mês 3)", "Comercial", [
    ["Proposta comercial de arquitetura: estrutura que fecha mais projetos", "proposta comercial arquitetura · 30/mês"],
    ["Como precificar e cobrar por projeto sem deixar dinheiro na mesa", "precificação de projetos de arquitetura · 20/mês"],
  ]],
  ["Hub 4 · Franquia e Reposicionamento (mês 3)", "Franquia", [
    ["Mentoria de arquitetura ou franquia estruturada? Entenda a diferença", "mentoria arquitetura · 20/mês"],
    ["Para quem é a franquia ARQX, e para quem não é", "franquia para arquitetos · 20/mês · qualificação"],
  ]],
];

function Blog() {
  const filters = ["Todos", "Captação", "Gestão", "Comercial", "Franquia"];
  const [active, setActive] = React.useState("Todos");
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <Eyebrow>Conteúdo</Eyebrow>
      <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,72px)", margin: "18px 0 14px" }}>blog ARQX.</h1>
      <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "60ch", marginBottom: "var(--space-10)" }}>
        Conteúdo real sobre os quatro pilares do método, para você aplicar no seu escritório antes mesmo de se candidatar à franquia.
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "var(--space-16)" }}>
        {filters.map((f) => <Tag key={f} active={active === f} onClick={() => setActive(f)}>{f}</Tag>)}
      </div>

      {hubs.filter(([, cat]) => active === "Todos" || active === cat).map(([label, , posts]) => (
        <section key={label} style={{ marginBottom: "var(--space-16)" }}>
          <Eyebrow rule={false}>{label}</Eyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
            {posts.map(([title, meta]) => (
              <Card key={title} interactive>
                <h3 style={{ fontSize: "16px", lineHeight: 1.4 }}>{title}</h3>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "10px" }}>{meta}</p>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
Object.assign(window, { Blog });
