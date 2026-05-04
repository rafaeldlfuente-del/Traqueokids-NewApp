const CACHE_NAME = 'traqueokids-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use a safer list of assets to cache
      return cache.addAll(['./', 'index.html', 'manifest.webmanifest'])
        .catch(err => console.warn('SW: Optional assets failed to cache during install:', err));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
