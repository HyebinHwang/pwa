/// <reference lib="webworker" />

const cacheName = "rsp-v24";
const cacheFiles = [
  "/index.html",
  "/src/assets/real_rock.webp",
  "/src/assets/react.svg",
  "/src/assets/icon.png",
  "/sw.ts",
  "/src/animation.css",
  "/manifest.json",
  "/vite.svg",
  "/@vite/client",
  "/maskable_icon.png",
];

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
