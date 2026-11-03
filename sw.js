const SURUM = 'mutfak-v4-mobil';
const DOSYALAR = ['./', './index.html', './ayarlar.js', './manifest.webmanifest',
  './ikon-192.png', './ikon-512.png', './ikon-maskable-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(SURUM).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(adlar => Promise.all(
    adlar.filter(a => a.startsWith('mutfak-') && a !== SURUM).map(a => caches.delete(a))
  )).then(() => self.clients.claim()));
});
// Sadece uygulama dosyaları: kimlik doğrulama ve veritabanı yanıtları asla saklanmaz.
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const izinli = DOSYALAR.map(yol => new URL(yol, self.registration.scope).href);
  if(url.origin !== self.location.origin || !izinli.includes(url.href)) return;
  e.respondWith(fetch(e.request).then(cevap => {
    if(cevap.ok) {
      const kopya = cevap.clone();
      e.waitUntil(caches.open(SURUM).then(c => c.put(e.request, kopya)));
    }
    return cevap;
  }).catch(async () => (await caches.match(e.request)) || Response.error()));
});
