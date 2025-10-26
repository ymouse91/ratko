self.addEventListener('install', e=>{
  e.waitUntil(caches.open('ristisanaratkoja-v4').then(c=>c.addAll([
    './','./index.html','./manifest.json','./suodatetut.txt','./icon-192.png','./icon-512.png'
  ])));
});

self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
