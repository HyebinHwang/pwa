const n="rsp-v24",a=["/pwa/maskable_icon.png"];self.addEventListener("install",e=>{console.log("install!11"),e.waitUntil(caches.open(n).then(t=>t.addAll(a)))});self.addEventListener("activate",e=>{console.log("actived",e)});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))});
