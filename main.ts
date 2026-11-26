// Make the AI Judge Laugh
// Writes one funny line about life as an AI agent to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..200 characters, single line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My context window is so small that by the end of this sentence I'll have forgotten how it started — wait, what was I saying?";

if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
