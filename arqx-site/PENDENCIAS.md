# PENDÊNCIAS · ARQX Site

Tudo que está marcado no site com a etiqueta amarela `CONFIRMAR` depende de resposta
do Lucas. Nenhum item vira fato sozinho: quando a flag `NEXT_PUBLIC_SHOW_CONFIRM_TAGS`
for desligada para o lançamento, itens não confirmados SOMEM do site (spec §7.4).

Gerado em 12/08/2026 a partir das etiquetas renderizadas em produção local.

## Dados e números

| # | Pendência | Onde aparece | O que o Lucas precisa responder |
|---|---|---|---|
| 1 | **179 ou 169 escritórios acelerados** | Home, Quem Somos, Lucas Galy | O deck cita os dois números. Qual é o oficial? |
| 2 | **Headline e sub do hero** | Home | Ele sinalizou que provavelmente ajusta. Aprovar ou enviar a versão dele (texto vive em `content/home.json`, troca sem mexer em código). |
| 3 | **Razão social / CNPJ** | Rodapé (todas as páginas) | Nome legal para o © do rodapé. |

## Fotos e projetos

| # | Pendência | Onde aparece | O que precisa chegar |
|---|---|---|---|
| 4 | **Fotos reais de projetos** | Home (hero + teaser), Portfólio | Fotos dos projetos da rede. Hoje são placeholders da marca. |
| 5 | **Consentimento de imagem** | Portfólio | Cada projeto real precisa de: autoria do escritório associado + consentimento do cliente final (Código de Ética CAU). |
| 6 | **Foto oficial do Lucas** | Lucas Galy, Quem Somos | Retrato em alta. Hoje usa a imagem provisória do deck. |
| 7 | **Fotos do time** | Quem Somos | Gabriela, Laura e Matheus. Hoje são iniciais num quadro tracejado. |

## Textos

| # | Pendência | Onde aparece | O que o Lucas precisa responder |
|---|---|---|---|
| 8 | **Bios individuais do time** | Quem Somos | Uma frase de credencial por pessoa, além do cargo. |
| 9 | **Bio final do fundador** | Lucas Galy | Validar a narrativa (estagiário → sistema digital → +R$1M → +R$10MM → ARQX) antes de publicar. |
| 10 | **Credenciais do fundador** | Lucas Galy | Formação, registro CAU e menções de mídia autorizadas. |
| 11 | **Blocos Estrutura × Crescimento** | Quem Somos | Conferir com o texto exato do deck (implementado com as frases oficiais da marca). |

## Formulário e canais

| # | Pendência | Onde aparece | O que o Lucas precisa responder |
|---|---|---|---|
| 12 | **Prazo de retorno "48h"** | Associar (sub + mensagem de sucesso) | O prazo real de resposta do time. |
| 13 | **Campos de qualificação** | Associar (formulário) | Lista final: tempo de atuação e faixas de faturamento estão como no deck? |
| 14 | **FAQ: precisa de escritório físico?** | Associar | Resposta oficial (hoje: "fale com nosso time"). |
| 15 | **FAQ: em quanto tempo vejo resultado?** | Associar | Resposta oficial sem promessa de prazo (hoje: "depende do ponto de partida"). |
| 16 | **Canal comercial oficial** | Rodapé, Contato | O WhatsApp +55 44 99103-7921 é o canal do site? Haverá contato@arqx.com.br? |
| 17 | **Instagram a linkar** | Rodapé, Contato, schema | @arquiteturacomlucas ou um @arqx próprio? |

## Técnicas (internas, não dependem do Lucas)

- **OG image em alta**: a atual foi gerada da fonte oficial (1200×630). Se a marca tiver
  arte própria, substituir `public/og/default.png` e `public/og/logo.png`.
- **Blog (Lote 4)**: adiado a pedido do operador. Ao ativar: recolocar o link nas três
  navegações (`lib/site.js`), adicionar rotas ao `sitemap.js` e rodar os 15 artigos da spec §5.4.
- **Domínio**: build usa `https://arqx-br.com.br`. Confirmar DNS + www→apex (já configurado
  no `vercel.json`).
- **LCP 3,4s no Lighthouse local** (meta CWV: <2,5s): em produção com CDN e compressão da
  Vercel tende a cair. Medir de novo no domínio real após o deploy.

## Como desligar as etiquetas no lançamento

```bash
NEXT_PUBLIC_SHOW_CONFIRM_TAGS=false npm run build
```

Itens ainda não confirmados deixam de aparecer; nunca são publicados como fato.
