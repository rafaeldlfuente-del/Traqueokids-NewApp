const CACHE_NAME = 'traqueokids-v1.9';

const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.webmanifest',
  'icon-192.svg',
  'icon-512.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE)
        .catch(err => console.warn('SW: Optional assets failed to cache during install:', err));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Estrategia Network First para la navegación (index.html)
  // Esto evita quedar atrapado en una versión antigua del HTML que apunta a JS inexistentes
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('index.html');
      })
    );
    return;
  }

  // Estrategia Cache First para el resto de recursos (imágenes, iconos, etc)
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
