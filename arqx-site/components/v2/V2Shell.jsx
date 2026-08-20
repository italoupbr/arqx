/* Chrome do mundo v2 · nav com rotas reais, menu mobile, footer e o modal
   de candidatura compartilhado. Toda página v2 renderiza dentro do shell;
   os comportamentos (cursor, reveals, modal, form) vivem em V2Fx. */
import V2Fx from "@/components/v2/V2Fx";

/* Navegação · máx. 5 itens + CTA (regra do operador). "A ARQX" agrupa as
   âncoras institucionais num dropdown; Associação tem página E CTA. */
const DROP = [
  ["/#sobre", "O que é a ARQX"],
  ["/#estrutura", "A Estrutura"],
  ["/#rede", "A Rede"],
  ["/quem-somos", "Quem Somos"],
];
const NAV = [
  ["/portfolio", "Projetos"],
  ["/blog", "Blog"],
  ["/associar", "Associação"],
  ["/contato", "Contato"],
];
const SHEET = [
  ["/", "Início"],
  ["/#sobre", "A ARQX"],
  ["/#estrutura", "Estrutura"],
  ["/portfolio", "Projetos"],
  ["/blog", "Blog"],
  ["/quem-somos", "Quem Somos"],
  ["/associar", "Associação"],
  ["/contato", "Contato"],
];

const TabIcon = {
  inicio: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20" aria-hidden="true"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>,
  projetos: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1" /></svg>,
  associar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" aria-hidden="true"><path d="M12 4v16M4 12h16" /></svg>,
  blog: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20" aria-hidden="true"><path d="M5 4h14v16H5z" /><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" /></svg>,
  menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>,
};

