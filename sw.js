// Daily Report offline shell. Bump VERSION to ship an update
// (Settings → Check for updates compares against this).
const VERSION = 'daily-report-v1'
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(event.request).then((res) => {
          const copy = res.clone()
          caches.open(VERSION).then((cache) => cache.put(event.request, copy))
          return res
        }).catch(() => caches.match('./index.html'))
    )
  )
})
