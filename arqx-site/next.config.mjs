/** Next.js · SSG por padrão no App Router (páginas sem dados dinâmicos
 *  são pré-renderizadas em HTML completo no build). Não usamos
 *  `output: "export"` porque /associar precisa de um route handler
 *  serverless para o formulário (spec §5.3) · na Vercel, as páginas
 *  continuam estáticas e só o handler roda como função. */
const nextConfig = {
  reactStrictMode: true,
  // Raiz explícita: há package.json na raiz do repo (proxy de scripts) e
  // isso confundia a inferência de workspace do Next.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