export default function V2Shell({ children, active = "" }) {
  const dropActive = DROP.some(([h]) => h === active);
  return (
    <div className="v2" id="v2root">
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>
      <div className="grain" aria-hidden="true"></div>
      <div className="progress" id="progress" aria-hidden="true"></div>
      <div className="cursor" aria-hidden="true"></div>
      <div className="cursor-dot" aria-hidden="true"></div>

      <header className="nav" id="nav">
        <div className="nav-inner">
          <a className="brand magnetic" href="/" aria-label="ARQX · início">arqx<sup>®</sup></a>
          <nav className="nav-links" aria-label="Principal">
            <div className={`nav-drop${dropActive ? " active-parent" : ""}`} id="navDrop">
              <button type="button" className={`nav-drop-btn${dropActive ? " active" : ""}`} aria-expanded="false" aria-controls="navDropPanel" data-drop-toggle>
                A ARQX <span className="dd-car" aria-hidden="true">▾</span>
              </button>
              <div className="nav-drop-panel" id="navDropPanel" role="menu">
                {DROP.map(([href, label]) => (
                  <a key={href} href={href} role="menuitem" className={active === href ? "active" : undefined}>{label}</a>
                ))}
              </div>
            </div>
            {NAV.map(([href, label]) => (
              <a key={href} href={href} className={active === href ? "active" : undefined} aria-current={active === href ? "page" : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <a href="/associar" className="nav-cta" data-modal-open>Solicitar associação <span className="ar">→</span></a>
            <button className="burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileMenu" data-menu-toggle><span></span><span></span></button>
          </div>
        </div>
      </header>

      <nav className="mobile-menu" id="mobileMenu" aria-label="Menu completo">
        {SHEET.map(([href, label], i) => (
          <a key={href} href={href}><span className="n">{String(i + 1).padStart(2, "0")}</span> {label}</a>
        ))}
        <div className="mm-foot"><a href="/associar" className="mm-cta" data-modal-open>Solicitar associação <span>→</span></a></div>
      </nav>

      {/* Tab bar inferior · mobile (<860px). 5 abas, CTA elevado no centro. */}
      <nav className="tabbar" aria-label="Navegação inferior">
        <a href="/" className={`tab${active === "/" ? " on" : ""}`} aria-current={active === "/" ? "page" : undefined}>
          {TabIcon.inicio}<span>Início</span>
        </a>
        <a href="/portfolio" className={`tab${active === "/portfolio" ? " on" : ""}`} aria-current={active === "/portfolio" ? "page" : undefined}>
          {TabIcon.projetos}<span>Projetos</span>
        </a>
        <a href="/associar" className={`tab tab-cta${active === "/associar" ? " on" : ""}`} aria-current={active === "/associar" ? "page" : undefined}>
          <span className="tc-disc">{TabIcon.associar}</span><span>Associar</span>
        </a>
        <a href="/blog" className={`tab${active === "/blog" ? " on" : ""}`} aria-current={active === "/blog" ? "page" : undefined}>
          {TabIcon.blog}<span>Blog</span>
        </a>
        <button type="button" className="tab" aria-label="Abrir menu completo" aria-controls="mobileMenu" data-menu-toggle>
          {TabIcon.menu}<span>Menu</span>
        </button>
      </nav>

      <div id="conteudo">{children}</div>

      <footer className="footer" data-theme="light">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <div className="fb">arqx<sup>®</sup></div>
              <div className="fbs">Growth Partner for Architecture Firms</div>
            </div>
            <div className="foot-col">
              <h4>Navegação</h4>
              <a href="/#sobre">A ARQX</a>
              <a href="/portfolio">Projetos</a>
              <a href="/blog">Blog</a>
              <a href="/quem-somos">Quem Somos</a>
              <a href="/contato">Contato</a>
            </div>
            <div className="foot-col">
              <h4>Rede</h4>
              <a href="/#rede">Rede ARQX</a>
              <a href="/associar">Associação</a>
              <a href="https://www.instagram.com/arquiteturacomlucas/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="/politica-de-privacidade">Política de Privacidade</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 arqx®. Todos os direitos reservados.</span>
            <span className="em">More projects. Better business.</span>
            <span>The business behind the architecture</span>
          </div>
        </div>
      </footer>

      {/* Modal de candidatura · compartilhado por todas as páginas */}
      <div className="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal-bg" data-modal-close></div>
        <div className="modal-panel">
          <div className="modal-top">
            <span className="eyebrow">Solicitação de análise</span>
            <button className="modal-close" data-modal-close aria-label="Fechar">Fechar <span>×</span></button>
          </div>
          <div className="m-form-wrap" id="formWrap">
            <h3 id="modalTitle">Solicite a análise do seu <span className="serif">escritório.</span></h3>
            <p className="m-sub">Preencha os campos abaixo. Novos escritórios são avaliados antes da entrada na rede ARQX.</p>
            <div className="m-notice" id="revenueNotice">O perfil principal de associação da ARQX são escritórios acima de R$ 50 mil/mês. Você ainda pode enviar a solicitação: avaliaremos o seu contexto.</div>
            <form id="applyForm" noValidate>
              <div className="field half"><label htmlFor="fname">Nome</label><input type="text" id="fname" name="fname" autoComplete="given-name" required /><span className="err">Obrigatório</span></div>
              <div className="field half"><label htmlFor="lname">Sobrenome</label><input type="text" id="lname" name="lname" autoComplete="family-name" required /><span className="err">Obrigatório</span></div>
              <div className="field"><label htmlFor="office">Nome do escritório</label><input type="text" id="office" name="office" required /><span className="err">Obrigatório</span></div>
              <div className="field"><label htmlFor="link">Instagram / Site</label><input type="text" id="link" name="link" placeholder="@seuescritorio" required /><span className="err">Obrigatório</span></div>
              <div className="field half"><label htmlFor="city">Cidade</label><input type="text" id="city" name="city" autoComplete="address-level2" required /><span className="err">Obrigatório</span></div>
              <div className="field half"><label htmlFor="whatsapp">WhatsApp</label><input type="tel" id="whatsapp" name="whatsapp" autoComplete="tel" placeholder="(00) 00000-0000" required /><span className="err">Obrigatório</span></div>
              <div className="field"><label htmlFor="email">E-mail</label><input type="email" id="email" name="email" autoComplete="email" required /><span className="err">E-mail inválido</span></div>
              <div className="field"><label htmlFor="revenue">Faixa de faturamento mensal</label>
                <select id="revenue" name="revenue" required defaultValue="">
                  <option value="" disabled>Selecione</option>
                  <option value="R$ 30k a 50k">R$ 30k a 50k</option>
                  <option value="R$ 50k a 100k">R$ 50k a 100k</option>
                  <option value="R$ 100k a 200k">R$ 100k a 200k</option>
                  <option value="R$ 200k a 500k">R$ 200k a 500k</option>
                  <option value="R$ 500k+">R$ 500k+</option>
                </select><span className="err">Selecione uma faixa</span>
              </div>
              <div className="field"><label htmlFor="bottleneck">Qual é hoje o principal gargalo de crescimento do seu escritório?</label><textarea id="bottleneck" name="bottleneck" required></textarea><span className="err">Obrigatório</span></div>
              <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <label className="field-check" id="lgpdField">
                <input type="checkbox" id="lgpd" name="lgpd" required />
                <span>Li e aceito a <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>. Autorizo o uso dos meus dados para contato comercial.</span>
              </label>
              <div className="m-error" id="formError"></div>
              <button type="submit" className="btn magnetic" id="submitBtn">Enviar solicitação <span className="ar">→</span></button>
              <p className="m-fine">ARQX® · Processo sujeito à análise de perfil</p>
            </form>
          </div>
          <div className="m-success" id="successMsg">
            <div className="sc">Solicitação recebida.</div>
            <p>Obrigado. Sua solicitação de análise foi registrada. Nossa equipe avaliará o perfil do seu escritório e, havendo compatibilidade com a rede, entraremos em contato para a próxima etapa.</p>
            <button className="btn magnetic" data-modal-close style={{ marginTop: 34 }}>Fechar <span className="ar">→</span></button>
          </div>
        </div>
      </div>

      <V2Fx />
    </div>
  );
}
