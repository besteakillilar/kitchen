const SURUM = 'mutfak-v2';
const DOSYALAR = ['./', './index.html', './ayarlar.js', './manifest.webmanifest',
                  './ikon-192.png', './ikon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SURUM).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(adlar =>
    Promise.all(adlar.filter(a => a !== SURUM).map(a => caches.delete(a)))
  ).then(() => self.clients.claim()));
});

// Firestore trafiğine karışma; gerisinde önce ağ, olmazsa önbellek
self.addEventListener('fetch', e => {
  const u = e.request.url;
  if (e.request.method !== 'GET') return;
  if (u.includes('firestore.googleapis.com') || u.includes('google-analytics')) return;
  e.respondWith(
    fetch(e.request).then(cevap => {
      const kopya = cevap.clone();
      caches.open(SURUM).then(c => c.put(e.request, kopya)).catch(() => {});
      return cevap;
    }).catch(() => caches.match(e.request).then(v => v || caches.match('./index.html')))
  );
});
