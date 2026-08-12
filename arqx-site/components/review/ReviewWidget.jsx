"use client";
/* Sistema de revisão pelo cliente (receita SISTEMA-APROVACAO, adaptada ao Next).
   Duas classes num componente:
   A · sugestão de texto: selecionou → botão flutuante → painel com o trecho
       e "o que você quer no lugar" → grava em arqx_sugestoes.
   B · aprovação: botão fixo → painel com "esta página" (toggle aprovar +
       sugestões já feitas) e "todas as páginas" (checklist ⬜🔵✅ + navegação).
   Visitado marca sozinho ao abrir a página; aprovar é sempre manual.
   Anotações visuais (pin/caixa/caneta) ficaram de fora por decisão: no Mais60
   o cliente fez 63 sugestões de texto e zero anotações visuais.
   Liga/desliga por NEXT_PUBLIC_REVIEW_WIDGET (some no site final). */
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const ENABLED = process.env.NEXT_PUBLIC_REVIEW_WIDGET !== "false" && SB_URL && SB_KEY;

const PAGES = [
  ["home", "Home", "/"],
  ["metodo-x", "Método X™", "/metodo-x"],
  ["associar", "Seja um associado", "/associar"],
  ["portfolio", "Portfólio", "/portfolio"],
  ["quem-somos", "Quem somos", "/quem-somos"],
  ["lucas-galy", "Lucas Galy", "/lucas-galy"],
  ["manifesto", "Manifesto", "/manifesto"],
  ["contato", "Contato", "/contato"],
  ["politica-de-privacidade", "Política de Privacidade", "/politica-de-privacidade"],
];

function slugFromPath(p) {
  if (!p || p === "/") return "home";
  return p.replace(/^\/+|\/+$/g, "");
}

