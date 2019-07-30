self.addEventListener('install', (event) => {
    console.log('[service worker] instalando service worker', event)
});

self.addEventListener('activate', (event) => {
    console.log('[service worker] ativando service worker', event)
    return self.clients.claim()
});

self.addEventListener('fetch', (event) => {
    console.log('[service worker fetch]', event)
    event.respondWith(fetch(event.request))
})