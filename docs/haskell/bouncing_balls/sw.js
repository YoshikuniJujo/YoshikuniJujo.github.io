var CACHE_NAME = 'bouncing-balls';
var urlsToCache = ['./index.html', './index.js'];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(ursToCache);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response ? response : fetch(event.request);
		})
	);
});
