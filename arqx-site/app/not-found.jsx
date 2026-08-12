/* 404 customizada (spec §4.3). */
import Button from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/primitives";

export const metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", padding: "var(--space-24) var(--page-gutter)" }}>
      <div style={{ maxWidth: "var(--page-max)", marginInline: "auto", width: "100%" }}>
        <Eyebrow>Erro 404</Eyebrow>
        <h1 className="arqx-display" style={{ fontSize: "clamp(40px,6vw,80px)", margin: "20px 0 16px" }}>
          esta página não existe.
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "48ch", marginBottom: "var(--space-10)" }}>
          O endereço pode ter mudado. O caminho de volta é pela página inicial ou direto para a candidatura.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Button href="/" variant="secondary">Página inicial</Button>
          <Button href="/associar" variant="primary">Quero ser um associado &rarr;</Button>
        </div>
      </div>
    </section>
  );
}
