/* Política de Privacidade · LGPD, mundo v2 (leitura, sem copy criativa). */
import V2Shell from "@/components/v2/V2Shell";
import { CONTACTS } from "@/lib/site";

export const metadata = {
  title: { absolute: "Política de Privacidade | ARQX" },
  description: "Como a ARQX coleta, usa e protege os dados pessoais enviados pelos formulários deste site.",
  alternates: { canonical: "/politica-de-privacidade" },
};

const H2 = { fontFamily: "var(--sans)", fontWeight: 600, fontSize: "clamp(18px,2vw,26px)", letterSpacing: "-.01em", margin: "clamp(36px,6vh,54px) 0 14px" };

export default function Politica() {
  return (
    <V2Shell>
      <main>
        <section className="page-hero" data-theme="dark">
          <div className="wrap">
            <span className="eyebrow reveal">Legal</span>
            <h1 className="reveal" data-d="1">Política de <span className="serif">privacidade.</span></h1>
            <p className="lead reveal" data-d="2">Última atualização: agosto de 2026.</p>
          </div>
        </section>
        <section className="blk light" data-theme="light">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <div className="prose">
              <h2 style={H2}>1. Quem somos</h2>
              <p>Este site é operado pela ARQX, Growth Partner de escritórios de arquitetura, com atuação no Brasil, nos EUA e em Portugal. Para questões sobre dados pessoais, o canal é {CONTACTS.email}.</p>
              <h2 style={H2}>2. Dados que coletamos</h2>
              <p>Coletamos apenas os dados enviados voluntariamente pelos formulários deste site: nome, e-mail, WhatsApp, cidade e informações sobre o seu escritório (nome, Instagram/site, faixa de faturamento e o gargalo descrito por você) na solicitação de análise; e nome, e-mail e mensagem no formulário de contato. Não utilizamos cookies de rastreamento próprios para essas finalidades.</p>
              <h2 style={H2}>3. Finalidade e base legal</h2>
              <p>Os dados são usados exclusivamente para contato comercial: avaliar a sua solicitação de associação ou responder à sua mensagem. A base legal é o consentimento (art. 7º, I, da Lei nº 13.709/2018, LGPD), manifestado no ato do envio do formulário.</p>
              <h2 style={H2}>4. Compartilhamento</h2>
              <p>Os dados são armazenados em infraestrutura de banco de dados contratada (Supabase) e acessados pela equipe da ARQX e pela agência responsável pela operação deste site. Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.</p>
              <h2 style={H2}>5. Retenção</h2>
              <p>Mantemos os dados pelo tempo necessário à finalidade de contato comercial. Você pode solicitar a exclusão a qualquer momento.</p>
              <h2 style={H2}>6. Seus direitos</h2>
              <p>Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, exclusão e revogação do consentimento. Para exercer qualquer direito, escreva para {CONTACTS.email}.</p>
              <h2 style={H2}>7. Alterações</h2>
              <p>Esta política pode ser atualizada. A data no topo indica a versão vigente.</p>
            </div>
          </div>
        </section>
      </main>
    </V2Shell>
  );
}
