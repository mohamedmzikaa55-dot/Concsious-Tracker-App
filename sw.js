const CACHE_NAME = 'conscious-tracker-v3-20260909-01';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './css/base.css?v=20260909',
  './css/components.css?v=20260909',
  './css/mobile.css?v=20260909',
  './js/api.js',
  './js/utils.js',
  './js/stats.js',
  './js/modal.js',
  './js/sidebar.js',
  './js/taskCard.js',
  './js/app.js',
  './js/views/overview.js',
  './js/views/matrix.js',
  './js/views/kanban.js',
  './js/views/timeline.js',
  './js/views/pomodoro.js',
  './js/views/gallery.js',
  './js/views/habits.js',
  './js/views/routines.js',
  './js/views/recommended.js',
  './js/views/planning.js',
  './js/views/consciousness.js',
  './js/views/alltasks.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
        return response;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(response => {
      if (response.ok && new URL(req.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      }
      return response;
    }))
  );
});
