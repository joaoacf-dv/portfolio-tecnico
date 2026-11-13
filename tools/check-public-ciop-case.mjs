// Validation of the public CIOP Manager AD case. No network or institutional AD.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '..');
const read = (p) => readFileSync(resolve(root,p),'utf8');
const homepage=read('site/index.html');
const catalog=read('site/cases/index.html');
const page=read('site/cases/ciop-manager-ad.html');
const docs=read('cases/15-ciop-manager-ad.md');
const js=read('site/script.js');
const readme=read('README.md');
const index=read('cases/00-indice-cases.md');

for(const [name,value,token] of [
 ['home',homepage,'href="cases/ciop-manager-ad.html"'],
 ['index',catalog,'href="ciop-manager-ad.html"'],
 ['README',readme,'cases/15-ciop-manager-ad.md'],
 ['cases index',index,'15-ciop-manager-ad.md'],
 ['case',page,'CIOP Manager AD'],
 ['documentation',docs,'implantado']
]){
 assert.ok(value.toLocaleLowerCase('pt-BR').includes(token.toLocaleLowerCase('pt-BR')),`${name} missing ${token}`);
}
assert.match(page,/<html lang="pt-BR">/);
assert.match(page,/<article class="case-article">/);
assert.match(page,/<section class="case-section">/);
assert.match(page,/Implantado em ambiente institucional/);
assert.match(page,/case\.githubDoc/);
assert.match(page,/data-i18n="ciop\.intro"/);
assert.match(page,/data-i18n-aria-label="ciop\.flowAria"/);
assert.match(docs,/\*\*Situação de implantação:\*\*/);

const keys=[...new Set([...homepage.matchAll(/data-i18n(?:-title|-meta-description|-aria-label)?="(ciop\.[^"]+)"/g),
  ...catalog.matchAll(/data-i18n(?:-title|-meta-description|-aria-label)?="(ciop\.[^"]+)"/g),
  ...page.matchAll(/data-i18n(?:-title|-meta-description|-aria-label)?="(ciop\.[^"]+)"/g)].map(m=>m[1]))];
for (const key of keys) {
 const occurrences=js.split(`"${key}":`).length - 1;
 assert.equal(occurrences,2,`Missing PT/EN translation for ${key}: ${occurrences}`);
}
for (const [file,text] of [['HTML',page],['case Markdown',docs]]) {
 for(const pattern of [/sesdec\.local/i,/srv-domain-01/i,/\b10\.230\.\d+\.\d+\b/i,
                        /@sesdec\./i,/C:\\\\Users\\\\Administrador/i]) {
   assert.ok(!pattern.test(text),`${file} exposes an infrastructure identifier: ${pattern}`);
 }
}
for (const href of [...page.matchAll(/href="([^"]+)"/g)].map(m=>m[1])) {
 if(href.startsWith('http')||href.startsWith('#')||href.startsWith('mailto:')) continue;
 assert.ok(existsSync(resolve(root,'site/cases',href)),`Broken case link ${href}`);
}
console.log(`Public case PASS · ${keys.length} translated keys · paths and disclosure checks OK`);
