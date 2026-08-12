/* global React */
const { Eyebrow, Button, PullQuote, ConfirmTag } = window.ARQXDesignSystem_3ac7f8;

function LucasGaly({ onNavigate }) {
  return (
    <div style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)" }}>
      <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "var(--space-16)", border: "1px solid var(--line-soft)" }}>
        <img src={window.__resources.imgPortrait} alt="" style={{ width: "100%", height: "380px", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,9,8,0) 40%,rgba(10,9,8,.9) 100%)" }} />
        <div style={{ position: "absolute", left: "var(--space-8)", bottom: "var(--space-8)" }}>
          <Eyebrow>Fundador</Eyebrow>
          <h1 className="arqx-display" style={{ fontSize: "clamp(38px,5vw,64px)", marginTop: "10px" }}>Lucas Galy</h1>
          <p style={{ color: "var(--text-secondary)", marginTop: "8px" }}>Arquiteto e fundador da ARQX</p>
        </div>
      </div>

      <section style={{ maxWidth: "72ch" }}>
        <Eyebrow>Trajetória</Eyebrow>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)", marginTop: "16px" }}>
          Lucas Galy começou como estagiário em um escritório local. Ao longo do caminho, atuou diretamente na geração de mais de R$10 milhões em projetos fechados online para arquitetos no Brasil e no exterior. Foi nesse processo que percebeu um padrão que se repetia em praticamente todo escritório que passava por perto: o problema não era a falta de talento técnico, era a ausência de estrutura comercial por trás do talento.
        </p>
        <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-secondary)", marginTop: "16px" }}>
          Foi esse padrão que deu origem aos quatro pilares do método e, em seguida, à ARQX, criada especificamente para transformar esse diagnóstico em um sistema replicável para outros escritórios, hoje operando como franquia.
        </p>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "14px" }}>
          Incluir ou não passagens profissionais anteriores a esta trajetória nesta página.<ConfirmTag>CONFIRMAR com Lucas antes de publicar</ConfirmTag>
        </p>
      </section>

      <section style={{ marginTop: "var(--space-20)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)" }}>
        <PullQuote size="md" cite="Lucas Galy">o arquiteto brilhante que quebra é o retrato de um mercado que ensina tudo, menos a lucrar.</PullQuote>
      </section>

      <section style={{ marginTop: "var(--space-20)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)", maxWidth: "72ch" }}>
        <Eyebrow>Credenciais</Eyebrow>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginTop: "16px" }}>
          Formação, certificações, registro CAU e menções de mídia autorizadas para uso nesta página.<ConfirmTag>CONFIRMAR</ConfirmTag>
        </p>
      </section>

      <section style={{ marginTop: "var(--space-24)", paddingTop: "var(--space-16)", borderTop: "1px solid var(--line-soft)", textAlign: "center" }}>
        <h2 className="arqx-display" style={{ fontSize: "clamp(24px,2.8vw,34px)", marginBottom: "20px" }}>Conheça o método criado por Lucas</h2>
        <Button size="lg" variant="primary" onClick={() => onNavigate("metodo")}>Ver os Quatro Pilares</Button>
      </section>
    </div>
  );
}
Object.assign(window, { LucasGaly });
