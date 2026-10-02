// Iron Log offline shell — TEMPLATE. build.mjs copies this to dist/sw.js and
// substitutes the build-id placeholder below with a unique id per publish, so
// every publish produces a byte-different worker and the browser installs it
// on its own.
//
// Do not edit dist/sw.js directly: it is generated. Edit this file instead.
const VERSION = '__APP_VERSION__';
const CACHE_PREFIX = 'iron-log-';
// Unbuilt/dev fallback so a raw copy of this file still caches under a stable name.
const CACHE = VERSION.indexOf('__APP_') === 0 ? 'iron-log-dev' : VERSION;
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './version.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) =>
        Promise.allSettled(
          CORE.map((url) => cache.add(new Request(url, { cache: 'reload' })))
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
  if (event.data.type === 'SKIP_WAITING') self.skipWaiting();
  // Sent by the app when no newer worker took over: drop the stale shell so the
  // next load fetches fresh files from the network. Only Cache Storage is
  // cleared — localStorage data (workouts, body ratings, posture) is untouched.
  if (event.data.type === 'CLEAR_APP_CACHES') {
    event.waitUntil(
      caches.keys().then((keys) =>
        Promise.all(
          keys.filter((key) => key.startsWith(CACHE_PREFIX)).map((key) => caches.delete(key))
        )
      )
    );
  }
});

function isShell(url, request) {
  if (request.mode === 'navigate') return true;
  const path = url.pathname;
  if (path.endsWith('/') || path.endsWith('index.html')) return true;
  const file = path.split('/').pop() || '';
  // Never serve these from cache while online: they are how an update is detected.
  if (file === 'version.json' || file === 'sw.js' || file === 'manifest.webmanifest') return true;
  if (file.endsWith('.html')) return true;
  return false;
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Shell / navigation: NETWORK FIRST, fall back to cache. This is what stops
  // the "stale app forever" bug — a reload with internet always gets the newest
  // index.html + version.json, while a reload without it still opens the app.
  if (isShell(url, event.request)) {
    event.respondWith(
      fetch(new Request(event.request, { cache: 'no-store' }))
        .then((res) => {
          if (res && res.ok) {
            const isDoc =
              event.request.mode === 'navigate' ||
              url.pathname.endsWith('/') ||
              url.pathname.endsWith('.html');
            const copy = res.clone();
            caches.open(CACHE).then((cache) => {
              if (isDoc) {
                // Keep one canonical offline copy of the shell. Writing a
                // version.json or sw.js response into './index.html' would make
                // the next offline launch open that file as the app.
                return cache
                  .put('./index.html', copy.clone())
                  .then(() => cache.put('./', copy.clone()))
                  .catch(() => {});
              }
              // Key without the ?v= cache-buster so repeated version checks
              // overwrite one entry instead of growing the cache forever.
              return cache.put(url.origin + url.pathname, copy).catch(() => {});
            }).catch(() => {});
          }
          return res;
        })
        .catch(() =>
          caches.match(event.request, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html'))
        )
    );
    return;
  }

  // Icons and other static assets: CACHE FIRST, they don't change between builds.
  event.respondWith(
    caches.match(event.request).then(
      (hit) =>
        hit ||
        fetch(event.request).then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy)).catch(() => {});
          }
          return res;
        }).catch(() => caches.match('./index.html'))
    )
  );
});