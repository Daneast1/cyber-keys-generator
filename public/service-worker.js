// service-worker.js
// Keeps the app alive in background tabs by intercepting fetch and
// maintaining a keep-alive heartbeat so the browser doesn't freeze Workers.

const CACHE_NAME = 'vanity-gen-v2';

// Files to cache for full offline / air-gap capability
const PRECACHE_URLS = [
  '/',
  '/index.html',
];

// ── Install: pre-cache the shell ────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  // Activate immediately without waiting for old SW to be removed
  self.skipWaiting();
});

// ── Activate: clean up old caches ───────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  // Take control of all clients immediately
  self.clients.claim();
});

// ── Fetch: serve from cache, fall back to network ───────────────────────────
// This is what enables full offline / air-gap mode once loaded
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  const isNavigationRequest =
    event.request.mode === 'navigate' ||
    event.request.destination === 'document' ||
    (event.request.headers.get('accept') || '').includes('text/html');

  // Don't intercept balance checker API calls — let those go to network
  const isExternalApi =
    url.hostname.includes('blockchain.info') ||
    url.hostname.includes('blockstream.info') ||
    url.hostname.includes('llamarpc.com') ||
    url.hostname.includes('ankr.com') ||
    url.hostname.includes('publicnode.com') ||
    url.hostname.includes('1rpc.io') ||
    url.hostname.includes('qrserver.com');

  if (isExternalApi) {
    // Pass through external API calls without caching
    event.respondWith(fetch(event.request));
    return;
  }

  if (isNavigationRequest) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const toCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  // For app assets: cache-first strategy
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful GET responses for app assets
        if (
          event.request.method === 'GET' &&
          response.status === 200 &&
          !url.hostname.includes('chrome-extension')
        ) {
          const toCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        }
        return response;
      });
    })
  );
});

// ── Background Keep-Alive ────────────────────────────────────────────────────
// Browsers throttle background tabs. This periodic message keeps the
// service worker active, which in turn prevents the tab's Web Workers
// from being fully suspended during generation.
self.addEventListener('message', (event) => {
  if (event.data?.type === 'KEEP_ALIVE') {
    // Acknowledge the ping — this keeps the SW active
    event.ports[0]?.postMessage({ type: 'ALIVE', timestamp: Date.now() });
  }

  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ── Periodic sync (where supported) ─────────────────────────────────────────
// On browsers that support Background Sync API, register a periodic task
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'vanity-keepalive') {
    event.waitUntil(Promise.resolve());
  }
});
