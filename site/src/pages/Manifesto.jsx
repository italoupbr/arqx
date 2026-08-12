/* global React */
const { Eyebrow, Button, PullQuote } = window.ARQXDesignSystem_3ac7f8;

function Manifesto({ onNavigate }) {
  const paragraphs = [
    "A faculdade ensina a projetar. Ensina a calcular carga estrutural, a desenhar planta, a defender conceito em banca. Não ensina a precificar um projeto sem medo de perder o cliente. Não ensina a construir um funil de captação. Não ensina a ler um fluxo de caixa nem a negociar um contrato que proteja o escritório.",
    "O resultado é um mercado cheio de arquitetos tecnicamente brilhantes que vivem reféns da próxima indicação. Um mês bom seguido de dois meses de silêncio. Uma agenda cheia de trabalho e uma conta bancária que não reflete isso. Um portfólio impecável e nenhuma previsibilidade sobre o próximo projeto.",
    "A ARQX parte de uma constatação simples: o problema nunca foi o talento. É a ausência de estrutura comercial por trás dele. Por isso o sistema não vende curso, não vende mentoria de conteúdo genérico, não vende mais uma agência que executa e some quando o contrato acaba. Vende estrutura, entregue como franquia, com curadoria direta de quem já gerou resultado real antes de estruturar isso para outros.",
    "Arquitetura lucrativa não é uma contradição. É o que acontece quando o talento técnico finalmente tem, por trás dele, um sistema comercial à altura.",
  ];
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <Eyebrow>Manifesto</Eyebrow>
      <h1 className="arqx-display" style={{ fontSize: "clamp(36px,5.5vw,64px)", margin: "18px 0 var(--space-16)", maxWidth: "20ch" }}>
        o mercado ensina tudo, menos a lucrar.
      </h1>

      <PullQuote size="md" cite="Lucas Galy">o arquiteto brilhante que quebra é o retrato de um mercado que ensina tudo, menos a lucrar.</PullQuote>

      <div style={{ marginTop: "var(--space-16)", maxWidth: "68ch", display: "flex", flexDirection: "column", gap: "18px" }}>
        {paragraphs.map((p, i) => <p key={i} style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--text-secondary)" }}>{p}</p>)}
      </div>

      <section style={{ marginTop: "var(--space-24)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)", textAlign: "center" }}>
        <h2 className="arqx-display" style={{ fontSize: "clamp(24px,2.8vw,34px)", marginBottom: "20px" }}>Conheça o sistema por trás do manifesto</h2>
        <Button size="lg" variant="primary" onClick={() => onNavigate("metodo")}>Ver os Quatro Pilares</Button>
      </section>
    </div>
  );
}
Object.assign(window, { Manifesto });
