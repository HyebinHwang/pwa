/// <reference lib="webworker" />

self.addEventListener("install", (event) => {
  console.log("install!11");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

// activate event
self.addEventListener("activate", (e) => {
  console.log("actived", e);
});

// fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