async function sb(path, opts = {}) {
  const res = await fetch(`${SB_URL}/rest/v1/${path}`, {
    ...opts,
    headers: {
      apikey: SB_KEY,
      Authorization: `Bearer ${SB_KEY}`,
      "Content-Type": "application/json",
      Prefer: opts.method && opts.method !== "GET" ? "return=minimal" : undefined,
      ...opts.headers,
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text().catch(() => "")}`.slice(0, 140));
  return res.status === 204 ? null : res.json();
}

/* ── estilos base do widget (inline, isolados do site) ── */
const S = {
  panel: {
    position: "fixed", zIndex: 9990, right: 16, bottom: 84, width: "min(380px, calc(100vw - 32px))",
    maxHeight: "min(560px, 72vh)", overflowY: "auto", background: "#1a1715",
    border: "1px solid rgba(250,246,235,.2)", borderRadius: 14, boxShadow: "0 24px 60px -16px rgba(0,0,0,.75)",
    color: "#faf6eb", fontFamily: "Inter, sans-serif", fontSize: 13, padding: 18,
  },
  label: { fontFamily: "Delta, Arial", textTransform: "uppercase", letterSpacing: ".16em", fontSize: 10.5, color: "#a09a92" },
  btn: {
    fontFamily: "Delta, Arial", textTransform: "uppercase", letterSpacing: ".1em", fontSize: 11.5, fontWeight: 500,
    background: "#faf6eb", color: "#0a0908", border: "none", borderRadius: 6, padding: "10px 16px", cursor: "pointer",
  },
  ghost: { background: "transparent", color: "#faf6eb", border: "1px solid rgba(250,246,235,.28)" },
  ta: {
    width: "100%", boxSizing: "border-box", background: "#221e1b", color: "#faf6eb",
    border: "1px solid rgba(250,246,235,.2)", borderRadius: 6, padding: 10, fontFamily: "Inter, sans-serif",
    fontSize: 13, minHeight: 84, resize: "vertical",
  },
  err: { color: "#ff9b8e", background: "rgba(168,87,76,.15)", border: "1px solid rgba(168,87,76,.4)", borderRadius: 6, padding: "8px 10px", marginTop: 10 },
};

export default function ReviewWidget() {
  const pathname = usePathname();
  const router = useRouter();
  const slug = slugFromPath(pathname);
  const pageTitle = (PAGES.find((p) => p[0] === slug) || [])[1] || slug;

  /* ── Classe A: sugestão de texto ── */
  const [selBtn, setSelBtn] = useState(null); // {x,y}
  const selText = useRef("");
  const [sugOpen, setSugOpen] = useState(false);
  const [sugText, setSugText] = useState("");
  const [comentario, setComentario] = useState("");
  const [sugState, setSugState] = useState("idle");
  const [sugErr, setSugErr] = useState("");

  useEffect(() => {
    if (!ENABLED) return;
    function onUp(e) {
      if (e.target.closest && e.target.closest("[data-review-widget]")) return;
      setTimeout(() => {
        const sel = window.getSelection();
        const t = sel ? sel.toString().trim() : "";
        if (t.length > 2 && t.length <= 2000 && sel.rangeCount) {
          const r = sel.getRangeAt(0).getBoundingClientRect();
          selText.current = t;
          setSelBtn({ x: Math.min(r.right, window.innerWidth - 150), y: r.bottom + 8 });
        } else if (!sugOpen) {
          setSelBtn(null);
        }
      }, 10);
    }
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);
    return () => {
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
    };
  }, [sugOpen]);

  function openSugestao() {
    setSugText(selText.current);
    setComentario("");
    setSugState("idle");
    setSugOpen(true);
    setSelBtn(null);
  }

  async function enviarSugestao() {
    if (!comentario.trim()) {
      setSugErr("Escreva o que você quer no lugar.");
      setSugState("error");
      return;
    }
    setSugState("sending");
    try {
      await sb("arqx_sugestoes", {
        method: "POST",
        body: JSON.stringify({
          page_slug: slug,
          page_path: pathname || "/",
          page_title: pageTitle,
          page_url: location.href,
          texto_selecionado: sugText.slice(0, 2000),
          comentario: comentario.trim().slice(0, 2000),
          user_agent: navigator.userAgent.slice(0, 250),
        }),
      });
      setSugState("ok");
    } catch (e) {
      setSugErr(`Não foi possível salvar: ${e.message}`);
      setSugState("error");
    }
  }

  /* ── Classe B: aprovação + checklist ── */
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("pagina");
  const [status, setStatus] = useState(null); // linha desta página
  const [todas, setTodas] = useState([]);
  const [sugestoes, setSugestoes] = useState([]);
  const [panelErr, setPanelErr] = useState("");

  // visitado = true ao carregar cada página (aprovado nunca é tocado aqui)
  useEffect(() => {
    if (!ENABLED) return;
    sb(`arqx_page_status?page_slug=eq.${slug}`, { method: "PATCH", body: JSON.stringify({ visitado: true }) }).catch(() => {});
  }, [slug]);

  async function carregar() {
    setPanelErr("");
    try {
      const [st, all, sug] = await Promise.all([
        sb(`arqx_page_status?page_slug=eq.${slug}&select=visitado,aprovado,aprovado_em`),
        sb(`arqx_page_status?select=page_slug,visitado,aprovado&order=page_slug`),
        sb(`arqx_sugestoes?page_slug=eq.${slug}&select=id,texto_selecionado,comentario,status,created_at&order=created_at.desc&limit=30`),
      ]);
      setStatus(st[0] || null);
      setTodas(all);
      setSugestoes(sug);
    } catch (e) {
      setPanelErr(`Erro ao carregar: ${e.message}`);
    }
  }

  useEffect(() => {
    if (open) carregar();
  }, [open, slug]);

  async function toggleAprovar() {
    const alvo = !(status && status.aprovado);
    try {
      await sb(`arqx_page_status?page_slug=eq.${slug}`, { method: "PATCH", body: JSON.stringify({ aprovado: alvo }) });
      await carregar();
    } catch (e) {
      setPanelErr(`Não foi possível salvar a aprovação: ${e.message}`);
    }
  }

  if (!ENABLED) return null;

  const aprovadas = todas.filter((t) => t.aprovado).length;

  return (
    <div data-review-widget>
      {/* botão da seleção (classe A) */}
      {selBtn && !sugOpen && (
        <button
          type="button"
          onClick={openSugestao}
          style={{ ...S.btn, position: "fixed", zIndex: 9991, left: selBtn.x, top: Math.min(selBtn.y, window.innerHeight - 60), boxShadow: "0 8px 24px -8px rgba(0,0,0,.6)" }}
        >
          ✏️ Sugerir troca
        </button>
      )}

      {/* painel da sugestão */}
      {sugOpen && (
        <div style={{ ...S.panel, bottom: "auto", top: "10vh" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={S.label}>Sugerir alteração · {pageTitle}</span>
            <button type="button" onClick={() => setSugOpen(false)} style={{ background: "none", border: "none", color: "#faf6eb", fontSize: 20, cursor: "pointer" }}>×</button>
          </div>
          {sugState === "ok" ? (
            <div>
              <p style={{ margin: "6px 0 14px" }}>✅ Sugestão registrada. Obrigado!</p>
              <button type="button" style={{ ...S.btn, ...S.ghost }} onClick={() => setSugOpen(false)}>Fechar</button>
            </div>
          ) : (
            <>
              <div style={S.label}>Texto do site</div>
              <blockquote style={{ margin: "6px 0 14px", padding: "8px 10px", borderLeft: "2px solid #a58d7e", background: "#221e1b", borderRadius: 4, maxHeight: 90, overflowY: "auto", color: "#cecece" }}>
                {sugText}
              </blockquote>
              <div style={S.label}>O que você quer no lugar</div>
              <textarea
                style={{ ...S.ta, marginTop: 6 }}
                maxLength={2000}
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Escreva a nova versão ou a orientação da mudança"
                autoFocus
              />
              {sugState === "error" && <div style={S.err}>{sugErr}</div>}
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button type="button" style={S.btn} onClick={enviarSugestao} disabled={sugState === "sending"}>
                  {sugState === "sending" ? "Enviando…" : "Enviar sugestão"}
                </button>
                <button type="button" style={{ ...S.btn, ...S.ghost }} onClick={() => setSugOpen(false)}>Cancelar</button>
              </div>
            </>
          )}
        </div>
      )}

      {/* botão fixo (classe B) */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir painel de revisão"
        style={{
          ...S.btn, position: "fixed", zIndex: 9989, right: 16, bottom: 84,
          borderRadius: 999, padding: "12px 18px", boxShadow: "0 8px 24px -8px rgba(0,0,0,.6)",
          background: "#e0b040", display: open ? "none" : "block",
        }}
      >
        📋 Revisão {todas.length ? `· ${aprovadas}/${PAGES.length}` : ""}
      </button>

      {/* painel de revisão */}
      {open && (
        <div style={S.panel}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <span style={S.label}>Revisão do site</span>
            <button type="button" onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#faf6eb", fontSize: 20, cursor: "pointer" }}>×</button>
          </div>

          <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
            {[["pagina", "Esta página"], ["todas", `Todas (${aprovadas}/${PAGES.length} ✅)`]].map(([k, l]) => (
              <button key={k} type="button" onClick={() => setTab(k)}
                style={{ ...S.btn, ...(tab === k ? {} : S.ghost), padding: "8px 12px", fontSize: 10.5 }}>
                {l}
              </button>
            ))}
          </div>

          {panelErr && <div style={S.err}>{panelErr}</div>}

          {tab === "pagina" && (
            <div>
              <p style={{ margin: "0 0 10px", color: "#cecece" }}>{pageTitle}</p>
              <label style={{ display: "flex", gap: 10, alignItems: "center", cursor: "pointer", padding: "10px 12px", background: status?.aprovado ? "rgba(127,138,106,.18)" : "#221e1b", border: "1px solid rgba(250,246,235,.16)", borderRadius: 8 }}>
                <input type="checkbox" checked={!!status?.aprovado} onChange={toggleAprovar} style={{ width: 18, height: 18, accentColor: "#7f8a6a" }} />
                <span>{status?.aprovado ? "Página aprovada ✅" : "Aprovar esta página"}</span>
              </label>
              <p style={{ margin: "12px 0 6px" }} className="arqx-label">
                <span style={S.label}>Como sugerir mudanças de texto</span>
              </p>
              <p style={{ margin: 0, color: "#a09a92", lineHeight: 1.55 }}>
                Selecione qualquer trecho de texto da página e toque em <strong style={{ color: "#faf6eb" }}>✏️ Sugerir troca</strong>.
              </p>
              {sugestoes.length > 0 && (
                <>
                  <div style={{ ...S.label, margin: "16px 0 8px" }}>Sugestões nesta página ({sugestoes.length})</div>
                  {sugestoes.map((s) => (
                    <div key={s.id} style={{ borderTop: "1px solid rgba(250,246,235,.12)", padding: "10px 0" }}>
                      <div style={{ color: "#7e7e7e", textDecoration: "line-through", fontSize: 12 }}>{s.texto_selecionado.slice(0, 90)}</div>
                      <div style={{ color: "#faf6eb", marginTop: 4 }}>{s.comentario.slice(0, 140)}</div>
                      <div style={{ ...S.label, marginTop: 4 }}>{s.status}</div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {tab === "todas" && (
            <div>
              {PAGES.map(([s, titulo, href]) => {
                const st = todas.find((t) => t.page_slug === s);
                const icone = st?.aprovado ? "✅" : st?.visitado ? "🔵" : "⬜";
                return (
                  <a key={s} href={href}
                    onClick={(e) => { e.preventDefault(); setOpen(false); router.push(href); }}
                    style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 4px", borderTop: "1px solid rgba(250,246,235,.12)", color: s === slug ? "#faf6eb" : "#cecece", textDecoration: "none", cursor: "pointer" }}>
                    <span>{icone}</span>
                    <span style={{ flex: 1 }}>{titulo}</span>
                    {s === slug && <span style={S.label}>atual</span>}
                  </a>
                );
              })}
              <p style={{ color: "#a09a92", marginTop: 12, lineHeight: 1.5 }}>
                ⬜ não visitada · 🔵 visitada · ✅ aprovada.
                {aprovadas < PAGES.length && ` Faltam ${PAGES.length - aprovadas} páginas para você aprovar.`}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
