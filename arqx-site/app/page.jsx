/* Home v2 · linha visual aprovada pelo cliente (port fiel do artefato dele).
   Copy do artefato preservada; travessões substituídos (regra global) e
   encoding normalizado. Fotos reais em /img/projetos. FX em HomeV2Fx. */
import V2Shell from "@/components/v2/V2Shell";

export const metadata = {
  title: { absolute: "ARQX® · The business behind the architecture" },
  description:
    "ARQX é uma Growth Partner para escritórios de arquitetura estabelecidos. Transformamos reputação em crescimento previsível através de uma infraestrutura completa de negócios.",
  alternates: { canonical: "/" },
};

const IMG = (n) => `/img/projetos/p${n}.webp`;

const FOLIO = [
  [16, "Residencial", "Fachada residencial de alto padrão com brises e paisagismo"],
  [2, "Interiores", "Cozinha gourmet com ilha de travertino e bancos dourados"],
  [9, "Residencial", "Fachada com morador e cachorro, lifestyle de alto padrão"],
  [10, "Interiores", "Cozinha integrada com vista para piscina e teto ripado"],
  [5, "Residencial", "Fachada moderna com carro na garagem"],
  [15, "Interiores", "Suíte master com marcenaria ripada e vista para o jardim"],
  [14, "Interiores", "Closet de alto padrão com marcenaria em madeira e vitrine"],
  [1, "Interiores", "Living amplo e claro com sofás em bouclé e mesa curva de madeira"],
];

