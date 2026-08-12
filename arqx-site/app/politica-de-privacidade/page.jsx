/* Política de Privacidade · LGPD padrão (spec §5.10). Sem copy criativa. */
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACTS } from "@/lib/site";

export const metadata = {
  title: "Política de Privacidade",
  description: "Como a ARQX coleta, usa e protege os dados pessoais enviados pelos formulários deste site.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

const H2 = { fontSize: "var(--text-lg)", margin: "var(--space-10) 0 var(--space-3)" };
const P = { color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "14px" };

export default function Politica() {
  return (
    <section style={{ padding: "var(--space-24) var(--page-gutter)" }}>
      <div style={{ maxWidth: "72ch", marginInline: "auto" }}>
        <Breadcrumbs items={[{ href: "/politica-de-privacidade", label: "Política de Privacidade" }]} />
        <h1 className="arqx-display" style={{ fontSize: "clamp(36px,5vw,64px)", marginBottom: "10px" }}>política de privacidade.</h1>
        <p style={{ ...P, fontSize: "13px" }}>Última atualização: agosto de 2026.</p>

        <h2 style={H2}>1. Quem somos</h2>
        <p style={P}>
          Este site é operado pela ARQX, rede de escritórios de arquitetura associados à marca, com atuação no Brasil,
          nos EUA e em Portugal. Para questões sobre dados pessoais, o canal é {CONTACTS.email}.
        </p>

        <h2 style={H2}>2. Dados que coletamos</h2>
        <p style={P}>
          Coletamos apenas os dados que você envia voluntariamente pelos formulários deste site: nome, e-mail, WhatsApp,
          cidade/UF e informações sobre o seu escritório (Instagram, tempo de atuação, faixa de faturamento e o desafio
          descrito por você) no formulário de candidatura; e nome, e-mail e mensagem no formulário de contato. Não
          utilizamos cookies de rastreamento próprios para essas finalidades.
        </p>

        <h2 style={H2}>3. Finalidade e base legal</h2>
        <p style={P}>
          Os dados são usados exclusivamente para contato comercial: avaliar a sua candidatura à rede ou responder à sua
          mensagem. A base legal é o consentimento (art. 7º, I, da Lei nº 13.709/2018 · LGPD), manifestado no ato do
          envio do formulário.
        </p>

        <h2 style={H2}>4. Compartilhamento</h2>
        <p style={P}>
          Os dados são armazenados em infraestrutura de banco de dados contratada (Supabase) e acessados pela equipe da
          ARQX e pela agência responsável pela operação deste site. Não vendemos nem compartilhamos seus dados com
          terceiros para fins de marketing.
        </p>

        <h2 style={H2}>5. Retenção</h2>
        <p style={P}>
          Mantemos os dados pelo tempo necessário à finalidade de contato comercial. Você pode solicitar a exclusão a
          qualquer momento.
        </p>

        <h2 style={H2}>6. Seus direitos</h2>
        <p style={P}>
          Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, exclusão e
          revogação do consentimento. Para exercer qualquer direito, escreva para {CONTACTS.email}. Responderemos no
          menor prazo possível.
        </p>

        <h2 style={H2}>7. Alterações</h2>
        <p style={P}>
          Esta política pode ser atualizada. A data no topo indica a versão vigente.
        </p>
      </div>
    </section>
  );
}
