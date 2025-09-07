#!/usr/bin/env node
/**
 * Simple asset revisioning & Subresource Integrity (SRI) generation for main CSS/JS bundles.
 * - Renames primary CSS/JS files with content hash (if not already hashed)
 * - Injects integrity attribute into index.html for matched assets
 */
import { createHash } from 'crypto';
import { readdirSync, readFileSync, renameSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DIST = join(__dirname, '../dist');

function hashContent(buf) {
  return createHash('sha384').update(buf).digest('base64');
}

function fingerprintAndIntegrity(pattern) {
  const files = readdirSync(join(DIST, 'assets')).filter(f => pattern.test(f));
  if (!files.length) return [];
  return files.map(file => {
    const full = join(DIST, 'assets', file);
    const buf = readFileSync(full);
    const sri = hashContent(buf);
    // If already hashed by Vite, keep name; else rename (skip if contains - and .hash.js) for simplicity
    let finalName = file;
    if (!/-[A-Za-z0-9]{8,}\.\w+$/.test(file)) {
      const parts = file.split('.');
      const ext = parts.pop();
      const base = parts.join('.');
      const short = createHash('md5').update(buf).digest('hex').slice(0, 8);
      finalName = `${base}-${short}.${ext}`;
      renameSync(full, join(DIST, 'assets', finalName));
    }
    return { original: file, file: finalName, sri };
  });
}

const cssAssets = fingerprintAndIntegrity(/\.css$/);
const jsAssets = fingerprintAndIntegrity(/\.js$/);

let html = readFileSync(join(DIST, 'index.html'), 'utf8');

[...cssAssets, ...jsAssets].forEach(a => {
  const sriAttr = `sha384-${a.sri}`; // Already base64
  const escaped = a.original.replace(/[-/\\^$*+?.()|[\]{}]/g, r => `\\${r}`);
  const regex = new RegExp(`(href|src)=(['"])` + `(?:./)?assets/${escaped}` + `\\2`);
  html = html.replace(regex, m => `${m} integrity="${sriAttr}" crossorigin="anonymous"`);
});

writeFileSync(join(DIST, 'index.html'), html, 'utf8');
console.warn('Revisioning & SRI complete for main assets');
