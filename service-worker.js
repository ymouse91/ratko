self.addEventListener('install', e=>{
  e.waitUntil(caches.open('ristisanaratkoja-v1').then(c=>c.addAll([
    './','index.html','manifest.json','suodatetut.txt'
  ])));
});

self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
