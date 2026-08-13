"use client";
/* Sistema de revisão pelo cliente (receita SISTEMA-APROVACAO, adaptada ao Next).
   A · sugestão de texto: selecionou → ✏️ Sugerir troca → grava em arqx_sugestoes.
   B · aprovação: 📋 Revisão → aprovar página + checklist ⬜🔵✅.
   C · marcação de área (design): 🖊 Marcar área → arrasta um retângulo sobre a
       página → comenta → grava em arqx_anotacoes (tipo caixa, coordenadas em %
       do documento + viewport_width, conforme a receita).
   Visitado marca sozinho; aprovar é manual. Desliga por NEXT_PUBLIC_REVIEW_WIDGET. */
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

/* PostgREST com Prefer: return=minimal responde 201/204 com corpo VAZIO.
   res.json() em corpo vazio explode ("Unexpected end of JSON input"): o
   bug que o cliente viu. Parse só quando há corpo. */
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
  const text = await res.text().catch(() => "");
  if (!res.ok) throw new Error(`${res.status} ${text}`.slice(0, 140));
  return text ? JSON.parse(text) : null;
}

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

  /* ── A: sugestão de texto ── */
  const [selBtn, setSelBtn] = useState(null);
  const selText = useRef("");
  const [sugOpen, setSugOpen] = useState(false);
  const [sugText, setSugText] = useState("");
  const [comentario, setComentario] = useState("");
  const [sugState, setSugState] = useState("idle");
  const [sugErr, setSugErr] = useState("");

  /* ── B: aprovação ── */
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("pagina");
  const [status, setStatus] = useState(null);
  const [todas, setTodas] = useState([]);
  const [sugestoes, setSugestoes] = useState([]);
  const [panelErr, setPanelErr] = useState("");

  /* ── C: marcação de área ── */
  const [annotMode, setAnnotMode] = useState(false);
  const [drag, setDrag] = useState(null); // {x0,y0,x1,y1} viewport px durante o arrasto
  const [annotDraft, setAnnotDraft] = useState(null); // caixa em % do documento
  const [annotComment, setAnnotComment] = useState("");
  const [annotState, setAnnotState] = useState("idle");
  const [annotErr, setAnnotErr] = useState("");
  const [anotacoes, setAnotacoes] = useState([]);
  const [docH, setDocH] = useState(0);

  useEffect(() => {
    if (!ENABLED) return;
    const upd = () => setDocH(document.documentElement.scrollHeight);
    upd();
    window.addEventListener("resize", upd);
    const t = setTimeout(upd, 1500); // depois das fontes/imagens
    return () => { window.removeEventListener("resize", upd); clearTimeout(t); };
  }, [pathname]);

  useEffect(() => {
    if (!ENABLED) return;
    function onUp(e) {
      if (annotMode) return;
      if (e.target.closest && e.target.closest("[data-review-widget]")) return;
      setTimeout(() => {
        const sel = window.getSelection();
        const t = sel ? sel.toString().trim() : "";
        if (t.length > 2 && t.length <= 2000 && sel.rangeCount) {
          const r = sel.getRangeAt(0).getBoundingClientRect();
          selText.current = t;
          setSelBtn({ x: Math.min(r.right, window.innerWidth - 160), y: r.bottom + 8 });
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
  }, [sugOpen, annotMode]);

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
          page_slug: slug, page_path: pathname || "/", page_title: pageTitle, page_url: location.href,
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

  useEffect(() => {
    if (!ENABLED) return;
    sb(`arqx_page_status?page_slug=eq.${slug}`, { method: "PATCH", body: JSON.stringify({ visitado: true }) }).catch(() => {});
  }, [slug]);

  async function carregar() {
    setPanelErr("");
    try {
      const [st, all, sug, ann] = await Promise.all([
        sb(`arqx_page_status?page_slug=eq.${slug}&select=visitado,aprovado,aprovado_em`),
        sb(`arqx_page_status?select=page_slug,visitado,aprovado&order=page_slug`),
        sb(`arqx_sugestoes?page_slug=eq.${slug}&select=id,texto_selecionado,comentario,status,created_at&order=created_at.desc&limit=30`),
        sb(`arqx_anotacoes?page_slug=eq.${slug}&select=id,x,y,largura,altura,comentario,status,viewport_width&order=created_at.asc&limit=50`),
      ]);
      setStatus(st[0] || null);
      setTodas(all);
      setSugestoes(sug);
      setAnotacoes(ann);
    } catch (e) {
      setPanelErr(`Erro ao carregar: ${e.message}`);
    }
  }

  useEffect(() => {
    if (open) carregar();
  }, [open, slug]);

  // as caixas ficam visíveis também fora do painel
  useEffect(() => {
    if (!ENABLED) return;
    sb(`arqx_anotacoes?page_slug=eq.${slug}&select=id,x,y,largura,altura,comentario,status,viewport_width&order=created_at.asc&limit=50`)
      .then(setAnotacoes)
      .catch(() => {});
  }, [slug]);

  async function toggleAprovar() {
    const alvo = !(status && status.aprovado);
    try {
      await sb(`arqx_page_status?page_slug=eq.${slug}`, { method: "PATCH", body: JSON.stringify({ aprovado: alvo }) });
      await carregar();
    } catch (e) {
      setPanelErr(`Não foi possível salvar a aprovação: ${e.message}`);
    }
  }

  /* ── C: arrasto da caixa ── */
  function annotDown(e) {
    e.preventDefault();
    const x = e.clientX, y = e.clientY;
    setDrag({ x0: x, y0: y, x1: x, y1: y });
  }
  function annotMove(e) {
    if (!drag) return;
    setDrag({ ...drag, x1: e.clientX, y1: e.clientY });
  }
  function annotUp() {
    if (!drag) return;
    const w = Math.abs(drag.x1 - drag.x0), h = Math.abs(drag.y1 - drag.y0);
    if (w < 14 || h < 14) { setDrag(null); return; } // clique acidental
    const doc = document.documentElement;
    const left = Math.min(drag.x0, drag.x1) + window.scrollX;
    const top = Math.min(drag.y0, drag.y1) + window.scrollY;
    setAnnotDraft({
      x: (left / doc.scrollWidth) * 100,
      y: (top / doc.scrollHeight) * 100,
      largura: (w / doc.scrollWidth) * 100,
      altura: (h / doc.scrollHeight) * 100,
    });
    setAnnotComment("");
    setAnnotState("idle");
    setDrag(null);
    setAnnotMode(false);
  }

  async function enviarAnotacao() {
    if (!annotComment.trim()) {
      setAnnotErr("Descreva a sugestão para esta área.");
      setAnnotState("error");
      return;
    }
    setAnnotState("sending");
    try {
      await sb("arqx_anotacoes", {
        method: "POST",
        body: JSON.stringify({
          page_slug: slug, page_title: pageTitle, tipo: "caixa",
          x: annotDraft.x, y: annotDraft.y, largura: annotDraft.largura, altura: annotDraft.altura,
          comentario: annotComment.trim().slice(0, 2000),
          viewport_width: window.innerWidth,
        }),
      });
      setAnnotState("idle");
      setAnnotDraft(null);
      sb(`arqx_anotacoes?page_slug=eq.${slug}&select=id,x,y,largura,altura,comentario,status,viewport_width&order=created_at.asc&limit=50`).then(setAnotacoes).catch(() => {});
    } catch (e) {
      setAnnotErr(`Não foi possível salvar: ${e.message}`);
      setAnnotState("error");
    }
  }

  async function removerAnotacao(id) {
    try {
      await sb(`arqx_anotacoes?id=eq.${id}`, { method: "DELETE" });
      setAnotacoes(anotacoes.filter((a) => a.id !== id));
    } catch (e) {
      setPanelErr(`Não foi possível remover: ${e.message}`);
    }
  }

  if (!ENABLED) return null;

  const aprovadas = todas.filter((t) => t.aprovado).length;

  return (
    <div data-review-widget>
      {/* caixas salvas, sobre a página */}
      {docH > 0 && anotacoes.length > 0 && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: docH, pointerEvents: "none", zIndex: 9980 }} aria-hidden="true">
          {anotacoes.map((a, i) => (
            <div key={a.id} style={{ position: "absolute", left: `${a.x}%`, top: `${a.y}%`, width: `${a.largura}%`, height: `${a.altura}%`, border: "2px dashed #e0b040", background: "rgba(224,176,64,.08)", borderRadius: 4 }}>
              <span style={{ position: "absolute", top: -12, left: -12, width: 24, height: 24, borderRadius: "50%", background: "#e0b040", color: "#0a0908", fontFamily: "Delta, Arial", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* modo de marcação: overlay de arrasto */}
      {annotMode && (
        <div
          data-annot-overlay
          onPointerDown={annotDown}
          onPointerMove={annotMove}
          onPointerUp={annotUp}
          style={{ position: "fixed", inset: 0, zIndex: 9995, cursor: "crosshair", touchAction: "none", background: "rgba(10,9,8,.15)" }}
        >
          <div style={{ position: "fixed", top: 12, left: "50%", transform: "translateX(-50%)", background: "#e0b040", color: "#0a0908", fontFamily: "Delta, Arial", textTransform: "uppercase", letterSpacing: ".1em", fontSize: 11, padding: "8px 14px", borderRadius: 999, display: "flex", gap: 12, alignItems: "center" }}>
            Arraste para marcar a área
            <button type="button" onPointerDown={(e) => e.stopPropagation()} onClick={() => { setAnnotMode(false); setDrag(null); }} style={{ background: "#0a0908", color: "#faf6eb", border: "none", borderRadius: 999, padding: "4px 10px", cursor: "pointer", fontSize: 10 }}>
              Cancelar
            </button>
          </div>
          {drag && (
            <div style={{ position: "fixed", left: Math.min(drag.x0, drag.x1), top: Math.min(drag.y0, drag.y1), width: Math.abs(drag.x1 - drag.x0), height: Math.abs(drag.y1 - drag.y0), border: "2px dashed #e0b040", background: "rgba(224,176,64,.12)" }} />
          )}
        </div>
      )}

      {/* diálogo da anotação de área */}
      {annotDraft && (
        <div style={{ ...S.panel, bottom: "auto", top: "12vh" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={S.label}>Sugestão de design · {pageTitle}</span>
            <button type="button" onClick={() => setAnnotDraft(null)} style={{ background: "none", border: "none", color: "#faf6eb", fontSize: 20, cursor: "pointer" }}>×</button>
          </div>
          <p style={{ margin: "0 0 10px", color: "#a09a92" }}>Área marcada. O que você quer mudar aqui?</p>
          <textarea
            style={S.ta} maxLength={2000} autoFocus value={annotComment}
            onChange={(e) => setAnnotComment(e.target.value)}
            placeholder="Ex.: aumentar a foto, trocar o fundo, arredondar este bloco…"
          />
          {annotState === "error" && <div style={S.err}>{annotErr}</div>}
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button type="button" style={S.btn} onClick={enviarAnotacao} disabled={annotState === "sending"}>
              {annotState === "sending" ? "Enviando…" : "Salvar marcação"}
            </button>
            <button type="button" style={{ ...S.btn, ...S.ghost }} onClick={() => setAnnotDraft(null)}>Cancelar</button>
          </div>
        </div>
      )}

      {/* botão da seleção (A) */}
      {selBtn && !sugOpen && !annotMode && (
        <button
          type="button" onClick={openSugestao}
          style={{ ...S.btn, position: "fixed", zIndex: 9991, left: selBtn.x, top: Math.min(selBtn.y, window.innerHeight - 60), boxShadow: "0 8px 24px -8px rgba(0,0,0,.6)" }}
        >
          ✏️ Sugerir troca
        </button>
      )}

      {/* painel da sugestão de texto */}
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
                style={{ ...S.ta, marginTop: 6 }} maxLength={2000} value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Escreva a nova versão ou a orientação da mudança" autoFocus
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

      {/* botão fixo (B) */}
      <button
        type="button" onClick={() => setOpen(!open)} aria-label="Abrir painel de revisão"
        style={{
          ...S.btn, position: "fixed", zIndex: 9989, right: 16, bottom: 84,
          borderRadius: 999, padding: "12px 18px", boxShadow: "0 8px 24px -8px rgba(0,0,0,.6)",
          background: "#e0b040", display: open || annotMode ? "none" : "block",
        }}
      >
        📋 Revisão {todas.length ? `· ${aprovadas}/${PAGES.length}` : ""}
      </button>

      {/* painel de revisão */}
      {open && !annotMode && (
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

              <button type="button" style={{ ...S.btn, width: "100%", marginTop: 10, background: "#e0b040" }}
                onClick={() => { setOpen(false); setAnnotMode(true); }}>
                🖊 Marcar área (sugestão de design)
              </button>

              <p style={{ margin: "14px 0 0", color: "#a09a92", lineHeight: 1.55 }}>
                Para texto: selecione o trecho e toque em <strong style={{ color: "#faf6eb" }}>✏️ Sugerir troca</strong>.<br />
                Para design: use <strong style={{ color: "#faf6eb" }}>🖊 Marcar área</strong> e arraste sobre a região.
              </p>

              {anotacoes.length > 0 && (
                <>
                  <div style={{ ...S.label, margin: "16px 0 8px" }}>Marcações de design ({anotacoes.length})</div>
                  {anotacoes.map((a, i) => (
                    <div key={a.id} style={{ borderTop: "1px solid rgba(250,246,235,.12)", padding: "10px 0", display: "flex", gap: 10 }}>
                      <span style={{ flex: "none", width: 22, height: 22, borderRadius: "50%", background: "#e0b040", color: "#0a0908", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: "#faf6eb" }}>{a.comentario.slice(0, 140)}</div>
                        <div style={{ ...S.label, marginTop: 4 }}>{a.status}</div>
                      </div>
                      <button type="button" onClick={() => removerAnotacao(a.id)} title="Remover marcação"
                        style={{ background: "none", border: "none", color: "#7e7e7e", cursor: "pointer", fontSize: 14 }}>🗑</button>
                    </div>
                  ))}
                </>
              )}

              {sugestoes.length > 0 && (
                <>
                  <div style={{ ...S.label, margin: "16px 0 8px" }}>Sugestões de texto ({sugestoes.length})</div>
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
