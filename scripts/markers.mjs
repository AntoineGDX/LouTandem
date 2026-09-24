// Liste les marqueurs [À CONFIRMER …] et [ACCORD CLIENT ?] présents dans src/.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const re = /\[(?:À CONFIRMER|ACCORD CLIENT)[^\]]*\]/g;
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let total = 0;
for (const file of walk('src').filter((f) => /\.(astro|ts|css|mjs)$/.test(f))) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    for (const m of line.matchAll(re)) {
      total++;
      console.log(`${relative('.', file)}:${i + 1}  ${m[0]}`);
    }
  });
}
console.log(`\n${total} marqueur(s).`);
