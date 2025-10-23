const CACHE_NAME = 'vaultsec-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/index.html',
  '/login.html',
  '/customer-dashboard.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});