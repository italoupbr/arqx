"use client";
/* FX da home v2 · port fiel do JS do artefato aprovado pelo cliente:
   cursor custom, carrossel 3D coverflow com glare, magnetic, progress,
   nav shrink/tema, reveals, counters, timeline, parallax, FAQ, menu,
   modal e formulário. Diferença única: o submit agora grava de verdade
   em /api/candidatura (antes só fingia sucesso). */
import { useEffect } from "react";

export default function HomeV2Fx() {
  useEffect(() => {
    const root = document.getElementById("v2root");
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches || window.innerWidth < 900;
    const cleanups = [];
    const on = (el, ev, fn, opts) => { el.addEventListener(ev, fn, opts); cleanups.push(() => el.removeEventListener(ev, fn, opts)); };

    /* CURSOR */
    if (!isTouch) {
      const cur = root.querySelector(".cursor"), dot = root.querySelector(".cursor-dot");
      let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy, raf;
      on(window, "mousemove", (e) => { tx = e.clientX; ty = e.clientY; dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`; }, { passive: true });
      (function loop() { cx += (tx - cx) * 0.16; cy += (ty - cy) * 0.16; cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; raf = requestAnimationFrame(loop); })();
      cleanups.push(() => cancelAnimationFrame(raf));
      root.querySelectorAll("a,button,.magnetic,input,select,textarea,.faq-q,.sym,.layer").forEach((el) => {
        on(el, "mouseenter", () => cur.classList.add("is-hover"));
        on(el, "mouseleave", () => cur.classList.remove("is-hover"));
      });
      root.querySelectorAll(".folio-item,.hero-media,.def-media,.band").forEach((el) => {
        on(el, "mouseenter", () => cur.classList.add("is-view"));
        on(el, "mouseleave", () => cur.classList.remove("is-view"));
      });
      on(window, "mouseout", (e) => { if (!e.relatedTarget) { cur.style.opacity = 0; dot.style.opacity = 0; } });
      on(window, "mouseover", () => { cur.style.opacity = 1; dot.style.opacity = 1; });
    } else {
      const cur = root.querySelector(".cursor"), dot = root.querySelector(".cursor-dot");
      if (cur) cur.style.display = "none";
      if (dot) dot.style.display = "none";
    }

    /* HERO carrossel 3D */
    (function () {
      const stage = document.getElementById("heroStage");
      if (!stage) return;
      const cards = [...stage.querySelectorAll(".hero-card")];
      const idxEl = document.getElementById("heroIdx");
      const N = cards.length;
      let active = 0, timer = null;
      function layout() {
        cards.forEach((c, i) => {
          let off = i - active;
          if (off > N / 2) off -= N;
          if (off < -N / 2) off += N;
          const a = Math.abs(off);
          const tx = off * 44, tz = a === 0 ? 0 : -(240 + (a - 1) * 130), ry = off * -24, sc = a === 0 ? 1 : Math.max(0.62, 0.8 - (a - 1) * 0.09);
          const op = a === 0 ? 1 : a === 1 ? 0.5 : a === 2 ? 0.16 : 0;
          c.style.transform = `translate(-50%,-50%) translateX(${tx}%) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`;
          c.style.opacity = op;
          c.style.zIndex = String(30 - a);
        });
        if (idxEl) idxEl.textContent = ("0" + (active + 1)).slice(-2);
      }
      const go = (n) => { active = ((n % N) + N) % N; layout(); };
      const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
      const play = () => { stop(); if (reduce) return; timer = setInterval(() => go(active + 1), 3600); };
      cards.forEach((c, i) => on(c, "click", () => { if (i !== active) { go(i); play(); } }));
      on(document, "visibilitychange", () => (document.hidden ? stop() : play()));
      if (!isTouch) {
        const glare = stage.querySelector(".hero-glare"), sheen = stage.querySelector(".hero-sheen");
        on(stage, "mouseenter", () => { glare?.classList.add("lit"); sheen?.classList.add("lit"); });
        on(stage, "mouseleave", () => { glare?.classList.remove("lit"); sheen?.classList.remove("lit"); });
        on(stage, "mousemove", (e) => {
          const r = stage.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          glare?.style.setProperty("--gx", (x * 100).toFixed(1) + "%");
          glare?.style.setProperty("--gy", (y * 100).toFixed(1) + "%");
          sheen?.style.setProperty("--sx", ((1 - x) * 100).toFixed(1) + "%");
        }, { passive: true });
      }
      layout(); play();
      cleanups.push(stop);
    })();

    /* MAGNETIC */
    if (!isTouch && !reduce) {
      root.querySelectorAll(".magnetic").forEach((el) => {
        const str = el.classList.contains("node-cell") ? 8 : 14;
        on(el, "mousemove", (e) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${((e.clientX - (r.left + r.width / 2)) / r.width) * str}px,${((e.clientY - (r.top + r.height / 2)) / r.height) * str}px)`;
        });
        on(el, "mouseleave", () => { el.style.transform = "translate(0,0)"; });
      });
    }

    /* PROGRESS + NAV */
    const prog = document.getElementById("progress");
    const nav = document.getElementById("nav");
    const themed = [...root.querySelectorAll("[data-theme]")];
    function onScroll() {
      const h = document.documentElement;
      prog.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight) || 0})`;
      nav.classList.toggle("shrink", window.scrollY > 40);
      const y = nav.offsetHeight / 2 + 6;
      let found = "dark";
      for (const s of themed) { const r = s.getBoundingClientRect(); if (r.top <= y && r.bottom >= y) { found = s.getAttribute("data-theme"); break; } }
      nav.classList.toggle("on-light", found === "light");
    }
    on(window, "scroll", onScroll, { passive: true });
    on(window, "resize", onScroll);
    onScroll();

    /* REVEALS */
    const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    root.querySelectorAll(".reveal,.lines,.img-clip,.cmp").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* COUNTERS */
    function ac(el) {
      const target = parseFloat(el.getAttribute("data-count")), pad = parseInt(el.getAttribute("data-pad") || "0", 10), dur = 1500;
      let t0 = null;
      const f = (n) => { let s = Math.round(n).toString(); while (pad && s.length < pad) s = "0" + s; return s; };
      if (reduce) { el.textContent = f(target); return; }
      const st = (ts) => { if (!t0) t0 = ts; const p = Math.min((ts - t0) / dur, 1); el.textContent = f(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(st); };
      requestAnimationFrame(st);
    }
    const ioC = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { ac(e.target); ioC.unobserve(e.target); } }), { threshold: 0.5 });
    root.querySelectorAll("[data-count]").forEach((el) => ioC.observe(el));
    cleanups.push(() => ioC.disconnect());

    /* TIMELINE */
    const tl = document.getElementById("timeline"), tlP = document.getElementById("tlProgress");
    const tlI = [...root.querySelectorAll(".tl-item")];
    if (tl && tlP) {
      const onTL = () => {
        const r = tl.getBoundingClientRect(), vh = innerHeight;
        tlP.style.setProperty("--p", Math.max(0, Math.min((vh * 0.75 - r.top) / r.height, 1)));
        tlI.forEach((it) => it.classList.toggle("on", it.getBoundingClientRect().top < vh * 0.6));
      };
      on(window, "scroll", onTL, { passive: true });
      on(window, "resize", onTL);
      onTL();
    }

    /* PARALLAX */
    if (!reduce) {
      const plx = [...root.querySelectorAll("[data-parallax]")];
      const cov = [...root.querySelectorAll("[data-cover]")];
      const onPlx = () => {
        const vh = innerHeight;
        plx.forEach((el) => { const r = el.getBoundingClientRect(); el.style.transform = `translateY(${-(r.top + r.height / 2 - vh / 2) * parseFloat(el.getAttribute("data-parallax"))}px)`; });
        cov.forEach((el) => { const p = el.parentElement.getBoundingClientRect(); if (p.bottom < 0 || p.top > vh) return; el.style.transform = `translateY(${((p.top + p.height / 2 - vh / 2) / vh) * -60}px)`; });
      };
      on(window, "scroll", onPlx, { passive: true });
      on(window, "resize", onPlx);
      onPlx();
    }

    /* FAQ */
    root.querySelectorAll(".faq-item").forEach((item) => {
      const q = item.querySelector(".faq-q"), a = item.querySelector(".faq-a");
      on(q, "click", () => {
        const open = item.classList.contains("open");
        root.querySelectorAll(".faq-item.open").forEach((o) => { if (o !== item) { o.classList.remove("open"); o.querySelector(".faq-q").setAttribute("aria-expanded", "false"); o.querySelector(".faq-a").style.height = "0px"; } });
        if (open) { item.classList.remove("open"); q.setAttribute("aria-expanded", "false"); a.style.height = "0px"; }
        else { item.classList.add("open"); q.setAttribute("aria-expanded", "true"); a.style.height = a.firstElementChild.offsetHeight + "px"; }
      });
    });

    /* MENU */
    const burger = document.getElementById("burger");
    on(burger, "click", () => {
      const open = root.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    root.querySelectorAll(".mobile-menu a").forEach((a) => on(a, "click", () => { root.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); }));

    /* MODAL */
    const modal = document.getElementById("modal");
    let lastFocus = null;
    function openModal(e) {
      if (e) e.preventDefault();
      root.classList.remove("menu-open");
      lastFocus = document.activeElement;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
      setTimeout(() => modal.querySelector("#fname")?.focus(), 400);
    }
    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
      lastFocus?.focus();
    }
    root.querySelectorAll("[data-modal-open]").forEach((b) => on(b, "click", openModal));
    root.querySelectorAll("[data-modal-close]").forEach((b) => on(b, "click", closeModal));
    on(document, "keydown", (e) => {
      if (e.key === "Escape") {
        if (modal.classList.contains("open")) closeModal();
        if (root.classList.contains("menu-open")) { root.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); }
      }
      if (e.key === "Tab" && modal.classList.contains("open")) {
        const f = [...modal.querySelectorAll('a[href],button:not([disabled]),input,select,textarea')].filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    const revSel = document.getElementById("revenue"), revNotice = document.getElementById("revenueNotice");
    on(revSel, "change", () => revNotice.classList.toggle("show", revSel.value === "R$ 30k a 50k"));

    /* FORM · grava em /api/candidatura */
    const form = document.getElementById("applyForm");
    const formError = document.getElementById("formError");
    const submitBtn = document.getElementById("submitBtn");
    on(form, "submit", async (e) => {
      e.preventDefault();
      formError.classList.remove("show");
      let ok = true;
      form.querySelectorAll("input[required],select[required],textarea[required]").forEach((inp) => {
        const field = inp.closest(".field, .field-check");
        let bad = false;
        if (inp.type === "checkbox") bad = !inp.checked;
        else if (!inp.value.trim()) bad = true;
        if (inp.type === "email" && inp.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) bad = true;
        field.classList.toggle("invalid", bad);
        if (bad) ok = false;
      });
      if (!ok) { form.querySelector(".field.invalid input,.field.invalid select,.field.invalid textarea,.field-check.invalid input")?.focus(); return; }
      const d = Object.fromEntries(new FormData(form));
      submitBtn.disabled = true;
      submitBtn.firstChild.textContent = "Enviando ";
      try {
        const res = await fetch("/api/candidatura", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: `${d.fname} ${d.lname}`.trim(),
            email: d.email,
            whatsapp: d.whatsapp,
            cidade_uf: d.city,
            instagram: d.link,
            escritorio: d.office,
            faturamento_faixa: d.revenue,
            desafio: d.bottleneck,
            lgpd: true,
            website: d.website || "",
          }),
        });
        if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || `Erro ${res.status}`);
        document.getElementById("formWrap").style.display = "none";
        const succ = document.getElementById("successMsg");
        succ.classList.add("show");
        succ.querySelector(".btn").focus();
      } catch (err) {
        formError.textContent = `Não foi possível enviar: ${err.message}. Tente novamente ou fale conosco pelo Instagram.`;
        formError.classList.add("show");
      } finally {
        submitBtn.disabled = false;
        submitBtn.firstChild.textContent = "Enviar solicitação ";
      }
    });
    form.querySelectorAll("input,select,textarea").forEach((inp) => {
      const clear = () => inp.closest(".field, .field-check")?.classList.remove("invalid");
      on(inp, "input", clear);
      on(inp, "change", clear);
    });

    /* ANCHORS suaves */
    root.querySelectorAll('a[href^="#"]:not([data-modal-open])').forEach((a) => {
      on(a, "click", (e) => {
        const id = a.getAttribute("href");
        if (id.length > 1) {
          const t = document.querySelector(id);
          if (t) { e.preventDefault(); t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
        }
      });
    });

    return () => { cleanups.forEach((fn) => fn()); document.documentElement.style.overflow = ""; };
  }, []);

  return null;
}
