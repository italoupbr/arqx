"use client";
/* Grid de projetos com filtro por categoria · mundo v2. As fotos são reais
   (enviadas pelo operador); nomes e créditos entram após confirmação. */
import { useState } from "react";

export default function V2ProjGrid({ itens }) {
  const cats = ["Todos", ...new Set(itens.map((i) => i.cat))];
  const [on, setOn] = useState("Todos");
  const vis = itens.filter((i) => on === "Todos" || i.cat === on);
  return (
    <>
      <div className="pfilters" role="group" aria-label="Filtrar projetos por categoria">
        {cats.map((c) => (
          <button key={c} type="button" className={`pfilter${on === c ? " on" : ""}`} onClick={() => setOn(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="pgrid">
        {vis.map((p, i) => (
          <figure className="folio-item" key={p.n} style={{ width: "auto" }}>
            <div className="ph"><img src={`/img/projetos/p${p.n}.webp`} alt={p.alt} loading={i < 3 ? "eager" : "lazy"} decoding="async" /></div>
            <figcaption className="meta"><span className="t">{p.cat}</span><span>{String(i + 1).padStart(2, "0")}</span></figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