export default function HomeV2() {
  return (
    <V2Shell active="/">
      <main>
        {/* HERO */}
        <section className="hero" id="hero" data-theme="dark">
          <div className="hero-grid-bg" aria-hidden="true"></div>
          <div className="hero-x" data-parallax="0.1" aria-hidden="true">X</div>
          <div className="hero-inner">
            <div className="hero-left">
              <h1 className="hero-h lines" aria-label="Seu escritório cresceu. Sua estrutura de crescimento não.">
                <span><i>Seu escritório</i></span>
                <span><i><span className="serif">cresceu.</span> Sua estrutura</i></span>
                <span><i>de crescimento <span className="serif">não.</span></i></span>
              </h1>
              <div className="hero-bottom">
                <p className="hero-sub reveal" data-d="2">
                  A ARQX se associa a escritórios de arquitetura estabelecidos e implementa a infraestrutura de negócios
                  necessária para transformar reputação em crescimento previsível.
                </p>
                <div className="hero-cta-col reveal" data-d="3">
                  <a href="#selecao" className="btn magnetic" data-modal-open>Solicitar associação <span className="ar">→</span></a>
                  <p className="hero-micro">Para escritórios a partir de <b>R$ 50 mil/mês.</b> Novos escritórios são avaliados antes da entrada na rede.</p>
                </div>
              </div>
            </div>
            <div className="hero-right reveal" data-d="1">
              <div className="hero-media" id="heroStage" role="group" aria-label="Projetos de arquitetura de alto padrão · carrossel">
                <div className="hero-card"><img src={IMG(6)} alt="Fachada de alto padrão com brises de madeira ao entardecer" fetchPriority="high" /></div>
                <div className="hero-card"><img src={IMG(8)} alt="Residência contemporânea vista da rua" loading="lazy" decoding="async" /></div>
                <div className="hero-card"><img src={IMG(11)} alt="Interior com parede de pedra e pendentes de cobre" loading="lazy" decoding="async" /></div>
                <div className="hero-card"><img src={IMG(16)} alt="Fachada residencial com paisagismo tropical" loading="lazy" decoding="async" /></div>
                <div className="hero-card"><img src={IMG(10)} alt="Cozinha integrada com vista para piscina" loading="lazy" decoding="async" /></div>
                <div className="hero-hud">
                  <span className="hero-sheen" aria-hidden="true"></span>
                  <span className="hero-glare" aria-hidden="true"></span>
                  <span className="hero-cap tl">ARQX / SELECTED WORK</span>
                  <span className="hero-cap br"><span id="heroIdx">01</span> / 05</span>
                  <span className="hero-plus p1" aria-hidden="true"></span>
                  <span className="hero-plus p2" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-hint" aria-hidden="true"><span>Scroll</span><span className="ln"></span></div>
        </section>

        {/* TICKER */}
        <section className="ticker" aria-hidden="true" data-theme="dark">
          <div className="ticker-track" id="ticker">
            {[0, 1].map((k) => (
              <span key={k} style={{ display: "contents" }}>
                <span>Estratégia</span><span className="dot"></span>
                <span>Aquisição</span><span className="dot"></span>
                <span>Posicionamento</span><span className="dot"></span>
                <span>Comercial</span><span className="dot"></span>
                <span>Crescimento</span><span className="dot"></span>
                <span>Estrutura</span><span className="dot"></span>
                <span className="serif brandmark">arqx<sup>®</sup></span><span className="dot"></span>
              </span>
            ))}
          </div>
        </section>

        {/* CONTRADIÇÃO */}
        <section className="blk light" id="sobre" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">01 · A contradição</span>
            <h2 className="contra-h reveal" data-d="1">
              Você construiu reputação. Mas reputação sozinha não constrói <span className="serif">previsibilidade.</span>
            </h2>
            <p className="contra-lead reveal" data-d="1">
              Muitos escritórios chegam aos R$ 30k, R$ 50k, R$ 80k ou R$ 100k por mês graças a networking, clientes
              antigos, fornecedores, corretores e recomendações. Isso é valioso.{" "}
              <b>Mas existe uma diferença entre ser indicado e possuir uma estrutura capaz de gerar crescimento.</b>
            </p>
            <div className="cmp reveal" data-d="1">
              <div className="cmp-node" aria-hidden="true"><span className="ar">→</span></div>
              <div className="cmp-col a">
                <div className="cmp-top"><span className="cmp-lab">Indicação</span><span className="cmp-id">Modelo A</span></div>
                <div className="cmp-word serif">Indicação</div>
                <p className="cmp-desc">O canal que trouxe o seu escritório até aqui: valioso, mas fora do seu controle.</p>
                <div className="cmp-sig" aria-hidden="true">
                  <i style={{ "--h": "52%" }}></i><i style={{ "--h": "88%" }}></i><i style={{ "--h": "30%" }}></i><i style={{ "--h": "70%" }}></i><i style={{ "--h": "24%" }}></i><i style={{ "--h": "60%" }}></i><i style={{ "--h": "38%" }}></i>
                </div>
                <div className="cmp-rows">
                  <div className="cmp-row"><span className="rn">01</span><div><span className="rt">Imprevisível</span><span className="rd">Chega quando chega, sem hora marcada.</span></div></div>
                  <div className="cmp-row"><span className="rn">02</span><div><span className="rt">Não controlável</span><span className="rd">Depende da decisão e da memória de terceiros.</span></div></div>
                  <div className="cmp-row"><span className="rn">03</span><div><span className="rt">Difícil de escalar</span><span className="rd">Não responde a esforço nem a demanda.</span></div></div>
                  <div className="cmp-row"><span className="rn">04</span><div><span className="rt">Dependente de lembrança</span><span className="rd">Se não lembram de você, não acontece.</span></div></div>
                </div>
              </div>
              <div className="cmp-col b">
                <div className="cmp-top"><span className="cmp-lab">Estrutura</span><span className="cmp-id">Modelo B</span></div>
                <div className="cmp-word serif">Estrutura</div>
                <p className="cmp-desc">O sistema que a ARQX implementa por trás do escritório: desenhado para crescer.</p>
                <div className="cmp-sig" aria-hidden="true">
                  <i style={{ "--h": "34%" }}></i><i style={{ "--h": "46%" }}></i><i style={{ "--h": "58%" }}></i><i style={{ "--h": "66%" }}></i><i style={{ "--h": "78%" }}></i><i style={{ "--h": "88%" }}></i><i style={{ "--h": "100%" }}></i>
                </div>
                <div className="cmp-rows">
                  <div className="cmp-row"><span className="rn">01</span><div><span className="rt">Planejável</span><span className="rd">Você define a meta e o caminho até ela.</span></div><span className="rk">+</span></div>
                  <div className="cmp-row"><span className="rn">02</span><div><span className="rt">Mensurável</span><span className="rd">Cada etapa tem um número por trás.</span></div><span className="rk">+</span></div>
                  <div className="cmp-row"><span className="rn">03</span><div><span className="rt">Replicável</span><span className="rd">Funciona de novo, e de novo.</span></div><span className="rk">+</span></div>
                  <div className="cmp-row"><span className="rn">04</span><div><span className="rt">Construída para crescer</span><span className="rd">Feita para sustentar o próximo estágio.</span></div><span className="rk">+</span></div>
                </div>
              </div>
            </div>
            <div className="cmp-foot reveal">
              <span className="fx dim">Indicação é consequência.</span>
              <span className="fa">→</span>
              <span className="fx hot">Estrutura é estratégia.</span>
            </div>
          </div>
        </section>

        {/* SINTOMAS */}
        <section className="blk" data-theme="dark">
          <div className="wrap">
            <div className="sym-head">
              <h2 className="reveal">O limite <span className="serif">invisível</span> do crescimento por esforço.</h2>
              <span className="tick reveal" data-d="1">ARQX / DIAGNÓSTICO / 02</span>
            </div>
            <div className="sym reveal"><div className="num">01</div><div className="body"><span className="tick">Previsibilidade</span><p>Você fatura, mas não sabe exatamente de onde virá o próximo projeto.</p></div></div>
            <div className="sym reveal"><div className="num">02</div><div className="body"><span className="tick">Aquisição</span><p>O escritório cresceu. A aquisição de clientes não.</p></div></div>
            <div className="sym reveal"><div className="num">03</div><div className="body"><span className="tick">Escala</span><p>Trabalhar mais deixou de significar crescer mais.</p></div></div>
          </div>
        </section>

        {/* BAND */}
        <section className="band" data-theme="dark" aria-label="Arquitetura de alto padrão">
          <div className="band-media" data-cover><img src={IMG(8)} alt="Residência contemporânea de alto padrão vista da rua, com fachada de madeira e concreto" loading="lazy" decoding="async" /></div>
          <div className="band-in">
            <div className="band-top"><span className="tick">ARQX / PORTFOLIO</span><span className="tick">The business behind the architecture</span></div>
            <div><p className="band-quote reveal">Reputação abre portas. <span className="serif">Estrutura</span> constrói uma empresa.</p></div>
            <div className="band-foot"><span className="tick">Residencial · Alto padrão</span><span className="tick">02 / 07</span></div>
          </div>
        </section>

        {/* O QUE É A ARQX */}
        <section className="blk" id="oque" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal" style={{ marginBottom: "clamp(30px,5vh,60px)", display: "inline-flex" }}>03 · O que é a ARQX</span>
            <div className="def">
              <div className="def-l reveal">
                <h2>Não somos uma agência. <span className="serif">Entramos na estrutura.</span></h2>
                <p>
                  A ARQX é uma Growth Partner de escritórios de arquitetura. Selecionamos empresas com operação validada
                  e nos associamos a elas para construir, implementar e acompanhar a infraestrutura necessária para o
                  próximo estágio de crescimento.
                </p>
                <div className="def-hl">
                  <p>Seu escritório permanece seu. Sua marca permanece sua. Sua arquitetura permanece sua.</p>
                  <p className="mono-line">Mas você deixa de crescer sozinho.</p>
                </div>
              </div>
              <div className="def-media img-clip reveal" data-d="1">
                <img src={IMG(11)} alt="Interior de alto padrão com parede de pedra, pendentes de cobre e vista para piscina" loading="lazy" decoding="async" />
                <span className="cap">ARQX / SELECTED WORK / 03</span>
              </div>
            </div>
          </div>
        </section>

        {/* INFRAESTRUTURA */}
        <section className="blk light" id="estrutura" data-theme="light">
          <div className="wrap">
            <div className="infra-head">
              <span className="eyebrow reveal">04 · A infraestrutura ARQX</span>
              <h2 className="reveal" data-d="1" style={{ marginTop: 22 }}>Uma estrutura de crescimento <span className="serif">envolvendo</span> o seu escritório.</h2>
            </div>
            <div className="infra">
              {[
                ["01", "Estratégia", "Plano de crescimento, metas, diagnóstico e prioridades."],
                ["02", "Posicionamento", "Construção de autoridade, percepção de valor e diferenciação."],
                ["03", "Aquisição", "Estruturas de captação para reduzir a dependência de indicações."],
                ["04", "Comercial", "Processos, CRM, acompanhamento, negociação e conversão."],
                ["05", "Marketing", "Campanhas, conteúdo e geração de oportunidades integradas à estratégia."],
                ["06", "Inteligência", "Dados, métricas, análise de gargalos e decisões de crescimento."],
              ].map(([n, nome, desc]) => (
                <div className="layer reveal" key={n}>
                  <span className="lnum">{n}</span>
                  <span className="lname"><span className="tag">{nome}</span></span>
                  <span className="ldesc">{desc}</span>
                  <span className="lx">ARQX / GROWTH SYSTEM / {n}</span>
                </div>
              ))}
            </div>
            <div className="infra-core reveal" data-d="1">
              <div className="cd">
                <span className="cd-ring r1" aria-hidden="true"></span>
                <span className="cd-ring r2" aria-hidden="true"></span>
                <span className="cd-ring r3" aria-hidden="true"></span>
                <div className="cd-orbit" aria-hidden="true">
                  {[["-90deg", "Estratégia"], ["-30deg", "Aquisição"], ["30deg", "Marketing"], ["90deg", "Inteligência"], ["150deg", "Comercial"], ["210deg", "Posicionamento"]].map(([a, t]) => (
                    <div className="cd-node" style={{ "--a": a }} key={t}>
                      <div className="cd-spin"><span className="cd-chip"><i className="cd-dot"></i>{t}</span></div>
                    </div>
                  ))}
                </div>
                <div className="cd-core">
                  <span className="core-lab">O núcleo</span>
                  <div className="core-name">Seu <span className="serif">escritório</span></div>
                  <p className="core-sub">O escritório continua sendo o protagonista. A ARQX passa a ser a estrutura por trás do seu crescimento.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE MUDA */}
        <section className="blk" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal">05 · O que muda</span>
            <h2 className="change-h reveal" data-d="1" style={{ marginTop: 22 }}>Antes da ARQX. <span className="serif">Depois da estrutura.</span></h2>
            <div className="change">
              <div className="col before reveal">
                <div className="top"><span className="k">Antes</span><span className="st serif">Esforço</span></div>
                <ul>
                  <li><span className="m">01</span>Indicações como principal canal.</li>
                  <li><span className="m">02</span>Ações de marketing isoladas.</li>
                  <li><span className="m">03</span>Pouca previsibilidade.</li>
                  <li><span className="m">04</span>Comercial dependente do fundador.</li>
                  <li><span className="m">05</span>Crescimento por esforço.</li>
                  <li><span className="m">06</span>Decisões baseadas em percepção.</li>
                </ul>
              </div>
              <div className="col after reveal" data-d="1">
                <div className="top"><span className="k">Depois</span><span className="st serif">Estrutura</span></div>
                <ul>
                  <li><span className="m">01</span>Múltiplas fontes de aquisição.</li>
                  <li><span className="m">02</span>Estratégia integrada.</li>
                  <li><span className="m">03</span>Pipeline estruturado.</li>
                  <li><span className="m">04</span>Processos comerciais.</li>
                  <li><span className="m">05</span>Crescimento acompanhado por indicadores.</li>
                  <li><span className="m">06</span>Decisões orientadas por dados.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <div className="tl-head">
              <span className="eyebrow reveal">06 · Experiência de associação</span>
              <h2 className="reveal" data-d="1" style={{ marginTop: 22 }}>
                Quando um escritório entra na ARQX, não recebe um fornecedor. Recebe uma <span className="serif">estrutura.</span>
              </h2>
            </div>
            <div className="timeline" id="timeline">
              <div className="tl-line" aria-hidden="true"><span id="tlProgress"></span></div>
              {[
                ["00", "Seleção", "Avaliação do escritório e compatibilidade com a rede."],
                ["01", "Diagnóstico", "Análise profunda de posicionamento, comercial, marketing, gestão e crescimento."],
                ["02", "Arquitetura de crescimento", "Construção do plano estratégico do escritório para o próximo estágio."],
                ["03", "Implantação", "Integração dos processos e da infraestrutura ARQX ao escritório."],
                ["04", "Operação", "Execução, acompanhamento e otimização contínua."],
                ["05", "Escala", "Novos canais, metas, equipe, eficiência e expansão."],
              ].map(([n, t, d]) => (
                <div className="tl-item" key={n}>
                  <div className="tl-k"><span className="st">{n}</span><div className="tl-code">ARQX / ONBOARDING / {n}</div></div>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFÓLIO STRIP */}
        <section className="folio" data-theme="dark" aria-label="Portfólio">
          <div className="folio-head">
            <h2 className="reveal">Arquitetura que sustenta <span className="serif">reputações.</span></h2>
            <p className="reveal" data-d="1">A estrutura por trás de escritórios que projetam o extraordinário.</p>
          </div>
          <div className="folio-track" id="folioTrack">
            {[false, true].map((dup) =>
              FOLIO.map(([n, cat, alt], i) => (
                <figure className="folio-item" key={`${dup}-${n}`} aria-hidden={dup || undefined}>
                  <div className="ph"><img src={IMG(n)} alt={dup ? "" : alt} loading="lazy" decoding="async" /></div>
                  <figcaption className="meta"><span className="t">{cat}</span><span>{String(i + 1).padStart(2, "0")}</span></figcaption>
                </figure>
              ))
            )}
          </div>
        </section>

        {/* REDE */}
        <section className="blk" id="rede" data-theme="dark">
          <div className="wrap">
            <div className="net-head">
              <h2 className="reveal">Escritórios independentes. <span className="serif">Uma estrutura em comum.</span></h2>
              <div className="txt reveal" data-d="1">
                <p>A ARQX reúne escritórios de arquitetura selecionados sob uma infraestrutura compartilhada de inteligência, crescimento e negócios.</p>
                <p>O objetivo não é tornar os escritórios iguais. <span className="em">É tornar cada um deles mais forte.</span></p>
                <span className="net-tag">Expansion Network · Representação conceitual</span>
              </div>
            </div>
            <div className="net-grid reveal" data-d="1">
              {[
                ["01", "Curitiba", "ARQX / PR", true],
                ["02", "São Paulo", "ARQX / SP", false],
                ["03", "Maringá", "ARQX / PR", false],
                ["04", "Florianópolis", "ARQX / SC", false],
                ["05", "Goiânia", "ARQX / GO", false],
              ].map(([n, city, sub, open]) => (
                <div className={`node-cell magnetic${open ? " open" : ""}`} key={n}>
                  <div className="nc-top"><span>Nó / {n}</span><span>+</span></div>
                  <div><div className="nc-city serif">{city}</div><div className="nc-sub">{sub}</div></div>
                </div>
              ))}
              <div className="node-cell magnetic">
                <div className="nc-top"><span>Nó / →</span><span>×</span></div>
                <div><div className="nc-city serif">Sua cidade</div><div className="nc-sub">Vaga em avaliação</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="blk-sm" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal" style={{ marginBottom: "clamp(30px,5vh,50px)", display: "inline-flex" }}>07 · Indicadores estruturais</span>
            <div className="stats reveal" data-d="1">
              <div className="stat"><div className="sv"><span data-count="50">0</span><span className="u">K+</span></div><div className="sl">Faturamento mensal mínimo do perfil de escritório</div></div>
              <div className="stat"><div className="sv"><span data-count="360">0</span><span className="u">°</span></div><div className="sl">Visão de negócios sobre a operação inteira</div></div>
              <div className="stat"><div className="sv"><span className="u" style={{ marginRight: ".08em", marginLeft: 0 }}>R$</span><span data-count="20">0</span><span className="u">MM</span></div><div className="sl">Gerados em projetos nos últimos 12 meses</div></div>
              <div className="stat"><div className="sv"><span data-count="1" data-pad="2">00</span></div><div className="sl">Estrutura integrada: uma só, envolvendo o escritório</div></div>
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <span className="eyebrow reveal">08 · Para quem é</span>
            <h2 className="fit-h reveal" data-d="1" style={{ marginTop: 22 }}>A ARQX começa onde a maioria das soluções <span className="serif">termina.</span></h2>
            <div className="fit">
              <div className="box yes reveal">
                <div className="fl"><span>Para escritórios que</span><span>Sim</span></div>
                <ul>
                  <li><span className="mk">+</span>Já ultrapassaram a fase inicial.</li>
                  <li><span className="mk">+</span>Faturam R$ 50 mil/mês ou mais.</li>
                  <li><span className="mk">+</span>Possuem portfólio e capacidade de entrega.</li>
                  <li><span className="mk">+</span>Querem diminuir a dependência de indicações.</li>
                  <li><span className="mk">+</span>Estão preparados para profissionalizar o crescimento.</li>
                  <li><span className="mk">+</span>Buscam escala sem descaracterizar sua marca.</li>
                </ul>
              </div>
              <div className="box no reveal" data-d="1">
                <div className="fl"><span>Não é para</span><span>Não</span></div>
                <ul>
                  <li><span className="mk">×</span>Profissionais começando do zero.</li>
                  <li><span className="mk">×</span>Quem procura apenas gestão de tráfego.</li>
                  <li><span className="mk">×</span>Quem quer solução rápida sem mudança operacional.</li>
                  <li><span className="mk">×</span>Quem não abre números, processos e indicadores.</li>
                  <li><span className="mk">×</span>Quem procura apenas curso ou conteúdo.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="light manifesto" data-theme="light">
          <div className="wrap">
            <p className="reveal">Todo arquiteto aprende a projetar espaços.</p>
            <p className="reveal" data-d="1"><span className="dim">Poucos aprendem a projetar uma empresa.</span></p>
            <p className="reveal" data-d="2" style={{ maxWidth: "26ch" }}>
              Quando talento, reputação e indicação deixam de ser suficientes para sustentar o próximo estágio, o problema não está na arquitetura.
            </p>
            <p className="reveal" data-d="2">Está na <span className="serif" style={{ color: "var(--warm)" }}>estrutura.</span></p>
            <p className="reveal" data-d="3" style={{ maxWidth: "22ch", fontSize: "clamp(20px,3vw,44px)" }}>É essa estrutura que construímos.</p>
            <div className="sign reveal">
              <div className="a">arqx<sup>®</sup></div>
              <div className="b">The business behind the architecture. · A empresa por trás de quem projeta o extraordinário.</div>
            </div>
          </div>
        </section>

        {/* SELEÇÃO */}
        <section className="blk" id="selecao" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal">09 · Processo de seleção</span>
            <div className="sel" style={{ marginTop: "clamp(30px,5vh,60px)" }}>
              <div className="sel-l reveal">
                <h2>A ARQX não é aberta <span className="serif">para todos os escritórios.</span></h2>
                <p>Para preservar a qualidade da operação e da rede, novos associados passam por um processo de avaliação. Não há checkout, tabela de preços ou planos. Existe candidatura.</p>
                <a href="#selecao" className="btn magnetic" data-modal-open>Solicitar análise do meu escritório <span className="ar">→</span></a>
              </div>
              <div className="sel-steps reveal" data-d="1">
                {[
                  ["01", "Solicitação", "Você envia a solicitação de análise do escritório."],
                  ["02", "Análise do escritório", "Avaliamos operação, perfil e compatibilidade com a rede."],
                  ["03", "Reunião estratégica", "Conversa para entender contexto, gargalos e potencial."],
                  ["04", "Convite para associação", "Se houver fit, o escritório é convidado a integrar a ARQX."],
                ].map(([n, t, d]) => (
                  <div className="sel-step" key={n}><span className="sn">{n}</span><div><div className="snm">{t}</div><div className="sd">{d}</div></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="blk light" data-theme="light">
          <div className="wrap">
            <div className="faq-head">
              <span className="eyebrow reveal">10 · Perguntas frequentes</span>
              <h2 className="reveal" data-d="1" style={{ marginTop: 22 }}>Antes de solicitar <span className="serif">associação.</span></h2>
            </div>
            <div className="faq-list" id="faq">
              {[
                ["A ARQX é uma agência de marketing?", "Não. Marketing é uma das camadas da infraestrutura, não o produto. A ARQX é uma Growth Partner: entramos na estrutura de negócios do escritório (estratégia, posicionamento, aquisição, comercial e inteligência) e integramos tudo em um único sistema de crescimento."],
                ["Preciso abandonar a identidade do meu escritório?", "Não. Seu escritório permanece seu, sua marca permanece sua e sua arquitetura permanece sua. A ARQX é a estrutura por trás do crescimento: o escritório continua sendo o protagonista."],
                ["A ARQX atende arquitetos que estão começando?", "O perfil principal são escritórios já estabelecidos, com faturamento a partir de R$ 50 mil/mês, portfólio e operação real. A ARQX começa onde a maioria das soluções termina: não é um ponto de partida, é um próximo estágio."],
                ["O que significa se tornar um escritório associado?", "Significa passar a operar com a infraestrutura ARQX envolvendo o seu escritório e integrar uma rede de escritórios selecionados, com inteligência e estrutura compartilhadas. Você deixa de crescer sozinho, mantendo total autonomia sobre a sua marca."],
                ["A ARQX trabalha apenas com marketing e aquisição?", "Não. A aquisição é apenas uma das camadas. Também estruturamos posicionamento, processos comerciais, inteligência de dados e a estratégia de crescimento, porque mais projetos não começam no tráfego, começam na estrutura."],
                ["Existe exclusividade por região?", "A rede é construída de forma seletiva para preservar a qualidade e evitar sobreposição entre associados. As condições de exclusividade são avaliadas caso a caso, durante o processo de seleção e reunião estratégica."],
                ["Como funciona o processo para entrar?", "São quatro etapas: solicitação de análise, análise do escritório, reunião estratégica e, havendo fit, o convite para associação. Não há checkout: a entrada acontece por avaliação de perfil."],
              ].map(([q, a]) => (
                <div className="faq-item" key={q}>
                  <button className="faq-q" aria-expanded="false"><span>{q}</span><span className="faq-ic" aria-hidden="true"></span></button>
                  <div className="faq-a"><div className="faq-a-in">{a}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta" data-theme="dark">
          <div className="cta-media" data-cover><img src={IMG(17)} alt="Interior de alto padrão com marcenaria em nogueira, iluminação difusa e poltrona" loading="lazy" decoding="async" /></div>
          <div className="wrap">
            <span className="eyebrow reveal">ARQX® Private Growth Network</span>
            <h2 className="cta-h reveal" data-d="1">
              Seu escritório já chegou até aqui.
              <span className="q">A questão agora é: até onde ele consegue chegar com a <span className="serif">estrutura certa?</span></span>
            </h2>
            <div className="cta-foot">
              <p className="reveal" data-d="1">Solicite uma análise para descobrir se o seu escritório possui o perfil para integrar a rede ARQX.</p>
              <div className="reveal" data-d="2" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
                <a href="#selecao" className="btn magnetic" data-modal-open>Solicitar associação <span className="ar">→</span></a>
                <span className="hero-micro">Processo sujeito à análise de perfil.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </V2Shell>
  );
}
