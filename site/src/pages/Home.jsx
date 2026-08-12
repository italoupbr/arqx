/* global React */
const { Eyebrow, Button, StatBlock, PullQuote, Card, ConfirmTag } = window.ARQXDesignSystem_3ac7f8;
const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;

function Home({ onNavigate }) {
  const why = [
    ["01", "Curadoria de fundador com resultado provado", "Lucas Galy atuou diretamente na geração de mais de R$10 milhões em projetos fechados online antes de estruturar o sistema. Não é curso gravado, é direção estratégica ativa."],
    ["02", "Foco em estruturação comercial, não em RT ou perícia", "Outras franquias do setor misturam arquitetura com engenharia civil, inspeção predial e laudos. A ARQX é construída em torno de um único problema: transformar talento técnico em negócio lucrativo."],
    ["03", "Quatro pilares, não um pacote genérico", "Posicionamento, captação, gestão e previsibilidade financeira entregues como sistema, não como itens avulsos de um enxoval padrão."],
  ];
  return (
    <div>
      <section style={{ position: "relative", minHeight: "82vh", display: "flex", alignItems: "flex-end",
        padding: "0 var(--page-gutter) var(--space-24)", overflow: "hidden" }}>
        <img src={window.__resources.imgInterior} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,9,8,.55) 0%, rgba(10,9,8,.2) 40%, rgba(10,9,8,.92) 100%)" }} />
        <div style={{ position: "relative", maxWidth: "980px" }}>
          <Eyebrow>O primeiro sistema de franquias para arquitetos do Brasil<ConfirmTag>CONFIRMAR, ver Achado 2 do planejamento</ConfirmTag></Eyebrow>
          <h1 className="arqx-display" style={{ fontSize: "clamp(52px,9vw,124px)", lineHeight: 0.98, margin: "22px 0 0", color: "var(--text-primary)" }}>
            arquitetura<br/>lucrativa.
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "54ch", marginTop: "28px" }}>
            A ARQX transforma arquitetos em empresários de alta performance. Você projeta, cria e constrói, nós cuidamos de tudo o que a faculdade nunca ensinou.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "36px", flexWrap: "wrap" }}>
            <Button size="lg" variant="primary" iconRight={<Arrow/>} onClick={() => onNavigate("franquia")}>Quero uma Franquia</Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate("metodo")}>Conhecer o Método</Button>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)",
        padding: "var(--space-16) var(--page-gutter)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "32px" }}>
        <StatBlock value="+120" label={<>arquitetos no sistema<ConfirmTag>CONFIRMAR</ConfirmTag></>} />
        <StatBlock prefix="R$" value="1.2M" label="faturamento médio anual dos franqueados" />
        <StatBlock value="3.4x" label="crescimento médio de faturamento em 12 meses" />
        <StatBlock value="14" label="estados com unidades ativas no Brasil" />
      </section>

      <section style={{ padding: "var(--space-24) var(--page-gutter)" }}>
        <Eyebrow>O Sistema</Eyebrow>
        <p className="arqx-display" style={{ fontSize: "clamp(28px,3.2vw,46px)", margin: "18px 0 0" }}>a junção da arquitetura e do dinheiro.</p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--text-secondary)", marginTop: "22px", maxWidth: "72ch" }}>
          O modelo combina um enxoval completo de entrada com suporte contínuo de uma equipe especializada e a curadoria estratégica de Lucas Galy. Captação de clientes, gestão de marketing, processos internos e previsibilidade financeira, tudo em um só lugar.
        </p>
        <div style={{ marginTop: "26px" }}>
          <Button variant="ghost" iconRight={<Arrow/>} onClick={() => onNavigate("metodo")}>Ver os Quatro Pilares</Button>
        </div>
      </section>

      <section style={{ padding: "var(--space-24) var(--page-gutter)", borderTop: "1px solid var(--line-soft)" }}>
        <Eyebrow>Por que ARQX, e não outra franquia de arquitetura</Eyebrow>
        <p style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--text-secondary)", marginTop: "16px", maxWidth: "62ch" }}>
          O mercado de franquia para arquitetos já tem outros players ativos. A diferença real não está em ser franquia, está em quem estrutura ela.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "30px" }}>
          {why.map(([n, t, d]) => (
            <Card key={n}>
              <div style={{ fontFamily: "var(--font-structure)", color: "var(--text-muted)", fontSize: "13px", letterSpacing: ".05em", marginBottom: "10px" }}>{n}</div>
              <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>{t}</h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ padding: "var(--space-24) var(--page-gutter)", background: "var(--bg-sunken)", borderTop: "1px solid var(--line-soft)" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
          <PullQuote size="lg" cite="Lucas Galy" role="Fundador da ARQX">
            o arquiteto brilhante que quebra é o retrato de um mercado que ensina tudo, menos a lucrar.
          </PullQuote>
        </div>
      </section>

      <section style={{ padding: "var(--space-24) var(--page-gutter)" }}>
        <Eyebrow>Portfólio da rede</Eyebrow>
        <p className="arqx-display" style={{ fontSize: "clamp(28px,3.2vw,44px)", margin: "16px 0 26px" }}>projetos que também dão lucro.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          <Card image={window.__resources.imgProjectsGrid} eyebrow="Residencial" interactive>
            <h3 style={{ fontSize: "17px" }}>Residência Itaim</h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px" }}>Unidade ARQX · São Paulo</p>
          </Card>
          <Card image={window.__resources.imgPortrait} eyebrow="Corporativo" interactive>
            <h3 style={{ fontSize: "17px" }}>Escritório Faria Lima</h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px" }}>Unidade ARQX · São Paulo</p>
          </Card>
          <Card image={window.__resources.imgArquitetura} eyebrow="Arquitetura" interactive>
            <h3 style={{ fontSize: "17px" }}>Casa Serra</h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "6px" }}>Unidade ARQX · São Paulo</p>
          </Card>
        </div>
        <div style={{ marginTop: "24px" }}><Button variant="secondary" onClick={() => onNavigate("projetos")}>Ver portfólio completo</Button></div>
      </section>

      <section style={{ padding: "var(--space-20) var(--page-gutter) var(--space-24)", borderTop: "1px solid var(--line-soft)", textAlign: "center" }}>
        <h2 className="arqx-display" style={{ fontSize: "clamp(26px,3vw,38px)", marginBottom: "22px" }}>Pronto para transformar talento técnico em negócio lucrativo?</h2>
        <Button size="lg" variant="primary" onClick={() => onNavigate("franquia")}>Quero uma Franquia</Button>
      </section>
    </div>
  );
}
Object.assign(window, { Home });
