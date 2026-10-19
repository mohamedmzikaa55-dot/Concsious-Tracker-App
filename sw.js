// Daily Report offline shell.
// VERSION is replaced at build time (vite.config.js) with a unique build id,
// e.g. 'daily-report-2026-09-28T...'. A new byte-different sw.js makes the
// browser install the new worker automatically — no reinstall needed.
const VERSION = 'daily-report-2026-10-19T16-44-15-mvfhi5cp'
const CACHE = VERSION.indexOf('__APP_') === 0 ? 'daily-report-v1' : VERSION
// Hashed vite assets are injected at build time (vite.config.js) so the whole
// app shell — JS + CSS — is cached on install. Without this, the bundle is
// only cached at runtime, which requires a page load that happens while the
// SW already controls the page; first visits (or a suppressed
// post-install reload) would leave nothing to serve offline.
const ASSETS_RAW = '["./assets/index-De6s_vuM.css","./assets/index-KBMfkGs0.js"]'
let PRECACHE_ASSETS = []
try {
  PRECACHE_ASSETS = ASSETS_RAW.indexOf('__PRECACHE_') === 0 ? [] : JSON.parse(ASSETS_RAW)
} catch {
  PRECACHE_ASSETS = []
}
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './version.json',
  ...PRECACHE_ASSETS
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) =>
        Promise.allSettled(
          CORE.map((url) => cache.add(new Request(url, { cache: 'reload' })))
        )
      )
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('daily-report-') && key !== CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener('message', (event) => {
  if (!event.data) return
  if (event.data === 'SKIP_WAITING') self.skipWaiting()
  // Called by the old app before the new worker exists: wipe the stale
  // cache-first shell so the next reload fetches fresh files from network.
  // LocalStorage/IndexedDB data is untouched — only Cache Storage is cleared.
  if (event.data && event.data.type === 'CLEAR_APP_CACHES') {
    event.waitUntil(
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('daily-report-'))
            .map((key) => caches.delete(key))
        )
      )
    )
  }
})

function isNavigationOrShell(url, request) {
  if (request.mode === 'navigate') return true
  const path = url.pathname
  if (path.endsWith('/') || path.endsWith('/index.html') || path.endsWith('index.html')) return true
  const file = path.split('/').pop() || ''
  // Always go to network first for these so updates are picked up.
  if (file === 'version.json' || file === 'sw.js' || file === 'manifest.json') return true
  if (file.endsWith('.html')) return true
  return false
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  if (event.request.method !== 'GET') return

  // Google Fonts: cache-first so text keeps its look offline. The css2
  // stylesheet and the woff2 files it points at are both served with CORS
  // headers, so they can be stored in the same cache as the app shell.
  if (url.origin !== self.location.origin) {
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
      event.respondWith(
        caches.match(event.request).then(
          (hit) =>
            hit ||
            fetch(event.request).then((res) => {
              if (res && (res.ok || res.type === 'opaque')) {
                const copy = res.clone()
                caches.open(CACHE).then((cache) => cache.put(event.request, copy)).catch(() => {})
              }
              return res
            })
        ).catch(() => Response.error())
      )
    }
    return
  }


  // Shell / navigation: NETWORK FIRST, fall back to cache.
  // This is what fixes the "stale app forever" bug: a reload with internet
  // always gets the newest index.html + version.json.
  if (isNavigationOrShell(url, event.request)) {
    event.respondWith(
      fetch(new Request(event.request, { cache: 'no-store' }))
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then((cache) => cache.put('./index.html', copy)).catch(() => {})
            // Also keep the exact request cached for offline use.
            if (event.request.url !== new URL('./index.html', self.location.href).href) {
              caches.open(CACHE).then((cache) => cache.put(event.request, res.clone())).catch(() => {})
            }
          }
          return res
        })
        .catch(() =>
          caches.match(event.request, { ignoreSearch: true })
            .then((hit) => hit || caches.match('./index.html'))
        )
    )
    return
  }

  // Hashed vite assets (./assets/index-XXXX.js/css): CACHE FIRST, they are immutable.
  event.respondWith(
    caches.match(event.request).then(
      (hit) =>
        hit ||
        fetch(event.request).then((res) => {
          if (res && res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then((cache) => cache.put(event.request, copy)).catch(() => {})
          }
          return res
        }).catch(() => caches.match('./index.html'))
    )
  )
})
