// Publishes Iron Log to dist/.
//
//   node build.mjs
//
// Produces, from the single-file source:
//   dist/index.html   = source + PWA <head> block + sw registration + build id
//   dist/version.json = unique id the app polls to detect updates
//   dist/sw.js        = sw.template.js with __APP_VERSION__ replaced
//
// The registration passes updateViaCache:'none' - without it the browser is
// allowed to serve sw.js itself from the HTTP cache, so a published worker can
// silently never install and the app pins itself to an old build.
//
// The source file stays deployable-by-itself: it uses relative paths and
// degrades gracefully with no build id and no service worker, so opening the
// .html over http://localhost still works offline after one visit.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, 'Iron Log — Workout Tracker.html');
const DIST = path.join(ROOT, 'dist');
const SW_TEMPLATE = path.join(ROOT, 'sw.template.js');

// Unique per publish. A new value makes dist/version.json differ (the update
// signal) and dist/sw.js differ (so the browser installs a new worker).
const buildId =
  'iron-log-' +
  new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19) +
  '-' +
  Date.now().toString(36);

const PWA = [
  '<meta name="theme-color" content="#E1502E">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
  '<meta name="apple-mobile-web-app-title" content="Iron Log">',
  '<meta name="description" content="Iron Log — plans, form cues and progress in one place. Installable offline workout tracker.">',
  '<link rel="manifest" href="./manifest.webmanifest">',
  '<link rel="icon" type="image/png" sizes="192x192" href="./icon-192.png">',
  '<link rel="icon" type="image/png" sizes="512x512" href="./icon-512.png">',
  '<link rel="apple-touch-icon" href="./apple-touch-icon.png">',
  '',
].join('\n');

const ANCHOR = '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">';

const SW_BLOCK =
  '<script>\n' +
  "if ('serviceWorker' in navigator) {\n" +
  "  window.addEventListener('load', function () {\n" +
  '    navigator.serviceWorker.register(\'./sw.js\', { updateViaCache: \'none\' })\n' +
  '      .then(function (reg) { window.__ironLogSW = reg; })\n' +
  '      .catch(function () {});\n' +
  '  });\n' +
  '}\n' +
  '</script>\n';

const src = fs.readFileSync(SRC, 'utf8');
if (src.includes('apple-mobile-web-app-capable')) throw new Error('source already has the PWA block');
if (src.includes("register('./sw.js')")) throw new Error('source already has the sw registration block');
if (!src.includes(ANCHOR)) throw new Error('viewport anchor not found');
if (!src.includes('__BUILD_ID__')) throw new Error('source lost its __BUILD_ID__ placeholder');

fs.mkdirSync(DIST, { recursive: true });

// 1. index.html — inject the PWA head block, the sw registration, and the id.
const out = src
  .replace(ANCHOR, ANCHOR + '\n' + PWA)
  .replace('</body>', SW_BLOCK + '</body>')
  // Substituted as a quoted string literal, not a bare identifier — the
  // placeholder appears in `typeof X` and `String(X)` positions. Covers both.
  .split('__BUILD_ID__').join(JSON.stringify(buildId));
if (out.includes('__BUILD_ID__')) throw new Error('build id substitution failed');
try {
  // Validate only the app's own script block — the SW registration block added
  // afterwards is a separate (also valid) block.
  const s = out.indexOf('<script>') + '<script>'.length;
  const e = out.indexOf('</script>', s);
  new Function(out.slice(s, e));
} catch (err) {
  throw new Error('generated index.html has a syntax error: ' + err.message);
}
fs.writeFileSync(path.join(DIST, 'index.html'), out, 'utf8');

// 2. version.json — network-first, never cached; the update signal.
fs.writeFileSync(
  path.join(DIST, 'version.json'),
  JSON.stringify({ version: buildId, builtAt: new Date().toISOString() }, null, 2),
  'utf8'
);

// 3. sw.js — template with the id baked in. Only the assignment line is
// substituted, so the template's own comments stay readable in the output.
const swTemplate = fs.readFileSync(SW_TEMPLATE, 'utf8');
const SW_DECL = "const VERSION = '__APP_VERSION__';";
if (!swTemplate.includes(SW_DECL)) throw new Error('sw.template.js lost its version declaration');
const sw = swTemplate.replace(SW_DECL, 'const VERSION = ' + JSON.stringify(buildId) + ';');
fs.writeFileSync(path.join(DIST, 'sw.js'), sw, 'utf8');

// Verify stripping the injected pieces reproduces the source (with the
// placeholder back), so dist never drifts from the source of truth.
const roundTrip = out
  .replace(SW_BLOCK + '</body>', '</body>')
  .replace(ANCHOR + '\n' + PWA, ANCHOR)
  .split(JSON.stringify(buildId)).join('__BUILD_ID__');
if (roundTrip !== src) throw new Error('ROUND-TRIP MISMATCH — dist is not source + injected blocks');

const ver = JSON.parse(fs.readFileSync(path.join(DIST, 'version.json'), 'utf8'));
if (ver.version !== buildId) throw new Error('version.json mismatch');
if (!fs.readFileSync(path.join(DIST, 'sw.js'), 'utf8').includes(buildId)) {
  throw new Error('sw.js did not receive the build id');
}

console.log('build id      ' + buildId);
console.log('dist/index.html   ' + fs.statSync(path.join(DIST, 'index.html')).size + ' bytes');
console.log('dist/version.json ' + fs.statSync(path.join(DIST, 'version.json')).size + ' bytes');
console.log('dist/sw.js        ' + fs.statSync(path.join(DIST, 'sw.js')).size + ' bytes');
console.log('round-trip OK — dist is source + PWA head + sw registration + build id');