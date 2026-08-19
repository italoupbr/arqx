# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primário: donos de escritório de arquitetura no Brasil com operação ativa, tecnicamente
competentes, dependentes de indicação e sem estrutura comercial, avaliando se tornar
associados da rede ARQX. Situação típica: receita instável, agenda cheia, faturamento
estagnado; pesquisam no Google e perguntam a IAs antes de decidir.

Usuário secundário desta fase: Lucas Galy (cliente, fundador da ARQX), que revisa e
aprova o site pelo widget de revisão embutido (sugestão de texto, marcação de área,
aprovação por página) gravando nas tabelas `arqx_*` do Supabase Upsend Flow.

## Product Purpose

Site institucional da ARQX (arqx-br.com.br). Sucesso tem dois eixos com peso igual,
confirmados pelo operador: (1) candidaturas qualificadas de escritórios pelo formulário
de /associar; (2) presença orgânica e citação por IAs (GEO). A ARQX opera "Google zero"
(sem Ads): orgânico + IA é o único canal do site, por isso SSG com HTML completo por
rota, schema, robots com crawlers de IA liberados e llms.txt são requisitos de produto,
não otimização.

## Positioning

**Pivot de 19/08/2026 (artefato aprovado pelo cliente, supersede parcialmente a spec
v1.0):** ARQX é uma **Growth Partner para escritórios de arquitetura estabelecidos**.
Assinatura: "The business behind the architecture." / "More projects. Better business."
Perfil de entrada: escritórios faturando a partir de R$ 50 mil/mês; entrada por processo
de seleção (solicitação → análise → reunião estratégica → convite), sem checkout nem
tabela de preços pública. Infraestrutura em 6 camadas: Estratégia, Posicionamento,
Aquisição, Comercial, Marketing, Inteligência. O Método X™ e os números do deck
(+R$10MM/+179/+70%) NÃO aparecem no novo artefato; confirmar com o cliente se seguem
válidos para outras páginas antes de reutilizar.

Base anterior (spec v1.0): "A primeira rede de escritórios de arquitetura do Brasil." A ARQX NÃO é franquia
(decisão do fundador, reunião de 20/07/2026): é licenciamento de marca e do Método X™;
não entra na operação do escritório, e o associado mantém autonomia total sobre produção
e público. O termo do público é **associado**, nunca "franqueado" ou "parceiro".
Categoria própria: "crescimento estruturado". Frases de negação oficiais: "Não somos uma
mentoria. Não somos uma agência. Não somos networking."

Desambiguação de entidade obrigatória: existe um "ARQX arquitectos" português (arqx.net)
sem relação; toda descrição da marca inclui "do Brasil" + "fundada por Lucas Galy".

## Operating Context

- Projeto da Upsend Brasil (Ítalo Ribeiro) para o cliente Lucas Galy; escopo fechado na
  spec "ARQX · Especificação Completa de Reconstrução" v1.0 (12/08/2026).
- App Next.js 15 (App Router, SSG) em `arqx-site/`; protótipo aprovado desempacotado em
  `site/` como referência visual. Deploy Vercel (`arqx-site.vercel.app`; domínio final
  arqx-br.com.br). Formulários gravam via handlers serverless no Supabase Upsend Flow.
- Ciclo de revisão: Lucas marca no próprio site (widget), Upsend consolida; aprovação por
  página em `arqx_page_status`.

## Capabilities and Constraints

- **Terminologia inegociável:** proibido franquia/franqueado/parceiro/royalties e
  travessão (—) em qualquer entrega. Gate automatizado em
  `arqx-site/scripts/check-terminology.mjs` FALHA o build; exceções documentadas (FAQ de
  negação e artigos comparativos com frontmatter `allowTermosComparativos`).
- **Zero invenção de dados:** números só do deck oficial (§3 da spec): +R$10MM em
  projetos, +179 escritórios (ou 169, pendente), +70% margem em 12 meses, percentuais da
  metodologia (95/90/80/70/65), cases com disclaimer obrigatório. Sem depoimentos,
  projetos ou logos inventados; sem AggregateRating/Review em schema.
