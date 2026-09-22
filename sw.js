// Oficina da Fala — funciona sem internet depois da primeira visita.
// A app (este site) vai sempre à rede primeiro, para receber atualizações;
// a biblioteca e o modelo da câmara têm versão fixa e ficam guardados.
const APP = "oficina-app-v5";
const CDN = "oficina-cdn-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  // um ficheiro que falhe não impede a instalação
  e.waitUntil(caches.open(APP).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== APP && k !== CDN).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const pinned = url.hostname === "cdn.jsdelivr.net" || url.hostname === "storage.googleapis.com" ||
    url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (pinned) {
    e.respondWith(caches.open(CDN).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === "opaque") c.put(req, res.clone());
      return res;
    }));
    return;
  }
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req)
      .then(res => { if (res.ok) { const copy = res.clone(); caches.open(APP).then(c => c.put(req, copy)); } return res; })
      .catch(() => caches.match(req).then(r => r || caches.match("./index.html"))));
  }
});
