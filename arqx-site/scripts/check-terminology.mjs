#!/usr/bin/env node
/* Verificação de terminologia (spec §1.1) · roda antes do build e FALHA
   se encontrar vocabulário proibido fora das exceções documentadas.

   Proibidos: franquia|franque|parceir|royalt (case-insensitive).
   Exceções:
   1. Artigos comparativos do blog (§5.4 #1, #2, #14) · frontmatter
      `allowTermosComparativos: true`.
   2. Frases de negação oficiais (FAQ "A ARQX é uma franquia? Não...")
      listadas em ALLOWED_SNIPPETS.
   3. Este script e o relatório de pendências. */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SCAN_DIRS = ["app", "components", "content", "lib"];
/* Vocabulário §1.1 + travessão (regra global Upsend: nunca, em nenhuma entrega) */
const BANNED = /franquia|franque|parceir|royalt|—|&mdash;/i;

/* Trechos oficiais autorizados (§5.3 FAQ 1) · removidos do texto antes do grep. */
const ALLOWED_SNIPPETS = [
  "A ARQX é uma franquia?",
  "Diferente de uma franquia, a ARQX não entra na operação",
  "Não somos uma franquia.",
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (/\.(jsx?|mjs|mdx?|json|css|txt)$/.test(name)) yield p;
  }
}

let violations = [];
for (const d of SCAN_DIRS) {
  let entries;
  try {
    entries = [...walk(join(ROOT, d))];
  } catch {
    continue; // diretório ainda não existe
  }
  for (const file of entries) {
    let text = readFileSync(file, "utf-8");
    if (/^allowTermosComparativos:\s*true$/m.test(text)) continue; // exceção 1
    for (const s of ALLOWED_SNIPPETS) text = text.split(s).join(""); // exceção 2
    text.split("\n").forEach((line, i) => {
      const m = line.match(BANNED);
      if (m) violations.push(`${relative(ROOT, file)}:${i + 1}  →  "${m[0]}"  em: ${line.trim().slice(0, 90)}`);
    });
  }
}

if (violations.length) {
  console.error("✖ TERMINOLOGIA PROIBIDA ENCONTRADA (spec §1.1):\n");
  for (const v of violations) console.error("  " + v);
  console.error(`\n${violations.length} ocorrência(s). Build bloqueado.`);
  process.exit(1);
}
console.log("✓ Terminologia OK · nenhuma ocorrência proibida.");