- **Preços nunca publicados no site** (Pass, mensalidade, comissão são material de call
  comercial); o site converte para o formulário.
- Todo dado pendente renderiza com `<ConfirmTag>` (some via
  `NEXT_PUBLIC_SHOW_CONFIRM_TAGS=false`; pendente não confirmado é removido, nunca vira
  fato). Pendências abertas: as 17 de `arqx-site/PENDENCIAS.md` (179 vs 169, headline do
  hero, fotos reais + consentimento CAU, bios do time, prazo de retorno, canais etc.).
- Copy vive em `arqx-site/content/*.json`, nunca hardcoded em componente (o cliente
  ajusta copy sem mudar estrutura).
- Sem página/seção de eventos em 2026 (decisão do cliente). Blog (15 artigos, spec §5.4)
  adiado pelo operador; links fora da nav até ativar.
- Portfólio: só projetos reais com crédito do escritório associado autor e consentimento
  do cliente final (Código de Ética CAU); nunca exibir honorários.

## Brand Commitments

- Wordmark `arqx®` sempre Berling itálico lowercase com ® pequeno sobrescrito.
- Fontes oficiais self-hosted: Berling (display, só itálico, sempre lowercase), Delta
  (estrutural, caps com tracking), Inter (corpo). WOFF2 em `arqx-site/public/fonts/`.
- Paleta oficial: near-black quente #0a0908, creme #faf6eb, taupe #a58d7e como único
  acento; tokens completos em `arqx-site/app/globals.css` (fonte: design system do
  protótipo aprovado). Direção aprovada pelo cliente: "arredondado porém sofisticado",
  dark editorial, hairlines em vez de sombras duras.
- Tagline: "Estrutura para crescer. Liberdade para criar." Assinatura: "a junção da
  arquitetura e do dinheiro." Missão: "Elevar o padrão empresarial da arquitetura…"
- Voz: direta, peer-level, sem frases-sintoma de IA; headline/sub do hero sujeitas a
  ajuste do fundador (pendência #2).

## Evidence on Hand

- Deck oficial ARQX (números da spec §3; única fonte permitida).
- Reunião 20/07/2026 com o fundador (ata + transcrição): modelo associado, CTA, estrutura
  aprovada, hero animado (ref. ArkFunnels), "a foto fica legal" (desktop com foto).
- Protótipo visual aprovado: `site/` (9 páginas) + design system `ARQXDesignSystem_3ac7f8`.
- Imagens provisórias da marca (interior/projects-grid/portrait, webp) — placeholders até
  fotos reais chegarem. OG gerada da fonte oficial em `arqx-site/public/og/`.
- 1 sugestão real do cliente já registrada em `arqx_sugestoes` (home: "R$1MM" →
  "R$ 20MM em 12 meses" — dado novo, não confirmado na spec; validar antes de aplicar).
- Ausências que não podem ser fabricadas: depoimentos, fotos do time, projetos reais,
  credenciais do fundador, CNPJ/razão social.

## Product Principles

1. Terminologia é blindagem jurídica, não estilo: associado, nunca franquia; o gate de
   build é parte do produto.
2. Nenhum número sem lastro no deck; pendência visível (ConfirmTag) vale mais que página
   "bonita" com fato inventado.
3. GEO é canal primário: conteúdo indexável no HTML do build sempre; animação é camada,
   nunca portadora única de conteúdo.
4. O site converte para o formulário; preço e proposta pertencem à conversa comercial.
5. Autoria do arquiteto é sagrada: crédito e consentimento antes de qualquer projeto
   publicado.

## Accessibility & Inclusion

Piso confirmado pelo operador: Lighthouse Accessibility ≥90 em mobile como requisito de
release (estado atual: 100). `prefers-reduced-motion` respeitado em toda animação.
