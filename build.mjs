import { readFileSync, mkdirSync, writeFileSync, cpSync } from 'node:fs';
const c = JSON.parse(readFileSync('lib/content.json', 'utf8'));
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);
mkdirSync('dist', { recursive: true });
cpSync('public', 'dist', { recursive: true });
writeFileSync('dist/index.html', `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(c.business)}</title>
<h1>${esc(c.business)}</h1><p>${esc(c.tagline)}</p><p>Hours: ${esc(c.hours)}</p>`);
console.log('built dist/index.html');
