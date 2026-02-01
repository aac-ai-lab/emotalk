const CACHE = 'emotalk-v1';
const ASSETS = ['index.html', 'assets/js/vocabulary.js', 'assets/css/index.css', 'assets/js/index.js', 'icon.svg', 'manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.startsWith(self.location.origin) && e.request.method === 'GET') {
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request).then((r) => {
        const clone = r.clone();
        if (r.status === 200) caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        return r;
      }))
    );
  }
});
